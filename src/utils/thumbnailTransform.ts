export function getThumbnailTransform(thumbnail: HTMLImageElement | null | undefined, image: HTMLImageElement) {
  if (!thumbnail?.isConnected || !image.parentElement) return;
  const source = thumbnail.getBoundingClientRect();
  const stage = image.parentElement.getBoundingClientRect();
  const { offsetWidth: width, offsetHeight: height } = image;
  if (!source.width || !source.height || !width || !height ||
      source.bottom < 0 || source.top > window.innerHeight) return;

  const { objectFit, objectPosition } = getComputedStyle(thumbnail);
  const cover = objectFit === "cover";
  const alignedTop = objectPosition.endsWith(" 0%");
  const fit = cover ? Math.max : Math.min;
  const scale = fit(source.width / width, source.height / height);
  const cropX = Math.max(0, (1 - source.width / (width * scale)) * 50);
  const cropY = Math.max(0, (1 - source.height / (height * scale)) * 50);
  return {
    x: source.left + source.width / 2 - stage.left - stage.width / 2,
    y: source.top + (alignedTop ? height * scale : source.height) / 2 - stage.top - stage.height / 2,
    scale,
    clipPath: alignedTop
      ? `inset(0% ${cropX}% ${cropY * 2}% ${cropX}%)`
      : `inset(${cropY}% ${cropX}% ${cropY}% ${cropX}%)`,
  };
}

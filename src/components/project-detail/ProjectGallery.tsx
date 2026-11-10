import { useCallback, useRef, useState } from "react";
import type { SyntheticEvent } from "react";
import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ImagePreview, { type PreviewImage } from "../portfolio/ImagePreview";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectGalleryProps = { detail: ProjectDetail };
type ImageLayout = "long-page" | "portrait" | "landscape" | "standard";

function getImageLayout(image: HTMLImageElement): ImageLayout {
  const { naturalHeight, naturalWidth } = image;
  if (naturalWidth <= 0 || naturalHeight <= 0) return "standard";
  if (naturalHeight / naturalWidth >= 1.8) return "long-page";
  if (naturalHeight / naturalWidth >= 1.25) return "portrait";
  if (naturalWidth / naturalHeight >= 1.35) return "landscape";
  return "standard";
}

function ProjectGallery({ detail }: ProjectGalleryProps) {
  const [preview, setPreview] = useState<{ images: PreviewImage[]; initialIndex: number } | null>(null);
  const thumbnails = useRef<Array<HTMLImageElement | null>>([]);
  const closePreview = useCallback(() => setPreview(null), []);
  const [layouts, setLayouts] = useState<Record<string, ImageLayout>>({});
  const gallery = detail.gallery?.filter((image) => image.src !== detail.heroImage);

  if (!gallery?.length) return null;

  const openPreview = (initialIndex: number) => {
    setPreview({
      initialIndex,
      images: gallery.map((item, index) => ({
        src: item.src,
        alt: formatMiddleDotSpacing(item.alt),
        thumbnail: thumbnails.current[index] ?? null,
      })),
    });
  };

  const handleImageLoad = (src: string, event: SyntheticEvent<HTMLImageElement>) => {
    const layout = getImageLayout(event.currentTarget);
    setLayouts((current) => current[src] === layout ? current : { ...current, [src]: layout });
  };

  return (
    <section className="project-detail-section project-gallery-section">
      <ProjectSectionHeading title="결과 및 화면" />
      <div className="project-gallery-grid">
        {gallery.map((image, index) => {
          const imageAlt = formatMiddleDotSpacing(image.alt);
          const layout = layouts[image.src] ?? "standard";
          const isLastOdd = gallery.length % 2 === 1 && index === gallery.length - 1;
          return (
            <figure className={`project-gallery-item project-gallery-item--${layout}${isLastOdd ? " project-gallery-item--last-odd" : ""}`} key={image.src}>
              <div className="project-gallery-fan">
                {[1, 2, 3].map((layer) => (
                  <span
                    className={`project-gallery-fan__sheet project-gallery-fan__sheet--${layer}`}
                    aria-hidden="true"
                    key={layer}
                  >
                    <img src={image.src} alt="" loading="lazy" />
                  </span>
                ))}
                <button
                  type="button"
                  className="project-detail-image-button project-gallery-fan__front"
                  aria-label={`${imageAlt} 이미지 확대`}
                  onClick={() => openPreview(index)}
                >
                  <img
                    ref={(element) => { thumbnails.current[index] = element; }}
                    src={image.src}
                    alt={imageAlt}
                    loading="lazy"
                    onLoad={(event) => handleImageLoad(image.src, event)}
                  />
                </button>
              </div>
              <figcaption>{imageAlt}</figcaption>
            </figure>
          );
        })}
      </div>
      {preview && <ImagePreview {...preview} onClose={closePreview} />}
    </section>
  );
}

export default ProjectGallery;

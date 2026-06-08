import { useEffect } from "react";

type ImagePreviewProps = {
  alt: string;
  image: string;
  onClose: () => void;
};

function ImagePreview({ alt, image, onClose }: ImagePreviewProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("preview-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="image-preview" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <div className="image-preview__dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={onClose}>
          <i className="bi bi-x-lg" />
        </button>
        <img src={image} alt={alt} />
      </div>
    </div>
  );
}

export default ImagePreview;

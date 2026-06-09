import { useEffect } from "react";
import { createPortal } from "react-dom";

type ImagePreviewProps = {
  alt: string;
  image: string;
  onClose: () => void;
};

function ImagePreview({ alt, image, onClose }: ImagePreviewProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.classList.add("preview-open");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const previewContent = (
    <div className="image-preview" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <div className="image-preview__dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={onClose}>
          <i className="bi bi-x-lg" />
        </button>
        <img src={image} alt={alt} />
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

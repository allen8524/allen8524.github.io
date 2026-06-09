import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

type ImagePreviewProps = {
  alt: string;
  image: string;
  onClose: () => void;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

function ImagePreview({ alt, image, onClose }: ImagePreviewProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const isClosingRef = useRef(false);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;

    if (window.matchMedia(reduceMotionQuery).matches) {
      onClose();
      return;
    }

    gsap.to(dialogRef.current, {
      opacity: 0,
      y: 14,
      scale: 0.97,
      duration: 0.18,
      ease: "power2.in",
    });

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.in",
      onComplete: onClose,
    });
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.classList.add("preview-open");
    window.addEventListener("keydown", handleKeyDown);

    const animationContext = gsap.context(() => {
      if (window.matchMedia(reduceMotionQuery).matches) {
        return;
      }

      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: "power2.out" });
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: "power3.out" },
      );
    });

    return () => {
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", handleKeyDown);
      animationContext.revert();
    };
  }, [handleClose]);

  const previewContent = (
    <div
      ref={overlayRef}
      className="image-preview"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={handleClose}
    >
      <div ref={dialogRef} className="image-preview__dialog" onClick={(event) => event.stopPropagation()}>
        <button type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={handleClose}>
          <i className="bi bi-x-lg" />
        </button>
        <img src={image} alt={alt} />
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

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
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isClosingRef = useRef(false);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;

    if (window.matchMedia(reduceMotionQuery).matches) {
      onClose();
      return;
    }

    closeTweenRef.current = gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.15,
      ease: "power2.in",
      overwrite: "auto",
      onComplete: onClose,
    });
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const appRoot = document.getElementById("root");
    const wasRootInert = appRoot?.inert ?? false;

    if (appRoot) {
      appRoot.inert = true;
    }

    document.body.classList.add("preview-open");
    window.addEventListener("keydown", handleKeyDown);
    const focusFrameId = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const animationContext = gsap.context(() => {
      if (window.matchMedia(reduceMotionQuery).matches) {
        return;
      }

      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.22, ease: "power2.out" });
      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, y: 8, scale: 0.98, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clearProps: "filter",
          duration: 0.22,
          ease: "power3.out",
        },
      );
    });

    return () => {
      window.cancelAnimationFrame(focusFrameId);
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", handleKeyDown);
      closeTweenRef.current?.kill();
      animationContext.revert();

      if (appRoot) {
        appRoot.inert = wasRootInert;
      }

      previousFocusRef.current?.focus();
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
        <button ref={closeButtonRef} type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={handleClose}>
          <i className="bi bi-x-lg" />
        </button>
        <img src={image} alt={alt} />
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

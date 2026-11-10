import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

type ImagePreviewProps = {
  alt: string;
  image: string;
  onClose: () => void;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const closedMask = "inset(49% 0% 49% 0% round 8px)";
const openMask = "inset(0% 0% 0% 0% round 8px)";

function ImagePreview({ alt, image, onClose }: ImagePreviewProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isClosingRef = useRef(false);
  const closeTimelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;

    if (window.matchMedia(reduceMotionQuery).matches) {
      onClose();
      return;
    }

    const dialog = dialogRef.current;
    const overlay = overlayRef.current;
    if (!dialog || !overlay) {
      onClose();
      return;
    }

    gsap.killTweensOf([dialog, overlay]);
    if (!dialog.style.clipPath) {
      gsap.set(dialog, { clipPath: openMask });
    }

    closeTimelineRef.current = gsap.timeline({ onComplete: onClose })
      .to(dialog, { clipPath: closedMask, duration: 0.24, ease: "power3.inOut" }, 0)
      .to(overlay, { opacity: 0, duration: 0.18, ease: "power2.in" }, 0.1);
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

      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.24, ease: "power2.out" });
      gsap.fromTo(
        dialogRef.current,
        { clipPath: closedMask },
        {
          clipPath: openMask,
          clearProps: "clipPath",
          duration: 0.36,
          ease: "power3.inOut",
        },
      );
    });

    return () => {
      window.cancelAnimationFrame(focusFrameId);
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", handleKeyDown);
      closeTimelineRef.current?.kill();
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

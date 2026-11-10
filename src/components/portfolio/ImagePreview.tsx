import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

type ImagePreviewProps = {
  alt: string;
  image: string;
  onClose: () => void;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const closedMask = "inset(30% 38% round 120px)";
const openMask = "inset(0% 0% round 8px)";

function ImagePreview({ alt, image, onClose }: ImagePreviewProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
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
    const previewImage = imageRef.current;
    if (!dialog || !overlay || !previewImage) {
      onClose();
      return;
    }

    gsap.killTweensOf([dialog, overlay, previewImage, closeButtonRef.current]);
    if (!dialog.style.clipPath) {
      gsap.set(dialog, { clipPath: openMask });
    }

    closeTimelineRef.current = gsap.timeline({ onComplete: onClose })
      .to(closeButtonRef.current, { opacity: 0, duration: 0.12 }, 0)
      .to(dialog, { clipPath: closedMask, duration: 0.48, ease: "power4.inOut" }, 0)
      .to(previewImage, { scale: 0.9, filter: "brightness(1)", duration: 0.48, ease: "power4.inOut" }, 0)
      .to(overlay, { opacity: 0, duration: 0.28, ease: "power2.in" }, 0.23);
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

      gsap.timeline()
        .fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.42, ease: "power2.out" }, 0)
        .fromTo(imageRef.current, { scale: 0.9 }, { scale: 1, duration: 0.68, ease: "expo.inOut" }, 0)
        .fromTo(dialogRef.current, { clipPath: closedMask }, {
          clipPath: openMask,
          clearProps: "clipPath",
          duration: 0.62,
          ease: "expo.inOut",
        }, 0.06)
        .fromTo(imageRef.current, { filter: "brightness(1)" }, {
          filter: "brightness(1.12)",
          duration: 0.19,
          ease: "power1.in",
        }, 0.14)
        .to(imageRef.current, { filter: "brightness(1)", clearProps: "filter,transform", duration: 0.35 }, 0.33)
        .fromTo(closeButtonRef.current, { opacity: 0 }, { opacity: 1, duration: 0.18 }, 0.47);
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
        <img ref={imageRef} src={image} alt={alt} />
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

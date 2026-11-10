import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

export type PreviewImage = {
  src: string;
  alt: string;
  thumbnail: HTMLImageElement | null;
};

type ImagePreviewProps = {
  images: PreviewImage[];
  initialIndex?: number;
  onClose: () => void;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const galleryOpenMask = "inset(0% 0% 0% 0%)";

function getThumbnailTransform(thumbnail: HTMLImageElement | null | undefined, image: HTMLImageElement) {
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

function ImagePreview({ images, initialIndex = 0, onClose }: ImagePreviewProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isClosingRef = useRef(false);
  const closeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const galleryImages = useRef<Array<HTMLImageElement | null>>([]);
  const galleryIndex = useRef(initialIndex);
  const [currentIndex, setCurrentIndex] = useState(galleryIndex.current);
  const [controlsVisible, setControlsVisible] = useState(false);
  const galleryMotion = useRef<gsap.core.Timeline | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const moveGallery = useCallback((direction: number) => {
    const count = images.length;
    if (count < 2 || !closeButtonRef.current || isClosingRef.current || galleryMotion.current?.isActive()) return;

    const previous = galleryIndex.current;
    const next = (previous + direction + count) % count;
    const outgoing = galleryImages.current[previous];
    const incoming = galleryImages.current[next];
    if (!outgoing || !incoming) return;

    galleryIndex.current = next;
    setCurrentIndex(next);
    if (window.matchMedia(reduceMotionQuery).matches) {
      gsap.set(outgoing, { autoAlpha: 0 });
      gsap.set(incoming, { autoAlpha: 1 });
      return;
    }

    galleryMotion.current = gsap.timeline()
      .to(outgoing, { xPercent: -direction * 65, scale: 0.92, autoAlpha: 0, duration: 0.32, ease: "power2.inOut" }, 0)
      .fromTo(incoming, { xPercent: direction * 65, scale: 0.92, autoAlpha: 0, clipPath: galleryOpenMask }, {
        xPercent: 0, scale: 1, autoAlpha: 1, duration: 0.55, ease: "elastic.out(1, 0.85)",
      }, 0.05);
  }, [images.length]);

  const handleClose = useCallback(() => {
    if (isClosingRef.current) {
      return;
    }

    isClosingRef.current = true;
    setControlsVisible(false);
    dialogRef.current?.focus({ preventScroll: true });

    if (window.matchMedia(reduceMotionQuery).matches) {
      onClose();
      return;
    }

    const overlay = overlayRef.current;
    if (!overlay) {
      onClose();
      return;
    }

    galleryMotion.current?.kill();
    gsap.killTweensOf(backdropRef.current);
    const selected = galleryImages.current[galleryIndex.current];
    galleryImages.current.forEach((slide) => {
      if (slide && slide !== selected) gsap.set(slide, { autoAlpha: 0 });
    });
    const closing = gsap.timeline({ onComplete: onClose });
    closeTimelineRef.current = closing;
    const position = selected && getThumbnailTransform(images[galleryIndex.current]?.thumbnail, selected);
    if (selected && position) {
      closing.to(selected, { ...position, xPercent: 0, duration: 0.44, ease: "power3.inOut" }, 0);
    }
    closing.to(overlay, { opacity: 0, duration: 0.28, ease: "power2.in" }, position ? 0.16 : 0);
  }, [images, onClose]);

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (images.length > 1 && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
        moveGallery(event.key === "ArrowRight" ? 1 : -1);
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
    dialogRef.current?.focus({ preventScroll: true });

    const selected = galleryImages.current[initialIndex];
    const animationContext = gsap.context(() => {
      if (window.matchMedia(reduceMotionQuery).matches) return;

      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    });
    const animateSelected = () => {
      if (isClosingRef.current) return;
      if (!selected || window.matchMedia(reduceMotionQuery).matches) {
        setControlsVisible(true);
        return;
      }

      animationContext.add(() => {
        const source = getThumbnailTransform(images[initialIndex]?.thumbnail, selected);
        const opening = gsap.timeline({ onComplete: () => setControlsVisible(true) });
        galleryMotion.current = opening;
        if (source) {
          opening.fromTo(selected, { ...source, opacity: 1 }, {
            x: 0, y: 0, scale: 1, clipPath: galleryOpenMask, duration: 0.62, ease: "back.out(0.75)",
          });
        } else {
          opening.fromTo(selected, { opacity: 0 }, { opacity: 1, duration: 0.4 });
        }
      });
    };
    if (!selected || selected.complete || window.matchMedia(reduceMotionQuery).matches) {
      animateSelected();
    } else {
      selected.addEventListener("load", animateSelected, { once: true });
      selected.addEventListener("error", animateSelected, { once: true });
    }

    return () => {
      selected?.removeEventListener("load", animateSelected);
      selected?.removeEventListener("error", animateSelected);
      document.body.classList.remove("preview-open");
      window.removeEventListener("keydown", handleKeyDown);
      closeTimelineRef.current?.kill();
      galleryMotion.current?.kill();
      animationContext.revert();

      if (appRoot) {
        appRoot.inert = wasRootInert;
      }

      previousFocusRef.current?.focus();
    };
  }, [images, initialIndex, handleClose, moveGallery]);

  useLayoutEffect(() => {
    if (controlsVisible) closeButtonRef.current?.focus({ preventScroll: true });
  }, [controlsVisible]);

  const previewContent = (
    <div
      ref={overlayRef}
      className="image-preview"
      role="dialog"
      aria-modal="true"
      aria-label={images[currentIndex]?.alt}
      onClick={handleClose}
    >
      <div ref={backdropRef} className="image-preview__backdrop" />
      <div ref={dialogRef} className="image-preview__dialog" tabIndex={-1} onClick={(event) => event.stopPropagation()}>
        {controlsVisible && (
          <button ref={closeButtonRef} type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={handleClose}>
            <i className="bi bi-x-lg" />
          </button>
        )}
        <div
          className="image-preview__stage"
          onPointerDown={(event) => {
            if (event.pointerType === "mouse") return;
            swipeStart.current = { x: event.clientX, y: event.clientY };
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerCancel={() => { swipeStart.current = null; }}
          onPointerUp={(event) => {
            const start = swipeStart.current;
            swipeStart.current = null;
            if (!start) return;
            const x = event.clientX - start.x;
            const y = event.clientY - start.y;
            if (Math.abs(x) > Math.abs(y) && Math.abs(x) > 48) moveGallery(x < 0 ? 1 : -1);
            else if (y > 100) handleClose();
          }}
        >
          {images.map((item, index) => {
            const thumbnail = item.thumbnail?.getAttribute("src") === item.src ? item.thumbnail : null;
            return (
              <div className="image-preview__slide" key={item.src} aria-hidden={index !== currentIndex}>
                <img
                  ref={(element) => { galleryImages.current[index] = element; }}
                  className={index === initialIndex ? "is-initial" : undefined}
                  src={item.src}
                  alt={item.alt}
                  width={thumbnail?.naturalWidth || undefined}
                  height={thumbnail?.naturalHeight || undefined}
                  draggable={false}
                />
              </div>
            );
          })}
        </div>
        {controlsVisible && images.length > 1 && (
          <>
            <button type="button" className="image-preview__nav image-preview__nav--previous" aria-label="이전 이미지" onClick={() => moveGallery(-1)}>
              <i className="bi bi-chevron-left" aria-hidden="true" />
            </button>
            <button type="button" className="image-preview__nav image-preview__nav--next" aria-label="다음 이미지" onClick={() => moveGallery(1)}>
              <i className="bi bi-chevron-right" aria-hidden="true" />
            </button>
            <p className="image-preview__counter" aria-live="polite">{currentIndex + 1} / {images.length}</p>
          </>
        )}
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

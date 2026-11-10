import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

type ImagePreviewProps = {
  alt: string;
  image: string;
  gallery?: {
    initialIndex: number;
    items: { src: string; alt: string }[];
    getThumbnail: (index: number) => HTMLImageElement | null | undefined;
  };
  onClose: () => void;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const closedMask = "inset(30% 38%)";
const openMask = "inset(0% 0%)";
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

function ImagePreview({ alt, image, gallery, onClose }: ImagePreviewProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const isClosingRef = useRef(false);
  const closeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const galleryImages = useRef<Array<HTMLImageElement | null>>([]);
  const galleryIndex = useRef(gallery?.initialIndex ?? 0);
  const [currentIndex, setCurrentIndex] = useState(galleryIndex.current);
  const galleryMotion = useRef<gsap.core.Timeline | null>(null);
  const swipeStart = useRef<{ x: number; y: number } | null>(null);

  const moveGallery = useCallback((direction: number) => {
    const count = gallery?.items.length ?? 0;
    if (count < 2 || isClosingRef.current || galleryMotion.current?.isActive()) return;

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
  }, [gallery]);

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
    if (gallery && overlay) {
      galleryMotion.current?.kill();
      const selected = galleryImages.current[galleryIndex.current];
      galleryImages.current.forEach((slide) => {
        if (slide && slide !== selected) gsap.set(slide, { autoAlpha: 0 });
      });
      const closing = gsap.timeline({ onComplete: onClose });
      closeTimelineRef.current = closing;
      if (selected) {
        const position = getThumbnailTransform(gallery.getThumbnail(galleryIndex.current), selected);
        if (position) {
          closing.to(selected, {
            ...position,
            xPercent: 0,
            duration: 0.44,
            ease: "power3.inOut",
          }, 0);
        }
      }
      closing.to(overlay, { opacity: 0, duration: 0.28, ease: "power2.in" }, closing.duration() ? 0.16 : 0);
      return;
    }
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
  }, [gallery, onClose]);

  useLayoutEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
        return;
      }

      if (gallery && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
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
    const focusFrameId = window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const animationContext = gsap.context(() => {
      if (window.matchMedia(reduceMotionQuery).matches) {
        return;
      }

      if (gallery) {
        const selected = galleryImages.current[gallery.initialIndex];
        const source = selected && getThumbnailTransform(gallery.getThumbnail(gallery.initialIndex), selected);
        const opening = gsap.timeline()
          .fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "power2.out" }, 0);
        galleryMotion.current = opening;
        if (selected && source) {
          opening.fromTo(selected, source, {
            x: 0, y: 0, scale: 1, clipPath: galleryOpenMask, duration: 0.62, ease: "back.out(0.75)",
          }, 0);
        } else if (selected) {
          opening.fromTo(selected, { opacity: 0 }, { opacity: 1, duration: 0.3 }, 0);
        }
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
      galleryMotion.current?.kill();
      animationContext.revert();

      if (appRoot) {
        appRoot.inert = wasRootInert;
      }

      previousFocusRef.current?.focus();
    };
  }, [gallery, handleClose, moveGallery]);

  const previewContent = (
    <div
      ref={overlayRef}
      className={`image-preview${gallery ? " image-preview--gallery" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={gallery?.items[currentIndex]?.alt ?? alt}
      onClick={handleClose}
    >
      {gallery && <div ref={backdropRef} className="image-preview__backdrop" />}
      <div ref={dialogRef} className={`image-preview__dialog${gallery ? " image-preview__dialog--gallery" : ""}`} onClick={(event) => event.stopPropagation()}>
        <button ref={closeButtonRef} type="button" className="image-preview__close" aria-label="미리보기 닫기" onClick={handleClose}>
          <i className="bi bi-x-lg" />
        </button>
        {gallery ? (
          <>
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
              {gallery.items.map((item, index) => {
                const thumbnail = gallery.getThumbnail(index);
                return (
                  <div className="image-preview__slide" key={item.src} aria-hidden={index !== currentIndex}>
                    <img
                      ref={(element) => { galleryImages.current[index] = element; }}
                      className={index === gallery.initialIndex ? "is-initial" : undefined}
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
            {gallery.items.length > 1 && (
              <>
                <button type="button" className="image-preview__nav image-preview__nav--previous" aria-label="이전 이미지" onClick={() => moveGallery(-1)}>
                  <i className="bi bi-chevron-left" aria-hidden="true" />
                </button>
                <button type="button" className="image-preview__nav image-preview__nav--next" aria-label="다음 이미지" onClick={() => moveGallery(1)}>
                  <i className="bi bi-chevron-right" aria-hidden="true" />
                </button>
                <p className="image-preview__counter" aria-live="polite">{currentIndex + 1} / {gallery.items.length}</p>
              </>
            )}
          </>
        ) : <img ref={imageRef} src={image} alt={alt} />}
      </div>
    </div>
  );

  return createPortal(previewContent, document.body);
}

export default ImagePreview;

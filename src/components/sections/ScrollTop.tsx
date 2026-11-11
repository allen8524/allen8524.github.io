import { useEffect, useState } from "react";

const blobBaseAngles = [210, 330, 90];

function ScrollTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateScrollTop = () => {
      setIsActive(window.scrollY > 100);
      animationFrame = null;
    };

    const scheduleScrollTopUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateScrollTop);
      }
    };

    updateScrollTop();
    window.addEventListener("scroll", scheduleScrollTopUpdate, { passive: true });

    return () => {
      window.removeEventListener("scroll", scheduleScrollTopUpdate);
      if (animationFrame !== null) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const randomizeBlobPositions = (button: HTMLButtonElement, pointerType: string) => {
    if (
      pointerType !== "mouse" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const shuffledAngles = [...blobBaseAngles].sort(() => Math.random() - 0.5);

    shuffledAngles.forEach((baseAngle, index) => {
      const angle = (baseAngle + (Math.random() * 70 - 35)) * (Math.PI / 180);
      const distance = 18 + Math.random() * 11;
      const scale = 0.9 + Math.random() * 0.3;
      const delay = Math.round(index * 35 + Math.random() * 35);
      const blobNumber = index + 1;

      button.style.setProperty(`--blob-${blobNumber}-x`, `${Math.cos(angle) * distance}px`);
      button.style.setProperty(`--blob-${blobNumber}-y`, `${Math.sin(angle) * distance}px`);
      button.style.setProperty(`--blob-${blobNumber}-scale`, scale.toFixed(2));
      button.style.setProperty(`--blob-${blobNumber}-delay`, `${delay}ms`);
    });
  };

  return (
    <button
      type="button"
      id="scroll-top"
      className={`jelly-scroll-top${isActive ? " active" : ""}`}
      aria-label="맨 위로 이동"
      onPointerEnter={(event) => {
        randomizeBlobPositions(event.currentTarget, event.pointerType);
      }}
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <span className="jelly-scroll-top__icon" aria-hidden="true">
        <i className="bi bi-arrow-up-short" />
      </span>
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--1" aria-hidden="true" />
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--2" aria-hidden="true" />
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--3" aria-hidden="true" />

      <svg
        className="jelly-scroll-top__svg"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="scroll-top-jelly-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </button>
  );
}

export default ScrollTop;

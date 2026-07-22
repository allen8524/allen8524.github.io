import { useEffect, useState } from "react";

function ScrollTop() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const updateScrollTop = () => {
      setIsActive(window.scrollY > 100);
    };

    updateScrollTop();
    window.addEventListener("scroll", updateScrollTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollTop);
    };
  }, []);

  return (
    <button
      type="button"
      id="scroll-top"
      className={`scroll-top jelly-scroll-top${isActive ? " active" : ""}`}
      aria-label="맨 위로 이동"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <span className="jelly-scroll-top__icon" aria-hidden="true">
        <i className="bi bi-arrow-up-short" />
      </span>
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--1" aria-hidden="true" />
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--2" aria-hidden="true" />
      <span className="jelly-scroll-top__blob jelly-scroll-top__blob--3" aria-hidden="true" />
      <span className="jelly-scroll-top__gloss" aria-hidden="true" />

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

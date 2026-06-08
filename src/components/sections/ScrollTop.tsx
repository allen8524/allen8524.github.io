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
      className={`scroll-top d-flex align-items-center justify-content-center${isActive ? " active" : ""}`}
      aria-label="맨 위로 이동"
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <i className="bi bi-arrow-up-short" />
    </button>
  );
}

export default ScrollTop;

import { useEffect, useState } from "react";
import { homeMarkup } from "../../data/homeMarkup";

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

  const scrollTopHtml = homeMarkup.scrollTop.replace(
    'class="scroll-top d-flex align-items-center justify-content-center"',
    `class="scroll-top d-flex align-items-center justify-content-center${isActive ? " active" : ""}"`,
  );

  return (
    <div
      onClick={(event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      dangerouslySetInnerHTML={{ __html: scrollTopHtml }}
    />
  );
}

export default ScrollTop;

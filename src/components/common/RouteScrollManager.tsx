import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const validSectionIdPattern = /^[a-zA-Z0-9_-]+$/;

function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getSectionId(hash: string) {
  const sectionId = hash.replace(/^#/, "");

  if (!sectionId || !validSectionIdPattern.test(sectionId)) {
    return "";
  }

  return sectionId;
}

function RouteScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    const isDetailRoute = location.pathname.startsWith("/services/") || location.pathname.startsWith("/projects/");

    if (isDetailRoute && !location.hash) {
      scrollToTopInstant();

      const frameId = window.requestAnimationFrame(scrollToTopInstant);
      const timeoutId = window.setTimeout(scrollToTopInstant, 80);

      return () => {
        window.cancelAnimationFrame(frameId);
        window.clearTimeout(timeoutId);
      };
    }

    const timeoutId = window.setTimeout(() => {
      const sectionId = getSectionId(location.hash);

      if (sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      scrollToTopInstant();
    }, 80);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default RouteScrollManager;

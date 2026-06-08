import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const validSectionIdPattern = /^[a-zA-Z0-9_-]+$/;

function getSectionId(hash: string) {
  const sectionId = hash.replace(/^#/, "");

  if (!sectionId || !validSectionIdPattern.test(sectionId)) {
    return "";
  }

  return sectionId;
}

function RouteScrollManager() {
  const location = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const sectionId = getSectionId(location.hash);

      if (sectionId) {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 80);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [location.pathname, location.search, location.hash]);

  return null;
}

export default RouteScrollManager;

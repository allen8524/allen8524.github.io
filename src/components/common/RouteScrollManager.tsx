import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const validSectionIdPattern = /^[a-zA-Z0-9_-]+$/;

function getSectionId(hash: string) {
  const sectionId = hash.replace(/^#/, "");
  return validSectionIdPattern.test(sectionId) ? sectionId : "";
}

function RouteScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    const requestedSection = new URLSearchParams(location.search).get("section") ?? "";
    const sectionId = getSectionId(location.hash) || getSectionId(requestedSection);
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
      section.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.key, location.pathname, location.search, location.hash]);

  return null;
}

export default RouteScrollManager;

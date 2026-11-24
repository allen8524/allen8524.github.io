import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const validSectionIdPattern = /^[a-zA-Z0-9_-]+$/;

function getSectionId(hash: string) {
  const sectionId = hash.replace(/^#/, "");
  return validSectionIdPattern.test(sectionId) ? sectionId : "";
}

function RouteScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "REPLACE" && location.state?.preserveViewport) return;

    const requestedSection = new URLSearchParams(location.search).get("section") ?? "";
    const sectionId = getSectionId(location.hash) || getSectionId(requestedSection);
    const section = sectionId ? document.getElementById(sectionId) : null;

    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
      section.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (location.pathname !== "/") {
        document.getElementById("main-content")?.focus({ preventScroll: true });
      }
    }
  }, [location, navigationType]);

  return null;
}

export default RouteScrollManager;

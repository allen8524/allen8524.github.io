import { useLayoutEffect } from "react";

type RevealScope = "home" | "project" | "service";
type UseScrollRevealOptions = { scope: RevealScope; deps?: unknown[] };

// Animate complete blocks once, never both a block and its children.
const selectors: Record<RevealScope, string> = {
  home: [
    ".hero-content h1",
    ".hero-image .image-wrapper",
    ".section-title",
    ".backend-diagram",
    ".skill-category",
    ".expertise-highlight",
    ".technologies-section",
    ".achievements-section",
    ".resume-panel-header",
    ".timeline-item",
    ".education-card",
    ".certification-section",
    ".portfolio-filters",
    ".portfolio-card",
    ".service-item",
    ".trouble-card",
    ".contact-info-card",
    ".form-wrapper",
  ].join(","),
  project: [
    ".project-detail-hero__content",
    ".project-detail-hero__image",
    ".project-section-heading",
    ".project-summary-panel",
    ".project-flow-list > li",
    ".project-implementation-card",
    ".project-troubleshooting-list > li",
    ".project-gallery-item",
    ".project-detail-links > a",
    ".project-nav .nav-link",
  ].join(","),
  service: [
    ".service-breadcrumb",
    ".service-detail-hero__content",
    ".service-detail-hero__image",
    ".service-detail-section__heading",
    ".service-feature-card",
    ".service-process-list > li",
    ".service-evidence-card",
    ".service-info-panel",
    ".service-other-card",
  ].join(","),
};

export function useScrollReveal({ scope, deps = [] }: UseScrollRevealOptions) {
  useLayoutEffect(() => {
    const root = document.querySelector("main.main");
    if (!root) return;
    const elements = new Set<HTMLElement>();
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const observer =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer?.unobserve(entry.target);
              });
            },
            { rootMargin: "0px 0px 64px 0px", threshold: 0 },
          )
        : null;

    const collect = () => {
      const candidates = Array.from(
        root.querySelectorAll<HTMLElement>(selectors[scope]),
      );
      candidates
        .filter(
          (element) =>
            !candidates.some(
              (parent) => parent !== element && parent.contains(element),
            ),
        )
        .forEach((element) => {
          if (elements.has(element)) return;
          elements.add(element);
          element.classList.add("reveal-item");
          if (motion.matches || !observer) element.classList.add("is-visible");
          else observer.observe(element);
        });
    };
    const showAll = () => {
      if (!motion.matches) return;
      elements.forEach((element) => element.classList.add("is-visible"));
      observer?.disconnect();
    };
    collect();
    // Filters and route content can insert new cards after the initial render.
    const mutations = new MutationObserver(collect);
    mutations.observe(root, { childList: true, subtree: true });
    motion.addEventListener("change", showAll);
    return () => {
      mutations.disconnect();
      observer?.disconnect();
      motion.removeEventListener("change", showAll);
      elements.forEach((element) =>
        element.classList.remove("reveal-item", "is-visible"),
      );
    };
  }, [scope, ...deps]);
}

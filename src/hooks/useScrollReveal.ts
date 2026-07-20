import { useEffect } from "react";

type RevealScope = "home" | "project" | "service";

type UseScrollRevealOptions = {
  scope: RevealScope;
  deps?: unknown[];
};

type RevealGroup = {
  container?: string;
  selector: string;
  stagger?: number;
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

const revealGroupsByScope: Record<RevealScope, RevealGroup[]> = {
  home: [
    { selector: ".hero-content h1" },
    { selector: ".hero-description span", stagger: 70 },
    { selector: ".hero-actions > *", stagger: 80 },
    { selector: ".hero-stats .stat-item", stagger: 80 },
    { selector: ".hero-image .image-wrapper" },
    { selector: ".hero-card-stack .floating-card", stagger: 90 },
    { selector: ".section-title" },
    { container: "#about", selector: ".about-card, .about-content, .about-image", stagger: 80 },
    { container: "#stats", selector: ".stat-card, .stats-item, .stat-item", stagger: 80 },
    { container: "#skills", selector: ".skill-category, .progress, .skill-item", stagger: 70 },
    { container: "#resume", selector: ".timeline-item, .resume-item", stagger: 70 },
    { container: "#portfolio", selector: ".portfolio-card, .portfolio-item", stagger: 80 },
    { container: "#services", selector: ".service-item", stagger: 80 },
    { container: "#testimonials", selector: ".trouble-nav-item", stagger: 70 },
    { selector: "#testimonials .trouble-stage" },
    { container: "#contact", selector: ".contact-info-card, .contact-form, .info-item", stagger: 80 },
  ],
  project: [
    { selector: ".page-title .container" },
    { selector: ".project-detail-hero" },
    { container: ".project-detail-hero", selector: ".project-detail-hero__content > *, .project-detail-hero__image", stagger: 90 },
    { container: ".portfolio-details", selector: ".project-detail-section, .project-nav", stagger: 90 },
    { container: ".project-detail-timeline", selector: ".project-detail-step", stagger: 70 },
    { container: ".project-gallery-grid", selector: ".project-gallery-item", stagger: 80 },
  ],
  service: [
    { selector: ".service-detail-hero" },
    { container: ".service-detail-hero", selector: ".service-detail-hero__content > *, .service-detail-hero__image", stagger: 70 },
    { selector: ".service-detail-section__heading" },
    { container: ".service-feature-grid", selector: ".service-feature-card", stagger: 70 },
    { container: ".service-process-list", selector: "li", stagger: 70 },
    { container: ".service-evidence-grid", selector: ".service-evidence-card", stagger: 70 },
    { selector: ".service-info-panel" },
    { container: ".service-other-grid", selector: ".service-other-card", stagger: 70 },
  ],
};

function getRevealElements(group: RevealGroup) {
  if (!group.container) {
    return Array.from(document.querySelectorAll<HTMLElement>(group.selector));
  }

  return Array.from(document.querySelectorAll<HTMLElement>(group.container)).flatMap((container) =>
    Array.from(container.querySelectorAll<HTMLElement>(group.selector)),
  );
}

export function useScrollReveal({ scope, deps = [] }: UseScrollRevealOptions) {
  useEffect(() => {
    const groups = revealGroupsByScope[scope];
    const elements = groups.flatMap((group) =>
      getRevealElements(group).map((element, index) => ({
        element,
        delay: group.stagger ? index * group.stagger : 0,
      })),
    );

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(reduceMotionQuery).matches;

    elements.forEach(({ element, delay }) => {
      element.classList.add("reveal-item");
      element.classList.remove("is-visible");
      element.style.transitionDelay = prefersReducedMotion || delay === 0 ? "" : `${delay}ms`;
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach(({ element }) => {
        element.classList.add("is-visible");
        element.style.transitionDelay = "";
      });

      return () => {
        elements.forEach(({ element }) => {
          element.classList.remove("reveal-item", "is-visible");
          element.style.transitionDelay = "";
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.08,
      },
    );

    elements.forEach(({ element }) => observer.observe(element));

    return () => {
      observer.disconnect();
      elements.forEach(({ element }) => {
        element.classList.remove("reveal-item", "is-visible");
        element.style.transitionDelay = "";
      });
    };
  }, [scope, ...deps]);
}

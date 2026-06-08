import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GsapAnimationScope = "home" | "project" | "service";

type UseGsapAnimationsOptions = {
  scope: GsapAnimationScope;
  deps?: unknown[];
};

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";

function animateGroup(selector: string, options: gsap.TweenVars = {}) {
  const elements = gsap.utils.toArray<HTMLElement>(selector);

  elements.forEach((element) => {
    gsap.fromTo(
      element,
      {
        autoAlpha: 0,
        y: 34,
        scale: 0.985,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.72,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 86%",
          once: true,
        },
        ...options,
      },
    );
  });
}

function animateStagger(containerSelector: string, itemSelector: string, options: gsap.TweenVars = {}) {
  gsap.utils.toArray<HTMLElement>(containerSelector).forEach((container) => {
    const items = gsap.utils.toArray<HTMLElement>(container.querySelectorAll(itemSelector));

    if (!items.length) {
      return;
    }

    gsap.fromTo(
      items,
      {
        autoAlpha: 0,
        y: 28,
      },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.62,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: container,
          start: "top 84%",
          once: true,
        },
        ...options,
      },
    );
  });
}

function animateHome() {
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .fromTo(".hero-content h1", { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.82 })
    .fromTo(".hero-description span", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.52, stagger: 0.07 }, "-=0.42")
    .fromTo(".hero-actions > *", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08 }, "-=0.28")
    .fromTo(".hero-stats .stat-item", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08 }, "-=0.26")
    .fromTo(".hero-image .image-wrapper", { autoAlpha: 0, x: 36, scale: 0.98 }, { autoAlpha: 1, x: 0, scale: 1, duration: 0.82 }, "-=0.84")
    .fromTo(".hero-card-stack .floating-card", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.46, stagger: 0.09 }, "-=0.32");

  animateGroup(".section-title", { y: 24 });
  animateStagger("#about", ".about-card, .about-content, .about-image");
  animateStagger("#stats", ".stat-card, .stats-item, .stat-item");
  animateStagger("#skills", ".skill-category, .progress, .skill-item");
  animateStagger("#resume", ".timeline-item, .resume-item");
  animateStagger("#portfolio", ".portfolio-card, .portfolio-item");
  animateStagger("#services", ".service-item");
  animateStagger("#testimonials", ".trouble-nav-item");
  animateGroup("#testimonials .trouble-stage", { y: 22 });
  animateStagger("#contact", ".contact-info-card, .contact-form, .info-item");
}

function animateProjectDetail() {
  animateGroup(".page-title .container", { y: 20 });
  animateGroup(".project-detail-hero", { y: 24 });
  animateStagger(".project-detail-hero", ".project-detail-hero__content > *, .project-detail-hero__image", { stagger: 0.12 });
  animateStagger(".portfolio-details", ".project-detail-section, .project-nav", { y: 30, stagger: 0.1 });
  animateStagger(".project-detail-timeline", ".project-detail-step", { y: 22, stagger: 0.07 });
  animateStagger(".project-gallery-grid", ".project-gallery-item", { y: 24, stagger: 0.08 });
}

function animateServiceDetail() {
  animateGroup(".page-title .container", { y: 20 });
  animateGroup(".service-hero", { y: 24 });
  animateGroup(".service-image", { y: 24 });
  animateStagger(".service-description", ".feature-item", { y: 24, stagger: 0.08 });
  animateStagger(".process-section", ".step, .feature-item", { y: 24, stagger: 0.08 });
  animateStagger(".service-sidebar", ".service-info, .cta-block", { y: 24, stagger: 0.08 });
}

export function useGsapAnimations({ scope, deps = [] }: UseGsapAnimationsOptions) {
  useEffect(() => {
    if (window.matchMedia(reduceMotionQuery).matches) {
      return undefined;
    }

    const context = gsap.context(() => {
      if (scope === "home") {
        animateHome();
      }

      if (scope === "project") {
        animateProjectDetail();
      }

      if (scope === "service") {
        animateServiceDetail();
      }

      ScrollTrigger.refresh();
    });

    return () => {
      context.revert();
    };
  }, [scope, ...deps]);
}

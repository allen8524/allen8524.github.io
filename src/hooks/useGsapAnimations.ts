import { useEffect } from "react";

type GsapAnimationScope = "home" | "project" | "service";

type UseGsapAnimationsOptions = {
  scope: GsapAnimationScope;
  deps?: unknown[];
};

type GsapTweenVars = Record<string, unknown>;

type GsapContext = {
  revert: () => void;
};

type GsapTimeline = {
  fromTo: (targets: string | Element | Element[], fromVars: GsapTweenVars, toVars: GsapTweenVars, position?: string) => GsapTimeline;
};

type GsapApi = {
  registerPlugin: (...plugins: unknown[]) => void;
  context: (callback: () => void) => GsapContext;
  fromTo: (targets: string | Element | Element[], fromVars: GsapTweenVars, toVars: GsapTweenVars) => void;
  timeline: (vars?: GsapTweenVars) => GsapTimeline;
  utils: {
    toArray: <T extends Element = Element>(targets: string | NodeListOf<T> | T[] | Element[]) => T[];
  };
};

type ScrollTriggerApi = {
  refresh?: () => void;
};

declare global {
  interface Window {
    gsap?: GsapApi;
    ScrollTrigger?: ScrollTriggerApi;
  }
}

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const gsapScriptId = "gsap-cdn-script";
const scrollTriggerScriptId = "gsap-scroll-trigger-cdn-script";
const gsapSrc = "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js";
const scrollTriggerSrc = "https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js";

let gsapLoadPromise: Promise<GsapApi | null> | null = null;

function loadScript(id: string, src: string) {
  return new Promise<void>((resolve, reject) => {
    const existingScript = document.getElementById(id) as HTMLScriptElement | null;

    if (existingScript?.dataset.loaded === "true") {
      resolve();
      return;
    }

    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
      return;
    }

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = true;
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error(`Failed to load ${src}`));

    document.head.appendChild(script);
  });
}

function loadGsap() {
  if (gsapLoadPromise) {
    return gsapLoadPromise;
  }

  gsapLoadPromise = (async () => {
    try {
      await loadScript(gsapScriptId, gsapSrc);
      await loadScript(scrollTriggerScriptId, scrollTriggerSrc);

      if (!window.gsap || !window.ScrollTrigger) {
        return null;
      }

      window.gsap.registerPlugin(window.ScrollTrigger);
      return window.gsap;
    } catch {
      return null;
    }
  })();

  return gsapLoadPromise;
}

function animateGroup(gsap: GsapApi, selector: string, options: GsapTweenVars = {}) {
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

function animateStagger(gsap: GsapApi, containerSelector: string, itemSelector: string, options: GsapTweenVars = {}) {
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

function animateHome(gsap: GsapApi) {
  const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTimeline
    .fromTo(".hero-content h1", { autoAlpha: 0, y: 36 }, { autoAlpha: 1, y: 0, duration: 0.82 })
    .fromTo(".hero-description span", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.52, stagger: 0.07 }, "-=0.42")
    .fromTo(".hero-actions > *", { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08 }, "-=0.28")
    .fromTo(".hero-stats .stat-item", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.48, stagger: 0.08 }, "-=0.26")
    .fromTo(".hero-image .image-wrapper", { autoAlpha: 0, x: 36, scale: 0.98 }, { autoAlpha: 1, x: 0, scale: 1, duration: 0.82 }, "-=0.84")
    .fromTo(".hero-card-stack .floating-card", { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, duration: 0.46, stagger: 0.09 }, "-=0.32");

  animateGroup(gsap, ".section-title", { y: 24 });
  animateStagger(gsap, "#about", ".about-card, .about-content, .about-image");
  animateStagger(gsap, "#stats", ".stat-card, .stats-item, .stat-item");
  animateStagger(gsap, "#skills", ".skill-category, .progress, .skill-item");
  animateStagger(gsap, "#resume", ".timeline-item, .resume-item");
  animateStagger(gsap, "#portfolio", ".portfolio-card, .portfolio-item");
  animateStagger(gsap, "#services", ".service-item");
  animateStagger(gsap, "#testimonials", ".trouble-nav-item");
  animateGroup(gsap, "#testimonials .trouble-stage", { y: 22 });
  animateStagger(gsap, "#contact", ".contact-info-card, .contact-form, .info-item");
}

function animateProjectDetail(gsap: GsapApi) {
  animateGroup(gsap, ".page-title .container", { y: 20 });
  animateGroup(gsap, ".project-detail-hero", { y: 24 });
  animateStagger(gsap, ".project-detail-hero", ".project-detail-hero__content > *, .project-detail-hero__image", { stagger: 0.12 });
  animateStagger(gsap, ".portfolio-details", ".project-detail-section, .project-nav", { y: 30, stagger: 0.1 });
  animateStagger(gsap, ".project-detail-timeline", ".project-detail-step", { y: 22, stagger: 0.07 });
  animateStagger(gsap, ".project-gallery-grid", ".project-gallery-item", { y: 24, stagger: 0.08 });
}

function animateServiceDetail(gsap: GsapApi) {
  animateGroup(gsap, ".page-title .container", { y: 20 });
  animateGroup(gsap, ".service-hero", { y: 24 });
  animateGroup(gsap, ".service-image", { y: 24 });
  animateStagger(gsap, ".service-description", ".feature-item", { y: 24, stagger: 0.08 });
  animateStagger(gsap, ".process-section", ".step, .feature-item", { y: 24, stagger: 0.08 });
  animateStagger(gsap, ".service-sidebar", ".service-info, .cta-block", { y: 24, stagger: 0.08 });
}

export function useGsapAnimations({ scope, deps = [] }: UseGsapAnimationsOptions) {
  useEffect(() => {
    if (window.matchMedia(reduceMotionQuery).matches) {
      return undefined;
    }

    let isCancelled = false;
    let context: GsapContext | undefined;

    loadGsap().then((gsap) => {
      if (isCancelled || !gsap) {
        return;
      }

      context = gsap.context(() => {
        if (scope === "home") {
          animateHome(gsap);
        }

        if (scope === "project") {
          animateProjectDetail(gsap);
        }

        if (scope === "service") {
          animateServiceDetail(gsap);
        }

        window.ScrollTrigger?.refresh?.();
      });
    });

    return () => {
      isCancelled = true;
      context?.revert();
    };
  }, [scope, ...deps]);
}

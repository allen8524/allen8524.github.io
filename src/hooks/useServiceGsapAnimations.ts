import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseServiceGsapAnimationsOptions = {
  rootRef: RefObject<HTMLElement | null>;
  deps?: unknown[];
};

type ScrollTriggerInstance = ReturnType<typeof ScrollTrigger.getAll>[number];

const reduceMotionQuery = "(prefers-reduced-motion: reduce)";
const pointerFineQuery = "(hover: hover) and (pointer: fine)";
const desktopMotionQuery = "(min-width: 992px) and (hover: hover) and (pointer: fine)";
const timing = {
  duration: 0.64,
  longDuration: 0.82,
  stagger: 0.08,
  ease: "power3.out",
} as const;
const visibleSelector =
  ".page-title h1, .page-title .breadcrumbs, .page-title .breadcrumbs li, .service-animate-hero, .service-animate-hero > *, .service-animate-image, .service-animate-image img, .service-animate-card, .service-animate-step, .service-animate-sidebar, .service-animate-marker, .service-description h3, .process-section h3, .service-info li, .cta-block .btn";
const markerShapeSelector = ".service-feature-svg path, .service-feature-svg circle, .service-feature-svg rect, .service-feature-svg ellipse";

function scrollToTopInstant() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function getAll<T extends Element>(root: HTMLElement, selector: string) {
  return Array.from(root.querySelectorAll<T>(selector));
}

function resetForReducedMotion(root: HTMLElement) {
  gsap.set(getAll<HTMLElement>(root, visibleSelector), {
    clearProps: "all",
    autoAlpha: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    clipPath: "inset(0% 0% 0% 0%)",
  });
  gsap.set(getAll<HTMLElement>(root, ".service-description h3, .process-section h3, .service-animate-image"), {
    "--service-heading-line-scale": 1,
    "--service-image-sweep": "120%",
    "--service-image-scan": "120%",
  });
  gsap.set(getAll<HTMLElement>(root, ".process-section"), {
    "--service-section-rail-scale": 1,
  });
  gsap.set(getAll<HTMLElement>(root, ".service-animate-hero"), {
    "--service-hero-orbit": "0deg",
  });
}

function animatePageTitle(root: HTMLElement) {
  const title = root.querySelector(".page-title h1");
  const breadcrumbs = root.querySelector(".page-title .breadcrumbs");
  const breadcrumbItems = getAll<HTMLElement>(root, ".page-title .breadcrumbs li");
  const timeline = gsap.timeline({ defaults: { ease: timing.ease } });

  timeline
    .fromTo(title, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: timing.longDuration })
    .fromTo(breadcrumbs, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: timing.duration }, "-=0.44")
    .fromTo(breadcrumbItems, { autoAlpha: 0, x: -8 }, { autoAlpha: 1, x: 0, duration: 0.42, stagger: 0.06 }, "-=0.42");
}

function animateHero(root: HTMLElement) {
  const hero = root.querySelector(".service-animate-hero");

  if (!hero) {
    return;
  }

  const heroItems = getAll<HTMLElement>(hero as HTMLElement, "h2, .lead");
  const timeline = gsap.timeline({ defaults: { ease: timing.ease } });

  timeline
    .fromTo(hero, { autoAlpha: 0, y: 28, scale: 0.98 }, { autoAlpha: 1, y: 0, scale: 1, duration: timing.longDuration })
    .fromTo(heroItems, { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: timing.duration, stagger: 0.1 }, "-=0.5");
}

function animateServiceImage(root: HTMLElement) {
  const imageCard = root.querySelector(".service-animate-image");
  const image = imageCard?.querySelector("img");

  if (!imageCard || !image) {
    return;
  }

  gsap.fromTo(
    imageCard,
    {
      autoAlpha: 0,
      x: 22,
      clipPath: "inset(0% 12% 0% 0%)",
    },
    {
      autoAlpha: 1,
      x: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      "--service-image-sweep": "120%",
      "--service-image-scan": "120%",
      duration: timing.longDuration,
      ease: timing.ease,
      scrollTrigger: {
        trigger: imageCard,
        start: "top 84%",
        once: true,
      },
    },
  );

  gsap.fromTo(
    image,
    { scale: 1.035 },
    {
      scale: 1,
      duration: 0.9,
      ease: timing.ease,
      scrollTrigger: {
        trigger: imageCard,
        start: "top 84%",
        once: true,
      },
    },
  );

  if (window.matchMedia(desktopMotionQuery).matches) {
    gsap.to(image, {
      yPercent: -2.5,
      ease: "none",
      scrollTrigger: {
        trigger: imageCard,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.8,
      },
    });
  }
}

function animateHeroAmbient(root: HTMLElement) {
  const hero = root.querySelector(".service-animate-hero");

  if (!hero || !window.matchMedia(desktopMotionQuery).matches) {
    return;
  }

  gsap.to(hero, {
    "--service-hero-orbit": "360deg",
    duration: 22,
    ease: "none",
    repeat: -1,
  });
}

function animateImageScan(root: HTMLElement) {
  const imageCard = root.querySelector(".service-animate-image");

  if (!imageCard || !window.matchMedia(desktopMotionQuery).matches) {
    return;
  }

  gsap.fromTo(
    imageCard,
    { "--service-image-scan": "-18%" },
    {
      "--service-image-scan": "118%",
      ease: "none",
      scrollTrigger: {
        trigger: imageCard,
        start: "top 90%",
        end: "bottom 45%",
        scrub: 0.9,
      },
    },
  );
}

function animateSectionCards(root: HTMLElement) {
  const cards = getAll<HTMLElement>(root, ".service-content > .service-animate-card");

  cards.forEach((card) => {
    gsap.fromTo(
      card,
      {
        autoAlpha: 0,
        y: 22,
        clipPath: "inset(8% 0% 0% 0%)",
      },
      {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: timing.longDuration,
        ease: timing.ease,
        scrollTrigger: {
          trigger: card,
          start: "top 86%",
          once: true,
        },
      },
    );
  });
}

function animateSectionHeadings(root: HTMLElement) {
  const headings = getAll<HTMLElement>(root, ".service-description h3, .process-section h3");

  headings.forEach((heading) => {
    gsap.fromTo(
      heading,
      {
        autoAlpha: 0,
        y: 14,
        "--service-heading-line-scale": 0,
      },
      {
        autoAlpha: 1,
        y: 0,
        "--service-heading-line-scale": 1,
        duration: timing.duration,
        ease: timing.ease,
        scrollTrigger: {
          trigger: heading,
          start: "top 88%",
          once: true,
        },
      },
    );
  });
}

function animateProcessRails(root: HTMLElement) {
  getAll<HTMLElement>(root, ".process-section").forEach((section) => {
    gsap.fromTo(
      section,
      { "--service-section-rail-scale": 0 },
      {
        "--service-section-rail-scale": 1,
        duration: 0.72,
        ease: timing.ease,
        scrollTrigger: {
          trigger: section,
          start: "top 84%",
          once: true,
        },
      },
    );
  });
}

function animateFeatureCards(root: HTMLElement) {
  getAll<HTMLElement>(root, ".features-list").forEach((list) => {
    const cards = getAll<HTMLElement>(list, ".feature-item");

    if (!cards.length) {
      return;
    }

    const markers = cards.flatMap((card) => getAll<HTMLElement>(card, ".service-animate-marker"));
    const markerShapes = cards.flatMap((card) => getAll<SVGGeometryElement>(card, markerShapeSelector));
    const textBlocks = cards
      .map((card) => Array.from(card.children).find((child) => !child.classList.contains("service-detail-marker")))
      .filter((child): child is Element => Boolean(child));
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 84%",
        once: true,
      },
    });

    timeline
      .fromTo(cards, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: timing.duration, ease: timing.ease, stagger: timing.stagger })
      .fromTo(markers, { autoAlpha: 0, scale: 0.82, rotate: -4 }, { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.48, ease: "back.out(1.35)", stagger: 0.05 }, "-=0.42")
      .fromTo(
        markerShapes,
        { strokeDasharray: 40, strokeDashoffset: 40 },
        { strokeDashoffset: 0, duration: 0.58, ease: timing.ease, stagger: 0.025 },
        "-=0.36",
      )
      .fromTo(textBlocks, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.52, ease: timing.ease, stagger: 0.05 }, "-=0.4");
  });
}

function animateStepCards(root: HTMLElement) {
  getAll<HTMLElement>(root, ".process-steps").forEach((list) => {
    const steps = getAll<HTMLElement>(list, ".step");

    if (!steps.length) {
      return;
    }

    const markers = steps.flatMap((step) => getAll<HTMLElement>(step, ".service-animate-marker"));
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: list,
        start: "top 84%",
        once: true,
      },
    });

    timeline
      .fromTo(
        steps,
        {
          autoAlpha: 0,
          y: 26,
          borderColor: "rgba(255,255,255,0.12)",
          "--service-step-line-scale": 0,
        },
        {
          autoAlpha: 1,
          y: 0,
          borderColor: "rgba(20,157,221,0.26)",
          "--service-step-line-scale": 1,
          duration: timing.duration,
          ease: timing.ease,
          stagger: timing.stagger,
        },
      )
      .fromTo(markers, { autoAlpha: 0, scale: 0.84 }, { autoAlpha: 1, scale: 1, duration: 0.46, ease: "back.out(1.3)", stagger: 0.05 }, "-=0.42")
      .to(steps, { borderColor: "", duration: 0.32, overwrite: "auto" }, "+=0.04");
  });
}

function animateSidebar(root: HTMLElement) {
  const sidebar = root.querySelector(".service-sidebar");

  if (!sidebar) {
    return;
  }

  const isMobile = window.matchMedia("(max-width: 991px)").matches;

  gsap.fromTo(
    getAll<HTMLElement>(sidebar as HTMLElement, ".service-info, .cta-block"),
    {
      autoAlpha: 0,
      x: isMobile ? 0 : 28,
      y: isMobile ? 24 : 0,
    },
    {
      autoAlpha: 1,
      x: 0,
      y: 0,
      duration: timing.duration,
      ease: timing.ease,
      stagger: timing.stagger,
      scrollTrigger: {
        trigger: sidebar,
        start: "top 82%",
        once: true,
      },
    },
  );

  getAll<HTMLElement>(sidebar as HTMLElement, ".service-info").forEach((card) => {
    const items = getAll<HTMLElement>(card, "li");

    if (!items.length) {
      return;
    }

    gsap.fromTo(
      items,
      { autoAlpha: 0, x: isMobile ? 0 : 10, y: isMobile ? 8 : 0 },
      {
        autoAlpha: 1,
        x: 0,
        y: 0,
        duration: 0.42,
        ease: timing.ease,
        stagger: 0.045,
        scrollTrigger: {
          trigger: card,
          start: "top 84%",
          once: true,
        },
      },
    );
  });

  const buttons = getAll<HTMLElement>(sidebar as HTMLElement, ".cta-block .btn");

  if (buttons.length) {
    gsap.fromTo(
      buttons,
      { autoAlpha: 0, y: 12, scale: 0.98 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.46,
        ease: timing.ease,
        stagger: 0.055,
        scrollTrigger: {
          trigger: buttons[0].closest(".cta-block") ?? sidebar,
          start: "top 84%",
          once: true,
        },
      },
    );
  }
}

function setupMagneticInteractions(root: HTMLElement) {
  if (!window.matchMedia(pointerFineQuery).matches) {
    return () => undefined;
  }

  const targets = getAll<HTMLElement>(
    root,
    ".features-list .feature-item, .process-steps .step, .service-sidebar .cta-block .btn",
  );
  const cleanups: Array<() => void> = [];

  targets.forEach((target) => {
    const moveX = gsap.quickTo(target, "x", { duration: 0.32, ease: "power3.out" });
    const moveY = gsap.quickTo(target, "y", { duration: 0.32, ease: "power3.out" });
    const tiltX = gsap.quickTo(target, "rotateX", { duration: 0.34, ease: "power3.out" });
    const tiltY = gsap.quickTo(target, "rotateY", { duration: 0.34, ease: "power3.out" });

    const onPointerMove = (event: PointerEvent) => {
      const rect = target.getBoundingClientRect();
      const localX = event.clientX - rect.left;
      const localY = event.clientY - rect.top;
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 6;

      target.style.setProperty("--service-card-x", `${localX}px`);
      target.style.setProperty("--service-card-y", `${localY}px`);
      moveX(x * 0.7);
      moveY(y);
      tiltX(y * -0.16);
      tiltY(x * 0.16);
      gsap.set(target, {
        transformPerspective: 900,
        transformOrigin: "center",
      });
    };

    const onPointerLeave = () => {
      moveX(0);
      moveY(0);
      tiltX(0);
      tiltY(0);
    };

    target.addEventListener("pointermove", onPointerMove);
    target.addEventListener("pointerleave", onPointerLeave);

    cleanups.push(() => {
      target.removeEventListener("pointermove", onPointerMove);
      target.removeEventListener("pointerleave", onPointerLeave);
      target.style.removeProperty("--service-card-x");
      target.style.removeProperty("--service-card-y");
      gsap.set(target, {
        x: 0,
        y: 0,
        rotateX: 0,
        rotateY: 0,
        clearProps: "transformPerspective,transformOrigin",
      });
    });
  });

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function setupHeroPointerGlow(root: HTMLElement) {
  if (!window.matchMedia(pointerFineQuery).matches) {
    return () => undefined;
  }

  const hero = root.querySelector<HTMLElement>(".service-animate-hero");

  if (!hero) {
    return () => undefined;
  }

  const glowX = gsap.quickTo(hero, "--service-hero-x", { duration: 0.38, ease: "power3.out" });
  const glowY = gsap.quickTo(hero, "--service-hero-y", { duration: 0.38, ease: "power3.out" });

  const onPointerMove = (event: PointerEvent) => {
    const rect = hero.getBoundingClientRect();

    glowX(event.clientX - rect.left);
    glowY(event.clientY - rect.top);
  };

  const onPointerLeave = () => {
    glowX(hero.clientWidth * 0.16);
    glowY(0);
  };

  hero.addEventListener("pointermove", onPointerMove);
  hero.addEventListener("pointerleave", onPointerLeave);

  return () => {
    hero.removeEventListener("pointermove", onPointerMove);
    hero.removeEventListener("pointerleave", onPointerLeave);
    hero.style.removeProperty("--service-hero-x");
    hero.style.removeProperty("--service-hero-y");
  };
}

export function useServiceGsapAnimations({ rootRef, deps = [] }: UseServiceGsapAnimationsOptions) {
  useLayoutEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    scrollToTopInstant();

    if (window.matchMedia(reduceMotionQuery).matches) {
      resetForReducedMotion(root);
      return undefined;
    }

    let cleanupMagnetic: () => void = () => {};
    let cleanupHeroGlow: () => void = () => {};
    let context: gsap.Context | undefined;

    const frameId = window.requestAnimationFrame(() => {
      scrollToTopInstant();

      context = gsap.context(() => {
        gsap.set(getAll<HTMLElement>(root, visibleSelector), { autoAlpha: 1, clearProps: "transform" });
        gsap.set(getAll<SVGGeometryElement>(root, markerShapeSelector), { strokeDasharray: 40, strokeDashoffset: 40 });
        gsap.set(getAll<HTMLElement>(root, ".service-description h3, .process-section h3"), { "--service-heading-line-scale": 0 });
        gsap.set(getAll<HTMLElement>(root, ".service-animate-image"), { "--service-image-sweep": "-45%" });
        gsap.set(getAll<HTMLElement>(root, ".process-section"), { "--service-section-rail-scale": 0 });
        animatePageTitle(root);
        animateHero(root);
        animateHeroAmbient(root);
        animateServiceImage(root);
        animateImageScan(root);
        animateSectionCards(root);
        animateSectionHeadings(root);
        animateProcessRails(root);
        animateFeatureCards(root);
        animateStepCards(root);
        animateSidebar(root);
        cleanupMagnetic = setupMagneticInteractions(root);
        cleanupHeroGlow = setupHeroPointerGlow(root);
        ScrollTrigger.refresh();
      }, root);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      cleanupMagnetic();
      cleanupHeroGlow();
      context?.revert();
      ScrollTrigger.getAll().forEach((trigger: ScrollTriggerInstance) => {
        const triggerElement = trigger.trigger;

        if (triggerElement && root.contains(triggerElement)) {
          trigger.kill();
        }
      });
    };
  }, [rootRef, ...deps]);
}

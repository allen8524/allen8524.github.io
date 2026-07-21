import { useEffect, useRef, useState } from "react";

type ScrollDirection = "up" | "down";

function ScrollHamster() {
  const [isRunning, setIsRunning] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>("down");
  const previousScrollY = useRef(0);
  const directionRef = useRef<ScrollDirection>("down");
  const ticking = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const stopTimer = useRef<number | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    previousScrollY.current = window.scrollY;

    const handleScroll = () => {
      if (stopTimer.current !== null) {
        window.clearTimeout(stopTimer.current);
      }

      stopTimer.current = window.setTimeout(() => {
        setIsRunning(false);
        stopTimer.current = null;
      }, 140);

      if (ticking.current) {
        return;
      }

      ticking.current = true;
      animationFrame.current = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const delta = currentScrollY - previousScrollY.current;

        if (Math.abs(delta) > 1) {
          const nextDirection: ScrollDirection = delta > 0 ? "down" : "up";

          if (directionRef.current !== nextDirection) {
            directionRef.current = nextDirection;
            setScrollDirection(nextDirection);
          }

          setIsRunning(true);
        }

        previousScrollY.current = currentScrollY;
        ticking.current = false;
        animationFrame.current = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current);
      }

      if (stopTimer.current !== null) {
        window.clearTimeout(stopTimer.current);
      }

      ticking.current = false;
      animationFrame.current = null;
      stopTimer.current = null;
    };
  }, []);

  const className = [
    "scroll-hamster",
    isRunning ? "scroll-hamster--running" : "",
    scrollDirection === "up" ? "scroll-hamster--up" : "scroll-hamster--down",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} aria-hidden="true">
      <div className="scroll-hamster__wheel">
        <div className="scroll-hamster__animal">
          <div className="scroll-hamster__body">
            <div className="scroll-hamster__head">
              <div className="scroll-hamster__ear" />
              <div className="scroll-hamster__eye" />
              <div className="scroll-hamster__nose" />
            </div>
            <div className="scroll-hamster__limb scroll-hamster__limb--front-right" />
            <div className="scroll-hamster__limb scroll-hamster__limb--front-left" />
            <div className="scroll-hamster__limb scroll-hamster__limb--back-right" />
            <div className="scroll-hamster__limb scroll-hamster__limb--back-left" />
            <div className="scroll-hamster__tail" />
          </div>
        </div>
        <div className="scroll-hamster__spoke" />
      </div>
    </div>
  );
}

export default ScrollHamster;

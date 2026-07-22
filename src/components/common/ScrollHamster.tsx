import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

type ScrollDirection = "up" | "down";

type StyledWrapperProps = {
  $isRunning: boolean;
  $direction: ScrollDirection;
};

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: grid;
  place-items: center;
  width: var(--hamster-size, 104px);
  height: var(--hamster-size, 104px);

  &,
  & *,
  & *::before,
  & *::after {
    box-sizing: border-box;
  }

  .wheel-and-hamster {
    --dur: 1s;
    position: relative;
    width: 12em;
    height: 12em;
    font-size: 14px;
    transform: scale(var(--hamster-scale, 0.6));
    transform-origin: center;
  }

  .wheel,
  .hamster,
  .hamster div,
  .spoke {
    position: absolute;
  }

  .wheel,
  .spoke {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .wheel {
    z-index: 2;
    background: radial-gradient(
      100% 100% at center,
      hsla(0, 0%, 60%, 0) 47.8%,
      hsl(0, 0%, 60%) 48%
    );
  }

  .hamster {
    top: 50%;
    left: calc(50% - 3.5em);
    z-index: 1;
    width: 7em;
    height: 3.75em;
    transform: rotate(4deg) translate(-0.8em, 1.85em);
    transform-origin: 50% 0;
    animation: hamster var(--dur) ease-in-out infinite;
  }

  .hamster__head {
    top: 0;
    left: -2em;
    width: 2.75em;
    height: 2.5em;
    border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
    background: hsl(30, 90%, 55%);
    box-shadow:
      0 -0.25em 0 hsl(30, 90%, 80%) inset,
      0.75em -1.55em 0 hsl(30, 90%, 90%) inset;
    transform-origin: 100% 50%;
    animation: hamsterHead var(--dur) ease-in-out infinite;
  }

  .hamster__ear {
    top: -0.25em;
    right: -0.25em;
    width: 0.75em;
    height: 0.75em;
    border-radius: 50%;
    background: hsl(0, 90%, 85%);
    box-shadow: -0.25em 0 hsl(30, 90%, 55%) inset;
    transform-origin: 50% 75%;
    animation: hamsterEar var(--dur) ease-in-out infinite;
  }

  .hamster__eye {
    top: 0.375em;
    left: 1.25em;
    width: 0.5em;
    height: 0.5em;
    border-radius: 50%;
    background-color: hsl(0, 0%, 0%);
    animation: hamsterEye var(--dur) linear infinite;
  }

  .hamster__nose {
    top: 0.75em;
    left: 0;
    width: 0.2em;
    height: 0.25em;
    border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
    background: hsl(0, 90%, 75%);
  }

  .hamster__body {
    top: 0.25em;
    left: 2em;
    width: 4.5em;
    height: 3em;
    border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
    background: hsl(30, 90%, 90%);
    box-shadow:
      0.1em 0.75em 0 hsl(30, 90%, 55%) inset,
      0.15em -0.5em 0 hsl(30, 90%, 80%) inset;
    transform-origin: 17% 50%;
    transform-style: preserve-3d;
    animation: hamsterBody var(--dur) ease-in-out infinite;
  }

  .hamster__limb--fr,
  .hamster__limb--fl {
    top: 2em;
    left: 0.5em;
    width: 1em;
    height: 1.5em;
    clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0 100%, 40% 80%);
    transform-origin: 50% 0;
  }

  .hamster__limb--fr {
    background: linear-gradient(hsl(30, 90%, 80%) 80%, hsl(0, 90%, 75%) 80%);
    transform: rotate(15deg) translateZ(-1px);
    animation: hamsterFRLimb var(--dur) linear infinite;
  }

  .hamster__limb--fl {
    background: linear-gradient(hsl(30, 90%, 90%) 80%, hsl(0, 90%, 85%) 80%);
    transform: rotate(15deg);
    animation: hamsterFLLimb var(--dur) linear infinite;
  }

  .hamster__limb--br,
  .hamster__limb--bl {
    top: 1em;
    left: 2.8em;
    width: 1.5em;
    height: 2.5em;
    border-radius: 0.75em 0.75em 0 0;
    clip-path: polygon(0 0, 100% 0, 100% 30%, 70% 90%, 70% 100%, 30% 100%, 40% 90%, 0 30%);
    transform-origin: 50% 30%;
  }

  .hamster__limb--br {
    background: linear-gradient(hsl(30, 90%, 80%) 90%, hsl(0, 90%, 75%) 90%);
    transform: rotate(-25deg) translateZ(-1px);
    animation: hamsterBRLimb var(--dur) linear infinite;
  }

  .hamster__limb--bl {
    background: linear-gradient(hsl(30, 90%, 90%) 90%, hsl(0, 90%, 85%) 90%);
    transform: rotate(-25deg);
    animation: hamsterBLLimb var(--dur) linear infinite;
  }

  .hamster__tail {
    top: 1.5em;
    right: -0.5em;
    width: 1em;
    height: 0.5em;
    border-radius: 0.25em 50% 50% 0.25em;
    background: hsl(0, 90%, 85%);
    box-shadow: 0 -0.2em 0 hsl(0, 90%, 75%) inset;
    transform: rotate(30deg) translateZ(-1px);
    transform-origin: 0.25em 0.25em;
    animation: hamsterTail var(--dur) linear infinite;
  }

  .spoke {
    background:
      radial-gradient(100% 100% at center, hsl(0, 0%, 60%) 4.8%, hsla(0, 0%, 60%, 0) 5%),
      linear-gradient(
          hsla(0, 0%, 55%, 0) 46.9%,
          hsl(0, 0%, 65%) 47% 52.9%,
          hsla(0, 0%, 65%, 0) 53%
        )
        50% 50% / 99% 99% no-repeat;
    animation: spoke var(--dur) linear infinite;
    animation-direction: ${({ $direction }) => ($direction === "up" ? "reverse" : "normal")};
  }

  .hamster,
  .hamster__head,
  .hamster__ear,
  .hamster__eye,
  .hamster__body,
  .hamster__limb--fr,
  .hamster__limb--fl,
  .hamster__limb--br,
  .hamster__limb--bl,
  .hamster__tail,
  .spoke {
    animation-play-state: ${({ $isRunning }) => ($isRunning ? "running" : "paused")};
  }

  @keyframes hamster {
    from,
    to { transform: rotate(4deg) translate(-0.8em, 1.85em); }
    50% { transform: rotate(0) translate(-0.8em, 1.85em); }
  }

  @keyframes hamsterHead {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(0); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(8deg); }
  }

  @keyframes hamsterEye {
    from,
    90%,
    to { transform: scaleY(1); }
    95% { transform: scaleY(0); }
  }

  @keyframes hamsterEar {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(0); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(12deg); }
  }

  @keyframes hamsterBody {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(0); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(-2deg); }
  }

  @keyframes hamsterFRLimb {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(50deg) translateZ(-1px); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(-30deg) translateZ(-1px); }
  }

  @keyframes hamsterFLLimb {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(-30deg); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(50deg); }
  }

  @keyframes hamsterBRLimb {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(-60deg) translateZ(-1px); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(20deg) translateZ(-1px); }
  }

  @keyframes hamsterBLLimb {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(20deg); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(-60deg); }
  }

  @keyframes hamsterTail {
    from,
    25%,
    50%,
    75%,
    to { transform: rotate(30deg) translateZ(-1px); }
    12.5%,
    37.5%,
    62.5%,
    87.5% { transform: rotate(10deg) translateZ(-1px); }
  }

  @keyframes spoke {
    from { transform: rotate(0); }
    to { transform: rotate(-1turn); }
  }

  @media (prefers-reduced-motion: reduce) {
    .hamster,
    .hamster__head,
    .hamster__ear,
    .hamster__eye,
    .hamster__body,
    .hamster__limb,
    .hamster__tail,
    .spoke {
      animation: none;
    }
  }
`;

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

  return (
    <StyledWrapper $isRunning={isRunning} $direction={scrollDirection}>
      <div
        aria-label="Orange and tan hamster running in a metal wheel"
        role="img"
        className="wheel-and-hamster"
      >
        <div className="wheel" />

        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear" />
              <div className="hamster__eye" />
              <div className="hamster__nose" />
            </div>

            <div className="hamster__limb hamster__limb--fr" />
            <div className="hamster__limb hamster__limb--fl" />
            <div className="hamster__limb hamster__limb--br" />
            <div className="hamster__limb hamster__limb--bl" />
            <div className="hamster__tail" />
          </div>
        </div>

        <div className="spoke" />
      </div>
    </StyledWrapper>
  );
}

export default ScrollHamster;

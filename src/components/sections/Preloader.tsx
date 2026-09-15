import { useEffect, useState } from "react";

function Preloader() {
  const [isLoading, setIsLoading] = useState(() => document.readyState !== "complete");

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false);
      return undefined;
    }

    const finishLoading = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", finishLoading);
    const fallbackTimer = window.setTimeout(finishLoading, 8000);

    return () => {
      window.removeEventListener("load", finishLoading);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return <div id="preloader"></div>;
}

export default Preloader;

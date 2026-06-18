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

    return () => {
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  if (!isLoading) {
    return null;
  }

  return <div id="preloader"></div>;
}

export default Preloader;

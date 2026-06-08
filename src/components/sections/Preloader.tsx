import { useEffect, useState } from "react";
import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

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

  return <RawMarkup html={homeMarkup.preloader} />;
}

export default Preloader;

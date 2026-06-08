import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

function Hero() {
  return <RawMarkup html={homeMarkup.hero} />;
}

export default Hero;

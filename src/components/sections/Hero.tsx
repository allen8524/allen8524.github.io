import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

const heroMarkup = homeMarkup.hero
  .replace('href="#portfolio"', 'href="#/#portfolio"')
  .replace('href="#contact"', 'href="#/#contact"');

function Hero() {
  return <RawMarkup html={heroMarkup} />;
}

export default Hero;

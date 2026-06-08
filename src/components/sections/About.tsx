import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

function About() {
  return <RawMarkup html={homeMarkup.about} />;
}

export default About;

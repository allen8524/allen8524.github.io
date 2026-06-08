import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

function Portfolio() {
  return <RawMarkup html={homeMarkup.portfolio} />;
}

export default Portfolio;

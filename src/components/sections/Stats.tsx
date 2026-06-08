import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

function Stats() {
  return <RawMarkup html={homeMarkup.stats} />;
}

export default Stats;

import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

function Resume() {
  return <RawMarkup html={homeMarkup.resume} />;
}

export default Resume;

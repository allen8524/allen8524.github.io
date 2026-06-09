import { formatMiddleDotSpacing } from "../../utils/typography";

type RawMarkupProps = {
  html: string;
};

function RawMarkup({ html }: RawMarkupProps) {
  return <div dangerouslySetInnerHTML={{ __html: formatMiddleDotSpacing(html) }} />;
}

export default RawMarkup;

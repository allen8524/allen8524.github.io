type RawMarkupProps = {
  html: string;
};

function RawMarkup({ html }: RawMarkupProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default RawMarkup;

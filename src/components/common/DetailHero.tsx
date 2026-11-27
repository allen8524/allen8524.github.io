import { useCallback, useRef, useState } from "react";
import type { ReactNode } from "react";
import ImagePreview, { type PreviewState } from "../portfolio/ImagePreview";

type DetailHeroProps = {
  children: ReactNode;
  image: string;
  imageAlt: string;
  previewAddress: string;
  labelledBy?: string;
  caption?: string;
};

function DetailHero({ children, image, imageAlt, previewAddress, labelledBy, caption }: DetailHeroProps) {
  const thumbnail = useRef<HTMLImageElement>(null);
  const [preview, setPreview] = useState<PreviewState | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <section className="project-detail-hero" aria-labelledby={labelledBy}>
      <span className="detail-hero-blob" aria-hidden="true" />
      <span className="detail-hero-glass" aria-hidden="true" />
      <div className="project-detail-hero__content">{children}</div>

      <figure className="project-detail-hero__image">
        <div className="project-detail-browser-frame">
          <div className="project-detail-browser-bar">
            <span className="project-detail-browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="project-detail-browser-address" title={previewAddress}>{previewAddress}</span>
          </div>
          <button
            type="button"
            className="project-detail-image-button"
            aria-label={`${imageAlt} 이미지 확대`}
            onClick={event => setPreview({
              images: [{ src: image, alt: imageAlt, thumbnail: thumbnail.current }],
              trigger: event.currentTarget,
            })}
          >
            <img ref={thumbnail} src={image} alt={imageAlt} className="img-fluid" />
          </button>
        </div>
        {caption && <figcaption>{caption}</figcaption>}
      </figure>

      {preview && <ImagePreview {...preview} onClose={closePreview} />}
    </section>
  );
}

export default DetailHero;

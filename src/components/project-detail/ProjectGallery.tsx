import { useCallback, useRef, useState } from "react";
import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ImagePreview, { type PreviewImage } from "../portfolio/ImagePreview";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectGalleryProps = { detail: ProjectDetail };
function ProjectGallery({ detail }: ProjectGalleryProps) {
  const [preview, setPreview] = useState<{ images: PreviewImage[]; initialIndex: number } | null>(null);
  const thumbnails = useRef<Array<HTMLImageElement | null>>([]);
  const closePreview = useCallback(() => setPreview(null), []);
  const gallery = detail.gallery?.filter((image) => image.src !== detail.heroImage);

  if (!gallery?.length) return null;

  const openPreview = (initialIndex: number) => {
    setPreview({
      initialIndex,
      images: gallery.map((item, index) => ({
        src: item.src,
        alt: formatMiddleDotSpacing(item.alt),
        thumbnail: thumbnails.current[index] ?? null,
      })),
    });
  };

  return (
    <section className="project-detail-section project-gallery-section">
      <ProjectSectionHeading title="화면 및 산출물" />
      <div className="project-gallery-grid">
        {gallery.map((image, index) => {
          const imageAlt = formatMiddleDotSpacing(image.alt);
          return (
            <figure className="project-gallery-item" key={image.src}>
              <div className="project-gallery-fan">
                <button
                  type="button"
                  className="project-detail-image-button project-gallery-fan__front"
                  aria-label={`${imageAlt} 이미지 확대`}
                  onClick={() => openPreview(index)}
                >
                  <img
                    ref={(element) => { thumbnails.current[index] = element; }}
                    src={image.src}
                    alt={imageAlt}
                    loading="lazy"
                  />
                </button>
              </div>
              <figcaption>{imageAlt}</figcaption>
            </figure>
          );
        })}
      </div>
      {preview && <ImagePreview {...preview} onClose={closePreview} />}
    </section>
  );
}

export default ProjectGallery;

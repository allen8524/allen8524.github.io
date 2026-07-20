import { useState } from "react";
import type { SyntheticEvent } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectGalleryProps = { detail: ProjectDetail };
type GalleryImage = NonNullable<ProjectDetail["gallery"]>[number];
type ImageLayout = "portrait" | "landscape" | "standard";

function getImageLayout(image: HTMLImageElement): ImageLayout {
  if (image.naturalHeight / image.naturalWidth >= 1.25) return "portrait";
  if (image.naturalWidth / image.naturalHeight >= 1.35) return "landscape";
  return "standard";
}

function ProjectGallery({ detail }: ProjectGalleryProps) {
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);
  const [layouts, setLayouts] = useState<Record<string, ImageLayout>>({});

  if (!detail.gallery?.length) return null;

  const handleImageLoad = (src: string, event: SyntheticEvent<HTMLImageElement>) => {
    const layout = getImageLayout(event.currentTarget);
    setLayouts((current) => current[src] === layout ? current : { ...current, [src]: layout });
  };

  return (
    <section className="project-detail-section project-gallery-section">
      <ProjectSectionHeading label="GALLERY" title="프로젝트 화면" />
      <div className="project-gallery-grid">
        {detail.gallery.map((image) => {
          const imageAlt = formatMiddleDotSpacing(image.alt);
          const layout = layouts[image.src] ?? "standard";
          return (
            <figure className={`project-gallery-item project-gallery-item--${layout}`} key={image.src}>
              <button type="button" className="project-detail-image-button" aria-label={`${imageAlt} 이미지 확대`} onClick={() => setPreviewImage(image)}>
                <img src={image.src} alt={imageAlt} loading="lazy" onLoad={(event) => handleImageLoad(image.src, event)} />
                <span className="project-gallery-item__preview"><i className="bi bi-arrows-fullscreen" aria-hidden="true" /> 미리보기</span>
              </button>
              <figcaption>{imageAlt}</figcaption>
            </figure>
          );
        })}
      </div>
      {previewImage && <ImagePreview alt={formatMiddleDotSpacing(previewImage.alt)} image={previewImage.src} onClose={() => setPreviewImage(null)} />}
    </section>
  );
}

export default ProjectGallery;

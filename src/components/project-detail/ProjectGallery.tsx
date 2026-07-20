import { useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectGalleryProps = {
  detail: ProjectDetail;
};

type GalleryImage = NonNullable<ProjectDetail["gallery"]>[number];

function ProjectGallery({ detail }: ProjectGalleryProps) {
  const [previewImage, setPreviewImage] = useState<GalleryImage | null>(null);

  if (!detail.gallery || detail.gallery.length === 0) {
    return null;
  }

  return (
    <section className={`project-detail-section project-gallery-section project-gallery-section--${detail.projectId}`}>
      <ProjectSectionHeading label="GALLERY" title="프로젝트 화면" />
      <div className="project-gallery-grid">
        {detail.gallery.map((image) => {
          const imageAlt = formatMiddleDotSpacing(image.alt);

          return (
            <figure className="project-gallery-item" key={image.src}>
              <button
                type="button"
                className="project-detail-image-button"
                aria-label={`${imageAlt} 이미지 확대`}
                onClick={() => setPreviewImage(image)}
              >
                <img src={image.src} alt={imageAlt} className="img-fluid" loading="lazy" />
                <span className="project-gallery-item__preview"><i className="bi bi-arrows-fullscreen" aria-hidden="true" /> 미리보기</span>
              </button>
              <figcaption>{imageAlt}</figcaption>
            </figure>
          );
        })}
      </div>
      {previewImage && (
        <ImagePreview alt={formatMiddleDotSpacing(previewImage.alt)} image={previewImage.src} onClose={() => setPreviewImage(null)} />
      )}
    </section>
  );
}

export default ProjectGallery;

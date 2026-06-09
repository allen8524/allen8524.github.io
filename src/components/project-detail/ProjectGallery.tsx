import { useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

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
    <section className="project-detail-section">
      <div className="project-detail-section__header">
        <h2>대표 화면</h2>
        <p>기존 상세 페이지에서 사용하던 대표 화면 자료를 공통 상세 페이지 안에 정리했습니다.</p>
      </div>
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

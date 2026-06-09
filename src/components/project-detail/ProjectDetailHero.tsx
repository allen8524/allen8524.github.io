import { useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  const period = detail.period || project.year;
  const heroImage = detail.heroImage || project.previewImage;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const projectTitle = formatMiddleDotSpacing(project.title);

  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__content">
        <p className="project-meta-text">
          {formatMiddleDotSpacing(project.category)} · {period}
        </p>
        <h1>{projectTitle}</h1>
        <p>{formatMiddleDotSpacing(project.description)}</p>
        <div className="project-tags">
          {project.techStack.map((tech) => (
            <span className="tag" key={tech}>
              {formatMiddleDotSpacing(tech)}
            </span>
          ))}
        </div>
      </div>
      <figure className="project-detail-hero__image">
        <button
          type="button"
          className="project-detail-image-button"
          aria-label={`${projectTitle} 이미지 확대`}
          onClick={() => setPreviewImage(heroImage)}
        >
          <img src={heroImage} alt={projectTitle} className="img-fluid" />
        </button>
      </figure>
      {previewImage && <ImagePreview alt={projectTitle} image={previewImage} onClose={() => setPreviewImage(null)} />}
    </section>
  );
}

export default ProjectDetailHero;

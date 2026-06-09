import { useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import type { Project, ProjectDetail } from "../../types/project";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  const period = detail.period || project.year;
  const heroImage = detail.heroImage || project.previewImage;
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__content">
        <p className="project-meta-text">
          {project.category} · {period}
        </p>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.techStack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <figure className="project-detail-hero__image">
        <button
          type="button"
          className="project-detail-image-button"
          aria-label={`${project.title} 이미지 확대`}
          onClick={() => setPreviewImage(heroImage)}
        >
          <img src={heroImage} alt={project.title} className="img-fluid" />
        </button>
      </figure>
      {previewImage && <ImagePreview alt={project.title} image={previewImage} onClose={() => setPreviewImage(null)} />}
    </section>
  );
}

export default ProjectDetailHero;

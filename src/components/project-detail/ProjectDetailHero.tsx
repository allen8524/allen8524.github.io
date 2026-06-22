import { useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import ProjectTechGroups from "./ProjectTechGroups";
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
  const projectMeta = formatMiddleDotSpacing(`${project.category} · ${period}`);
  const previewAddress = `${project.id}.portfolio/detail`;

  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__content">
        <p className="project-meta-text">{projectMeta}</p>
        <h1>{projectTitle}</h1>

        <ProjectTechGroups className="project-detail-tech-groups--hero" project={project} />
      </div>

      <figure className="project-detail-hero__image">
        <div className="project-detail-browser-frame">
          <div className="project-detail-browser-bar" aria-hidden="true">
            <span className="project-detail-browser-dots">
              <span />
              <span />
              <span />
            </span>
            <span className="project-detail-browser-address">{previewAddress}</span>
          </div>
          <button
            type="button"
            className="project-detail-image-button"
            aria-label={`${projectTitle} 이미지 확대`}
            onClick={() => setPreviewImage(heroImage)}
          >
            <img src={heroImage} alt={projectTitle} className="img-fluid" />
          </button>
        </div>
      </figure>

      {previewImage && <ImagePreview alt={projectTitle} image={previewImage} onClose={() => setPreviewImage(null)} />}
    </section>
  );
}

export default ProjectDetailHero;

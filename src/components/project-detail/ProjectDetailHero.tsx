import { useState } from "react";
import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ImagePreview from "../portfolio/ImagePreview";
import ProjectTechGroups from "./ProjectTechGroups";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  const heroImage = detail.heroImage || project.previewImage;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const projectTitle = formatMiddleDotSpacing(project.title);
  const previewAddress = `${project.id}.portfolio/detail`;
  const projectMeta = ["PROJECT", detail.developmentType, project.year]
    .map(formatMiddleDotSpacing)
    .join(" · ");

  return (
    <section className="project-detail-hero">
      <span className="detail-hero-blob" aria-hidden="true" />
      <span className="detail-hero-glass" aria-hidden="true" />

      <div className="project-detail-hero__content">
        <p className="project-detail-eyebrow">{projectMeta}</p>
        <p className="project-detail-hero__category">{formatMiddleDotSpacing(project.category)}</p>
        <h1>{projectTitle}</h1>
        <p className="project-detail-hero__summary">{formatMiddleDotSpacing(project.description)}</p>
        {detail.teamRole && (
          <p className="project-detail-hero__role">
            <span>담당 영역</span>
            {formatMiddleDotSpacing(detail.teamRole)}
          </p>
        )}
        <ProjectTechGroups className="project-detail-tech-groups--hero" project={project} />
        <div className="project-detail-hero__actions">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${projectTitle} GitHub 저장소 새 창에서 열기`}>
            <i className="bi bi-github" aria-hidden="true" /> GitHub <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
          {detail.deploymentUrl && (
            <a href={detail.deploymentUrl} target="_blank" rel="noopener noreferrer" aria-label={`${projectTitle} 배포 사이트 새 창에서 열기`}>
              <i className="bi bi-box-arrow-up-right" aria-hidden="true" /> 배포 사이트 <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

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

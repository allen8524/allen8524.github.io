import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import DetailHero from "../common/DetailHero";
import ProjectTechGroups from "./ProjectTechGroups";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  const heroImage = detail.heroImage || project.previewImage;
  const projectTitle = formatMiddleDotSpacing(project.title);
  const previewAddress = `${project.id}.portfolio/detail`;

  return (
    <DetailHero image={heroImage} imageAlt={projectTitle} previewAddress={previewAddress}>
      <div className="project-detail-meta" aria-label="프로젝트 정보">
        <span><i className="bi bi-person" aria-hidden="true" />{formatMiddleDotSpacing(detail.developmentType)}</span>
        <span><i className="bi bi-calendar3" aria-hidden="true" />{formatMiddleDotSpacing(project.year)}</span>
      </div>
      <h1>{projectTitle}</h1>
      <p className="project-detail-hero__introduction">
        {formatMiddleDotSpacing(detail.introduction)}
      </p>
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
    </DetailHero>
  );
}

export default ProjectDetailHero;

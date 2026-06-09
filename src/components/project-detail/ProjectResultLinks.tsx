import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectResultLinksProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectResultLinks({ detail, project }: ProjectResultLinksProps) {
  const links = [
    { label: "GitHub 저장소", url: project.githubUrl },
    ...(detail.deploymentUrl ? [{ label: "배포 보기", url: detail.deploymentUrl }] : []),
    ...(detail.resultLinks ?? []),
  ];

  return (
    <section className="project-detail-section">
      <div className="project-detail-section__header">
        <h2>확인 가능한 결과물</h2>
      </div>
      <div className="project-detail-links">
        {links.map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" key={`${link.label}-${link.url}`}>
            {formatMiddleDotSpacing(link.label)}
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectResultLinks;

import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectResultLinksProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectResultLinks({ detail, project }: ProjectResultLinksProps) {
  const heroUrls = new Set([project.githubUrl, detail.deploymentUrl].filter(Boolean));
  const links = (detail.resultLinks ?? []).filter((link, index, items) =>
    !heroUrls.has(link.url) && items.findIndex((item) => item.url === link.url) === index,
  );

  if (!links.length) return null;

  return (
    <section className={`project-detail-section project-output-section project-detail-section--secondary${links.length === 1 ? " project-output-section--single" : ""}`}>
      <ProjectSectionHeading label="OUTPUT" title="결과물 및 링크" />
      <div className={`project-detail-links project-detail-links--count-${Math.min(links.length, 3)}`}>
        {links.map((link) => (
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`${formatMiddleDotSpacing(link.label)} 새 창에서 열기`} key={`${link.label}-${link.url}`}>
            <i className="bi bi-link-45deg" aria-hidden="true" /><span>{formatMiddleDotSpacing(link.label)}</span><i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectResultLinks;

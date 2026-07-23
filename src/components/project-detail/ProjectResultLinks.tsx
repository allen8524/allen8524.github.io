import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectResultLinksProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectResultLinks({ detail, project }: ProjectResultLinksProps) {
  const displayedUrls = new Set([
    project.githubUrl,
    detail.deploymentUrl,
    detail.heroImage,
    ...(detail.gallery ?? []).map((image) => image.src),
  ].filter(Boolean));
  const links = (detail.resultLinks ?? []).filter((link, index, items) =>
    !displayedUrls.has(link.url) && items.findIndex((item) => item.url === link.url) === index,
  );

  if (!links.length) return null;

  return (
    <section className={`project-detail-section project-output-section project-detail-section--secondary${links.length === 1 ? " project-output-section--single" : ""}`}>
      <ProjectSectionHeading label="RESOURCES" title="관련 자료" />
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

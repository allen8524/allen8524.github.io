import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import { thumbnailUrl } from "../../utils/thumbnail";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const projectTitle = formatMiddleDotSpacing(project.title);

  return (
    <div className={`col-lg-6 portfolio-item filter-${project.filter}`}>
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={thumbnailUrl(project.image, 960)} className="img-fluid" alt={projectTitle} loading="lazy" decoding="async" />
        </div>

        <div className="portfolio-content">
          <h3 className="portfolio-title">{projectTitle}</h3>
          <div className="portfolio-summary-row">
          {project.descriptionItems && project.descriptionItems.length > 0 ? (
            <ul className="portfolio-description-list">
              {project.descriptionItems.map((item) => (
                <li key={item}>{formatMiddleDotSpacing(item)}</li>
              ))}
            </ul>
          ) : (
            <p className="portfolio-description">{formatMiddleDotSpacing(project.description)}</p>
          )}
          <div className="portfolio-cta">
            <Link to={project.detailUrl} className="portfolio-link primary" aria-label={`상세보기: ${projectTitle}`}>
              상세보기
            </Link>
            <a href={project.githubUrl} className="portfolio-link secondary" target="_blank" rel="noopener noreferrer" aria-label={`GitHub: ${projectTitle}`}>
              GitHub
            </a>
          </div>
          </div>
          <div className="portfolio-proof-list">
            <div className="portfolio-proof-item">
              <p>{project.techStack.map(formatMiddleDotSpacing).join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

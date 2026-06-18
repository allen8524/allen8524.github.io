import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectCardProps = {
  project: Project;
  onPreview: (project: Project) => void;
};

function ProjectCard({ onPreview, project }: ProjectCardProps) {
  const projectTitle = formatMiddleDotSpacing(project.title);

  return (
    <div className={`col-lg-6 portfolio-item filter-${project.filter}`}>
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={project.image} className="img-fluid" alt={projectTitle} loading="lazy" />
          <div className="portfolio-overlay">
            <div className="portfolio-actions">
              <button
                type="button"
                className="action-btn preview-btn"
                title={projectTitle}
                aria-label={`${projectTitle} 이미지 미리보기`}
                onClick={() => onPreview(project)}
              >
                <i className="bi bi-eye" aria-hidden="true" />
              </button>
              <a
                href={project.githubUrl}
                className="action-btn"
                title={`${projectTitle} GitHub`}
                aria-label={`${projectTitle} GitHub 저장소 열기`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github" aria-hidden="true" />
              </a>
              <Link
                to={project.detailUrl}
                className="action-btn details-btn"
                title={`${projectTitle} 상세 보기`}
                aria-label={`${projectTitle} 상세 페이지 보기`}
              >
                <i className="bi bi-arrow-up-right" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-meta">
            <span className="portfolio-category">{formatMiddleDotSpacing(project.category)}</span>
            <span className="portfolio-year">{project.year}</span>
          </div>
          <h3 className="portfolio-title">{projectTitle}</h3>
          {project.descriptionItems && project.descriptionItems.length > 0 ? (
            <ul className="portfolio-description-list">
              {project.descriptionItems.map((item) => (
                <li key={item}>{formatMiddleDotSpacing(item)}</li>
              ))}
            </ul>
          ) : (
            <p className="portfolio-description">{formatMiddleDotSpacing(project.description)}</p>
          )}
          <div className="portfolio-proof-list">
            <div className="portfolio-proof-item">
              <span className="portfolio-proof-label">사용 기술</span>
              <p>{project.techStack.map(formatMiddleDotSpacing).join(" · ")}</p>
            </div>
          </div>
          <div className="portfolio-cta">
            <Link to={project.detailUrl} className="portfolio-link primary">
              상세보기
            </Link>
            <a href={project.githubUrl} className="portfolio-link secondary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

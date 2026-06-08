import { Link } from "react-router-dom";
import type { Project } from "../../types/project";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className={`col-lg-6 portfolio-item filter-${project.filter}`}>
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img src={project.image} className="img-fluid" alt={project.title} loading="lazy" />
          <div className="portfolio-overlay">
            <div className="portfolio-actions">
              <a href={project.previewImage} className="glightbox action-btn preview-btn" title={project.title}>
                <i className="bi bi-eye" />
              </a>
              <a
                href={project.githubUrl}
                className="action-btn"
                title={`${project.title} GitHub`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github" />
              </a>
              <Link to={project.detailUrl} className="action-btn details-btn" title={`${project.title} 상세 보기`}>
                <i className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="portfolio-content">
          <div className="portfolio-meta">
            <span className="portfolio-category">{project.category}</span>
            <span className="portfolio-year">{project.year}</span>
          </div>
          <h3 className="portfolio-title">{project.title}</h3>
          <p className="portfolio-description">{project.description}</p>
          <div className="portfolio-proof-list">
            <div className="portfolio-proof-item">
              <span className="portfolio-proof-label">사용 기술</span>
              <p>{project.techStack.join(" · ")}</p>
            </div>
            <div className="portfolio-proof-item">
              <span className="portfolio-proof-label">핵심 기능</span>
              <p>{project.features.join(" / ")}</p>
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

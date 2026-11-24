import { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import { thumbnailUrl } from "../../utils/thumbnail";
import ImagePreview, { type PreviewImage } from "./ImagePreview";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const projectTitle = formatMiddleDotSpacing(project.title);
  const thumbnail = useRef<HTMLImageElement>(null);
  const [preview, setPreview] = useState<PreviewImage[] | null>(null);
  const closePreview = useCallback(() => setPreview(null), []);

  return (
    <div className={`col-lg-6 portfolio-item filter-${project.filter}`}>
      <div className="portfolio-card">
        <div className="portfolio-image">
          <img ref={thumbnail} src={thumbnailUrl(project.image, 960)} className="img-fluid" alt={projectTitle} loading="lazy" decoding="async" />
          <button
            type="button"
            className="portfolio-preview-button"
            aria-label={`${projectTitle} 이미지 확대`}
            onClick={() => setPreview([{ src: project.image, alt: projectTitle, thumbnail: thumbnail.current }])}
          >
            <i className="bi bi-arrows-angle-expand" aria-hidden="true" />
          </button>
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
      {preview && <ImagePreview images={preview} onClose={closePreview} />}
    </div>
  );
}

export default ProjectCard;

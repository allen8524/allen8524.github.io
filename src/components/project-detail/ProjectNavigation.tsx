import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectNavigationProps = { previousProject: Project; nextProject: Project };
type NavigationThumbnailProps = { src: string; alt: string };

function NavigationThumbnail({ alt, src }: NavigationThumbnailProps) {
  return (
    <span className="nav-thumbnail">
      <span className="project-nav-thumb-effect">
        <img className="project-nav-thumb-effect__image" src={src} alt={alt} />
        <span className="project-nav-thumb-effect__overlay" aria-hidden="true" />
        {[1, 2, 3].map((leaf) => (
          <span
            key={leaf}
            className={`project-nav-thumb-effect__leaf project-nav-thumb-effect__leaf--${leaf}`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 32" aria-hidden="true" focusable="false">
              <path fill="currentColor" d="M12 31C10 23 3 20 2 12 1 5 6 1 12 0c6 1 11 5 10 12-1 8-8 11-10 19Zm0-5c1-7 1-14 0-21-1 7-1 14 0 21Z" />
            </svg>
          </span>
        ))}
      </span>
    </span>
  );
}

function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  const previousThumbnail = previousProject.previewImage || previousProject.image;
  const nextThumbnail = nextProject.previewImage || nextProject.image;

  return (
    <section className="project-detail-section project-explore-section">
      <header className="project-explore-heading">
        <div><p>EXPLORE</p><h2>다른 프로젝트</h2></div>
        <Link to="/#portfolio" className="all-projects"><i className="bi bi-grid-3x3-gap" aria-hidden="true" /><span>프로젝트 전체 보기</span></Link>
      </header>
      <nav className="project-nav" aria-label="프로젝트 상세 이동">
        <Link to={previousProject.detailUrl} className="nav-link prev-project" aria-label={`이전 프로젝트: ${formatMiddleDotSpacing(previousProject.title)}`}>
          <span className="nav-body">
            <span className="nav-direction"><i className="bi bi-arrow-left" aria-hidden="true" /> 이전 프로젝트</span>
            <span className="nav-title">{formatMiddleDotSpacing(previousProject.title)}</span>
            <span className="nav-meta">{formatMiddleDotSpacing(`${previousProject.category} · ${previousProject.year}`)}</span>
          </span>
          {previousThumbnail && (
            <NavigationThumbnail src={previousThumbnail} alt={`${formatMiddleDotSpacing(previousProject.title)} 썸네일`} />
          )}
        </Link>
        <Link to={nextProject.detailUrl} className="nav-link next-project" aria-label={`다음 프로젝트: ${formatMiddleDotSpacing(nextProject.title)}`}>
          <span className="nav-body">
            <span className="nav-direction">다음 프로젝트 <i className="bi bi-arrow-right" aria-hidden="true" /></span>
            <span className="nav-title">{formatMiddleDotSpacing(nextProject.title)}</span>
            <span className="nav-meta">{formatMiddleDotSpacing(`${nextProject.category} · ${nextProject.year}`)}</span>
          </span>
          {nextThumbnail && (
            <NavigationThumbnail src={nextThumbnail} alt={`${formatMiddleDotSpacing(nextProject.title)} 썸네일`} />
          )}
        </Link>
      </nav>
    </section>
  );
}

export default ProjectNavigation;

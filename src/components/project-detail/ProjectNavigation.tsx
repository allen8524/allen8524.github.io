import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectNavigationProps = { previousProject: Project; nextProject: Project };

function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  return (
    <section className="project-detail-section project-explore-section">
      <header className="project-explore-heading">
        <div><p>EXPLORE</p><h2>다른 프로젝트</h2></div>
        <Link to="/#portfolio" className="all-projects"><i className="bi bi-grid-3x3-gap" aria-hidden="true" /><span>프로젝트 전체 보기</span></Link>
      </header>
      <nav className="project-nav" aria-label="프로젝트 상세 이동">
        <Link to={previousProject.detailUrl} className="nav-link prev-project" aria-label={`이전 프로젝트: ${formatMiddleDotSpacing(previousProject.title)}`}>
          <span className="nav-direction"><i className="bi bi-arrow-left" aria-hidden="true" /> 이전 프로젝트</span>
          <span className="nav-title">{formatMiddleDotSpacing(previousProject.title)}</span>
        </Link>
        <Link to={nextProject.detailUrl} className="nav-link next-project" aria-label={`다음 프로젝트: ${formatMiddleDotSpacing(nextProject.title)}`}>
          <span className="nav-direction">다음 프로젝트 <i className="bi bi-arrow-right" aria-hidden="true" /></span>
          <span className="nav-title">{formatMiddleDotSpacing(nextProject.title)}</span>
        </Link>
      </nav>
    </section>
  );
}

export default ProjectNavigation;

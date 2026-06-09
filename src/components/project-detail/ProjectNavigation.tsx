import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectNavigationProps = {
  previousProject: Project;
  nextProject: Project;
};

function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  return (
    <nav className="project-nav" aria-label="프로젝트 상세 이동">
      <div className="nav-wrapper">
        <Link to={previousProject.detailUrl} className="nav-link prev-project">
          <div className="nav-content">
            <span className="nav-direction">← 이전 프로젝트</span>
            <span className="nav-title">{formatMiddleDotSpacing(previousProject.title)}</span>
          </div>
        </Link>
        <Link to="/#portfolio" className="nav-link all-projects">
          <i className="bi bi-grid-3x3-gap" />
          <span>전체 프로젝트</span>
        </Link>
        <Link to={nextProject.detailUrl} className="nav-link next-project">
          <div className="nav-content">
            <span className="nav-direction">다음 프로젝트 →</span>
            <span className="nav-title">{formatMiddleDotSpacing(nextProject.title)}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default ProjectNavigation;

import { Link } from "react-router-dom";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectNavigationProps = {
  previousProject: Project;
  nextProject: Project;
};

function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
  return (
    <section className="project-detail-section project-explore-section">
      <ProjectSectionHeading label="EXPLORE" title="다른 프로젝트" />
      <nav className="project-nav" aria-label="프로젝트 상세 이동">
      <div className="nav-wrapper">
        <Link to={previousProject.detailUrl} className="nav-link prev-project">
          <div className="nav-content">
            <span className="nav-direction"><i className="bi bi-arrow-left" aria-hidden="true" /> 이전 프로젝트</span>
            <span className="nav-title">{formatMiddleDotSpacing(previousProject.title)}</span>
          </div>
        </Link>
        <Link to="/#portfolio" className="nav-link all-projects">
          <i className="bi bi-grid-3x3-gap" aria-hidden="true" /><span>프로젝트 전체 보기</span>
        </Link>
        <Link to={nextProject.detailUrl} className="nav-link next-project">
          <div className="nav-content">
            <span className="nav-direction">다음 프로젝트 <i className="bi bi-arrow-right" aria-hidden="true" /></span>
            <span className="nav-title">{formatMiddleDotSpacing(nextProject.title)}</span>
          </div>
        </Link>
      </div>
      </nav>
    </section>
  );
}

export default ProjectNavigation;

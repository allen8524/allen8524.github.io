import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectTroubleshooting({ detail }: { detail: ProjectDetail }) {
  if (!detail.troubleshooting.length) return null;

  return (
    <section className="project-detail-section project-troubleshooting-section project-detail-section--secondary">
      <ProjectSectionHeading label="TROUBLESHOOTING" title="트러블슈팅" />
      <div className="project-troubleshooting-header">
        <span>번호</span>
        <span>문제 상황</span>
        <span>원인 및 해결</span>
      </div>
      <ol className="project-troubleshooting-list">
        {detail.troubleshooting.map((item, index) => (
          <li key={item.title}>
            <span className="project-troubleshooting-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-troubleshooting-problem">
              <span className="project-troubleshooting-mobile-label">문제 상황</span>
              <h3>{format(item.title)}</h3>
            </div>
            <div className="project-troubleshooting-solution">
              <span className="project-troubleshooting-mobile-label">원인 및 해결</span>
              <div className="project-troubleshooting-solution__content">
                <i className="bi bi-check2" aria-hidden="true" />
                <p>
                  <strong>원인</strong> {format(item.cause)}
                  <br />
                  <strong>해결</strong> {format(item.solution)}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectTroubleshooting;

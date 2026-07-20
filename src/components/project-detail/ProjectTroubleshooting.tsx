import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

function ProjectTroubleshooting({ detail }: { detail: ProjectDetail }) {
  if (!detail.troubleshooting.length) return null;
  return (
    <section className="project-detail-section project-troubleshooting-section project-detail-section--secondary">
      <ProjectSectionHeading label="TROUBLESHOOTING" title="트러블슈팅" />
      <div className="project-troubleshooting-header"><span>번호</span><span>문제</span><span>해결 방법</span></div>
      <ol className="project-troubleshooting-list">
        {detail.troubleshooting.map((item, index) => (
          <li key={item.title}>
            <span className="project-troubleshooting-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="project-troubleshooting-problem"><span className="project-troubleshooting-mobile-label">문제</span><h3>{formatMiddleDotSpacing(item.title)}</h3></div>
            <div className="project-troubleshooting-solution"><span className="project-troubleshooting-mobile-label">해결</span><p>{formatMiddleDotSpacing(item.description)}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}
export default ProjectTroubleshooting;

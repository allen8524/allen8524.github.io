import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

function ProjectTroubleshooting({ detail }: { detail: ProjectDetail }) {
  if (!detail.troubleshooting.length) return null;
  return (
    <section className="project-detail-section project-troubleshooting-section">
      <ProjectSectionHeading label="TROUBLESHOOTING" title="트러블슈팅" />
      <ol className="project-troubleshooting-list">
        {detail.troubleshooting.map((item, index) => <li key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{formatMiddleDotSpacing(item.title)}</h3><p>{formatMiddleDotSpacing(item.description)}</p></li>)}
      </ol>
    </section>
  );
}
export default ProjectTroubleshooting;

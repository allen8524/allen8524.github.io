import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectTroubleshooting({ detail }: { detail: ProjectDetail }) {
  if (!detail.troubleshooting.length) return null;

  return (
    <section className="project-detail-section project-troubleshooting-section">
      <ProjectSectionHeading title="트러블슈팅" />
      <ol className="project-troubleshooting-list">
        {detail.troubleshooting.map((item) => (
          <li key={item.title}>
            <h3>{format(item.title)}</h3>
            <dl className="project-troubleshooting-details">
              <div>
                <dt><i className="bi bi-exclamation-circle" aria-hidden="true" /> 원인</dt>
                <dd>{format(item.cause)}</dd>
              </div>
              <div>
                <dt><i className="bi bi-check-circle" aria-hidden="true" /> 해결</dt>
                <dd>{format(item.solution)}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectTroubleshooting;

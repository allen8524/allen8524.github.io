import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectOverviewProps = {
  detail: ProjectDetail;
};

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectOverview({ detail }: ProjectOverviewProps) {
  const primaryFlow = detail.dataFlow?.find((flow) => flow.includes("→"));
  const flowSteps = primaryFlow
    ? primaryFlow.split("→").map((step) => step.trim()).filter(Boolean).slice(0, 5)
    : [];
  const flowCountClass = `project-flow-list--count-${flowSteps.length}`;

  if (!flowSteps.length) return null;

  return (
    <section className="project-detail-section project-flow-section project-detail-section--secondary">
      <ProjectSectionHeading label="FLOW" title="핵심 흐름" />
      <ol className={`project-flow-list ${flowCountClass}`}>
        {flowSteps.map((step, index) => (
          <li key={`${index}-${step}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{format(step)}</strong>
            {index < flowSteps.length - 1 && <i className="bi bi-arrow-right" aria-hidden="true" />}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectOverview;

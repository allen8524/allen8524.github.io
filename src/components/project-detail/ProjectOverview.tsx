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

  if (!flowSteps.length) return null;

  return (
    <section className="project-detail-section project-flow-section">
      <ProjectSectionHeading title="핵심 흐름" />
      <ol className="project-flow-list" role="list">
        {flowSteps.map((step, index) => (
          <li key={`${index}-${step}`}>
            {index > 0 && <span aria-hidden="true">→</span>}
            {format(step)}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default ProjectOverview;

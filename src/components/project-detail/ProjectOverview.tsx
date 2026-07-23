import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectOverviewProps = {
  detail: ProjectDetail;
  project: Project;
};

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectOverview({ detail, project }: ProjectOverviewProps) {
  const primaryFlow = detail.dataFlow?.find((flow) => flow.includes("→"));
  const flowSteps = primaryFlow
    ? primaryFlow.split("→").map((step) => step.trim()).filter(Boolean)
    : [];
  const flowCountClass = `project-flow-list--count-${Math.min(flowSteps.length, 7)}`;
  const isTeamProject = detail.developmentType.includes("팀");

  return (
    <>
      <section className="project-detail-section project-summary-section">
        <ProjectSectionHeading label="INFO" title="프로젝트 정보" />
        <div className="project-summary-panel" aria-label="프로젝트 기본 정보">
          <div className="project-summary-panel__facts">
            <div className="project-summary-fact">
              <span>개발 형태</span>
              <strong>{format(detail.developmentType)}</strong>
            </div>
            <div className="project-summary-fact">
              <span>개발 기간</span>
              <strong>{format(project.year)}</strong>
            </div>
            {isTeamProject && detail.teamRole && (
              <div className="project-summary-fact project-summary-fact--full">
                <span>담당 영역</span>
                <strong>{format(detail.teamRole)}</strong>
              </div>
            )}
          </div>
        </div>
      </section>

      {flowSteps.length > 0 && (
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
      )}
    </>
  );
}

export default ProjectOverview;

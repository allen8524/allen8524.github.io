import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectOverviewProps = {
  detail: ProjectDetail;
  project: Project;
};

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectOverview({ detail, project }: ProjectOverviewProps) {
  const flowSteps = (detail.dataFlow ?? []).flatMap((flow, flowIndex) => {
    if (!flow.includes("→")) return [];
    const steps = flow.split("→").map((step) => step.trim()).filter(Boolean);
    return steps.map((step, stepIndex) => ({
      id: `${flowIndex}-${stepIndex}-${step}`,
      step,
      hasNext: stepIndex < steps.length - 1,
    }));
  });
  const auxiliaryFlows = (detail.dataFlow ?? []).filter((flow) => !flow.includes("→"));
  const flowCountClass = `project-flow-list--count-${Math.min(flowSteps.length, 7)}`;

  return (
    <>
      <section className="project-detail-section project-summary-section">
        <ProjectSectionHeading label="SUMMARY" title="프로젝트 정보" />
        <div className="project-summary-panel" aria-label="프로젝트 요약 정보">
          <div className="project-summary-panel__facts">
            <div className="project-summary-fact"><span>개발 형태</span><strong>{format(detail.developmentType)}</strong></div>
            <div className="project-summary-fact"><span>개발 기간</span><strong>{format(project.year)}</strong></div>
            <div className="project-summary-fact project-summary-fact--full"><span>담당 역할</span><strong>{format(detail.role)}</strong></div>
            <div className="project-summary-fact project-summary-fact--full"><span>기여도</span><strong>{format(detail.contribution)}</strong></div>
          </div>
          <div className="project-summary-panel__results">
            <h3>핵심 성과</h3>
            <ul>{detail.keyAchievements.map((item) => <li key={item}>{format(item)}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="project-detail-section project-purpose-section project-detail-section--secondary">
        <ProjectSectionHeading label="OVERVIEW" title="프로젝트 목적" />
        <ol className="project-open-list">
          {detail.purpose.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{format(item)}</p></li>)}
        </ol>
      </section>

      {detail.responsibilities && detail.responsibilities.length > 0 && (
        <section className="project-detail-section project-responsibility-section">
          <ProjectSectionHeading label="RESPONSIBILITY" title="내가 담당한 부분" />
          <ol className="project-responsibility-list">
            {detail.responsibilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{format(item)}</p></li>)}
          </ol>
        </section>
      )}

      {detail.dataFlow && detail.dataFlow.length > 0 && (
        <section className="project-detail-section project-flow-section project-detail-section--secondary">
          <ProjectSectionHeading label="FLOW" title="처리 흐름" />
          {flowSteps.length > 0 && <ol className={`project-flow-list ${flowCountClass}`}>{flowSteps.map((item, index) => <li key={item.id}><span>{String(index + 1).padStart(2, "0")}</span><strong>{format(item.step)}</strong>{item.hasNext && <i className="bi bi-arrow-right" aria-hidden="true" />}</li>)}</ol>}
          {auxiliaryFlows.length > 0 && <div className="project-flow-details"><h3>세부 처리 기준</h3><ul className="project-flow-notes">{auxiliaryFlows.map((flow) => <li key={flow}>{format(flow)}</li>)}</ul></div>}
        </section>
      )}
    </>
  );
}

export default ProjectOverview;

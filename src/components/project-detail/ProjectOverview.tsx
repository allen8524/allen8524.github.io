import type { Project, ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectOverviewProps = { project: Project; detail: ProjectDetail };

const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectOverview({ detail, project }: ProjectOverviewProps) {
  return (
    <>
      <section className="project-summary-panel" aria-label="프로젝트 요약 정보">
        <div className="project-summary-panel__facts">
          {[
            ["개발 형태", detail.developmentType],
            ["개발 기간", detail.period],
            ["담당 역할", detail.role],
            ["기여도", detail.contribution],
          ].map(([label, value]) => (
            <div className="project-summary-fact" key={label}>
              <span>{label}</span><strong>{format(value)}</strong>
            </div>
          ))}
        </div>
        <div className="project-summary-panel__results">
          <h2>핵심 성과</h2>
          <ul>{detail.keyAchievements.map((item) => <li key={item}>{format(item)}</li>)}</ul>
          <div className="project-summary-panel__links">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${format(project.title)} GitHub 저장소 새 창에서 열기`}><i className="bi bi-github" aria-hidden="true" /> GitHub</a>
            {detail.deploymentUrl && <a href={detail.deploymentUrl} target="_blank" rel="noopener noreferrer" aria-label={`${format(project.title)} 배포 사이트 새 창에서 열기`}><i className="bi bi-box-arrow-up-right" aria-hidden="true" /> 배포 링크</a>}
          </div>
        </div>
      </section>

      <section className="project-detail-section project-purpose-section">
        <ProjectSectionHeading label="OVERVIEW" title="프로젝트 목적" />
        <ol className="project-open-list">
          {detail.purpose.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{format(item)}</p></li>)}
        </ol>
        <div className="project-feature-scope">
          <h3>프로젝트 전체 기능</h3>
          <ul>{project.features.map((feature) => <li key={feature}>{format(feature)}</li>)}</ul>
        </div>
      </section>

      {detail.responsibilities && detail.responsibilities.length > 0 && (
        <section className="project-detail-section project-responsibility-section">
          <ProjectSectionHeading label="RESPONSIBILITY" title="내가 담당한 부분" />
          <ol className={`project-responsibility-list ${detail.responsibilities.length >= 4 ? "is-grid" : ""}`}>
            {detail.responsibilities.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{format(item)}</p></li>)}
          </ol>
        </section>
      )}

      {detail.dataFlow && detail.dataFlow.length > 0 && (
        <section className="project-detail-section project-flow-section">
          <ProjectSectionHeading label="FLOW" title="처리 흐름" />
          <div className="project-flow-groups">
            {detail.dataFlow.map((flow) => {
              const steps = flow.includes("→") ? flow.split("→").map((step) => step.trim()).filter(Boolean) : [flow];
              return <ol className="project-flow-list" key={flow}>{steps.map((step, index) => <li key={`${step}-${index}`}><span>{String(index + 1).padStart(2, "0")}</span><strong>{format(step)}</strong>{index < steps.length - 1 && <i className="bi bi-arrow-right" aria-hidden="true" />}</li>)}</ol>;
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default ProjectOverview;

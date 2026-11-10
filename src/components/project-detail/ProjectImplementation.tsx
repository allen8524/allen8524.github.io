import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectImplementationProps = { detail: ProjectDetail };
const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectImplementation({ detail }: ProjectImplementationProps) {
  return (
    <>
      <section className="project-detail-section project-implementation-section">
        <ProjectSectionHeading title="핵심 설계" />
        <div className="project-implementation-grid">
          {detail.implementationPoints.map((point, index) => (
            <article className={`project-implementation-card${index === 0 ? " project-implementation-card--featured" : ""}`} key={point.title}>
              <h3>{format(point.title)}</h3>
              {point.problem && <p><strong>문제</strong> {format(point.problem)}</p>}
              <p>
                {point.problem && <><strong>설계</strong>{" "}</>}
                {format(point.description)}
              </p>
              {point.verification && <p><strong>확인 방법</strong> {format(point.verification)}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail-section project-results-section">
        <ProjectSectionHeading title="주요 결과" />
        <div className={`project-results-grid${detail.results.length === 2 ? " project-results-grid--pair" : ""}`}>
          {detail.results.map((result) => (
            <article className="project-result-card" key={result.label}>
              <span>{format(result.label)}</span>
              <strong>{format(result.value)}</strong>
              {result.description && <p>{format(result.description)}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectImplementation;

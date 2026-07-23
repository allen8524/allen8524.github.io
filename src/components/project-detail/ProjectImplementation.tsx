import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

type ProjectImplementationProps = { detail: ProjectDetail };
const format = (value: string) => formatMiddleDotSpacing(value);

function ProjectImplementation({ detail }: ProjectImplementationProps) {
  const designPoints = detail.implementationPoints.slice(0, 3);

  return (
    <>
      {designPoints.length > 0 && (
        <section className="project-detail-section project-implementation-section">
          <ProjectSectionHeading label="DESIGN" title="핵심 설계" />
          <div className={`project-implementation-grid project-implementation-grid--count-${designPoints.length}`}>
            {designPoints.map((point, index) => (
              <article className="project-implementation-card" key={point.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{format(point.title)}</h3>
                <p>{format(point.description)}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {detail.analysisResults && detail.analysisResults.length > 0 && (
        <section className="project-detail-section project-results-section">
          <ProjectSectionHeading label="RESULTS" title="주요 결과" />
          <div className="project-results-grid">
            {detail.analysisResults.map((result) => (
              <article className="project-result-card" key={result.label}>
                <span>{format(result.label)}</span>
                <strong>{format(result.value)}</strong>
                {result.description && <p>{format(result.description)}</p>}
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default ProjectImplementation;

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
        <div className="project-design-list">
          {detail.implementationPoints.map((point) => (
            <article className="project-design-entry" key={point.title}>
              <h3>{format(point.title)}</h3>
              <p>{format(point.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="project-detail-section project-results-section">
        <ProjectSectionHeading title="주요 결과" />
        <dl className="project-results-list">
          {detail.results.map((result) => (
            <div className="project-result-entry" key={result.label}>
              <dt>{format(result.label)}</dt>
              <dd>
                <strong>{format(result.value)}</strong>
                {result.description && <p>{format(result.description)}</p>}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

export default ProjectImplementation;

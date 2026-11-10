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
        <ul className="project-results-list" role="list">
          {detail.results.map((result) => (
            <li className="project-result-entry" key={result.value}>
              <strong>{format(result.value)}</strong>
              {result.description && <p>{format(result.description)}</p>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default ProjectImplementation;

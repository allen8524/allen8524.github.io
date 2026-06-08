import type { ProjectDetail } from "../../types/project";

type ProjectImplementationProps = {
  detail: ProjectDetail;
};

function ProjectImplementation({ detail }: ProjectImplementationProps) {
  return (
    <section className="project-detail-section">
      <div className="project-detail-section__header">
        <h2>구현 방식</h2>
      </div>

      <div className="project-detail-timeline">
        {detail.implementationPoints.map((point, index) => (
          <article className="project-detail-step" key={point.title}>
            <span className="project-detail-step__number" aria-hidden="true">
              <span className="project-detail-step__number-text">{String(index + 1).padStart(2, "0")}</span>
            </span>
            <div>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </article>
        ))}
      </div>

      {detail.analysisResults && detail.analysisResults.length > 0 && (
        <div className="project-detail-metric-grid">
          {detail.analysisResults.map((result) => (
            <article className="project-detail-metric" key={result.label}>
              <span>{result.label}</span>
              <strong>{result.value}</strong>
              {result.description && <p>{result.description}</p>}
            </article>
          ))}
        </div>
      )}

      {detail.learned && detail.learned.length > 0 && (
        <div className="project-detail-list-block">
          <h3>배운 점</h3>
          <ul className="project-detail-check-list">
            {detail.learned.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {detail.limitations && detail.limitations.length > 0 && (
        <div className="project-detail-list-block">
          <h3>한계와 개선 방향</h3>
          <ul className="project-detail-check-list">
            {detail.limitations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ProjectImplementation;

import type { ProjectDetail } from "../../types/project";

type ProjectTroubleshootingProps = {
  detail: ProjectDetail;
};

function ProjectTroubleshooting({ detail }: ProjectTroubleshootingProps) {
  if (detail.troubleshooting.length === 0) {
    return null;
  }

  return (
    <section className="project-detail-section">
      <div className="project-detail-section__header">
        <p className="project-detail-eyebrow">문제 해결</p>
        <h2>트러블슈팅</h2>
      </div>
      <div className="project-detail-note-grid">
        {detail.troubleshooting.map((item) => (
          <article className="detail-note" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectTroubleshooting;

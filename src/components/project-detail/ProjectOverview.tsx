import type { Project, ProjectDetail } from "../../types/project";

type ProjectOverviewProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectOverview({ detail, project }: ProjectOverviewProps) {
  return (
    <section className="project-detail-section project-overview">
      <div className="project-detail-section__main">
        <p className="project-detail-eyebrow">프로젝트 개요</p>
        <h2>개발 목적과 역할</h2>
        {detail.purpose.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <aside className="project-specs">
        <div className="spec-item">
          <h5>프로젝트명</h5>
          <p>{project.title}</p>
        </div>
        <div className="spec-item">
          <h5>개발 기간</h5>
          <p>{detail.period}</p>
        </div>
        <div className="spec-item">
          <h5>주요 역할</h5>
          <p>{detail.role}</p>
        </div>
        <div className="spec-item">
          <h5>GitHub</h5>
          <p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              저장소 보기
            </a>
          </p>
        </div>
        {detail.deploymentUrl && (
          <div className="spec-item">
            <h5>배포 링크</h5>
            <p>
              <a href={detail.deploymentUrl} target="_blank" rel="noopener noreferrer">
                배포 보기
              </a>
            </p>
          </div>
        )}
      </aside>

      {detail.responsibilities && detail.responsibilities.length > 0 && (
        <div className="project-detail-list-block">
          <h3>내가 구현한 부분</h3>
          <ul className="project-detail-check-list">
            {detail.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {detail.dataFlow && detail.dataFlow.length > 0 && (
        <div className="project-detail-list-block">
          <h3>데이터 흐름</h3>
          <ul className="project-detail-flow-list">
            {detail.dataFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default ProjectOverview;

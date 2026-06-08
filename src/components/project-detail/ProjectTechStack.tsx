import type { Project } from "../../types/project";

type ProjectTechStackProps = {
  project: Project;
};

function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="project-detail-section project-tech-feature-grid">
      <div>
        <p className="project-detail-eyebrow">사용 기술</p>
        <h2>기술 스택</h2>
        <div className="project-detail-chip-list">
          {project.techStack.map((tech) => (
            <span className="project-detail-chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="project-detail-eyebrow">핵심 기능</p>
        <h2>주요 기능</h2>
        <p>{project.summary}</p>
        <div className="project-detail-chip-list">
          {project.features.map((feature) => (
            <span className="project-detail-chip project-detail-chip--muted" key={feature}>
              {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectTechStack;

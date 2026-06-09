import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectTechGroups from "./ProjectTechGroups";

type ProjectTechStackProps = {
  project: Project;
};

function ProjectTechStack({ project }: ProjectTechStackProps) {
  return (
    <section className="project-detail-section project-tech-feature-grid">
      <div>
        <h2>기술 스택</h2>
        <ProjectTechGroups className="project-detail-tech-groups--section" project={project} />
      </div>

      <div>
        <h2>주요 기능</h2>
        <p>{formatMiddleDotSpacing(project.summary)}</p>
        <div className="project-detail-chip-list">
          {project.features.map((feature) => (
            <span className="project-detail-chip project-detail-chip--muted" key={feature}>
              {formatMiddleDotSpacing(feature)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectTechStack;

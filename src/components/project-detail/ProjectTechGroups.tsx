import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectTechGroupsProps = {
  project: Project;
  className?: string;
};

function ProjectTechGroups({ className = "", project }: ProjectTechGroupsProps) {
  const rootClassName = [
    "project-detail-tech-groups",
    "project-detail-tech-groups--flat",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} aria-label="기술 스택">
      <div className="project-detail-tech-row">
        <div className="project-detail-tech-chip-list">
          {project.techStack.map((tech) => (
            <span className="project-detail-tech-chip project-detail-tech-chip--sub" key={tech}>
              {formatMiddleDotSpacing(tech)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectTechGroups;

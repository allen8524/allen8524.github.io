import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type TechGroup = {
  label: "Core" | "Sub";
  tone: "core" | "sub";
  techs: string[];
};

type ProjectTechGroupsProps = {
  project: Project;
  className?: string;
};

const CINEFLOW_TECH_GROUPS: TechGroup[] = [
  {
    label: "Core",
    tone: "core",
    techs: ["Spring Boot", "JPA", "Spring Security", "MySQL"],
  },
  {
    label: "Sub",
    tone: "sub",
    techs: ["Java", "Thymeleaf", "Flyway", "H2"],
  },
];

function getProjectTechGroups(project: Project): TechGroup[] | null {
  if (project.id !== "cineflow") {
    return null;
  }

  const techSet = new Set(project.techStack);
  const groups = CINEFLOW_TECH_GROUPS.map((group) => ({
    ...group,
    techs: group.techs.filter((tech) => techSet.has(tech)),
  })).filter((group) => group.techs.length > 0);

  return groups.length > 0 ? groups : null;
}

function ProjectTechGroups({ className = "", project }: ProjectTechGroupsProps) {
  const groups = getProjectTechGroups(project);
  const rootClassName = ["project-detail-tech-groups", className].filter(Boolean).join(" ");

  if (!groups) {
    return (
      <div className={`${rootClassName} project-detail-tech-groups--flat`} aria-label="기술 스택">
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

  return (
    <div className={rootClassName} aria-label="기술 스택">
      {groups.map((group) => (
        <div className="project-detail-tech-row" key={group.label}>
          <span className="project-detail-tech-label">{group.label}</span>
          <div className="project-detail-tech-chip-list">
            {group.techs.map((tech) => (
              <span className={`project-detail-tech-chip project-detail-tech-chip--${group.tone}`} key={tech}>
                {formatMiddleDotSpacing(tech)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectTechGroups;

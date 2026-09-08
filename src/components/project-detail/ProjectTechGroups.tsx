import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

type ProjectTechGroupsProps = {
  project: Project;
  className?: string;
};

const techIcons: Record<string, string> = {
  Java: "bi-filetype-java",
  "Spring Boot": "bi-leaf",
  Thymeleaf: "bi-filetype-html",
  JPA: "bi-diagram-3",
  "Spring Security": "bi-shield-lock",
  Flyway: "bi-arrow-up-right-circle",
  MySQL: "bi-database",
  H2: "bi-database-check",
  Laravel: "bi-boxes",
  Bootstrap: "bi-bootstrap-fill",
  PHP: "bi-filetype-php",
  R: "bi-bar-chart-line",
  dplyr: "bi-table",
  ggplot2: "bi-graph-up",
  다중선형회귀: "bi-graph-up-arrow",
  "로지스틱 회귀": "bi-bezier2",
  "K-means": "bi-bounding-box-circles",
  KNN: "bi-diagram-2",
  Python: "bi-filetype-py",
  pandas: "bi-table",
  "scikit-learn": "bi-cpu",
  statsmodels: "bi-bar-chart-steps",
  matplotlib: "bi-pie-chart",
  Unity: "bi-unity",
  "C#": "bi-code-square",
  Android: "bi-android2",
  "Object Pooling": "bi-collection",
  Swift: "bi-lightning-charge",
  UIKit: "bi-apple",
  Storyboard: "bi-layout-wtf",
  WebKit: "bi-globe2",
  AVKit: "bi-play-btn",
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
              <i className={`bi ${techIcons[tech] ?? "bi-code-slash"}`} aria-hidden="true" />
              {formatMiddleDotSpacing(tech)}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectTechGroups;

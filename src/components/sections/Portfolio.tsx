import { useMemo, useState } from "react";
import ImagePreview from "../portfolio/ImagePreview";
import ProjectCard from "../portfolio/ProjectCard";
import ProjectFilter from "../portfolio/ProjectFilter";
import { projectFilters, projects } from "../../data/projects";
import type { ProjectFilterOption } from "../../data/projects";
import type { Project } from "../../types/project";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterOption["value"]>("all");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    return projects.filter((project) => project.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>프로젝트</h2>
        <p>백엔드 중심 구현 흐름과 GitHub 근거 정리</p>
      </div>

      <div className="container">
        <ProjectFilter activeFilter={activeFilter} filters={projectFilters} onChange={setActiveFilter} />

        <div className="row gy-5 portfolio-container">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onPreview={setPreviewProject} />
          ))}
        </div>
      </div>

      {previewProject && (
        <ImagePreview
          alt={previewProject.title}
          image={previewProject.previewImage}
          onClose={() => setPreviewProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;

import { useMemo, useState } from "react";
import ProjectCard from "../portfolio/ProjectCard";
import ProjectFilter from "../portfolio/ProjectFilter";
import { projectFilters, projects } from "../../data/projects";
import type { ProjectFilterOption } from "../../data/projects";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterOption["value"]>("all");

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
      </div>

      <div className="container">
        <ProjectFilter activeFilter={activeFilter} filters={projectFilters} onChange={setActiveFilter} />

        <div className="row gy-5 portfolio-container">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

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
      <div className="container section-title" data-aos="fade-up">
        <h2>프로젝트</h2>
        <p>
          백엔드 프로젝트를 중심으로, 데이터 분석·모바일·게임 프로젝트까지 구현 흐름과 GitHub 근거를 함께
          정리했습니다.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <ProjectFilter activeFilter={activeFilter} filters={projectFilters} onChange={setActiveFilter} />

        <div className="row gy-5 portfolio-container" data-aos="fade-up" data-aos-delay="300">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

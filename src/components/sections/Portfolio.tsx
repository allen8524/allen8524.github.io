import { useLocation, useNavigate } from "react-router-dom";
import ProjectCard from "../portfolio/ProjectCard";
import ProjectFilter from "../portfolio/ProjectFilter";
import { projectFilters, projects } from "../../data/projects";
import type { ProjectFilterOption } from "../../data/projects";

function Portfolio() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const activeFilter = projectFilters.find(({ value }) => value === searchParams.get("filter"))?.value ?? "all";

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter((project) => project.filter === activeFilter);

  const changeFilter = (filter: ProjectFilterOption["value"]) => {
    if (filter === activeFilter) return;
    if (filter === "all") searchParams.delete("filter");
    else searchParams.set("filter", filter);
    navigate(
      { pathname: location.pathname, search: searchParams.toString(), hash: "#portfolio" },
      { replace: true, state: { preserveViewport: true } },
    );
  };

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title">
        <h2>프로젝트</h2>
      </div>

      <div className="container">
        <ProjectFilter activeFilter={activeFilter} filters={projectFilters} onChange={changeFilter} />

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

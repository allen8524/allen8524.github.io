import { useCallback, useMemo, useState } from "react";
import ImagePreview, { type PreviewImage } from "../portfolio/ImagePreview";
import ProjectCard from "../portfolio/ProjectCard";
import ProjectFilter from "../portfolio/ProjectFilter";
import { projectFilters, projects } from "../../data/projects";
import type { ProjectFilterOption } from "../../data/projects";
import type { Project } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterOption["value"]>("all");
  const [previewImages, setPreviewImages] = useState<PreviewImage[] | null>(null);
  const closePreview = useCallback(() => setPreviewImages(null), []);
  const openPreview = (project: Project, thumbnail: HTMLImageElement | null) => {
    setPreviewImages([{ src: project.previewImage, alt: formatMiddleDotSpacing(project.title), thumbnail }]);
  };

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
            <ProjectCard key={project.id} project={project} onPreview={openPreview} />
          ))}
        </div>
      </div>

      {previewImages && (
        <ImagePreview images={previewImages} onClose={closePreview} />
      )}
    </section>
  );
}

export default Portfolio;

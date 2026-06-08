import type { Project, ProjectDetail } from "../../types/project";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__content">
        <div className="project-meta">
          <span className="category">{project.category}</span>
          <span className="project-meta__separator" aria-hidden="true">·</span>
          <span className="year">{detail.period || project.year}</span>
        </div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.techStack.map((tech) => (
            <span className="tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <figure className="project-detail-hero__image">
        <img src={detail.heroImage || project.previewImage} alt={project.title} className="img-fluid" />
      </figure>
    </section>
  );
}

export default ProjectDetailHero;

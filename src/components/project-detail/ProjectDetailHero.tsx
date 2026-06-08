import type { Project, ProjectDetail } from "../../types/project";

type ProjectDetailHeroProps = {
  project: Project;
  detail: ProjectDetail;
};

function ProjectDetailHero({ detail, project }: ProjectDetailHeroProps) {
  const period = detail.period || project.year;

  return (
    <section className="project-detail-hero">
      <div className="project-detail-hero__content">
        <p className="project-meta-text">
          {project.category} · {period}
        </p>
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

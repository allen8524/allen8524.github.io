type ProjectSectionHeadingProps = {
  title: string;
};

function ProjectSectionHeading({ title }: ProjectSectionHeadingProps) {
  return (
    <header className="project-section-heading">
      <h2>{title}</h2>
    </header>
  );
}

export default ProjectSectionHeading;

type ProjectSectionHeadingProps = {
  label: string;
  title: string;
};

function ProjectSectionHeading({ label, title }: ProjectSectionHeadingProps) {
  return (
    <header className="project-section-heading">
      <p>{label}</p>
      <h2>{title}</h2>
    </header>
  );
}

export default ProjectSectionHeading;

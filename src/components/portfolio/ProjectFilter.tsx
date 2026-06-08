import type { ProjectFilterOption } from "../../data/projects";

type ProjectFilterProps = {
  activeFilter: ProjectFilterOption["value"];
  filters: ProjectFilterOption[];
  onChange: (filter: ProjectFilterOption["value"]) => void;
};

function ProjectFilter({ activeFilter, filters, onChange }: ProjectFilterProps) {
  return (
    <div className="filters-wrapper" data-aos="fade-up" data-aos-delay="200">
      <ul className="portfolio-filters">
        {filters.map((filter) => (
          <li
            key={filter.value}
            className={activeFilter === filter.value ? "filter-active" : undefined}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectFilter;

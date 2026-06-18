import type { ProjectFilterOption } from "../../data/projects";

type ProjectFilterProps = {
  activeFilter: ProjectFilterOption["value"];
  filters: ProjectFilterOption[];
  onChange: (filter: ProjectFilterOption["value"]) => void;
};

function ProjectFilter({ activeFilter, filters, onChange }: ProjectFilterProps) {
  return (
    <div className="filters-wrapper">
      <ul className="portfolio-filters">
        {filters.map((filter) => (
          <li
            key={filter.value}
            className={activeFilter === filter.value ? "filter-active" : undefined}
          >
            <button type="button" onClick={() => onChange(filter.value)}>
              {filter.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectFilter;

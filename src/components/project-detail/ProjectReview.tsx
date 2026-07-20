import type { ProjectDetail } from "../../types/project";
import { formatMiddleDotSpacing } from "../../utils/typography";
import ProjectSectionHeading from "./ProjectSectionHeading";

function ProjectReview({ detail }: { detail: ProjectDetail }) {
  if (!detail.learned?.length && !detail.limitations?.length) return null;

  return (
    <section className="project-detail-section project-review-section">
      <ProjectSectionHeading label="REVIEW" title="배운 점과 한계" />
      <div className={`project-review-panel ${detail.learned?.length && detail.limitations?.length ? "has-two-columns" : ""}`}>
        {detail.learned && detail.learned.length > 0 && <div><h3>배운 점</h3><ul>{detail.learned.map((item) => <li key={item}><i className="bi bi-check2" aria-hidden="true" />{formatMiddleDotSpacing(item)}</li>)}</ul></div>}
        {detail.limitations && detail.limitations.length > 0 && <div><h3>한계 및 개선점</h3><ul>{detail.limitations.map((item) => <li key={item}><span aria-hidden="true">—</span>{formatMiddleDotSpacing(item)}</li>)}</ul></div>}
      </div>
    </section>
  );
}

export default ProjectReview;

import { resumeAwards } from "../../data/awards";
import {
  resumeActivities,
  resumeEducation,
  resumeJourney,
  resumeSection,
} from "../../data/resume";
import { formatMiddleDotSpacing } from "../../utils/typography";

function Resume() {
  return (
    <section id="resume" className="resume section">
      <div className="container section-title">
        <h2>{formatMiddleDotSpacing(resumeSection.title)}</h2>
      </div>

      <div className="container">
        <div className="row align-items-start justify-content-center resume-content-row">
          <div className="col-12 resume-column">
            <div className="professional-journey resume-panel">
              <div className="section-intro resume-panel-header">
                <div className="icon-wrapper resume-panel-icon">
                  <i className="bi bi-briefcase-fill"></i>
                </div>
                <h2>{formatMiddleDotSpacing(resumeJourney.title)}</h2>
              </div>
              <div className="resume-panel-body">
                <div className="resume-activity-grid">
                  {(
                    [
                      { kind: "activity", title: "활동" },
                      { kind: "experience", title: "경험" },
                    ] as const
                  ).map((group) => (
                    <div className="resume-activity-group" key={group.kind}>
                      <h3 className="resume-group-title">{group.title}</h3>
                      <div className="experience-timeline resume-timeline">
                        {resumeActivities
                          .filter((activity) => activity.kind === group.kind)
                          .map((activity) => (
                            <div className="timeline-item" key={activity.id}>
                              <div className="timeline-dot"></div>
                              <div className="timeline-content">
                                <div className="position-meta">
                                  <span className="timeline-year">
                                    {formatMiddleDotSpacing(activity.year)}
                                  </span>
                                </div>
                                <h3>
                                  {formatMiddleDotSpacing(activity.title)}
                                </h3>
                                <ul className="timeline-summary-list">
                                  {activity.summaries.map((summary) => (
                                    <li key={summary}>
                                      {formatMiddleDotSpacing(summary)}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 resume-column">
            <div className="education-skills resume-panel">
              <div className="section-intro resume-panel-header">
                <div className="icon-wrapper resume-panel-icon">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <h2>{formatMiddleDotSpacing(resumeEducation.title)}</h2>
              </div>
              <div className="resume-panel-body">
                <div className="education-grid resume-education-list">
                  <div className="resume-school-list">
                    {resumeEducation.schools.map((school) => (
                      <div
                        className={
                          school.primary
                            ? "education-card primary"
                            : "education-card"
                        }
                        key={school.id}
                      >
                        <div className="education-header">
                          <div className="degree-icon">
                            <i className={school.icon}></i>
                          </div>
                          <div className="degree-info">
                            <h3>{formatMiddleDotSpacing(school.name)}</h3>
                            <p className="institution">
                              {formatMiddleDotSpacing(school.institution)}
                            </p>
                            <span className="graduation-year">
                              {formatMiddleDotSpacing(school.year)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="certification-section">
                    <h4>자격증 및 수상</h4>
                    <div className="certifications">
                      {resumeAwards.map((award) => (
                        <div className="cert-item" key={award.id}>
                          <i className="bi bi-patch-check"></i>
                          <div className="cert-details">
                            <span className="cert-name">
                              {formatMiddleDotSpacing(award.name)}
                            </span>
                            <span className="cert-provider">
                              {formatMiddleDotSpacing(award.provider)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;

import { recentAchievements } from "../../data/awards";
import { skillCategories, skillsHighlight, skillsSection, technologies } from "../../data/skills";
import { formatMiddleDotSpacing } from "../../utils/typography";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title" data-aos="fade-up">
        <h1>{formatMiddleDotSpacing(skillsSection.title)}</h1>
        <p>{formatMiddleDotSpacing(skillsSection.description)}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-8">
            <div className="skills-container">
              {skillCategories.map((category) => (
                <div
                  className="skill-category skills-animation"
                  data-aos="fade-up"
                  data-aos-delay={category.delay}
                  key={category.id}
                >
                  <div className="category-header">
                    <h3 className="category-title">{formatMiddleDotSpacing(category.title)}</h3>
                    <p className="category-subtitle">{formatMiddleDotSpacing(category.subtitle)}</p>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill) => (
                      <div className="skill-row" key={skill.id}>
                        <div className="skill-info">
                          <span className="skill-name">{formatMiddleDotSpacing(skill.name)}</span>
                          <span className="skill-percentage">{formatMiddleDotSpacing(skill.detail)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="skills-sidebar">
              <div className="expertise-highlight" data-aos="fade-up" data-aos-delay="350">
                <div className="highlight-icon">
                  <i className={skillsHighlight.icon}></i>
                </div>
                <h4 className="highlight-title">{formatMiddleDotSpacing(skillsHighlight.title)}</h4>
                <div className="experience-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={skillsHighlight.years}
                    data-purecounter-duration="1"
                    className="purecounter"
                  >
                    {skillsHighlight.years}
                  </span>
                  <span className="experience-label">{formatMiddleDotSpacing(skillsHighlight.label)}</span>
                </div>
                <p className="highlight-description">{formatMiddleDotSpacing(skillsHighlight.description)}</p>
              </div>

              <div className="technologies-section" data-aos="fade-up" data-aos-delay="400">
                <h5 className="tech-title">주요 기술</h5>
                <div className="tech-stack">
                  {technologies.map((technology) => (
                    <div className="tech-item" key={technology.id}>
                      <i className={technology.icon}></i>
                      <span>{formatMiddleDotSpacing(technology.name)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="achievements-section" data-aos="fade-up" data-aos-delay="450">
                <h5 className="achievements-title">최근 성과</h5>
                <div className="achievement-list">
                  {recentAchievements.map((achievement) => (
                    <div className="achievement-item" key={achievement.id}>
                      <div className="achievement-date">{achievement.date}</div>
                      <div className="achievement-text">{formatMiddleDotSpacing(achievement.text)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

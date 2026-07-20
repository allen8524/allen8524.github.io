import { recentAchievements } from "../../data/awards";
import { skillCategories, skillsHighlight, skillsSection, technologies } from "../../data/skills";
import { formatMiddleDotSpacing } from "../../utils/typography";

const backendCapabilities = [
  {
    title: "인증 · 권한",
    description: "Spring Security와 미들웨어를 활용한 사용자 및 관리자 접근 범위 분리",
  },
  {
    title: "업무 상태 처리",
    description: "예매, 주문, 경기 결과 등 상태 변경에 따른 저장 및 조회 흐름 구현",
  },
  {
    title: "관리자 데이터 운영",
    description: "영화, 상품, 경기, 뉴스 등 운영 데이터의 등록, 수정, 조회 기능 구현",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container section-title">
        <h1>{formatMiddleDotSpacing(skillsSection.title)}</h1>
        <p>{formatMiddleDotSpacing(skillsSection.description)}</p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="skills-container">
              {skillCategories.map((category) => (
                <div className="skill-category" key={category.id}>
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
              <div className="expertise-highlight">
                <div className="highlight-icon">
                  <i className={skillsHighlight.icon}></i>
                </div>
                <h4 className="highlight-title">{formatMiddleDotSpacing(skillsHighlight.title)}</h4>
                <div className="experience-number">
                  <span>{skillsHighlight.years}</span>
                  <span className="experience-label">{formatMiddleDotSpacing(skillsHighlight.label)}</span>
                </div>
                <p className="highlight-description">{formatMiddleDotSpacing(skillsHighlight.description)}</p>
              </div>

              <div className="technologies-section">
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

              <div className="achievements-section">
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

        <div className="backend-capabilities" aria-label="백엔드 개발 역량 요약">
          {backendCapabilities.map((capability) => (
            <div className="backend-capability" key={capability.title}>
              <h3>{formatMiddleDotSpacing(capability.title)}</h3>
              <p>{formatMiddleDotSpacing(capability.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

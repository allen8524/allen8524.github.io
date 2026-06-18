import { stats, statsAchievements } from "../../data/stats";
import { formatMiddleDotSpacing } from "../../utils/typography";

function Stats() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-grid">
              {stats.map((item) => (
                <div className="stat-item" key={item.id}>
                  <div className="stat-number">
                    <span>{item.value}</span>
                  </div>
                  <p className="stat-label">{formatMiddleDotSpacing(item.label)}</p>
                </div>
              ))}
            </div>

            <div className="achievements-row">
              {statsAchievements.map((achievement) => (
                <div className="achievement" key={achievement.id}>
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-content">
                    <h4>{formatMiddleDotSpacing(achievement.title)}</h4>
                    <p>{formatMiddleDotSpacing(achievement.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;

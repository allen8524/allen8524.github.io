import { stats, statsAchievements } from "../../data/stats";
import { formatMiddleDotSpacing } from "../../utils/typography";

function Stats() {
  return (
    <section id="stats" className="stats section light-background">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="stats-grid">
              {stats.map((item) => (
                <div className="stat-item" data-aos="fade-up" data-aos-delay={item.delay} key={item.id}>
                  <div className="stat-number">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end={item.value}
                      data-purecounter-duration="1"
                      className="purecounter"
                    >
                      {item.value}
                    </span>
                  </div>
                  <p className="stat-label">{formatMiddleDotSpacing(item.label)}</p>
                </div>
              ))}
            </div>

            <div className="achievements-row" data-aos="fade-up" data-aos-delay="500">
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

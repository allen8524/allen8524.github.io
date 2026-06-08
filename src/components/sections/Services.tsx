import { Link } from "react-router-dom";
import { services } from "../../data/services";

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>개발 역량</h2>
        <p>프로젝트에서 직접 구현한 백엔드 중심 기능 범위를 정리했습니다.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-5">
          {services.map((service, index) => (
            <div
              className="col-lg-6"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={200 + index * 50}
              key={service.id}
            >
              <div className="service-item">
                <div className="service-icon">
                  <i className={`bi ${service.icon}`} />
                </div>
                <div className="service-content">
                  <h3>
                    <Link to={`/services/${service.id}`}>{service.title}</Link>
                  </h3>
                  <p>{service.summary}</p>
                  <Link to={`/services/${service.id}`} className="read-more">
                    <span>자세히 보기</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

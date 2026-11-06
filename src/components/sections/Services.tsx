import { Link } from "react-router-dom";
import { services } from "../../data/services";
import type { ServiceIconKey } from "../../types/service";
import { formatMiddleDotSpacing } from "../../utils/typography";

const serviceBootstrapIcons: Record<ServiceIconKey, string> = {
  shield: "bi-shield-check",
  user: "bi-person-check",
  bug: "bi-bug",
  cart: "bi-cart3",
  film: "bi-film",
  database: "bi-database-check",
  chart: "bi-bar-chart-line",
  trophy: "bi-trophy",
  document: "bi-layout-text-window-reverse",
  ticket: "bi-ticket-perforated",
  box: "bi-box-seam",
  search: "bi-search",
  controller: "bi-controller",
  shop: "bi-shop",
};

function Services() {
  return (
    <section id="services" className="services section">
      <div className="container section-title">
        <h2>개발 역량</h2>
      </div>

      <div className="container">
        <div className="row g-5">
          {services.map((service) => (
            <div className="col-lg-6" key={service.id}>
              <Link className="service-item" to={`/services/${service.id}`} aria-label={`${formatMiddleDotSpacing(service.title)} 상세 보기`}>
                <div className="service-icon">
                  <i className={`bi ${serviceBootstrapIcons[service.icon]}`} />
                </div>
                <div className="service-content">
                  <h3>
                    {formatMiddleDotSpacing(service.title)}
                  </h3>
                  <p>{formatMiddleDotSpacing(service.summary)}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;

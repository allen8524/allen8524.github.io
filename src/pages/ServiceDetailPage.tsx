import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getServiceDetail, services } from "../data/services";
import { useGsapAnimations } from "../hooks/useGsapAnimations";
import NotFoundPage from "./NotFoundPage";

function renderServiceIcon(icon: string) {
  if (icon.includes("shield")) {
    return (
      <>
        <path d="M12 3.75 6.25 6.1v5.15c0 3.65 2.42 6.98 5.75 8 3.33-1.02 5.75-4.35 5.75-8V6.1L12 3.75Z" />
        <path d="m9.4 12.1 1.7 1.7 3.6-3.7" />
      </>
    );
  }

  if (icon.includes("person")) {
    return (
      <>
        <circle cx="10" cy="8.2" r="2.3" />
        <path d="M5.4 17.6c.55-2.55 2.28-4 4.6-4 1.24 0 2.28.4 3.06 1.16" />
        <circle cx="16.7" cy="15.7" r="2.05" />
        <path d="m15.7 15.8.72.72 1.32-1.44" />
      </>
    );
  }

  if (icon.includes("bug")) {
    return (
      <>
        <path d="M8.2 8.4h7.6v6.2a3.8 3.8 0 0 1-7.6 0V8.4Z" />
        <path d="M9.4 5.4 11 7.2h2l1.6-1.8" />
        <path d="M5.4 10.2h2.8M15.8 10.2h2.8M5.4 14.4h2.8M15.8 14.4h2.8M12 8.4v10" />
      </>
    );
  }

  if (icon.includes("cart") || icon.includes("bag") || icon.includes("shop")) {
    return (
      <>
        <path d="M6.2 7.3h11.2l-1.1 6.2H8L6.2 4.8H4.4" />
        <circle cx="9.2" cy="17.2" r="1.1" />
        <circle cx="15.2" cy="17.2" r="1.1" />
      </>
    );
  }

  if (icon.includes("film") || icon.includes("camera")) {
    return (
      <>
        <rect x="5" y="6" width="14" height="12" rx="2" />
        <path d="M8 6v12M16 6v12M5 10h3M16 10h3M5 14h3M16 14h3" />
      </>
    );
  }

  if (icon.includes("database")) {
    return (
      <>
        <ellipse cx="12" cy="6.4" rx="5.7" ry="2.4" />
        <path d="M6.3 6.4v8.8c0 1.3 2.55 2.4 5.7 2.4s5.7-1.1 5.7-2.4V6.4" />
        <path d="M6.3 10.8c0 1.3 2.55 2.4 5.7 2.4s5.7-1.1 5.7-2.4" />
      </>
    );
  }

  if (icon.includes("bar") || icon.includes("graph")) {
    return (
      <>
        <path d="M5.3 18.2h13.4" />
        <path d="M7.2 15.8v-4.2M12 15.8V7.2M16.8 15.8v-6" />
      </>
    );
  }

  if (icon.includes("trophy")) {
    return (
      <>
        <path d="M8 5.4h8v3.4a4 4 0 0 1-8 0V5.4Z" />
        <path d="M8 7H5.8c0 2.6 1.5 4 3.4 4.2M16 7h2.2c0 2.6-1.5 4-3.4 4.2" />
        <path d="M12 12.8v3.4M9.2 18.2h5.6" />
      </>
    );
  }

  return (
    <>
      <path d="M6.2 7.2h11.6v9.6H6.2z" />
      <path d="M8.7 10h6.6M8.7 13h4.6" />
    </>
  );
}

function ServiceFeatureIcon({ icon }: { icon: string }) {
  return (
    <span className="service-feature-icon" aria-hidden="true">
      <svg className="service-feature-svg" viewBox="0 0 24 24" focusable="false">
        {renderServiceIcon(icon)}
      </svg>
    </span>
  );
}

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceDetail(serviceId) : undefined;

  useGsapAnimations({ scope: "service", deps: [serviceId] });

  useEffect(() => {
    document.body.classList.remove("index-page");
    document.body.classList.add("service-details-page");

    return () => {
      document.body.classList.remove("service-details-page");
    };
  }, []);

  if (!service) {
    return <NotFoundPage />;
  }

  return (
    <>
      <Header />
      <main className="main">
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1>{service.title}</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">홈</Link>
                </li>
                <li>
                  <Link to="/#services">개발 역량</Link>
                </li>
                <li className="current">{service.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="service-details" className="service-details section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="service-content">
                  <div className="service-hero" data-aos="fade-up" data-aos-delay="200">
                    <h2>{service.heroTitle}</h2>
                    <p className="lead">{service.lead}</p>
                  </div>

                  <div className="service-image" data-aos="zoom-in" data-aos-delay="300">
                    <img src="assets/img/services/services-3.webp" alt="웹 서비스 구현 역량을 설명하는 이미지" className="img-fluid" />
                  </div>

                  <div className="service-description" data-aos="fade-up" data-aos-delay="400">
                    <h3>{service.introTitle}</h3>
                    <p>{service.intro}</p>

                    <div className="features-list">
                      {service.features.map((feature) => (
                        <div className="feature-item" key={feature.title}>
                          <ServiceFeatureIcon icon={feature.icon} />
                          <div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="process-section" data-aos="fade-up" data-aos-delay="500">
                    <h3>{service.processTitle}</h3>
                    <div className="process-steps">
                      {service.processSteps.map((step, index) => (
                        <div className="step" key={step.title}>
                          <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                          <h4>{step.title}</h4>
                          <p>{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="process-section" data-aos="fade-up" data-aos-delay="550">
                    <h3>{service.evidenceTitle}</h3>
                    <div className="features-list">
                      {service.evidence.map((item) => (
                        <div className="feature-item" key={item.title}>
                          <ServiceFeatureIcon icon={item.icon} />
                          <div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="service-sidebar">
                  {service.sideInfo.map((info) => (
                    <div className="service-info" key={info.title} data-aos="fade-up" data-aos-delay="600">
                      <h4>{info.title}</h4>
                      <ul className="info-list">
                        {info.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="service-info" data-aos="fade-up" data-aos-delay="700">
                    <h4>관련 프로젝트 연결</h4>
                    <ul className="info-list">
                      {service.relatedProjects.map((project) => (
                        <li key={project.projectId}>
                          <Link to={`/projects/${project.projectId}`} className="service-related-link">
                            {project.label}
                          </Link>
                          : {project.description}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="cta-block" data-aos="fade-up" data-aos-delay="800">
                    <h4>다른 역량 보기</h4>
                    <p>프로젝트에서 반복적으로 다룬 구현 범위를 다른 관점에서도 확인할 수 있습니다.</p>
                    {services
                      .filter((item) => item.id !== service.id)
                      .slice(0, 3)
                      .map((item) => (
                        <Link to={`/services/${item.id}`} className="btn btn-outline" key={item.id}>
                          {item.title}
                        </Link>
                      ))}
                    <Link to="/#services" className="btn btn-primary">
                      개발 역량 전체 보기
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ServiceDetailPage;

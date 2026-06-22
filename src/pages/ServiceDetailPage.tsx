import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceFeatureIcon from "../components/service-detail/ServiceFeatureIcon";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getServiceDetail, services } from "../data/services";
import { useServiceGsapAnimations } from "../hooks/useServiceGsapAnimations";
import { formatMiddleDotSpacing } from "../utils/typography";
import NotFoundPage from "./NotFoundPage";

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const serviceRootRef = useRef<HTMLElement | null>(null);
  const service = serviceId ? getServiceDetail(serviceId) : undefined;

  useServiceGsapAnimations({ rootRef: serviceRootRef, deps: [serviceId] });

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
      <main className="main service-detail-animation-scope" ref={serviceRootRef}>
        <section id="service-details" className="service-details section">
          <div className="container">
            <section className="service-detail-hero service-animate-card">
              <div className="service-detail-hero__content service-animate-hero">
                <p className="service-meta-text">{formatMiddleDotSpacing(service.title)}</p>
                <h1>{formatMiddleDotSpacing(service.heroTitle)}</h1>
                <p className="service-detail-hero__summary">{formatMiddleDotSpacing(service.summary)}</p>
              </div>

              <figure className="service-image service-detail-hero__image service-animate-image">
                <img src={service.image} alt={service.imageAlt} className="img-fluid" />
                <figcaption>{formatMiddleDotSpacing(service.imageAlt)}</figcaption>
              </figure>
            </section>

            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="service-content">
                  <section className="service-detail-section service-feature-summary-section service-animate-card">
                    <div className="service-detail-section__header">
                      <h2>핵심 역량 요약</h2>
                    </div>
                    <div className="features-list service-hero-features">
                      {service.features.map((feature) => (
                        <article className="feature-item service-animate-card" key={feature.title}>
                          <ServiceFeatureIcon icon={feature.icon} />
                          <div>
                            <h4>{formatMiddleDotSpacing(feature.title)}</h4>
                            {feature.description && <p>{formatMiddleDotSpacing(feature.description)}</p>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="service-detail-section service-process-section process-section service-animate-card">
                    <div className="service-detail-section__header">
                      <h2>{formatMiddleDotSpacing(service.processTitle)}</h2>
                    </div>
                    <div className="process-steps">
                      {service.processSteps.map((step, index) => (
                        <div className="step service-animate-step" key={step.title}>
                          <div className="service-detail-marker service-animate-marker">
                            <span className="service-detail-marker-content service-step-number-text">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          </div>
                          <div>
                            <h4>{formatMiddleDotSpacing(step.title)}</h4>
                            <p>{formatMiddleDotSpacing(step.description)}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="service-detail-section service-evidence-section process-section service-animate-card">
                    <div className="service-detail-section__header">
                      <h2>{formatMiddleDotSpacing(service.evidenceTitle)}</h2>
                    </div>
                    <div className="features-list">
                      {service.evidence.map((item) => (
                        <article className="feature-item service-animate-card" key={item.title}>
                          <ServiceFeatureIcon icon={item.icon} />
                          <div>
                            <h4>{formatMiddleDotSpacing(item.title)}</h4>
                            {item.description && <p>{formatMiddleDotSpacing(item.description)}</p>}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="cta-block service-animate-sidebar">
                    <h4>다른 역량 보기</h4>
                    {services
                      .filter((item) => item.id !== service.id)
                      .slice(0, 3)
                      .map((item) => (
                        <Link to={`/services/${item.id}`} className="btn btn-outline" key={item.id}>
                          {formatMiddleDotSpacing(item.title)}
                        </Link>
                      ))}
                    <Link to="/#services" className="btn btn-primary">
                      개발 역량 전체 보기
                    </Link>
                  </div>

                  {service.sideInfo.map((info) => (
                    <div className="service-info service-animate-sidebar" key={info.title}>
                      <h4>{formatMiddleDotSpacing(info.title)}</h4>
                      <ul className="info-list">
                        {info.items.map((item) => (
                          <li key={item}>{formatMiddleDotSpacing(item)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="service-info service-animate-sidebar">
                    <h4>관련 프로젝트 연결</h4>
                    <ul className="info-list">
                      {service.relatedProjects.map((project) => (
                        <li key={project.projectId}>
                          <Link to={`/projects/${project.projectId}`} className="service-related-link">
                            {formatMiddleDotSpacing(project.label)}
                          </Link>
                          <span className="service-related-description">{formatMiddleDotSpacing(project.description)}</span>
                        </li>
                      ))}
                    </ul>
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

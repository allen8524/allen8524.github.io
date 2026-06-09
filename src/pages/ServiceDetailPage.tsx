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
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-5">
              <div className="col-lg-8">
                <div className="service-content">
                  <div className="service-hero-title service-animate-hero" data-aos="fade-up" data-aos-delay="200">
                    <span>{formatMiddleDotSpacing(service.title)}</span>
                    <h2>{formatMiddleDotSpacing(service.heroTitle)}</h2>
                  </div>

                  <div className="service-hero service-animate-card" data-aos="fade-up" data-aos-delay="250">
                    <div className="features-list service-hero-features">
                      {service.features.map((feature) => (
                        <div className="feature-item service-animate-card" key={feature.title}>
                          <ServiceFeatureIcon icon={feature.icon} />
                          <div>
                            <h4>{formatMiddleDotSpacing(feature.title)}</h4>
                            {feature.description && <p>{formatMiddleDotSpacing(feature.description)}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-image service-animate-image" data-aos="zoom-in" data-aos-delay="300">
                    <img src="assets/img/services/services-3.webp" alt="웹 서비스 구현 역량을 설명하는 이미지" className="img-fluid" />
                  </div>

                  <div className="process-section service-animate-card" data-aos="fade-up" data-aos-delay="500">
                    <h3>{formatMiddleDotSpacing(service.processTitle)}</h3>
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
                  </div>

                  <div className="process-section service-animate-card" data-aos="fade-up" data-aos-delay="550">
                    <h3>{formatMiddleDotSpacing(service.evidenceTitle)}</h3>
                    <div className="features-list">
                      {service.evidence.map((item) => (
                        <div className="feature-item service-animate-card" key={item.title}>
                          <ServiceFeatureIcon icon={item.icon} />
                          <div>
                            <h4>{formatMiddleDotSpacing(item.title)}</h4>
                            {item.description && <p>{formatMiddleDotSpacing(item.description)}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="service-sidebar">
                  <div className="cta-block service-animate-sidebar" data-aos="fade-up" data-aos-delay="600">
                    <h4>다른 역량 보기</h4>
                    <p>프로젝트에서 반복적으로 다룬 구현 범위를 다른 관점에서도 확인할 수 있습니다.</p>
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

                  {service.sideInfo.map((info, index) => (
                    <div
                      className="service-info service-animate-sidebar"
                      key={info.title}
                      data-aos="fade-up"
                      data-aos-delay={650 + index * 50}
                    >
                      <h4>{formatMiddleDotSpacing(info.title)}</h4>
                      <ul className="info-list">
                        {info.items.map((item) => (
                          <li key={item}>{formatMiddleDotSpacing(item)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="service-info service-animate-sidebar" data-aos="fade-up" data-aos-delay="750">
                    <h4>관련 프로젝트 연결</h4>
                    <ul className="info-list">
                      {service.relatedProjects.map((project) => (
                        <li key={project.projectId}>
                          <Link to={`/projects/${project.projectId}`} className="service-related-link">
                            {formatMiddleDotSpacing(project.label)}
                          </Link>
                          : {formatMiddleDotSpacing(project.description)}
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

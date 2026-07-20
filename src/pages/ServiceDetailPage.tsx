import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ServiceFeatureIcon from "../components/service-detail/ServiceFeatureIcon";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getServiceDetail, services } from "../data/services";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { formatMiddleDotSpacing } from "../utils/typography";
import NotFoundPage from "./NotFoundPage";

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceDetail(serviceId) : undefined;

  useScrollReveal({ scope: "service", deps: [serviceId] });

  useEffect(() => {
    document.body.classList.remove("index-page");
    document.body.classList.add("service-details-page");

    return () => document.body.classList.remove("service-details-page");
  }, []);

  if (!service) return <NotFoundPage />;

  const otherServices = services.filter((item) => item.id !== service.id).slice(0, 3);
  const keywords = service.sideInfo[0]?.items.slice(0, 4) ?? [];
  const findEvidenceProject = (title: string) =>
    service.relatedProjects.find((project) => project.label.toLocaleLowerCase().includes(title.toLocaleLowerCase()));

  return (
    <>
      <Header />
      <main className="main service-detail-page">
        <div className="service-detail-container">
          <section className="service-detail-hero" aria-labelledby="service-title">
            <div className="service-detail-hero__content">
              <p className="service-detail-eyebrow">개발 역량 · {formatMiddleDotSpacing(service.title)}</p>
              <h1 id="service-title">{formatMiddleDotSpacing(service.heroTitle)}</h1>
              <p className="service-detail-hero__summary">{formatMiddleDotSpacing(service.summary)}</p>
              <ul className="service-detail-keywords" aria-label="핵심 기술">
                {keywords.map((keyword) => <li key={keyword}>{formatMiddleDotSpacing(keyword)}</li>)}
              </ul>
            </div>
            <figure className="service-detail-hero__image">
              <img src={service.image} alt={service.imageAlt} />
              <figcaption>{formatMiddleDotSpacing(service.imageAlt)}</figcaption>
            </figure>
          </section>

          <section className="service-detail-section" aria-labelledby="capabilities-title">
            <div className="service-detail-section__heading">
              <p>Capabilities</p><h2 id="capabilities-title">핵심 역량</h2>
            </div>
            <div className="service-feature-grid">
              {service.features.map((feature) => (
                <article className="service-feature-card" key={feature.title}>
                  <ServiceFeatureIcon icon={feature.icon} />
                  <h3>{formatMiddleDotSpacing(feature.title)}</h3>
                  {feature.description && <p>{formatMiddleDotSpacing(feature.description)}</p>}
                </article>
              ))}
            </div>
          </section>

          <section className="service-detail-section" aria-labelledby="process-title">
            <div className="service-detail-section__heading">
              <p>Process</p><h2 id="process-title">{formatMiddleDotSpacing(service.processTitle)}</h2>
            </div>
            <ol className="service-process-list">
              {service.processSteps.map((step, index) => (
                <li key={step.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{formatMiddleDotSpacing(step.title)}</h3><p>{formatMiddleDotSpacing(step.description)}</p></div>
                </li>
              ))}
            </ol>
          </section>

          <section className="service-detail-section" aria-labelledby="evidence-title">
            <div className="service-detail-section__heading">
              <p>Evidence</p><h2 id="evidence-title">{formatMiddleDotSpacing(service.evidenceTitle)}</h2>
            </div>
            <div className="service-evidence-grid">
              {service.evidence.map((item) => {
                const project = findEvidenceProject(item.title);
                const content = <><ServiceFeatureIcon icon={item.icon} /><div><h3>{formatMiddleDotSpacing(item.title)}</h3>{item.description && <p>{formatMiddleDotSpacing(item.description)}</p>}</div>{project && <i className="bi bi-arrow-right" aria-hidden="true" />}</>;
                return project ? <Link className="service-evidence-card" to={`/projects/${project.projectId}`} aria-label={`${item.title} 프로젝트 상세 보기`} key={item.title}>{content}</Link> : <article className="service-evidence-card" key={item.title}>{content}</article>;
              })}
            </div>
          </section>

          <section className="service-detail-section" aria-labelledby="information-title">
            <div className="service-detail-section__heading">
              <p>Information</p><h2 id="information-title">사용 기술 및 확인 항목</h2>
            </div>
            <div className="service-info-panel">
              {service.sideInfo.map((info, index) => (
                <div
                  className={`service-info-group service-info-group--${index === 0 ? "technologies" : "checklist"}`}
                  aria-labelledby={`service-info-${index}`}
                  key={info.title}
                >
                  <h3 id={`service-info-${index}`}>{formatMiddleDotSpacing(info.title)}</h3>
                  <ul>
                    {info.items.map((item) => (
                      <li key={item}>
                        {index > 0 && <i className="bi bi-check2" aria-hidden="true" />}
                        <span>{formatMiddleDotSpacing(item)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="service-detail-section" aria-labelledby="related-title">
            <div className="service-detail-section__heading">
              <p>Projects</p><h2 id="related-title">관련 프로젝트</h2>
            </div>
            <div className="service-related-grid">
              {service.relatedProjects.map((project) => <Link className="service-related-card" to={`/projects/${project.projectId}`} key={project.projectId}><div><h3>{formatMiddleDotSpacing(project.label)}</h3><p>{formatMiddleDotSpacing(project.description)}</p></div><i className="bi bi-arrow-right" aria-hidden="true" /><span className="visually-hidden">프로젝트 상세 보기</span></Link>)}
            </div>
          </section>

          <section className="service-detail-section service-other" aria-labelledby="other-title">
            <div className="service-detail-section__heading"><p>Explore</p><h2 id="other-title">다른 개발 역량</h2></div>
            <div className="service-other-grid">
              {otherServices.map((item) => <Link className="service-other-card" to={`/services/${item.id}`} key={item.id}><div><h3>{formatMiddleDotSpacing(item.title)}</h3><p>{formatMiddleDotSpacing(item.summary)}</p></div><i className="bi bi-arrow-right" aria-hidden="true" /></Link>)}
            </div>
            <div className="service-other-actions">
              <Link to="/#services" className="btn btn-primary service-all-link">개발 역량 전체 보기</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer /><ScrollTop />
    </>
  );
}

export default ServiceDetailPage;

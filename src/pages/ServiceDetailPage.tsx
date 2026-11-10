import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DetailHero from "../components/common/DetailHero";
import ServiceFeatureIcon from "../components/service-detail/ServiceFeatureIcon";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getServiceDetail, services } from "../data/services";
import {
  DEFAULT_PAGE_METADATA,
  usePageMetadata,
} from "../hooks/usePageMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { formatMiddleDotSpacing } from "../utils/typography";
import NotFoundPage from "./NotFoundPage";
import "../styles/project-detail.css";
import "../styles/service-detail.css";

function getTechnologyIcon(technology: string) {
  const value = technology.toLocaleLowerCase();

  if (value.includes("spring security") || value.includes("access control"))
    return "bi-shield-lock";
  if (value.includes("laravel")) return "bi-boxes";
  if (value.includes("php")) return "bi-filetype-php";
  if (value.includes("bootstrap")) return "bi-bootstrap-fill";
  if (
    value.includes("mysql") ||
    value.includes("jpa") ||
    value.includes("flyway")
  )
    return "bi-database";
  if (value.includes("pandas")) return "bi-table";
  if (value.includes("scikit")) return "bi-cpu";
  return "bi-code-slash";
}

function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = serviceId ? getServiceDetail(serviceId) : undefined;
  const metadataImage = service?.image
    ? /^https?:\/\//i.test(service.image)
      ? service.image
      : new URL(service.image.replace(/^\/+/, ""), DEFAULT_PAGE_METADATA.url)
          .href
    : DEFAULT_PAGE_METADATA.image;

  usePageMetadata({
    title: service
      ? `${service.title} | 황민서 포트폴리오`
      : DEFAULT_PAGE_METADATA.title,
    description: service?.summary ?? DEFAULT_PAGE_METADATA.description,
    image: metadataImage,
    url: service
      ? `https://allen8524.github.io/#/services/${service.id}`
      : DEFAULT_PAGE_METADATA.url,
  });

  useScrollReveal({ scope: "service", deps: [serviceId] });

  useEffect(() => {
    document.body.classList.remove("index-page");
    document.body.classList.add("service-details-page");

    return () => document.body.classList.remove("service-details-page");
  }, []);

  if (!service) return <NotFoundPage />;

  const otherServices = services
    .filter((item) => item.id !== service.id)
    .slice(0, 3);
  const ProcessList = service.processOrdered === false ? "ul" : "ol";
  const processClassName =
    service.id === "auth"
      ? "project-flow-list service-auth-flow"
      : "service-process-list";
  const [technologies, ...checklists] = service.sideInfo;
  const findEvidenceProject = (title: string) => {
    const normalizedTitle = title.toLocaleLowerCase();
    const meaningfulTokens = normalizedTitle
      .split(/\s+/)
      .filter((token) => token.length >= 3);

    return service.relatedProjects.find((project) => {
      const normalizedLabel = project.label.toLocaleLowerCase();
      return (
        normalizedLabel.includes(normalizedTitle) ||
        meaningfulTokens.some((token) => normalizedLabel.includes(token))
      );
    });
  };

  return (
    <>
      <Header />
      <main className="main portfolio-details service-detail-page">
        <div className="project-detail-container">
          <DetailHero
            key={service.id}
            image={service.image}
            imageAlt={service.imageAlt}
            previewAddress={`portfolio / services / ${service.id}`}
            labelledBy="service-title"
            caption={formatMiddleDotSpacing(service.imageAlt)}
          >
            <h1 id="service-title">{formatMiddleDotSpacing(service.title)}</h1>
            <p className="project-detail-hero__introduction">
              {formatMiddleDotSpacing(service.introduction)}
            </p>
            {technologies && (
              <div className="project-detail-tech-groups" aria-label="주요 적용 기술">
                <div className="project-detail-tech-chip-list">
                  {technologies.items.map((item) => (
                    <span className="project-detail-tech-chip" key={item}>
                      <i className={`bi ${getTechnologyIcon(item)}`} aria-hidden="true" />
                      {formatMiddleDotSpacing(item)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </DetailHero>

          <div className="project-case-study service-case-study">
            <section
              className="project-detail-section service-process-section"
              aria-labelledby="process-title"
            >
              <div className="project-section-heading">
                <h2 id="process-title">
                  {formatMiddleDotSpacing(service.processTitle)}
                </h2>
              </div>
              <ProcessList className={processClassName} role="list">
                {service.processSteps.map((step, index) => (
                  <li key={step.title}>
                    {step.icon && (
                      <i className={`bi ${step.icon}`} aria-hidden="true" />
                    )}
                    {!step.icon && service.processOrdered !== false && (
                      <span className="service-process-number" aria-hidden="true">
                        {index + 1}
                      </span>
                    )}
                    <h3 className="service-process-title">
                      {formatMiddleDotSpacing(step.title)}
                    </h3>
                    {step.description && (
                      <p className="service-process-description">
                        {formatMiddleDotSpacing(step.description)}
                      </p>
                    )}
                  </li>
                ))}
              </ProcessList>
              {service.alternateProcess && (
                <div className="service-alternate-process">
                  <h3>{formatMiddleDotSpacing(service.alternateProcess.title)}</h3>
                  <p className="service-process-description">
                    {formatMiddleDotSpacing(service.alternateProcess.description)}
                  </p>
                </div>
              )}
            </section>

            <section
              className="project-detail-section service-feature-section"
              aria-labelledby="capabilities-title"
            >
              <div className="project-section-heading">
                <h2 id="capabilities-title">핵심 역량</h2>
              </div>
              <div className="service-feature-grid">
                {service.features.map((feature) => (
                  <article className="service-feature-card" key={feature.title}>
                    <ServiceFeatureIcon icon={feature.icon} />
                    <div className="service-feature-card__content">
                      <h3>{formatMiddleDotSpacing(feature.title)}</h3>
                      {feature.description && (
                        <p>{formatMiddleDotSpacing(feature.description)}</p>
                      )}
                      {feature.source && (
                        <a
                          className="service-source-link"
                          href={feature.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {feature.source.label}
                          <i
                            className="bi bi-arrow-up-right"
                            aria-hidden="true"
                          />
                          <span className="visually-hidden">
                            {" "}
                            구현 코드 새 창에서 열기
                          </span>
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              className="project-detail-section service-evidence-section"
              aria-labelledby="evidence-title"
            >
              <div className="project-section-heading">
                <h2 id="evidence-title">
                  {formatMiddleDotSpacing(service.evidenceTitle)}
                </h2>
              </div>
              <div className="service-evidence-grid">
                {service.evidence.map((item) => {
                  const project = findEvidenceProject(item.title);
                  const content = (
                    <>
                      <ServiceFeatureIcon icon={item.icon} />
                      <div>
                        <h3>{formatMiddleDotSpacing(item.title)}</h3>
                        {item.description && (
                          <p>{formatMiddleDotSpacing(item.description)}</p>
                        )}
                      </div>
                      {project && (
                        <i className="bi bi-arrow-right" aria-hidden="true" />
                      )}
                    </>
                  );
                  return project ? (
                    <Link
                      className="service-evidence-card"
                      to={`/projects/${project.projectId}`}
                      aria-label={`${item.title} 프로젝트 상세 보기`}
                      key={item.title}
                    >
                      {content}
                    </Link>
                  ) : (
                    <article className="service-evidence-card" key={item.title}>
                      {content}
                    </article>
                  );
                })}
              </div>
            </section>

            <section
              className="project-detail-section service-checklist-section"
              aria-labelledby="information-title"
            >
              <div className="project-section-heading">
                <h2 id="information-title">확인 항목</h2>
              </div>
              {checklists.map((info) => (
                <ul className="service-checklist" role="list" key={info.title}>
                  {info.items.map((item) => (
                    <li key={item}>
                      <i className="bi bi-check2" aria-hidden="true" />
                      <span>{formatMiddleDotSpacing(item)}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </section>
          </div>

          <nav
            className="project-detail-section service-other"
            aria-labelledby="other-title"
          >
            <h2 id="other-title">개발 역량 더 보기</h2>
            <ul className="service-other-list" role="list">
              {otherServices.map((item) => (
                <li key={item.id}>
                  <Link to={`/services/${item.id}`}>
                    <ServiceFeatureIcon icon={item.icon} />
                    <span>{formatMiddleDotSpacing(item.title)}</span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ServiceDetailPage;

import { Link, useParams } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getProjectDetail } from "../data/projectDetails";
import { projects } from "../data/projects";
import NotFoundPage from "./NotFoundPage";
import { useEffect } from "react";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const detail = projectId ? getProjectDetail(projectId) : undefined;

  useEffect(() => {
    document.body.classList.remove("index-page");
    document.body.classList.add("portfolio-details-page");

    return () => {
      document.body.classList.remove("portfolio-details-page");
    };
  }, []);

  if (!project || !detail) {
    return <NotFoundPage />;
  }

  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <Header />
      <main className="main">
        <div className="page-title dark-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1>{project.title}</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="current">{project.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container">
            <div className="hero-section">
              <div className="row align-items-start">
                <div className="col-lg-7">
                  <div className="project-header">
                    <div className="project-meta">
                      <span className="category">{project.category}</span>
                      <span className="year">{detail.period || project.year}</span>
                    </div>
                    <h2 className="project-title">프로젝트 개요</h2>
                    <p className="project-summary">{project.description}</p>
                    <div className="project-tags">
                      {project.techStack.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="hero-image">
                    <img src={detail.heroImage || project.previewImage} alt={project.title} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="content-section">
              <div className="row">
                <div className="col-lg-8">
                  <div className="main-content">
                    <h2>개발 목적</h2>
                    {detail.purpose.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="project-specs">
                    <div className="spec-item">
                      <h5>프로젝트명</h5>
                      <p>{project.title}</p>
                    </div>
                    <div className="spec-item">
                      <h5>개발 기간</h5>
                      <p>{detail.period}</p>
                    </div>
                    <div className="spec-item">
                      <h5>사용 기술</h5>
                      <p>{project.techStack.join(" · ")}</p>
                    </div>
                    <div className="spec-item">
                      <h5>내가 구현한 부분</h5>
                      <p>{detail.role}</p>
                    </div>
                    <div className="spec-item">
                      <h5>GitHub 링크</h5>
                      <p>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      </p>
                    </div>
                    {detail.deploymentUrl && (
                      <div className="spec-item">
                        <h5>배포 링크</h5>
                        <p>
                          <a href={detail.deploymentUrl} target="_blank" rel="noopener noreferrer">
                            배포 보기
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="process-timeline">
              <div className="timeline-header">
                <h2>핵심 구현 포인트</h2>
              </div>
              <div className="timeline-steps">
                {detail.implementationPoints.map((point, index) => (
                  <div className="timeline-item" key={point.title}>
                    <div className="step-marker">
                      <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="step-content">
                      <h4>{point.title}</h4>
                      <p>{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tools-section">
              <div className="row">
                <div className="col-lg-7">
                  <h2>핵심 기능</h2>
                  <p>{project.summary}</p>
                  <div className="tools-grid">
                    <div className="tool-category">
                      <div className="tool-list">
                        {project.features.map((feature) => (
                          <span className="tool-item" key={feature}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <h2>문제 해결</h2>
                  {detail.troubleshooting.map((item) => (
                    <div className="detail-note" key={item.title}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {detail.gallery && detail.gallery.length > 0 && (
              <div className="feature-previews">
                <div className="preview-header">
                  <h2>화면 미리보기</h2>
                  <p>기존 상세 페이지에서 사용하던 대표 화면 자료를 공통 상세 페이지 안에 정리했습니다.</p>
                </div>
                <div className="feature-grid">
                  {detail.gallery.map((image) => (
                    <div className="feature-item" key={image.src}>
                      <figure className="feature-image">
                        <img src={image.src} alt={image.alt} className="img-fluid" loading="lazy" />
                      </figure>
                      <div className="feature-content">
                        <h3>{image.alt}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {detail.resultLinks && detail.resultLinks.length > 0 && (
              <div className="content-section">
                <div className="main-content">
                  <h2>확인 가능한 결과물</h2>
                  <div className="project-detail-links">
                    {detail.resultLinks.map((link) => (
                      <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.url}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="project-nav" data-aos="fade-up" data-aos-delay="100">
              <div className="nav-wrapper">
                <Link to={previousProject.detailUrl} className="nav-link prev-project">
                  <div className="nav-content">
                    <span className="nav-direction">← 이전 프로젝트</span>
                    <span className="nav-title">{previousProject.title}</span>
                  </div>
                </Link>
                <Link to="/#portfolio" className="nav-link all-projects">
                  <i className="bi bi-grid-3x3-gap" />
                  <span>전체 프로젝트</span>
                </Link>
                <Link to={nextProject.detailUrl} className="nav-link next-project">
                  <div className="nav-content">
                    <span className="nav-direction">다음 프로젝트 →</span>
                    <span className="nav-title">{nextProject.title}</span>
                  </div>
                </Link>
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

export default ProjectDetailPage;

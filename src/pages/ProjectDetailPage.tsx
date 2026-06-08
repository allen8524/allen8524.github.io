import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProjectDetailHero from "../components/project-detail/ProjectDetailHero";
import ProjectGallery from "../components/project-detail/ProjectGallery";
import ProjectImplementation from "../components/project-detail/ProjectImplementation";
import ProjectNavigation from "../components/project-detail/ProjectNavigation";
import ProjectOverview from "../components/project-detail/ProjectOverview";
import ProjectResultLinks from "../components/project-detail/ProjectResultLinks";
import ProjectTechStack from "../components/project-detail/ProjectTechStack";
import ProjectTroubleshooting from "../components/project-detail/ProjectTroubleshooting";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ScrollTop from "../components/sections/ScrollTop";
import { getProjectDetail } from "../data/projectDetails";
import { projects } from "../data/projects";
import { useGsapAnimations } from "../hooks/useGsapAnimations";
import NotFoundPage from "./NotFoundPage";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const detail = projectId ? getProjectDetail(projectId) : undefined;

  useGsapAnimations({ scope: "project", deps: [projectId] });

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
                  <Link to="/">홈</Link>
                </li>
                <li className="current">{project.title}</li>
              </ol>
            </nav>
          </div>
        </div>

        <section id="portfolio-details" className="portfolio-details section">
          <div className="container">
            <ProjectDetailHero detail={detail} project={project} />
            <ProjectOverview detail={detail} project={project} />
            <ProjectTechStack project={project} />
            <ProjectImplementation detail={detail} />
            <ProjectTroubleshooting detail={detail} />
            <ProjectGallery detail={detail} />
            <ProjectResultLinks detail={detail} project={project} />
            <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}

export default ProjectDetailPage;

import PageLayout from "../components/common/PageLayout";
import { useParams } from "react-router-dom";
import ProjectDetailHero from "../components/project-detail/ProjectDetailHero";
import ProjectGallery from "../components/project-detail/ProjectGallery";
import ProjectImplementation from "../components/project-detail/ProjectImplementation";
import ProjectNavigation from "../components/project-detail/ProjectNavigation";
import ProjectOverview from "../components/project-detail/ProjectOverview";
import ProjectResultLinks from "../components/project-detail/ProjectResultLinks";
import ProjectTroubleshooting from "../components/project-detail/ProjectTroubleshooting";
import { getProjectDetail } from "../data/projectDetails";
import { projects } from "../data/projects";
import { DEFAULT_PAGE_METADATA, NOT_FOUND_PAGE_METADATA, usePageMetadata } from "../hooks/usePageMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";
import NotFoundPage from "./NotFoundPage";
import "../styles/project-detail.css";

function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);
  const detail = project ? getProjectDetail(project) : undefined;
  const metadataImage = detail?.heroImage
    ? /^https?:\/\//i.test(detail.heroImage)
      ? detail.heroImage
      : new URL(detail.heroImage.replace(/^\/+/, ""), DEFAULT_PAGE_METADATA.url).href
    : DEFAULT_PAGE_METADATA.image;

  usePageMetadata({
    title: project && detail ? `${project.title} | 황민서 포트폴리오` : NOT_FOUND_PAGE_METADATA.title,
    description: project && detail ? project.description : NOT_FOUND_PAGE_METADATA.description,
    image: metadataImage,
    url: project ? `https://allen8524.github.io/#/projects/${project.id}` : DEFAULT_PAGE_METADATA.url,
  }, Boolean(project && detail));

  useScrollReveal({ scope: "project", routeKey: projectId });

  if (!project || !detail) {
    return <NotFoundPage />;
  }

  const isMobileProject = project.type === "mobile-app" || project.type === "game";
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <PageLayout pageClass="portfolio-details-page">
        <section id="portfolio-details" className={`portfolio-details section${isMobileProject ? " portfolio-details--mobile-project" : ""}`}>
          <div className="project-detail-container">
            <ProjectDetailHero detail={detail} project={project} />
            <div className="project-case-study">
              <ProjectOverview detail={detail} />
              <ProjectImplementation detail={detail} />
              <ProjectTroubleshooting detail={detail} />
            </div>
            <ProjectGallery detail={detail} />
            <ProjectResultLinks detail={detail} project={project} />
            <ProjectNavigation previousProject={previousProject} nextProject={nextProject} />
          </div>
        </section>
    </PageLayout>
  );
}

export default ProjectDetailPage;

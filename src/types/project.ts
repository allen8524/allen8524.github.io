export type ProjectId =
  | "cineflow"
  | "esports"
  | "shopping"
  | "bakery"
  | "movie-analysis"
  | "seoul-bike"
  | "undead-survivor"
  | "healthyup";

export type ProjectFilter = "spring" | "laravel" | "php" | "etc";

export type ProjectType = "web" | "data-analysis" | "mobile-app" | "game";

export type Project = {
  id: ProjectId;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  descriptionItems?: string[];
  image: string;
  previewImage: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  detailUrl: string;
  filter: ProjectFilter;
  type: ProjectType;
};

export type ProjectDetail = {
  projectId: ProjectId;
  developmentType: string;
  teamRole?: string;
  heroImage: string;
  dataFlow?: string[];
  implementationPoints: Array<{
    title: string;
    description: string;
  }>;
  troubleshooting: Array<{
    title: string;
    cause: string;
    solution: string;
  }>;
  resultLinks?: Array<{
    label: string;
    url: string;
  }>;
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
  deploymentUrl?: string;
  analysisResults?: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
};

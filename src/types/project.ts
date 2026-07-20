export type ProjectId =
  | "cineflow"
  | "esports"
  | "shopping"
  | "bakery"
  | "movie-analysis"
  | "seoul-bike"
  | "undead-survivor"
  | "healthyup";

export type ProjectFilter = "spring" | "laravel" | "php" | "data" | "etc";

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
  role: string;
  contribution: string;
  keyAchievements: string[];
  heroImage: string;
  purpose: string[];
  responsibilities?: string[];
  implementationPoints: Array<{
    title: string;
    description: string;
  }>;
  troubleshooting: Array<{
    title: string;
    description: string;
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
  architecture?: Array<{
    title: string;
    description: string;
  }>;
  dataFlow?: string[];
  analysisResults?: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
  learned?: string[];
  limitations?: string[];
};

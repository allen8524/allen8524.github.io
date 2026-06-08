export type ProjectFilter = "spring" | "laravel" | "php" | "data" | "etc";

export type ProjectType = "web" | "data-analysis" | "mobile-app" | "game";

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  previewImage: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  detailUrl: string;
  filter: ProjectFilter;
  type: ProjectType;
};

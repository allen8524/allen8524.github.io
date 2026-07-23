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

  // 이전 상세 데이터 구조와의 호환을 위한 선택 필드
  role?: string;
  contribution?: string;
  keyAchievements?: string[];
  purpose?: string[];
  responsibilities?: string[];
  learned?: string[];
  limitations?: string[];
  architecture?: Array<{
    title: string;
    description: string;
  }>;
  metrics?: Array<{
    label: string;
    value: string;
  }>;
};

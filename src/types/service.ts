export type ServiceIconKey =
  | "shield"
  | "user"
  | "bug"
  | "cart"
  | "film"
  | "database"
  | "chart"
  | "trophy"
  | "document"
  | "ticket"
  | "box"
  | "search"
  | "controller"
  | "shop";

export type ServiceFeature = {
  icon: ServiceIconKey;
  title: string;
  description?: string;
  source?: { label: string; url: string };
};

export type ServiceStep = {
  title: string;
  description: string;
};

export type ServiceProjectLink = {
  label: string;
  description: string;
  projectId: string;
};

export type ServiceDetail = {
  id: string;
  title: string;
  summary: string;
  introduction: string;
  icon: ServiceIconKey;
  image: string;
  imageAlt: string;
  features: ServiceFeature[];
  processTitle: string;
  processSteps: { title: string; description?: string }[];
  processOrdered?: boolean;
  alternateProcess?: ServiceStep;
  evidenceTitle: string;
  evidence: ServiceFeature[];
  sideInfo: {
    title: string;
    items: string[];
  }[];
  relatedProjects: ServiceProjectLink[];
};

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
  description: string;
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
  icon: ServiceIconKey;
  heroTitle: string;
  lead: string;
  introTitle: string;
  intro: string;
  features: ServiceFeature[];
  processTitle: string;
  processSteps: ServiceStep[];
  evidenceTitle: string;
  evidence: ServiceFeature[];
  sideInfo: {
    title: string;
    items: string[];
  }[];
  relatedProjects: ServiceProjectLink[];
};

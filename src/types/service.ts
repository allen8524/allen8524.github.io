export type ServiceFeature = {
  icon: string;
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
  icon: string;
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

import { recentAchievements } from "./awards";
import { projects } from "./projects";

export const stats = [
  {
    id: "projects",
    value: projects.length,
    label: "주요 프로젝트",
    delay: 200,
  },
  {
    id: "awards",
    value: recentAchievements.length,
    label: "수상 경험",
    delay: 300,
  },
  {
    id: "certificates",
    value: 1,
    label: "취득 자격증",
    delay: 400,
  },
] as const;

export const statsAchievements = [
  {
    id: "laravel-framework",
    icon: "bi bi-trophy",
    title: "Laravel 웹 솔루션 경진대회",
    description: "2025.12 수상",
  },
  {
    id: "aws-service",
    icon: "bi bi-star",
    title: "AWS 활용능력 경진대회",
    description: "2025.12 수상",
  },
  {
    id: "online-shopping",
    icon: "bi bi-gem",
    title: "온라인 쇼핑몰개발 경진대회",
    description: "2025.06 수상",
  },
] as const;

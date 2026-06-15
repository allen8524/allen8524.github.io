# Minseo Hwang Portfolio

React, TypeScript, Vite 기반으로 구성한 개인 개발자 포트폴리오 사이트입니다.

Spring Boot, Laravel, PHP 기반 백엔드 프로젝트를 중심으로 데이터 분석, iOS 앱, Unity 게임 프로젝트까지 구현 흐름과 문제 해결 과정을 정리합니다.

## Site

| Item | Value |
| --- | --- |
| URL | https://allen8524.github.io/ |
| Repository | https://github.com/allen8524/allen8524.github.io |
| Deployment | GitHub Pages |
| Build output | `dist/` |
| Vite base | `/` |

## Tech Stack

| Area | Stack |
| --- | --- |
| App | React, TypeScript, Vite |
| Routing | React Router |
| Styling | CSS, Bootstrap, Bootstrap Icons |
| Data | TypeScript data modules |
| Deployment | GitHub Actions, GitHub Pages |
| Portfolio topics | Spring Boot, Laravel, PHP, MySQL, JPA, Flyway, Python, Swift, Unity |

## Project Structure

```text
src/
  App.tsx
  main.tsx
  components/
    portfolio/
    sections/
  data/
    projectDetails.ts
    projects.ts
  pages/
    HomePage.tsx
    NotFoundPage.tsx
    ProjectDetailPage.tsx
  styles/
  types/
```

## Main Features

- React component-based home page
- TypeScript-driven project cards
- React state-based project filtering
- React Router project detail pages at `/projects/:projectId`
- HashRouter-based routing for GitHub Pages refresh compatibility
- React state-based mobile sidebar, ScrollTop button, current-section highlighting, and image preview modal
- Preserved legacy visual assets under `assets/`

## Projects

| Project | Category | Detail Route | GitHub |
| --- | --- | --- | --- |
| CineFlow 영화 예매 관리 시스템 | Spring Boot | `/#/projects/cineflow` | https://github.com/allen8524/cineflow-spring-boot |
| e스포츠 포털 및 경기관리 웹사이트 | Laravel | `/#/projects/esports` | https://github.com/allen8524/esports-portal-management |
| 쇼핑몰 판매관리 사이트 | PHP | `/#/projects/shopping` | https://github.com/allen8524/shopping-mall-management-php |
| 베이커리 판매관리 웹사이트 | Laravel | `/#/projects/bakery` | https://github.com/allen8524/bakery-sales-management-laravel |
| Cine21 영화 데이터 PCA·회귀 분석 | Data Analysis | `/#/projects/movie-analysis` | https://github.com/allen8524/movie-pca-rating-analysis |
| Undead Survivor 모바일 생존 게임 | Unity/C# | `/#/projects/undead-survivor` | https://github.com/allen8524/undead-survivor-unity |
| HealthyUp iOS 건강관리 앱 | iOS | `/#/projects/healthyup` | https://github.com/allen8524/healthyup-ios |

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

`npm run deploy`는 로컬에서 배포용 빌드가 가능한지 확인하는 스크립트입니다. 실제 배포는 `.github/workflows/deploy.yml`의 GitHub Actions workflow가 `main` 브랜치 push 시 `dist/`를 GitHub Pages로 배포합니다.

## Deployment Notes

이 저장소는 `allen8524.github.io` user site 저장소이므로 GitHub Pages 루트 도메인에 배포됩니다. 따라서 Vite `base`는 `/`로 유지합니다.

GitHub repository settings에서 Pages source를 GitHub Actions로 설정하면 workflow가 `npm ci`, `npm run build`, artifact upload, Pages deploy 순서로 실행됩니다.

## Legacy Cleanup

기존 정적 HTML 기반 페이지는 React 전환 이후 제거했습니다.

현재 포트폴리오의 메인 흐름은 `src/` 아래 React 컴포넌트와 TypeScript 데이터 파일을 기준으로 동작합니다. `assets/`는 프로젝트 이미지, 아이콘, 이력서 PDF 등 정적 리소스 보관 용도로 유지합니다.

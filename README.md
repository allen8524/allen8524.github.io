# Minseo Hwang Portfolio

React, TypeScript, Vite 기반으로 구성한 개인 개발 포트폴리오 사이트입니다.

Spring Boot, Laravel, PHP 기반 웹 프로젝트를 중심으로 데이터 분석, iOS, Unity 프로젝트까지 구현 내용과 문제 해결 과정을 정리했습니다.

## 프로젝트 소개

이 저장소는 `allen8524.github.io` GitHub Pages user site 저장소입니다. 홈 화면, 프로젝트 목록, 프로젝트 상세 페이지, 서비스 상세 페이지를 React 컴포넌트와 TypeScript 데이터 모듈 기반으로 구성합니다.

정적 리소스는 기존 `assets/` 폴더에 유지하고, 화면에 표시되는 프로젝트와 상세 내용은 `src/data/`의 TypeScript 파일에서 관리합니다.

## 사이트 정보

| 항목 | 내용 |
| --- | --- |
| Site URL | https://allen8524.github.io/ |
| Repository | https://github.com/allen8524/allen8524.github.io |
| Deployment | GitHub Pages |
| Build output | `dist/` |
| Vite base | `/` |

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| App | React, TypeScript, Vite |
| Routing | React Router |
| Styling | CSS, Bootstrap, Bootstrap Icons |
| Data | TypeScript data modules |
| Deployment | GitHub Pages, GitHub Actions |
| 프로젝트 주제 | Spring Boot, Laravel, PHP, MySQL, JPA, Flyway, Python, Swift, Unity |

## 주요 기능

- React 컴포넌트 기반 홈 화면
- TypeScript 데이터 모듈 기반 프로젝트 카드 렌더링
- React Router 기반 프로젝트 상세 페이지
- React Router 기반 서비스 상세 페이지
- HashRouter 기반 GitHub Pages 라우팅
- 프로젝트 필터링
- 이미지 미리보기 모달
- 모바일 사이드바
- ScrollTop 버튼
- 현재 섹션 하이라이팅
- Stats, Skills, Resume 섹션의 JSX 및 데이터 배열 기반 렌더링
- `assets/` 폴더의 이미지, 아이콘, 이력서 PDF 등 정적 리소스 유지

## 프로젝트 구조

```text
src/
  App.tsx
  main.tsx
  components/
    common/
    portfolio/
    project-detail/
    service-detail/
    sections/
  data/
    awards.ts
    projectDetails.ts
    projects.ts
    resume.ts
    services.ts
    skills.ts
    stats.ts
  hooks/
    useScrollReveal.ts
    useServiceGsapAnimations.ts
  pages/
    HomePage.tsx
    NotFoundPage.tsx
    ProjectDetailPage.tsx
    ServiceDetailPage.tsx
  styles/
    app.css
    global.css
    portfolio.css
    project-detail.css
    service-detail.css
    troubleshooting.css
  types/
    project.ts
    service.ts
  utils/
    typography.ts
```

`src/main.tsx`에서는 전역 스타일, 앱 스타일, 포트폴리오, 프로젝트 상세, 서비스 상세, 트러블슈팅 스타일을 순서대로 불러옵니다. Bootstrap, Bootstrap Icons, 기존 테마 CSS는 `src/styles/global.css`에서 유지합니다.

## 프로젝트 목록

| 프로젝트 | 기술 | 상세 경로 | GitHub |
| --- | --- | --- | --- |
| CineFlow 영화 예매 관리 시스템 | Spring Boot | `/#/projects/cineflow` | https://github.com/allen8524/cineflow-spring-boot |
| e스포츠 포털 및 경기관리 웹사이트 | Laravel | `/#/projects/esports` | https://github.com/allen8524/esports-portal-management |
| 쇼핑몰 판매관리 사이트 | PHP | `/#/projects/shopping` | https://github.com/allen8524/shopping-mall-management-php |
| 베이커리 판매관리 웹사이트 | Laravel | `/#/projects/bakery` | https://github.com/allen8524/bakery-sales-management-laravel |
| 서울 공공자전거 수요 예측 · 이용자 유형 분석 | R 데이터 분석 | `/#/projects/seoul-bike` | https://github.com/allen8524/seoul-bike-demand-analysis |
| Cine21 영화 데이터 PCA·회귀 분석 | Python 데이터 분석 | `/#/projects/movie-analysis` | https://github.com/allen8524/movie-pca-rating-analysis |
| Undead Survivor 모바일 생존 게임 | Unity C# | `/#/projects/undead-survivor` | https://github.com/allen8524/undead-survivor-unity |
| HealthyUp iOS 건강관리 앱 | Swift iOS | `/#/projects/healthyup` | https://github.com/allen8524/healthyup-ios |

## 실행 방법

```bash
npm install
npm run dev
npm run build
npm run preview
npm run deploy
```

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | 개발 서버를 실행합니다. |
| `npm run build` | TypeScript 빌드 후 Vite 프로덕션 빌드를 실행합니다. |
| `npm run preview` | 빌드 결과를 로컬에서 미리 확인합니다. |
| `npm run deploy` | 로컬에서 배포용 빌드 가능 여부를 확인합니다. 내부적으로 `npm run build`를 실행합니다. |

## 배포 방식

이 저장소는 `allen8524.github.io` user site 저장소이며 GitHub Pages 루트 도메인에 배포됩니다. 따라서 Vite `base`는 `/`로 유지합니다.

`main` 브랜치에 변경 사항이 반영되면 GitHub Actions workflow가 실행됩니다. 배포 workflow는 다음 순서로 진행됩니다.

1. 저장소 checkout
2. Node.js 22 설정
3. `npm ci`로 의존성 설치
4. `npm run build` 실행
5. `dist/` 결과물을 Pages artifact로 업로드
6. GitHub Pages로 배포

## 정리된 구조 설명

기존 정적 HTML 기반 구조에서 React, TypeScript, Vite 기반 구조로 전환되었습니다. 홈 화면의 주요 섹션은 React 컴포넌트와 TypeScript 데이터 배열을 조합해 렌더링합니다.

Stats, Skills, Resume 섹션은 JSX와 데이터 배열 기반 구조로 정리되어 있으며, 프로젝트 카드와 프로젝트 상세 페이지 내용도 TypeScript data module에서 관리합니다.

HTML 문자열을 직접 주입하는 방식은 제거되었고, 유지보수가 필요한 화면 데이터는 `src/data/` 안의 목적별 파일로 분리되어 있습니다.

`assets/` 폴더는 프로젝트 이미지, 아이콘, 이력서 PDF 등 정적 리소스를 보관하는 용도로 유지합니다.

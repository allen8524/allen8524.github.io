# 황민서 개발 포트폴리오

**안정적인 서비스를 만드는 백엔드 개발자를 목표로 합니다.**

프로젝트의 결과 화면뿐 아니라 인증·권한, 트랜잭션, 데이터 모델링, 상태 관리와 문제 해결 과정을 함께 기록하는 개인 개발 포트폴리오입니다.

[포트폴리오 바로가기](https://allen8524.github.io/) · [이력서 PDF](https://allen8524.github.io/assets/files/Hwang_Minseo_Resume.pdf)

[![React 19](https://img.shields.io/badge/React-19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript 5.8](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite 7](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-222222?style=flat-square&logo=github)](https://pages.github.com/)

[![Deploy](https://github.com/allen8524/allen8524.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/allen8524/allen8524.github.io/actions/workflows/deploy.yml)
[![Code Quality](https://github.com/allen8524/allen8524.github.io/actions/workflows/code-quality.yml/badge.svg?branch=main)](https://github.com/allen8524/allen8524.github.io/actions/workflows/code-quality.yml)
[![Frontend QA](https://github.com/allen8524/allen8524.github.io/actions/workflows/frontend-qa.yml/badge.svg?branch=main)](https://github.com/allen8524/allen8524.github.io/actions/workflows/frontend-qa.yml)
[![Pull Request Check](https://github.com/allen8524/allen8524.github.io/actions/workflows/pull-request.yml/badge.svg)](https://github.com/allen8524/allen8524.github.io/actions/workflows/pull-request.yml)

## 프로젝트

| 프로젝트 | 분류 | 핵심 내용 | 상세 |
| --- | --- | --- | --- |
| CineFlow 영화 예매 관리 시스템 | Spring Boot | 예매·좌석·결제·관리자 운영 | [보기](https://allen8524.github.io/#/projects/cineflow) |
| e스포츠 포털 및 경기관리 웹사이트 | Laravel | 경기 결과 기반 순위·콘텐츠 관리 | [보기](https://allen8524.github.io/#/projects/esports) |
| 쇼핑몰 판매관리 사이트 | PHP | 장바구니·주문·관리자 주문 관리 | [보기](https://allen8524.github.io/#/projects/shopping) |
| 베이커리 판매관리 웹사이트 | Laravel | 제품·재고·판매 내역 관리 | [보기](https://allen8524.github.io/#/projects/bakery) |
| 서울 공공자전거 수요 예측·이용 유형 분석 | R | 회귀·분류·군집 분석 | [보기](https://allen8524.github.io/#/projects/seoul-bike) |
| Cine21 영화 데이터 PCA·회귀 분석 | Python | 전처리·PCA·상관·회귀 분석 | [보기](https://allen8524.github.io/#/projects/movie-analysis) |
| Undead Survivor 모바일 생존 게임 | Unity · C# | 자동 공격·적 스폰·오브젝트 풀링 | [보기](https://allen8524.github.io/#/projects/undead-survivor) |
| HealthyUp iOS 건강관리 앱 | Swift · UIKit | BMI·운동 정보·영상 재생 | [보기](https://allen8524.github.io/#/projects/healthyup) |

각 상세 페이지는 핵심 정보, 구현 흐름과 설계, 트러블슈팅, 결과 화면 및 관련 코드를 중심으로 구성합니다. 팀 프로젝트에는 담당 역할을 함께 기록합니다.

## 백엔드 구현 경험

| 영역 | 핵심 경험 | 상세 |
| --- | --- | --- |
| 인증·권한 관리 | 로그인, 세션, 사용자·관리자 접근 제어 | [보기](https://allen8524.github.io/#/services/auth) |
| 예매·주문 흐름 | 예매·주문 번호, 상태 연결 및 저장 | [보기](https://allen8524.github.io/#/services/order) |
| 관리자 데이터 운영 | 영화·경기·뉴스·제품 CRUD | [보기](https://allen8524.github.io/#/services/board) |
| DB 설계 및 데이터 처리 | JPA, Flyway, MySQL, CSV 분석 | [보기](https://allen8524.github.io/#/services/database) |

CineFlow의 좌석 선택 다이어그램은 Controller, Spring Security, SeatService, 데이터베이스 및 Thymeleaf 화면 반환의 관계를 설명하며, 각 설명에서 실제 구현 코드로 이동할 수 있습니다.

## 기술 스택

| 구분 | 기술 |
| --- | --- |
| 애플리케이션 | React 19, TypeScript 5.8, React Router 7 |
| 빌드 | Vite 7, Node.js 22, npm |
| UI | 역할별 CSS, Bootstrap 5.3.8, Bootstrap Icons 1.13.1, GSAP |
| 이미지 최적화 | Python 3.12, Pillow 11.3.0, WebP |
| 코드 품질 | TypeScript strict, ESLint, React Hooks 규칙, Stylelint |
| 브라우저 검사 | Playwright, axe-core |
| 배포 | GitHub Actions, GitHub Pages |

위 표는 포트폴리오 사이트 자체의 기술 스택이며, 소개하는 개별 백엔드 프로젝트의 기술 스택과 구분합니다.

## 설계 및 주요 기능

- 공통 `PageLayout`을 통한 헤더·본문·푸터·상단 이동 기능 재사용
- 프로젝트와 구현 경험 상세 페이지의 지연 로딩 및 라우트 오류 복구
- 콘텐츠 데이터와 UI 컴포넌트의 분리, 고유 프로젝트 ID 기반 구현 사례 연결
- 프로젝트 필터, 상세 페이지 이전·다음 이동, 이미지 갤러리 및 확대 모달
- 반응형 상단 내비게이션, 현재 섹션 표시, 라이트·다크 테마
- 키보드 조작, 본문 바로가기, 모달 포커스 관리, 모션 감소 설정 대응
- 페이지별 제목·설명·대표 이미지 메타데이터 및 404 화면

### 라우팅

| 경로 | 화면 |
| --- | --- |
| `/#/` | 홈 |
| `/#/projects/:projectId` | 프로젝트 상세 |
| `/#/services/:serviceId` | 구현 경험 상세 |
| 등록되지 않은 해시 경로 | 404 |

GitHub Pages의 정적 호스팅 환경에서 새로고침 시 라우팅을 유지하기 위해 HashRouter를 사용합니다. 상세 페이지 메타데이터는 클라이언트에서 갱신하며, 개별 상세 URL의 독립적인 검색 엔진 색인을 보장하지는 않습니다.

## 프로젝트 구조

```text
.
├── .github/workflows/       # 빌드, 코드 품질, 브라우저 QA, 배포
├── assets/
│   ├── css/                 # 기본 스타일, 테마, 섹션 스타일
│   ├── files/               # 이력서 PDF
│   ├── img/                 # 원본 이미지 및 파비콘
│   └── vendor/              # Bootstrap 및 아이콘
├── scripts/
│   ├── frontend-qa.mjs      # 격리된 브라우저 회귀 검사
│   └── optimize-thumbnails.py
├── src/
│   ├── components/
│   │   ├── about/           # 백엔드 구현 다이어그램
│   │   ├── common/          # 공통 레이아웃, Hero, 라우팅 보조 기능
│   │   ├── portfolio/       # 프로젝트 카드, 필터, 이미지 모달
│   │   ├── project-detail/  # 프로젝트 상세 컴포넌트
│   │   ├── service-detail/  # 구현 경험 상세 컴포넌트
│   │   └── sections/        # 홈 섹션 및 공통 화면 구성 요소
│   ├── data/                # 포트폴리오 콘텐츠
│   ├── hooks/               # 테마, 스크롤 효과, 메타데이터
│   ├── pages/               # 홈, 상세 페이지, 404
│   ├── styles/              # 레이아웃, 컴포넌트, 상세 페이지 CSS
│   ├── types/               # 프로젝트·서비스 타입
│   ├── utils/               # 이미지·문자열·기술 아이콘 유틸리티
│   ├── App.tsx
│   └── main.tsx
├── eslint.config.mjs
├── stylelint.config.mjs
├── package.json
├── package-lock.json
└── vite.config.ts
```

### 콘텐츠 관리

| 파일 | 역할 |
| --- | --- |
| `src/data/projects.ts` | 프로젝트 목록, 필터, 카드 정보 |
| `src/data/projectDetails.ts` | 프로젝트별 상세 콘텐츠 |
| `src/data/services.ts` | 백엔드 구현 경험 및 관련 프로젝트 |
| `src/data/resume.ts` | 학력·경력·활동 |
| `src/data/awards.ts` | 수상 내역 |
| `src/data/skills.ts` | 기술 및 경험 |

### 스타일과 이미지

`assets/css/`의 기본 스타일과 `src/styles/`의 컴포넌트 스타일을 분리하고, CSS 사용자 정의 속성을 통해 테마 색상을 관리합니다. CSS Modules를 사용하는 구조는 아닙니다.

빌드 전 이미지 최적화 스크립트는 헤더 프로필(96px), Hero 프로필(800px), 프로젝트 이미지(최대 960px)의 WebP 썸네일을 생성합니다. 원본보다 작은 결과만 사용하고, 생성 파일이 없는 경우 원본으로 대체합니다. 확대용 원본과 공개 이미지 경로는 유지합니다.

생성된 `assets/generated-thumbnails/`, `dist/`, `node_modules/`는 Git 추적 대상에서 제외합니다.

## 로컬 실행

Node.js 22와 npm을 권장합니다.

```bash
npm ci
npm run dev
```

기본 개발 서버: http://localhost:5173

### 이미지 최적화 및 프로덕션 빌드

Python 3.12 환경에서 다음 명령을 실행하면 CI와 동일한 이미지 생성 단계를 재현할 수 있습니다. Python 없이도 기본 빌드는 가능하며, 생성된 썸네일이 없다면 원본 이미지를 사용합니다.

```bash
python -m pip install Pillow==11.3.0
python scripts/optimize-thumbnails.py
npm run build
npm run preview
```

| 명령 | 기능 |
| --- | --- |
| `npm run dev` | 개발 서버 실행 |
| `npm run build` | TypeScript 검사 및 Vite 프로덕션 빌드 |
| `npm run preview` | 로컬 빌드 결과 미리보기 |
| `npm run deploy` | 로컬 빌드 실행(실제 배포는 GitHub Actions 담당) |

## 자동화된 품질 검사

| 검사 | 범위 |
| --- | --- |
| TypeScript | 타입 오류, 미사용 지역 변수 및 매개변수 |
| ESLint | React Hooks 및 설정된 코드 품질 규칙 |
| Stylelint | CSS 속성, 중복 선언, 선택자 및 구문 검사 |
| Playwright | 페이지 로딩, 가로 오버플로, 컨트롤 잘림, 콘솔·런타임 오류 및 주요 기능 |
| axe-core | 자동화 가능한 WCAG 관련 접근성 규칙 |

브라우저 QA는 Chromium에서 **16개 라우트 × 8개 화면 크기 × 2개 테마(256개 화면 조합)**를 검사하도록 구성합니다. 별도로 모바일과 데스크톱에서 본문 바로가기, 테마 전환, 다이어그램, 메뉴, 필터, 상세 페이지 이동, 모달 및 뒤로가기를 검사합니다.

검사는 운영 사이트가 아닌 CI 내부의 로컬 빌드를 대상으로 실행합니다. 외부 요청은 차단하며 일부 외부 이미지는 테스트용 이미지로 대체합니다. 자동화된 접근성 검사는 전체 WCAG 준수나 모든 브라우저의 호환성을 보장하지 않습니다. 실제 통과 여부는 상단 Actions 배지 및 실행 로그를 기준으로 확인합니다.

## CI/CD

| 워크플로 | 실행 조건 | 역할 |
| --- | --- | --- |
| [Pull Request Check](.github/workflows/pull-request.yml) | main 대상 PR | 이미지 생성 및 빌드 |
| [Code Quality](.github/workflows/code-quality.yml) | main push·PR·수동 실행 | TypeScript, ESLint, Stylelint |
| [Frontend QA](.github/workflows/frontend-qa.yml) | main push·PR·수동 실행 | 로컬 빌드의 브라우저 및 접근성 검사 |
| [Deploy GitHub Pages](.github/workflows/deploy.yml) | main push·수동 실행 | 이미지 생성, 빌드, Pages Artifact 업로드 및 배포 |

배포는 빌드 성공을 기준으로 수행되며, 코드 품질과 브라우저 QA는 별도 워크플로로 실행합니다. 따라서 배포 성공과 전체 QA 통과는 구분해서 확인합니다.

# 황민서 개발 포트폴리오

React와 TypeScript로 구성한 개인 개발 포트폴리오입니다.

백엔드 프로젝트를 중심으로 구현 흐름, 핵심 설계, 문제 해결 과정과 결과 화면을 정리했습니다.

<p>
  <a href="https://allen8524.github.io/">
    <img src="https://img.shields.io/badge/Live%20Site-allen8524.github.io-2563EB?style=flat-square&logo=githubpages&logoColor=white" alt="Live Site" />
  </a>
  <img src="https://img.shields.io/badge/React-19.1-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19.1" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5.8" />
  <img src="https://img.shields.io/badge/Vite-7.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 7" />
  <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=flat-square&logo=github&logoColor=white" alt="GitHub Pages" />
</p>

<p>
  <a href="https://github.com/allen8524/allen8524.github.io/actions/workflows/deploy.yml">
    <img src="https://github.com/allen8524/allen8524.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy GitHub Pages" />
  </a>
  <a href="https://github.com/allen8524/allen8524.github.io/actions/workflows/pull-request.yml">
    <img src="https://github.com/allen8524/allen8524.github.io/actions/workflows/pull-request.yml/badge.svg" alt="Pull Request Check" />
  </a>
</p>

## 사이트 개요

| 항목 | 내용 |
| --- | --- |
| 사이트 | [https://allen8524.github.io/](https://allen8524.github.io/) |
| 형태 | GitHub Pages 사용자 사이트 |
| 프레임워크 | React 19 · TypeScript · Vite 7 |
| 라우팅 | React Router `HashRouter` |
| 배포 | GitHub Actions · GitHub Pages |
| 콘텐츠 관리 | `src/data/` TypeScript 데이터 모듈 |

홈 화면에서는 소개, 기술, 이력, 프로젝트, 구현 경험, 트러블슈팅과 연락처를 확인할 수 있습니다.

프로젝트 상세 페이지에서는 프로젝트 정보를 단순 나열하지 않고 다음 흐름으로 정리합니다.

1. 프로젝트 핵심 정보
2. 구현 흐름
3. 핵심 설계
4. 트러블슈팅
5. 결과 화면과 관련 링크

개인 프로젝트는 구현 범위를 중심으로 보여주고, 팀 프로젝트는 역할과 기여도를 함께 표시합니다.

## 주요 기능

- React 컴포넌트 기반 단일 페이지 포트폴리오
- TypeScript 데이터 모듈 기반 프로젝트·기술·이력 관리
- 프로젝트·서비스별 상세 라우팅
- 프로젝트 필터링과 상세 페이지 간 이전·다음 이동
- 페이지별 제목, 설명, 대표 이미지 메타데이터 적용
- 이미지 갤러리와 미리보기 모달
- Scroll Reveal·GSAP 기반 화면 전환 효과
- 반응형 사이드바와 현재 섹션 표시
- 햄스터 레버형 테마 토글
- ScrollTop, Preloader, 404 페이지
- Pull Request 빌드 검사와 main 브랜치 자동 배포

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

프로젝트 카드와 상세 내용은 `src/data/projects.ts`, `src/data/projectDetails.ts`에서 관리합니다.

## 구현 경험

서비스 상세 페이지는 여러 프로젝트에서 반복해서 다룬 구현 경험을 기능 단위로 정리합니다.

| 구분 | 내용 | 경로 |
| --- | --- | --- |
| 인증·권한 관리 | 로그인·세션·사용자/관리자 접근 분리 | `/#/services/auth` |
| 예매·주문 흐름 관리 | 예매번호·주문번호 기반 저장과 상태 연결 | `/#/services/order` |
| 관리자 데이터 운영 | 영화·경기·뉴스·제품 CRUD | `/#/services/board` |
| DB 설계 및 데이터 처리 | JPA·Flyway·MySQL·CSV 분석 | `/#/services/database` |

서비스 내용은 `src/data/services.ts`에서 관리합니다.

## 기술 스택

### Application

- React 19
- TypeScript 5.8
- Vite 7
- React Router 7
- styled-components
- GSAP

### UI

- CSS 모듈형 스타일 파일
- Bootstrap 정적 스타일 자산
- Bootstrap Icons
- 반응형 레이아웃

### Deployment

- GitHub Pages
- GitHub Actions
- Node.js 22
- `npm ci` 기반 재현 가능한 빌드

## 라우팅

```text
/                         홈
/#/projects/:projectId    프로젝트 상세
/#/services/:serviceId    구현 경험 상세
/*                        404
```

GitHub Pages 새로고침과 정적 호스팅 환경을 고려해 `HashRouter`를 사용합니다.

## 데이터 구성

```text
src/data/
├── awards.ts             수상 내역
├── projectDetails.ts     프로젝트 상세 콘텐츠
├── projects.ts           프로젝트 목록·필터·카드 정보
├── resume.ts             학력·활동·경력 정보
├── services.ts           구현 경험 상세 콘텐츠
├── skills.ts             기술과 경험
└── stats.ts              메인 통계 정보
```

화면 컴포넌트와 콘텐츠 데이터를 분리해 프로젝트 추가와 문구 수정 시 JSX 구조를 직접 변경하지 않도록 구성했습니다.

## 핵심 구조

```text
src/
├── components/
│   ├── common/
│   ├── portfolio/
│   ├── project-detail/
│   ├── service-detail/
│   └── sections/
├── data/
├── hooks/
├── pages/
├── styles/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## 실행 방법

```bash
npm install
npm run dev
```

프로덕션 빌드와 미리보기:

```bash
npm run build
npm run preview
```

| 명령어 | 설명 |
| --- | --- |
| `npm run dev` | Vite 개발 서버 실행 |
| `npm run build` | TypeScript 검사 후 프로덕션 빌드 |
| `npm run preview` | `dist/` 빌드 결과 미리보기 |
| `npm run deploy` | 배포 전 로컬 빌드 검사 |

## CI/CD

### Pull Request

`main` 브랜치 대상 Pull Request가 생성되면 다음 검사를 수행합니다.

1. 저장소 Checkout
2. Node.js 22 설정
3. `npm ci`
4. `npm run build`

### GitHub Pages 배포

`main` 브랜치에 변경 사항이 반영되면 다음 순서로 자동 배포합니다.

1. 저장소 Checkout
2. Node.js 22 설정
3. 의존성 설치
4. TypeScript·Vite 빌드
5. `dist/` Pages Artifact 업로드
6. GitHub Pages 배포

## 최근 구조 개선

- 프로젝트 상세 메타 정보를 히어로 영역에 통합
- 핵심 구현 흐름을 최대 5단계로 압축
- 프로젝트별 중복 섹션과 중복 링크 제거
- 개인 프로젝트와 팀 프로젝트 표시 기준 분리
- 프로젝트 기술 스택 표시 방식 통일
- 백엔드 중심 프로젝트 필터 구조로 정리
- Pull Request 빌드 검사 추가

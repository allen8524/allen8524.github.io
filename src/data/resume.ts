export const resumeSection = {
  title: "이력 및 활동",
} as const;

export const resumeJourney = {
  title: "활동 및 경험",
} as const;

export const resumeActivities = [
  {
    id: "indev",
    kind: "activity",
    year: "2026.05 – 2026.12",
    title: "인덕대학교 전공동아리 - INDEV",
    summaries: [
      "AI 기반 소상공인 직원 · 스케줄 관리 플랫폼",
      "스케줄 자동 생성 · 인건비 시뮬레이션 기획 및 구현",
    ],
  },
  {
    id: "library-work",
    kind: "experience",
    year: "2026.03 – 2026.06",
    title: "인덕대학교 도서관",
    summaries: [
      "자료 정리 및 이용자 응대 보조",
      "업무 흐름에 맞춘 문서 · 운영 지원",
    ],
  },
  {
    id: "sangsangirum-work",
    kind: "experience",
    year: "2026.07 – 2026.12",
    title: "상상이룸센터(노원진로직업체험지원센터)",
    summaries: [
      "청소년 진로체험 프로그램 운영 보조",
      "참여자 안내 · 활동 재료 및 행정자료 정리",
    ],
  },
  {
    id: "codeattack",
    kind: "activity",
    year: "2025.03 – 2026.09",
    title: "인덕대학교 스터디 - CodeAttack",
    summaries: [
      "정보처리산업기사 및 IT 자격증 스터디",
      "자료구조 · 운영체제 · 네트워크 CS 학습",
    ],
  },
  {
    id: "devup",
    kind: "activity",
    year: "2025.04 – 2025.12",
    title: "인덕대학교 스터디 - DevUp",
    summaries: [
      "백준 기반 알고리즘 문제 풀이",
      "풀이 공유 · 코드 리뷰를 통한 접근 방식 개선",
    ],
  },
  {
    id: "ifp",
    kind: "activity",
    year: "2022.03 – 2022.12",
    title: "인덕대학교 전공동아리 - IFP",
    summaries: [
      "알고리즘 · 기초 프로그래밍 학습",
      "Notion 학습 자료 정리 · 문제 풀이 및 코드 리뷰",
    ],
  },
] as const;

export const resumeEducation = {
  title: "학력 및 자격",
  schools: [
    {
      id: "university",
      primary: true,
      icon: "bi bi-award",
      name: "컴퓨터소프트웨어학과",
      institution: "인덕대학교",
      year: "2022.03 – 2027.02",
    },
    {
      id: "high-school",
      primary: false,
      icon: "bi bi-laptop",
      name: "자동화기계과",
      institution: "인덕과학기술고등학교",
      year: "2019.03 – 2022.01",
    },
  ],
} as const;

export const resumeSection = {
  title: "이력 및 활동",
  description: "학습 과정, 활동 기간, 자격 · 수상",
} as const;

export const resumeJourney = {
  title: "활동 및 경험",
  description: "스터디, 학내 활동, 프로젝트를 통한 CS 기초와 백엔드 중심 구현",
  kicker: "주요 경험 요약",
} as const;

export const resumeActivities = [
  {
    id: "indev",
    year: "2026.05 - 진행 중",
    title: "인덕대학교 전공동아리 - INDEV",
    organization: "팀 프로젝트 및 CS",
    summaries: [
      "AI 기반 소상공인 직원 · 스케줄 관리 플랫폼",
      "매출 패턴 · 직원 선호도 기반 스케줄 자동 생성",
      "구인 공고 자동 작성",
      "인건비 시뮬레이션 기능 기획 · 구현",
    ],
  },
  {
    id: "library-work",
    year: "2026.03 - 진행 중",
    title: "국가근로장학생",
    organization: "인덕대학교 도서관",
    summaries: [
      "인덕대학교 도서관 국가근로 근무",
      "자료 정리 및 이용자 응대 보조",
      "업무 흐름에 맞춘 문서 · 운영 지원",
    ],
  },
  {
    id: "codeattack",
    year: "2025.03 - 2026.09",
    title: "인덕대학교 스터디 - CodeAttack",
    organization: "CS 및 자격증 스터디",
    summaries: [
      "정보처리산업기사 및 IT 자격증 스터디",
      "자료구조 · 운영체제 · 네트워크 CS 학습",
      "백준 알고리즘 문제 풀이",
      "정기 발표와 학습 자료 정리",
    ],
  },
  {
    id: "ifp",
    year: "2022.03 - 2022.12",
    title: "인덕대학교 전공동아리 - IFP",
    organization: "알고리즘 · 기초 프로그래밍",
    summaries: [
      "Notion 기반 학습 자료 정리 · 공유",
      "알고리즘 · 기초 프로그래밍 학습",
      "코드 리뷰와 문제 풀이 공유",
      "협업 중심 스터디 참여",
    ],
  },
] as const;

export const resumeEducation = {
  title: "학력 및 자격",
  description: "학력과 자격, 수상 이력 중심의 학습",
  schools: [
    {
      id: "university",
      primary: true,
      delay: 300,
      icon: "bi bi-award",
      name: "컴퓨터소프트웨어학과",
      institution: "인덕대학교",
      year: "2022.03 - 2027.02",
      description:
        "백엔드 웹 프로젝트를 중심으로 예매 · 주문 · 콘텐츠 관리 기능을 구현하고, 데이터 분석 · 모바일 · 게임 프로젝트로 구현 범위를 확장했습니다.",
      honors: ["학점 4.0"],
    },
    {
      id: "high-school",
      primary: false,
      delay: 350,
      icon: "bi bi-laptop",
      name: "자동화기계과",
      institution: "인덕과학기술고등학교",
      year: "2019.03 - 2022.01",
      description: "기초 공학 역량을 바탕으로 문제 해결 중심의 학습 태도를 갖추었습니다.",
      honors: [],
    },
  ],
} as const;

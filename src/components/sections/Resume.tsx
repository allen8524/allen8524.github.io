import { useMemo } from "react";
import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

const activityDelayStart = 300;
const activityDelayStep = 50;

const awardItems = [
  {
    name: "컴퓨터응용선반기능사",
    provider: "한국산업인력공단 • 2021.07",
  },
  {
    name: "AWS 서비스 활용능력 경진대회 금상",
    provider: "인덕대학교 • 2025.12",
  },
  {
    name: "Laravel 웹 솔루션 경진대회 최우수상",
    provider: "인덕대학교 • 2025.12",
  },
  {
    name: "PHP 온라인 쇼핑몰개발 경진대회 최우수상",
    provider: "인덕대학교 • 2025.06",
  },
  {
    name: "2025 Analyze Festa — 데이터 분석 경진대회 금상",
    provider: "인덕대학교 • 2025.12",
  },
];

const activityTitles: Record<string, string> = {
  "인덕대학교 INDEV 프로젝트 동아리": "인덕대학교 전공동아리 - INDEV",
  국가근로: "국가근로장학생",
  "인덕대학교 코드어택 스터디 동아리": "인덕대학교 스터디 - CodeAttack",
  "인덕대학교 IFP 스터디 동아리": "인덕대학교 전공동아리 - IFP",
};

const activitySummaries: Record<string, string[]> = {
  "인덕대학교 INDEV 프로젝트 동아리": [
    "AI 기반 소상공인 직원 · 스케줄 관리 플랫폼",
    "매출 패턴 · 직원 선호도 기반 스케줄 자동 생성",
    "구인 공고 자동 작성",
    "인건비 시뮬레이션 기능 기획 · 구현",
  ],
  국가근로: [
    "인덕대학교 도서관 국가근로 근무",
    "자료 정리 및 이용자 응대 보조",
    "업무 흐름에 맞춘 문서 · 운영 지원",
  ],
  "인덕대학교 코드어택 스터디 동아리": [
    "정보처리산업기사 및 IT 자격증 스터디",
    "자료구조 · 운영체제 · 네트워크 CS 학습",
    "백준 알고리즘 문제 풀이",
    "정기 발표와 학습 자료 정리",
  ],
  "인덕대학교 IFP 스터디 동아리": [
    "Notion 기반 학습 자료 정리 · 공유",
    "알고리즘 · 기초 프로그래밍 학습",
    "코드 리뷰와 문제 풀이 공유",
    "협업 중심 스터디 참여",
  ],
};

function getTimelineStartDate(timelineItem: Element) {
  const timelineYear = timelineItem.querySelector(".timeline-year")?.textContent ?? "";
  const match = timelineYear.match(/(\d{4})\.(\d{2})/);

  if (!match) {
    return 0;
  }

  return Number(`${match[1]}${match[2]}`);
}

function orderResumeActivitiesByDate(doc: Document) {
  const timeline = doc.querySelector(".experience-timeline.resume-timeline");

  if (!timeline) {
    return;
  }

  const timelineItems = Array.from(timeline.querySelectorAll(":scope > .timeline-item"));

  timelineItems
    .sort((current, next) => getTimelineStartDate(next) - getTimelineStartDate(current))
    .forEach((item, index) => {
      item.setAttribute("data-aos-delay", String(activityDelayStart + index * activityDelayStep));
      timeline.appendChild(item);
    });
}

function createTimelineSummaryList(doc: Document, items: string[]) {
  const list = doc.createElement("ul");
  list.className = "timeline-summary-list";

  items.forEach((text) => {
    const listItem = doc.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);
  });

  return list;
}

function updateActivitySummaries(doc: Document) {
  const timelineItems = Array.from(doc.querySelectorAll(".experience-timeline.resume-timeline .timeline-item"));

  timelineItems.forEach((timelineItem) => {
    const titleElement = timelineItem.querySelector("h3");

    if (!titleElement) {
      return;
    }

    const title = titleElement.textContent?.trim();

    if (!title || !activitySummaries[title]) {
      return;
    }

    const timelineContent = timelineItem.querySelector(".timeline-content");
    const currentSummary = timelineContent?.querySelector("p");
    const keyAchievements = timelineContent?.querySelector(".key-achievements");

    if (!timelineContent || !currentSummary) {
      return;
    }

    titleElement.textContent = activityTitles[title] ?? title;
    currentSummary.replaceWith(createTimelineSummaryList(doc, activitySummaries[title]));
    keyAchievements?.remove();
  });
}

function createCertItem(doc: Document, name: string, provider: string) {
  const certItem = doc.createElement("div");
  certItem.className = "cert-item";

  const icon = doc.createElement("i");
  icon.className = "bi bi-patch-check";

  const certDetails = doc.createElement("div");
  certDetails.className = "cert-details";

  const certName = doc.createElement("span");
  certName.className = "cert-name";
  certName.textContent = name;

  const certProvider = doc.createElement("span");
  certProvider.className = "cert-provider";
  certProvider.textContent = provider;

  certDetails.append(certName, certProvider);
  certItem.append(icon, certDetails);

  return certItem;
}

function updateResumeAwardsAndCertifications(doc: Document) {
  const certifications = doc.querySelector(".certifications");

  if (!certifications) {
    return;
  }

  certifications.replaceChildren(
    ...awardItems.map((item) => createCertItem(doc, item.name, item.provider)),
  );
}

function buildResumeHtml(html: string) {
  if (typeof DOMParser === "undefined") {
    return html;
  }

  const doc = new DOMParser().parseFromString(html, "text/html");

  orderResumeActivitiesByDate(doc);
  updateActivitySummaries(doc);
  updateResumeAwardsAndCertifications(doc);

  return doc.body.innerHTML;
}

function Resume() {
  const resumeHtml = useMemo(() => buildResumeHtml(homeMarkup.resume), []);

  return <RawMarkup html={resumeHtml} />;
}

export default Resume;

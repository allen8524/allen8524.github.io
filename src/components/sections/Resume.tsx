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
  updateResumeAwardsAndCertifications(doc);

  return doc.body.innerHTML;
}

function Resume() {
  const resumeHtml = useMemo(() => buildResumeHtml(homeMarkup.resume), []);

  return <RawMarkup html={resumeHtml} />;
}

export default Resume;

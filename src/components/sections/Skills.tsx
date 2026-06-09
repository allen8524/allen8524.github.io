import { useMemo } from "react";
import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

const recentAchievements = [
  {
    date: "2025.12",
    text: "AWS 서비스 활용능력 경진대회 금상",
  },
  {
    date: "2025.12",
    text: "Laravel 웹 솔루션 경진대회 최우수상",
  },
  {
    date: "2025.12",
    text: "2025 Analyze Festa 데이터 분석 경진대회 금상",
  },
  {
    date: "2025.06",
    text: "PHP 온라인 쇼핑몰개발 경진대회 최우수상",
  },
];

function createAchievementItem(doc: Document, date: string, text: string) {
  const item = doc.createElement("div");
  item.className = "achievement-item";

  const achievementDate = doc.createElement("div");
  achievementDate.className = "achievement-date";
  achievementDate.textContent = date;

  const achievementText = doc.createElement("div");
  achievementText.className = "achievement-text";
  achievementText.textContent = text;

  item.append(achievementDate, achievementText);

  return item;
}

function updateRecentAchievements(html: string) {
  if (typeof DOMParser === "undefined") {
    return html;
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const achievementList = doc.querySelector(".achievements-section .achievement-list");

  if (!achievementList) {
    return html;
  }

  achievementList.replaceChildren(
    ...recentAchievements.map((achievement) => createAchievementItem(doc, achievement.date, achievement.text)),
  );

  return doc.body.innerHTML;
}

function Skills() {
  const skillsHtml = useMemo(() => updateRecentAchievements(homeMarkup.skills), []);

  return <RawMarkup html={skillsHtml} />;
}

export default Skills;

import { useMemo } from "react";
import { homeMarkup } from "../../data/homeMarkup";
import RawMarkup from "./RawMarkup";

const activityDelayStart = 300;
const activityDelayStep = 50;

function getTimelineStartDate(timelineItem: Element) {
  const timelineYear = timelineItem.querySelector(".timeline-year")?.textContent ?? "";
  const match = timelineYear.match(/(\d{4})\.(\d{2})/);

  if (!match) {
    return 0;
  }

  return Number(`${match[1]}${match[2]}`);
}

function orderResumeActivitiesByDate(html: string) {
  if (typeof DOMParser === "undefined") {
    return html;
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  const timeline = doc.querySelector(".experience-timeline.resume-timeline");

  if (!timeline) {
    return html;
  }

  const timelineItems = Array.from(timeline.querySelectorAll(":scope > .timeline-item"));

  timelineItems
    .sort((current, next) => getTimelineStartDate(next) - getTimelineStartDate(current))
    .forEach((item, index) => {
      item.setAttribute("data-aos-delay", String(activityDelayStart + index * activityDelayStep));
      timeline.appendChild(item);
    });

  return doc.body.innerHTML;
}

function Resume() {
  const resumeHtml = useMemo(() => orderResumeActivitiesByDate(homeMarkup.resume), []);

  return <RawMarkup html={resumeHtml} />;
}

export default Resume;

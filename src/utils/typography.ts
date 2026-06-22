export function formatMiddleDotSpacing(value: string) {
  return value.replace(/\s*·\s*/g, " · ").replace(/\s{2,}/g, " ").trim();
}

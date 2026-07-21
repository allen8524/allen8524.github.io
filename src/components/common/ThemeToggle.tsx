import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "라이트 테마로 전환" : "다크 테마로 전환";

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      <i className={`bi ${isDark ? "bi-sun" : "bi-moon-stars"}`} aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;

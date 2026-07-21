import { useTheme } from "../../hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "라이트 테마로 전환" : "다크 테마로 전환";

  return (
    <button
      type="button"
      className={`theme-orb-toggle${isDark ? " is-dark" : ""}`}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      onClick={toggleTheme}
    >
      <span className="theme-orb-toggle__orb" aria-hidden="true">
        <span className="theme-orb-toggle__rays" />
        <span className="theme-orb-toggle__crescent" />
        <span className="theme-orb-toggle__stars" />
      </span>
    </button>
  );
}

export default ThemeToggle;

import { useTheme } from "../../hooks/useTheme";

const THEME_SWITCH_ID = "portfolio-theme-switch";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "라이트 테마로 전환" : "다크 테마로 전환";

  return (
    <div className="theme-switch">
      <input
        id={THEME_SWITCH_ID}
        className="theme-switch__input"
        type="checkbox"
        checked={isDark}
        aria-label={label}
        onChange={toggleTheme}
      />
      <label className="theme-switch__label" htmlFor={THEME_SWITCH_ID} title={label}>
        <span className="theme-switch__thumb" aria-hidden="true">
          <span className="theme-switch__crescent" />
        </span>
        <span className="theme-switch__names" aria-hidden="true">
          <span className="theme-switch__name theme-switch__name--light">Light</span>
          <span className="theme-switch__name theme-switch__name--dark">Dark</span>
        </span>
      </label>
    </div>
  );
}

export default ThemeToggle;

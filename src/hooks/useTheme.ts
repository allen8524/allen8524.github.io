import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "portfolio-theme";
const THEME_COLORS: Record<Theme, string> = {
  dark: "#25303f",
  light: "#f4f7fb",
};

function isTheme(value: string | null | undefined): value is Theme {
  return value === "dark" || value === "light";
}

function readDocumentTheme(): Theme {
  const currentTheme = document.documentElement.dataset.theme;
  return isTheme(currentTheme) ? currentTheme : "dark";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelector<HTMLMetaElement>('meta[name="theme-color"]')
    ?.setAttribute("content", THEME_COLORS[theme]);
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readDocumentTheme);

  const updateTheme = useCallback((nextTheme: Theme, persist = true) => {
    applyTheme(nextTheme);
    setTheme(nextTheme);

    if (persist) {
      try {
        window.localStorage.setItem(STORAGE_KEY, nextTheme);
      } catch {
        // The visual theme still updates when storage is unavailable.
      }
    }
  }, []);

  const toggleTheme = useCallback(() => {
    updateTheme(theme === "dark" ? "light" : "dark");
  }, [theme, updateTheme]);

  useEffect(() => {
    applyTheme(theme);

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) {
        return;
      }

      updateTheme(isTheme(event.newValue) ? event.newValue : "dark", false);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, [theme, updateTheme]);

  return { theme, toggleTheme };
}

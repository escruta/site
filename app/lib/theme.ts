export type Theme = "light" | "dark" | "system";

export const themes: Theme[] = ["light", "dark", "system"];

export const themeStorageKey = "theme";

const themeLabels: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function getThemeLabel(theme: Theme) {
  return themeLabels[theme];
}

/**
 * Inline script injected before paint to apply the resolved theme class to the
 * <html> element, avoiding a flash of the wrong theme (FOUC). It must run
 * synchronously in <head>, before the body renders.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(themeStorageKey)})||"system";var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var isDark=t==="dark"||(t==="system"&&prefersDark);var c=document.documentElement.classList;isDark?c.add("dark"):c.remove("dark");}catch(e){}})();`;

export function applyThemeClass(theme: Theme) {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);
  const classList = document.documentElement.classList;
  if (isDark) classList.add("dark");
  else classList.remove("dark");
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(themeStorageKey);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

export function setStoredTheme(theme: Theme) {
  if (typeof window === "undefined") return;
  if (theme === "system") {
    localStorage.removeItem(themeStorageKey);
  } else {
    localStorage.setItem(themeStorageKey, theme);
  }
  applyThemeClass(theme);
}

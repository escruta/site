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
export const themeInitScript = `(function(){function compute(){try{var t=localStorage.getItem(${JSON.stringify(themeStorageKey)})||"system";var p=window.matchMedia("(prefers-color-scheme: dark)").matches;return t==="dark"||(t==="system"&&p);}catch(e){return false;}}function apply(){try{var d=compute();var x=document.documentElement.classList;d?x.add("dark"):x.remove("dark");}catch(e){}}apply();var m=window.matchMedia("(prefers-color-scheme: dark)");var onChange=function(){apply();};if(m.addEventListener)m.addEventListener("change",onChange);else if(m.addListener)m.addListener(onChange);window.addEventListener("load",apply);var tries=0;var timer=setInterval(function(){apply();if(++tries>=50)clearInterval(timer);},100);})();`;

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

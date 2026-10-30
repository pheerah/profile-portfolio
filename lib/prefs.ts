export type Theme = "light" | "dark";
export type Lang = "en" | "th";

/** Apply and persist a preference (client only). */
export function setPref(kind: "theme", value: Theme): void;
export function setPref(kind: "lang", value: Lang): void;
export function setPref(kind: "theme" | "lang", value: string): void {
  const root = document.documentElement;
  root.setAttribute(kind === "theme" ? "data-theme" : "data-lang", value);
  if (kind === "lang") root.lang = value;
  try {
    localStorage.setItem(kind, value);
  } catch {
    /* storage blocked: the choice just won't persist */
  }
}

export const getPref = {
  theme: (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
  lang: (): Lang => (document.documentElement.dataset.lang === "th" ? "th" : "en"),
};

/** Inline script run before first paint so saved (or system) theme/language apply without a flash. */
export const PREFS_SCRIPT = `try{var d=document.documentElement,t=localStorage.getItem('theme'),l=localStorage.getItem('lang');
if(!t)t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
d.setAttribute('data-theme',t);
if(!l)l=(navigator.language||'en').toLowerCase().indexOf('th')===0?'th':'en';
d.setAttribute('data-lang',l);d.lang=l;}catch(e){}`;

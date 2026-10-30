import type { Ctx } from "./context";

/**
 * Types the first phrase of [data-typed] once (Thai from [data-typed-th] when the page is Thai), then stops
 * and removes the caret, so the headline never changes while someone is reading it.
 * Phrases are "|"-separated; only the first is typed.
 */
export function typedHeadline({ later }: Ctx) {
  const el = document.querySelector<HTMLElement>("[data-typed]");
  if (!el) return;
  const th = document.documentElement.dataset.lang === "th" && el.dataset.typedTh;
  const phrase = (th || el.dataset.typed || "").split("|")[0];
  const caret = el.nextElementSibling instanceof HTMLElement && el.nextElementSibling.classList.contains("caret") ? el.nextElementSibling : null;
  let i = 0;
  const step = () => {
    i += 1;
    el.textContent = phrase.slice(0, i);
    if (i < phrase.length) return later(step, 60);
    later(() => caret?.remove(), 1200);
  };
  el.textContent = "";
  step();
}

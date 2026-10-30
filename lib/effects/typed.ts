import type { Ctx } from "./context";

/**
 * Typewriter for [data-typed] (English) with an optional [data-typed-th].
 * Words are "|"-separated; the language is re-read each cycle so the switch applies live.
 */
export function typedHeadline({ later }: Ctx) {
  const el = document.querySelector<HTMLElement>("[data-typed]");
  if (!el) return;
  const wordsFor = () =>
    ((document.documentElement.dataset.lang === "th" && el.dataset.typedTh) || el.dataset.typed || "").split("|");
  let w = 0;
  let i = 0;
  let deleting = false;
  const step = () => {
    const words = wordsFor();
    const s = words[w % words.length];
    el.textContent = s.slice(0, i);
    if (!deleting && i === s.length) {
      deleting = true;
      return later(step, 1600);
    }
    if (deleting && i === 0) {
      deleting = false;
      w = (w + 1) % words.length;
    }
    i += deleting ? -1 : 1;
    later(step, deleting ? 35 : 75);
  };
  step();
}

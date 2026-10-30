import { qa, type Ctx } from "./context";

/** Top progress bar and the experience-timeline fill. */
export function scrollProgress({ signal }: Ctx) {
  const bar = document.getElementById("bar");
  const tl = qa(".tl")[0];
  const update = () => {
    const h = document.documentElement;
    if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      tl.style.setProperty("--prog", p * 100 + "%");
    }
  };
  addEventListener("scroll", update, { passive: true, signal });
  update();
}

/** Orbs drift at different speeds while scrolling. */
export function parallaxOrbs({ signal }: Ctx) {
  const orbs = qa(".orb");
  if (!orbs.length) return;
  addEventListener(
    "scroll",
    () => orbs.forEach((o, i) => (o.style.translate = `0 ${scrollY * (i ? -0.12 : 0.18)}px`)),
    { passive: true, signal }
  );
}

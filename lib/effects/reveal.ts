import { qa, type Ctx } from "./context";

/** Fade/slide elements with .rv into view (adds .in once). */
export function revealOnScroll(ctx: Ctx) {
  const io = ctx.observe(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.12 }
  );
  qa(".rv").forEach((el) => io.observe(el));
}

/** Count [data-count] numbers up when they scroll into view. */
export function countUp(ctx: Ctx) {
  const io = ctx.observe(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const el = e.target as HTMLElement;
        const end = parseFloat(el.dataset.count || "0");
        const dec = +(el.dataset.dec || 0);
        const suf = el.dataset.suf || "";
        const show = (v: number) => (el.textContent = v.toFixed(dec) + suf);
        if (ctx.reduceMotion) return void show(end);
        const t0 = performance.now();
        const dur = 1600;
        const tick = (t: number) => {
          if (!ctx.alive()) return;
          const k = Math.min(1, (t - t0) / dur);
          show(end * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }),
    { threshold: 0.6 }
  );
  qa("[data-count]").forEach((el) => io.observe(el));
}

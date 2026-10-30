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

/** Highlights the nav link of the home-page section currently in view (links look like "/#about"). */
export function scrollSpy(ctx: Ctx) {
  const sections = qa("main section[id]");
  const links = qa<HTMLAnchorElement>("nav a.l").filter((a) => a.getAttribute("href")?.startsWith("/#"));
  // The nav persists across pages, so clear any highlight left over from the previous page.
  links.forEach((a) => a.classList.remove("cur"));
  if (!sections.length || !links.length) return;
  const io = ctx.observe(
    (es) =>
      es.forEach((e) => {
        if (!e.isIntersecting) return;
        const id = "/#" + e.target.id;
        links.forEach((a) => a.classList.toggle("cur", a.getAttribute("href") === id));
      }),
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/** Folded experience bullets (<details>) are opened while printing so the paper copy is complete. */
export function openFoldsForPrint({ signal }: Ctx) {
  let reopened: HTMLDetailsElement[] = [];
  addEventListener(
    "beforeprint",
    () => {
      reopened = qa<HTMLDetailsElement>("details.jmore").filter((d) => !d.open);
      reopened.forEach((d) => (d.open = true));
    },
    { signal }
  );
  addEventListener("afterprint", () => reopened.forEach((d) => (d.open = false)), { signal });
}

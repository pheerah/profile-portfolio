"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const qa = <T extends Element = HTMLElement>(s: string) =>
  Array.from(document.querySelectorAll<T>(s));

/** Scroll, reveal, counter, tilt and canvas effects. Re-runs on every route change. */
export default function Effects() {
  const pathname = usePathname();

  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;
    const observers: IntersectionObserver[] = [];
    const timers = new Set<ReturnType<typeof setTimeout>>();
    let raf = 0;
    let alive = true;
    const later = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        timers.delete(id);
        if (alive) fn();
      }, ms);
      timers.add(id);
    };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    // scroll progress + timeline fill
    const bar = document.getElementById("bar");
    const tl = qa(".tl")[0];
    const onScroll = () => {
      const h = document.documentElement;
      if (bar) bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + "%";
      if (tl) {
        const r = tl.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
        tl.style.setProperty("--prog", p * 100 + "%");
      }
    };
    addEventListener("scroll", onScroll, { passive: true, signal });
    onScroll();

    // reveal
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    observers.push(io);
    qa(".rv").forEach((el) => io.observe(el));

    // counters
    const co = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          co.unobserve(e.target);
          const el = e.target as HTMLElement;
          const end = parseFloat(el.dataset.count || "0");
          const dec = +(el.dataset.dec || 0);
          const suf = el.dataset.suf || "";
          if (reduce) {
            el.textContent = end.toFixed(dec) + suf;
            return;
          }
          const t0 = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            if (!alive) return;
            const k = Math.min(1, (t - t0) / dur);
            el.textContent = (end * (1 - Math.pow(1 - k, 3))).toFixed(dec) + suf;
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }),
      { threshold: 0.6 }
    );
    observers.push(co);
    qa("[data-count]").forEach((el) => co.observe(el));

    if (!reduce) {
      // cursor glow
      const cur = document.getElementById("cur");
      addEventListener(
        "pointermove",
        (e) => {
          if (!cur) return;
          document.body.classList.add("mv");
          cur.style.transform = `translate(${e.clientX - 180}px,${e.clientY - 180}px)`;
        },
        { signal }
      );

      // 3D tilt + spotlight
      qa(".tilt").forEach((c) => {
        if (!c.querySelector(".shine")) c.insertAdjacentHTML("beforeend", '<i class="shine"></i>');
        c.addEventListener(
          "pointermove",
          (e) => {
            const r = c.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 9}deg) rotateY(${(x - 0.5) * 11}deg) translateY(-4px)`;
            c.style.setProperty("--mx", x * 100 + "%");
            c.style.setProperty("--my", y * 100 + "%");
          },
          { signal }
        );
        c.addEventListener("pointerleave", () => (c.style.transform = ""), { signal });
      });

      // magnetic buttons
      qa(".btn.p, .btn.g").forEach((b) => {
        b.addEventListener(
          "pointermove",
          (e) => {
            const r = b.getBoundingClientRect();
            b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.18}px,${(e.clientY - r.top - r.height / 2) * 0.28 - 2}px)`;
          },
          { signal }
        );
        b.addEventListener("pointerleave", () => (b.style.transform = ""), { signal });
      });

      // typed headline
      const ty = document.querySelector<HTMLElement>("[data-typed]");
      if (ty) {
        const wordsFor = () =>
          ((document.documentElement.dataset.lang === "th" && ty.dataset.typedTh) || ty.dataset.typed || "").split("|");
        let w = 0;
        let i = 0;
        let del = false;
        const step = () => {
          const words = wordsFor();
          const s = words[w % words.length];
          ty.textContent = s.slice(0, i);
          if (!del && i === s.length) {
            del = true;
            return later(step, 1600);
          }
          if (del && i === 0) {
            del = false;
            w = (w + 1) % words.length;
          }
          i += del ? -1 : 1;
          later(step, del ? 35 : 75);
        };
        step();
      }

      // hero particles
      const cv = document.getElementById("fx") as HTMLCanvasElement | null;
      if (cv) {
        const ctx = cv.getContext("2d")!;
        let W = 0;
        let H = 0;
        let P: { x: number; y: number; vx: number; vy: number }[] = [];
        const mouse = { x: -999, y: -999 };
        const size = () => {
          W = cv.width = cv.offsetWidth;
          H = cv.height = cv.offsetHeight;
          P = Array.from({ length: Math.min(70, W / 14) }, () => ({
            x: Math.random() * W,
            y: Math.random() * H,
            vx: (Math.random() - 0.5) * 0.35,
            vy: (Math.random() - 0.5) * 0.35,
          }));
        };
        size();
        addEventListener("resize", size, { signal });
        cv.parentElement?.addEventListener(
          "pointermove",
          (e) => {
            const r = cv.getBoundingClientRect();
            mouse.x = e.clientX - r.left;
            mouse.y = e.clientY - r.top;
          },
          { signal }
        );
        const draw = () => {
          if (!alive) return;
          ctx.clearRect(0, 0, W, H);
          P.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > W) p.vx *= -1;
            if (p.y < 0 || p.y > H) p.vy *= -1;
            const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
            if (dm < 130) {
              p.x += ((p.x - mouse.x) / dm) * 1.2;
              p.y += ((p.y - mouse.y) / dm) * 1.2;
            }
            ctx.fillStyle = "rgba(160,240,226,.8)";
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.8, 0, 7);
            ctx.fill();
            for (let j = i + 1; j < P.length; j++) {
              const q = P[j];
              const d = Math.hypot(p.x - q.x, p.y - q.y);
              if (d < 110) {
                ctx.strokeStyle = `rgba(160,240,226,${0.22 * (1 - d / 110)})`;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          });
          raf = requestAnimationFrame(draw);
        };
        draw();
      }

      // parallax orbs
      const orbs = qa(".orb");
      if (orbs.length)
        addEventListener(
          "scroll",
          () => orbs.forEach((o, i) => (o.style.translate = `0 ${scrollY * (i ? -0.12 : 0.18)}px`)),
          { passive: true, signal }
        );
    }

    return () => {
      alive = false;
      ac.abort();
      observers.forEach((o) => o.disconnect());
      timers.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, [pathname]);

  return null;
}

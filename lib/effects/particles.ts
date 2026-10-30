import type { Ctx } from "./context";

type P = { x: number; y: number; vx: number; vy: number };

/** Connected-dots canvas in the hero (#fx); dots are pushed away by the pointer. */
export function heroParticles({ signal, alive, onDispose }: Ctx) {
  const cv = document.getElementById("fx") as HTMLCanvasElement | null;
  const ctx = cv?.getContext("2d");
  if (!cv || !ctx) return;

  let W = 0;
  let H = 0;
  let dots: P[] = [];
  const mouse = { x: -999, y: -999 };

  const resize = () => {
    W = cv.width = cv.offsetWidth;
    H = cv.height = cv.offsetHeight;
    dots = Array.from({ length: Math.min(70, W / 14) }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
  };
  resize();
  addEventListener("resize", resize, { signal });
  cv.parentElement?.addEventListener(
    "pointermove",
    (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    },
    { signal }
  );

  // Run only while the hero is on screen and the tab is visible (saves CPU and battery).
  let raf = 0;
  let onScreen = true;
  const running = () => alive() && onScreen && !document.hidden;
  const draw = () => {
    if (!running()) {
      raf = 0;
      return;
    }
    ctx.clearRect(0, 0, W, H);
    dots.forEach((p, i) => {
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
      for (let j = i + 1; j < dots.length; j++) {
        const q = dots[j];
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
  const resume = () => {
    if (!raf && running()) draw();
  };
  const io = new IntersectionObserver(([e]) => {
    onScreen = e.isIntersecting;
    resume();
  });
  io.observe(cv);
  document.addEventListener("visibilitychange", resume, { signal });
  resume();
  onDispose(() => {
    io.disconnect();
    cancelAnimationFrame(raf);
  });
}

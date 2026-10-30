import { qa, type Ctx } from "./context";

/** Soft glow that follows the cursor. */
export function cursorGlow({ signal }: Ctx) {
  const cur = document.getElementById("cur");
  if (!cur) return;
  addEventListener(
    "pointermove",
    (e) => {
      document.body.classList.add("mv");
      cur.style.transform = `translate(${e.clientX - 180}px,${e.clientY - 180}px)`;
    },
    { signal }
  );
}

/** 3D tilt and spotlight on .tilt cards. */
export function tiltCards({ signal }: Ctx) {
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
}

/** Buttons lean slightly toward the cursor. */
export function magneticButtons({ signal }: Ctx) {
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
}

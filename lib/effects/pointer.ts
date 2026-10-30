import { qa, type Ctx } from "./context";

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

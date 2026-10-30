/** Join class names, skipping falsy values. */
export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

const DELAYS = ["", "d1", "d2", "d3"] as const;

/** Reveal-animation stagger class for the i-th item of a list (capped at d3). */
export const delay = (i: number) => DELAYS[Math.min(Math.max(i, 0), DELAYS.length - 1)];

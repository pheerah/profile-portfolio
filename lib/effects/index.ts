import { createContext } from "./context";
import { tiltCards } from "./pointer";
import { heroParticles } from "./particles";
import { countUp, revealOnScroll } from "./reveal";
import { scrollProgress, scrollSpy } from "./scroll";
import { typedHeadline } from "./typed";

/**
 * Wire up the page effects and return one cleanup function.
 * Kept deliberately small: content first, motion only where it explains something.
 * Decorative motion is skipped when the user prefers reduced motion.
 */
export function initEffects(): () => void {
  const { ctx, dispose } = createContext();

  scrollProgress(ctx);
  scrollSpy(ctx);
  revealOnScroll(ctx);
  countUp(ctx);

  if (!ctx.reduceMotion) {
    tiltCards(ctx);
    typedHeadline(ctx);
    heroParticles(ctx);
  }
  return dispose;
}

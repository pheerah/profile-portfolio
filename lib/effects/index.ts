import { createContext } from "./context";
import { cursorGlow, magneticButtons, tiltCards } from "./pointer";
import { heroParticles } from "./particles";
import { countUp, revealOnScroll } from "./reveal";
import { parallaxOrbs, scrollProgress } from "./scroll";
import { typedHeadline } from "./typed";

/**
 * Wire up every page effect and return one cleanup function.
 * Motion-heavy effects are skipped when the user prefers reduced motion.
 */
export function initEffects(): () => void {
  const { ctx, dispose } = createContext();

  scrollProgress(ctx);
  revealOnScroll(ctx);
  countUp(ctx);

  if (!ctx.reduceMotion) {
    cursorGlow(ctx);
    tiltCards(ctx);
    magneticButtons(ctx);
    typedHeadline(ctx);
    heroParticles(ctx);
    parallaxOrbs(ctx);
  }
  return dispose;
}

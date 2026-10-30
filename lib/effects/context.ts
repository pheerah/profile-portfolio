/** Shared plumbing for the page effects: one place that tracks everything needing cleanup. */
export type Ctx = {
  /** Aborted on dispose; pass to addEventListener so listeners are removed automatically. */
  signal: AbortSignal;
  reduceMotion: boolean;
  alive: () => boolean;
  /** setTimeout that is cleared on dispose and skipped once disposed. */
  later: (fn: () => void, ms: number) => void;
  /** IntersectionObserver that is disconnected on dispose. */
  observe: (cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) => IntersectionObserver;
  onDispose: (fn: () => void) => void;
};

export const qa = <T extends HTMLElement = HTMLElement>(sel: string) =>
  Array.from(document.querySelectorAll<T>(sel));

export function createContext(): { ctx: Ctx; dispose: () => void } {
  const ac = new AbortController();
  const cleanups: (() => void)[] = [];
  const timers = new Set<ReturnType<typeof setTimeout>>();
  let alive = true;

  const ctx: Ctx = {
    signal: ac.signal,
    reduceMotion: matchMedia("(prefers-reduced-motion: reduce)").matches,
    alive: () => alive,
    later: (fn, ms) => {
      const id = setTimeout(() => {
        timers.delete(id);
        if (alive) fn();
      }, ms);
      timers.add(id);
    },
    observe: (cb, opts) => {
      const io = new IntersectionObserver(cb, opts);
      cleanups.push(() => io.disconnect());
      return io;
    },
    onDispose: (fn) => void cleanups.push(fn),
  };

  const dispose = () => {
    alive = false;
    ac.abort();
    timers.forEach(clearTimeout);
    cleanups.forEach((fn) => fn());
  };
  return { ctx, dispose };
}

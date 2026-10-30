import { cx } from "@/lib/cx";

/**
 * A row of small pills. `className` picks the look defined in globals.css:
 * "tg" (project chips), "tags" (skills), "meta" (case-study tags).
 */
export function Chips({ items, className, reveal }: { items: readonly string[]; className: "tg" | "tags" | "meta"; reveal?: boolean }) {
  return (
    <div className={cx(className, reveal && "rv")} style={className === "tags" ? { marginTop: 20 } : undefined}>
      {items.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}

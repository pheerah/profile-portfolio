import { stats } from "@/lib/content/home";
import { cx, delay } from "@/lib/cx";
import { Glyph } from "../ui/Glyph";
import { B } from "../ui/T";

/** Headline numbers; counted up by lib/effects/reveal.ts via the data-* attributes. */
export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div key={s.value} className={cx("stat rv", delay(i))}>
          <span className="sic"><Glyph name={s.icon} size={20} /></span>
          <b data-count={s.value} data-suf={s.suffix} data-dec={s.decimals}>0</b>
          <span><B v={s.label} /></span>
        </div>
      ))}
    </div>
  );
}

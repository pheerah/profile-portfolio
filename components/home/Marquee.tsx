import { marquee } from "@/lib/content/home";

/** Endless scrolling strip; the list is doubled so the CSS loop is seamless. */
export default function Marquee() {
  return (
    <div className="mq" aria-hidden="true">
      <div>
        {[...marquee, ...marquee].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

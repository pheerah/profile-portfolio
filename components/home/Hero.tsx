import { FACTS, SUMMARY } from "@/lib/site";
import { DownloadIcon } from "../ui/Icon";
import ResumeButton from "../ui/ResumeButton";
import { B, T } from "../ui/T";
import Avatar from "./Avatar";

const TYPED_EN = "complex software|ERP integrations|payment platforms|connected-car apps";
const TYPED_TH = "ซอฟต์แวร์ที่ซับซ้อน|การเชื่อมต่อ ERP|แพลตฟอร์มชำระเงิน|แอปรถยนต์เชื่อมต่อ";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <canvas id="fx" />
      <div className="orb o1" />
      <div className="orb o2" />
      <div className="wrap">
        <div>
          <span className="eyebrow"><T en="Open to new roles" th="เปิดรับโอกาสใหม่" /></span>
          <h1>
            {/* Full name for search engines and screen readers; the visible greeting only says "Pheerah". */}
            <span className="sr-only">Pheerah Praditthaphong – Project & Product Leader. </span>
            <T en={<>Hi, I&apos;m Pheerah.<br />I ship </>} th={<>สวัสดี ฉันคือ Pheerah<br />ฉันส่งมอบ </>} />
            <span className="shim" data-typed={TYPED_EN} data-typed-th={TYPED_TH} suppressHydrationWarning>
              complex software
            </span>
            <span className="caret" />
          </h1>
          <p>
            <B v={SUMMARY} />
          </p>
          <div className="cta">
            <ResumeButton where="hero">
              <DownloadIcon />
              <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
            </ResumeButton>
          </div>
          {FACTS.length > 0 && (
            <ul className="facts">
              {FACTS.map((f) => (
                <li key={f.label[0]}>
                  <b><B v={f.label} /></b>
                  <B v={f.value} />
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="avatar-wrap">
          <div className="ring">
            <b />
          </div>
          <Avatar />
        </div>
      </div>
    </header>
  );
}

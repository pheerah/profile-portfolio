import { RESUME } from "@/lib/site";
import { Button } from "../ui/Button";
import { DownloadIcon } from "../ui/Icon";
import { T } from "../ui/T";
import Avatar from "./Avatar";

const MiniDownload = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
  </svg>
);

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
            <T en={<>Hi, I&apos;m Pheerah.<br />I ship </>} th={<>สวัสดี ฉันคือ Pheerah<br />ฉันส่งมอบ </>} />
            <span className="shim" data-typed={TYPED_EN} data-typed-th={TYPED_TH} suppressHydrationWarning>
              complex software
            </span>
            <span className="caret" />
          </h1>
          <p>
            <T
              en="Project & product delivery leader with 12 years in software. I bridge business, engineering and vendors."
              th="ผู้นำด้านการส่งมอบโครงการและผลิตภัณฑ์ซอฟต์แวร์ ประสบการณ์ 12 ปี ทำหน้าที่เชื่อมธุรกิจ ทีมวิศวกรรม และเวนเดอร์เข้าด้วยกัน"
            />
          </p>
          <div className="cta">
            <Button href={RESUME.file} variant="p" download={RESUME.downloadName}>
              <DownloadIcon />
              <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
            </Button>
            <Button href="/case-studies">
              <T en="See case studies →" th="ดูผลงานเชิงลึก →" />
            </Button>
          </div>
          <div className="roles">
            <span className="rolehint"><T en="Résumé by role:" th="เรซูเม่ตามตำแหน่ง:" /></span>
            {RESUME.byRole.map((r) => (
              <a key={r.href} href={r.href} download>
                {r.label}
                <MiniDownload />
              </a>
            ))}
          </div>
        </div>
        <div className="avatar-wrap">
          <div className="ring">
            <b />
          </div>
          <Avatar />
          <span className="chipf">Agile · Scrum</span>
          <span className="chipf">ERP · NetSuite</span>
          <span className="chipf">CI/CD</span>
        </div>
      </div>
    </header>
  );
}

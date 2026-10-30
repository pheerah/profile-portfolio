import { RESUME, SITE } from "@/lib/site";
import { Button } from "../ui/Button";
import CopyEmail from "../ui/CopyEmail";
import { Glyph } from "../ui/Glyph";
import { DownloadIcon } from "../ui/Icon";
import { T } from "../ui/T";

export default function Contact() {
  return (
    <section id="contact">
      <div className="dl rv">
        <div className="kicker"><T en="Let's work together" th="มาทำงานด้วยกัน" /></div>
        <h2><T en="Download my résumé or say hello" th="ดาวน์โหลดเรซูเม่หรือทักทายกัน" /></h2>
        <p>
          <T
            en="Open to Product Manager, Product Owner and IT Project Manager roles."
            th="เปิดรับตำแหน่ง Product Manager, Product Owner และ IT Project Manager"
          />
        </p>
        <div className="cta">
          <Button href={RESUME.file} variant="p" download={RESUME.downloadName}>
            <DownloadIcon />
            <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
          </Button>
          <Button href={`mailto:${SITE.email}`}>
            <Glyph name="mail" size={18} />
            <T en="Email me" th="ส่งอีเมล" />
          </Button>
          <CopyEmail email={SITE.email} />
          <Button href={SITE.linkedin}>
            <Glyph name="linkedin" size={18} />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  );
}

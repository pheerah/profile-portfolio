import { SITE } from "@/lib/site";
import { Button } from "../ui/Button";
import CopyEmail from "../ui/CopyEmail";
import { Glyph } from "../ui/Glyph";
import { DownloadIcon } from "../ui/Icon";
import ResumeButton from "../ui/ResumeButton";
import { T } from "../ui/T";

export default function Contact() {
  return (
    <section id="contact">
      <div className="dl rv withpreview">
        <ResumePreview />
        <div>
          <div className="kicker"><T en="Let's work together" th="มาทำงานด้วยกัน" /></div>
          <h2><T en="Download my résumé or say hello" th="ดาวน์โหลดเรซูเม่หรือทักทายกัน" /></h2>
          <p>
            <T
              en="Open to Product Manager, Product Owner and IT Project Manager roles."
              th="เปิดรับตำแหน่ง Product Manager, Product Owner และ IT Project Manager"
            />
          </p>
          <div className="cta">
            <ResumeButton where="contact">
              <DownloadIcon />
              <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
            </ResumeButton>
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
      </div>
    </section>
  );
}

/** First page of the résumé (public/resume-preview.png) so visitors see what they would download. */
function ResumePreview() {
  return (
    <ResumeButton where="preview" variant="g">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="rpv" src="/resume-preview.png" alt="Preview of page 1 of the résumé" width={476} height={674} loading="lazy" />
    </ResumeButton>
  );
}

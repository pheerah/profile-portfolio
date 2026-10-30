import Link from "next/link";
import Avatar from "@/components/Avatar";
import CopyEmail from "@/components/CopyEmail";
import { DownloadIcon, icons } from "@/components/Icon";
import { B, T } from "@/components/T";
import { practices } from "@/lib/cases";
import { jobs } from "@/lib/data";

const marquee = [
  "IT Project Management",
  "Product Ownership",
  "Agile / Scrum",
  "ERP · NetSuite",
  "Stakeholder & Vendor Management",
  "Release Management",
  "CI/CD",
];

const stats = [
  { n: "12", suf: "", dec: "", label: ["years in software", "ปีในสายซอฟต์แวร์"] as const, d: "" },
  { n: "10", suf: "+", dec: "", label: ["projects delivered", "โครงการที่ส่งมอบ"] as const, d: "d1" },
  { n: "40", suf: "+", dec: "", label: ["API endpoints validated (NetSuite)", "API endpoint ที่ตรวจสอบ (NetSuite)"] as const, d: "d2" },
  { n: "99.99", suf: "%", dec: "2", label: ["uptime on revenue-critical services", "uptime ของบริการที่สร้างรายได้หลัก"] as const, d: "d3" },
];

const about = [
  {
    icon: icons.pm, d: "",
    title: ["IT Project Management", "การบริหารโครงการ IT"] as const,
    text: ["End-to-end delivery of ERP and enterprise software: scope, risks, vendors, releases and executive reporting.", "ส่งมอบระบบ ERP และซอฟต์แวร์องค์กรแบบครบวงจร: ขอบเขต ความเสี่ยง เวนเดอร์ การปล่อยระบบ และการรายงานผู้บริหาร"] as const,
  },
  {
    icon: icons.po, d: "d1",
    title: ["Product Ownership", "Product Ownership"] as const,
    text: ["Agile/Scrum, backlog refinement and user stories, working closely with Product Owners, BAs and developers.", "Agile/Scrum การปรับปรุง backlog และ user story ทำงานใกล้ชิดกับ Product Owner, BA และนักพัฒนา"] as const,
  },
  {
    icon: icons.tech, d: "d2",
    title: ["Technical Leadership", "ภาวะผู้นำด้านเทคนิค"] as const,
    text: ["Former Senior Frontend Developer and Engineering Team Lead, with CI/CD, monitoring and production support experience.", "อดีต Senior Frontend Developer และ Engineering Team Lead มีประสบการณ์ด้าน CI/CD, monitoring และการดูแล production"] as const,
  },
];

const teaser = [
  { icon: icons.screen, title: "True iService", text: ["Web & mobile app · True Digital", "เว็บและแอป · True Digital"] as const, d: "" },
  { icon: icons.user, title: "TrueID My Account", text: ["Account experience · True Digital", "ประสบการณ์บัญชีผู้ใช้ · True Digital"] as const, d: "d1" },
  { icon: icons.phone, title: "T Connected", text: ["Toyota connected-car app", "แอปรถยนต์เชื่อมต่อของ Toyota"] as const, d: "d2" },
];

const tags = [
  "Agile / Scrum",
  "Stakeholder management",
  "Vendor management",
  "Risk & change",
  "Release management",
  "ERP / NetSuite",
  "Jira · Confluence",
  "SQL · REST API",
  "JavaScript · React",
];

const resumes = [
  { href: "/resume-it-project-manager.pdf", label: "IT Project Manager" },
  { href: "/resume-product-manager.pdf", label: "Product Manager" },
  { href: "/resume-product-owner.pdf", label: "Product Owner" },
];

const resumeName = "Pheerah_Praditthaphong_Resume.pdf";
const EMAIL = "Pheerah.p@gmail.com";

const MiniDl = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16" />
  </svg>
);

export default function Home() {
  const items = [...marquee, ...marquee];
  return (
    <>
      <header className="hero" id="top">
        <canvas id="fx" />
        <div className="orb o1" />
        <div className="orb o2" />
        <div className="wrap">
          <div>
            <span className="eyebrow"><T en="Open to new roles" th="เปิดรับโอกาสใหม่" /></span>
            <h1>
              <T
                en={<>Hi, I&apos;m Pheerah.<br />I ship </>}
                th={<>สวัสดี ฉันคือ Pheerah<br />ฉันส่งมอบ </>}
              />
              <span
                className="shim"
                data-typed="complex software|ERP integrations|payment platforms|connected-car apps"
                data-typed-th="ซอฟต์แวร์ที่ซับซ้อน|การเชื่อมต่อ ERP|แพลตฟอร์มชำระเงิน|แอปรถยนต์เชื่อมต่อ"
                suppressHydrationWarning
              >
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
              <a className="btn p" href="/resume.pdf" download={resumeName}>
                <DownloadIcon />
                <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
              </a>
              <Link className="btn g" href="/case-studies">
                <T en="See case studies →" th="ดูผลงานเชิงลึก →" />
              </Link>
            </div>
            <div className="roles">
              <span className="rolehint"><T en="Résumé by role:" th="เรซูเม่ตามตำแหน่ง:" /></span>
              {resumes.map((r) => (
                <a key={r.href} href={r.href} download>
                  {r.label}
                  <MiniDl />
                </a>
              ))}
            </div>
          </div>
          <div className="avatar-wrap" aria-hidden="false">
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

      <div className="mq" aria-hidden="true">
        <div>
          {items.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>
      </div>

      <main className="wrap">
        <div className="stats">
          {stats.map((s) => (
            <div key={s.n} className={`stat rv ${s.d}`}>
              <b data-count={s.n} data-suf={s.suf || undefined} data-dec={s.dec || undefined}>
                0
              </b>
              <span><B v={s.label} /></span>
            </div>
          ))}
        </div>

        <section id="about">
          <div className="kicker"><T en="About" th="เกี่ยวกับ" /></div>
          <h2><T en="What I do" th="สิ่งที่ฉันทำ" /></h2>
          <p className="lead">
            <T
              en="From developer to team lead to project manager — I speak both business and engineering."
              th="จากนักพัฒนา สู่หัวหน้าทีม และผู้จัดการโครงการ — เข้าใจทั้งภาษาธุรกิจและวิศวกรรม"
            />
          </p>
          <div className="grid">
            {about.map((c) => (
              <div key={c.title[0]} className={`card tilt rv ${c.d}`}>
                <div className="ic">{c.icon}</div>
                <h3><B v={c.title} /></h3>
                <p><B v={c.text} /></p>
              </div>
            ))}
          </div>
        </section>

        <section id="how">
          <div className="kicker"><T en="How I work" th="วิธีทำงาน" /></div>
          <h2><T en="Five habits behind steady delivery" th="นิสัยการทำงานห้าข้อเบื้องหลังการส่งมอบที่สม่ำเสมอ" /></h2>
          <p className="lead">
            <T
              en="What I do on every project, drawn from my delivery and engineering roles."
              th="สิ่งที่ฉันทำในทุกโครงการ มาจากประสบการณ์ด้านการส่งมอบและวิศวกรรม"
            />
          </p>
          <div className="how">
            {practices.map((p, i) => (
              <div key={p.h[0]} className={`card tilt rv ${i % 2 ? "d1" : ""}`}>
                <div className="n">{i + 1}</div>
                <div>
                  <h3><B v={p.h} /></h3>
                  <p><B v={p.t} /></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="kicker"><T en="Selected work" th="ผลงานที่เลือกมา" /></div>
          <h2><T en="Systems I've helped deliver" th="ระบบที่ฉันมีส่วนช่วยส่งมอบ" /></h2>
          <p className="lead">
            <T
              en="Consumer apps, payments and connected-car platforms used by real customers."
              th="แอปสำหรับผู้บริโภค ระบบชำระเงิน และแพลตฟอร์มรถยนต์เชื่อมต่อที่มีผู้ใช้จริง"
            />
          </p>
          <div className="teaser">
            {teaser.map((c) => (
              <Link key={c.title} className={`card tilt rv ${c.d}`} href="/projects">
                <div className="ic">{c.icon}</div>
                <h3>{c.title}</h3>
                <p><B v={c.text} /></p>
              </Link>
            ))}
          </div>
          <div className="more" style={{ gap: 10, flexWrap: "wrap" }}>
            <Link className="btn p" href="/case-studies">
              <T en="Read the case studies →" th="อ่านผลงานเชิงลึก →" />
            </Link>
            <Link className="btn g" href="/projects">
              <T en="View all projects →" th="ดูโปรเจกต์ทั้งหมด →" />
            </Link>
          </div>
        </section>

        <section id="exp">
          <div className="kicker"><T en="Experience" th="ประสบการณ์" /></div>
          <h2><T en="Where I've delivered" th="ที่ที่ฉันส่งมอบงาน" /></h2>
          <p className="lead">
            <T
              en="Enterprise ERP, connected-car applications and large-scale consumer payments."
              th="ERP องค์กร แอปรถยนต์เชื่อมต่อ และระบบชำระเงินสำหรับผู้บริโภคขนาดใหญ่"
            />
          </p>
          <div className="tl">
            {jobs.map((j) => (
              <div key={j.title[0] + j.when[0]} className="job rv">
                <div className="card tilt">
                  <div className="top">
                    <h3><B v={j.title} /></h3>
                    <span className="when"><B v={j.when} /></span>
                  </div>
                  <div className="org"><B v={j.org} /></div>
                  <ul>
                    {j.bullets.map((b) => (
                      <li key={b.h[0]}>
                        <b><B v={b.h} />:</b> <B v={b.t} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="kicker"><T en="Skills & credentials" th="ทักษะและวุฒิการศึกษา" /></div>
          <h2><T en="Toolkit" th="เครื่องมือและทักษะ" /></h2>
          <div className="tags rv" style={{ marginTop: 20 }}>
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="two">
            <div className="card tilt rv">
              <h3><T en="Education" th="การศึกษา" /></h3>
              <div className="row">
                <b>MSc, Information Technology Management</b>
                <small>NIDA, Bangkok · 2025</small>
              </div>
              <div className="row">
                <b>BSc, Information Technology</b>
                <small>The Far Eastern University, Chiang Mai · 2014</small>
              </div>
            </div>
            <div className="card tilt rv d1">
              <h3><T en="Certifications" th="ใบรับรอง" /></h3>
              <div className="row">
                <b>CompTIA Project+</b>
                <small>IT Project Management · 2025</small>
              </div>
              <div className="row">
                <b>ITIL Foundation Certificate</b>
                <small>IT Service Management · 2025</small>
              </div>
            </div>
          </div>
        </section>

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
              <a className="btn p" href="/resume.pdf" download={resumeName}>
                <DownloadIcon />
                <T en="Download Résumé (PDF)" th="ดาวน์โหลดเรซูเม่ (PDF)" />
              </a>
              <a className="btn g" href={`mailto:${EMAIL}`}>
                <T en="Email me" th="ส่งอีเมล" />
              </a>
              <CopyEmail email={EMAIL} />
              <a className="btn g" href="https://linkedin.com/in/pheerah" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="alt">
              <T en="Role-specific versions:" th="เวอร์ชันตามตำแหน่ง:" />
              {resumes.map((r, i) => (
                <span key={r.href}>
                  <a href={r.href} download>{r.label}</a>
                  {i < resumes.length - 1 ? "·" : ""}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

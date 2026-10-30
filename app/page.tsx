import Link from "next/link";
import { DownloadIcon, icons } from "@/components/Icon";
import { jobs } from "@/lib/data";

const marquee = [
  "IT Project Management",
  "Product Ownership",
  "Agile / Scrum",
  "ERP · NetSuite",
  "Stakeholder & Vendor Management",
  "UAT & Releases",
  "CI/CD",
];

const stats = [
  { n: "12", suf: "", dec: "", label: "years in software", d: "" },
  { n: "10", suf: "+", dec: "", label: "projects delivered", d: "d1" },
  { n: "40", suf: "+", dec: "", label: "API endpoints validated (NetSuite)", d: "d2" },
  { n: "99.99", suf: "%", dec: "2", label: "uptime on revenue-critical services", d: "d3" },
];

const about = [
  { icon: icons.pm, title: "IT Project Management", d: "", text: "End-to-end delivery of ERP and enterprise software: scope, risks, vendors, releases and executive reporting." },
  { icon: icons.po, title: "Product Ownership", d: "d1", text: "Agile/Scrum, backlog refinement and user stories, working closely with Product Owners, BAs and developers." },
  { icon: icons.tech, title: "Technical Leadership", d: "d2", text: "Former Senior Frontend Developer and Engineering Team Lead, with CI/CD, monitoring and production support experience." },
];

const teaser = [
  { icon: icons.screen, title: "True iService", text: "Web & mobile app · True Digital", d: "" },
  { icon: icons.user, title: "TrueID My Account", text: "Account experience · True Digital", d: "d1" },
  { icon: icons.phone, title: "T Connected", text: "Toyota connected-car app", d: "d2" },
];

const tags = [
  "Agile / Scrum",
  "Stakeholder management",
  "Vendor management",
  "Risk & change",
  "UAT & releases",
  "ERP / NetSuite",
  "Jira · Confluence",
  "SQL · REST API",
  "JavaScript · React",
];

const resumeName = "Pheerah_Praditthaphong_Resume.pdf";

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
            <span className="eyebrow">Open to new roles</span>
            <h1>
              Hi, I&apos;m Pheerah.
              <br />I ship{" "}
              <span
                className="shim"
                data-typed="complex software|ERP integrations|payment platforms|connected-car apps"
                suppressHydrationWarning
              >
                complex software
              </span>
              <span className="caret" />
            </h1>
            <p>
              Project &amp; product delivery leader with 12 years in software. I bridge business, engineering and
              vendors.
            </p>
            <div className="cta">
              <a className="btn p" href="/resume.pdf" download={resumeName}>
                <DownloadIcon />
                Download Résumé (PDF)
              </a>
              <Link className="btn g" href="/projects">
                See my projects →
              </Link>
            </div>
            <div className="roles">
              <span>IT Project Manager</span>
              <span>Product Owner</span>
              <span>Product Manager</span>
            </div>
          </div>
          <div className="avatar-wrap" aria-hidden="true">
            <div className="ring">
              <b />
            </div>
            <div className="avatar">PP</div>
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
            <div key={s.label} className={`stat rv ${s.d}`}>
              <b data-count={s.n} data-suf={s.suf || undefined} data-dec={s.dec || undefined}>
                0
              </b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>

        <section id="about">
          <div className="kicker">About</div>
          <h2>What I do</h2>
          <p className="lead">From developer to team lead to project manager — I speak both business and engineering.</p>
          <div className="grid">
            {about.map((c) => (
              <div key={c.title} className={`card tilt rv ${c.d}`}>
                <div className="ic">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="kicker">Selected work</div>
          <h2>Systems I&apos;ve helped deliver</h2>
          <p className="lead">Consumer apps, payments and connected-car platforms used by real customers.</p>
          <div className="teaser">
            {teaser.map((c) => (
              <Link key={c.title} className={`card tilt rv ${c.d}`} href="/projects">
                <div className="ic">{c.icon}</div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </Link>
            ))}
          </div>
          <div className="more">
            <Link className="btn p" href="/projects">
              View all projects →
            </Link>
          </div>
        </section>

        <section id="exp">
          <div className="kicker">Experience</div>
          <h2>Where I&apos;ve delivered</h2>
          <p className="lead">Enterprise ERP, connected-car applications and large-scale consumer payments.</p>
          <div className="tl">
            {jobs.map((j) => (
              <div key={j.title + j.when} className="job rv">
                <div className="card tilt">
                  <div className="top">
                    <h3>{j.title}</h3>
                    <span className="when">{j.when}</span>
                  </div>
                  <div className="org">{j.org}</div>
                  <ul>
                    {j.bullets.map(([h, t]) => (
                      <li key={h}>
                        <b>{h}:</b> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="kicker">Skills &amp; credentials</div>
          <h2>Toolkit</h2>
          <div className="tags rv" style={{ marginTop: 20 }}>
            {tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="two">
            <div className="card tilt rv">
              <h3>Education</h3>
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
              <h3>Certifications</h3>
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
            <div className="kicker">Let&apos;s work together</div>
            <h2>Download my résumé or say hello</h2>
            <p>Open to Product Manager, Product Owner and IT Project Manager roles.</p>
            <div className="cta">
              <a className="btn p" href="/resume.pdf" download={resumeName}>
                <DownloadIcon />
                Download Résumé (PDF)
              </a>
              <a className="btn g" href="mailto:Pheerah.p@gmail.com">
                Email me
              </a>
              <a className="btn g" href="https://linkedin.com/in/pheerah" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="alt">
              Role-specific versions:
              <a href="/resume-it-project-manager.pdf" download>IT Project Manager</a>·
              <a href="/resume-product-manager.pdf" download>Product Manager</a>·
              <a href="/resume-product-owner.pdf" download>Product Owner</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

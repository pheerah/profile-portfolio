import type { CSSProperties, ReactElement } from "react";
import { T } from "../ui/T";
import type { DiagramKey } from "@/lib/content/projects";

/**
 * Small SVG diagrams that restate résumé facts (no client data, nothing invented).
 * Colours come from CSS variables (--d-*, set on .diagram / .diagram-in in globals.css) so the
 * same drawing is pastel in the light theme and navy in the dark theme.
 */

const box: CSSProperties = { fill: "var(--d-box)", stroke: "var(--d-box-line)" };
const key: CSSProperties = { fill: "var(--d-key)" };
const highlight: CSSProperties = { fill: "var(--d-hl)", stroke: "var(--d-accent)" };
const text: CSSProperties = { fill: "var(--d-text)" };
const sub: CSSProperties = { fill: "var(--d-sub)" };
const accentText: CSSProperties = { fill: "var(--d-accent-text)" };
const line: CSSProperties = { stroke: "var(--d-accent)" };
const arrowHead: CSSProperties = { fill: "var(--d-accent)" };

function Arrow({ id }: { id: string }) {
  return (
    <defs>
      <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
        <path d="M0,0 L8,4 L0,8 z" style={arrowHead} />
      </marker>
    </defs>
  );
}

function NetSuiteDiagram() {
  return (
    <svg viewBox="0 0 520 190" role="img" aria-label="Business users, internal applications and NetSuite vendors connected to NetSuite ERP through 40+ validated API endpoints">
      <Arrow id="ns-arrow" />
      <g fontSize="13" fontWeight="700" textAnchor="middle" style={text}>
        <rect x="10" y="20" width="140" height="44" rx="12" style={box} />
        <text x="80" y="47">Business users</text>
        <rect x="10" y="73" width="140" height="44" rx="12" style={box} />
        <text x="80" y="100">Internal applications</text>
        <rect x="10" y="126" width="140" height="44" rx="12" style={box} />
        <text x="80" y="153">NetSuite vendors</text>
        <rect x="360" y="60" width="150" height="70" rx="14" style={key} />
        <text x="435" y="100" fontSize="15" style={{ fill: "#fff" }}>NetSuite ERP</text>
        <rect x="185" y="70" width="140" height="50" rx="12" style={highlight} />
        <text x="255" y="92" style={accentText}>40+ API endpoints</text>
        <text x="255" y="109" fontSize="11" style={sub}>validated</text>
      </g>
      <g strokeWidth="2" fill="none" markerEnd="url(#ns-arrow)" style={line}>
        <path d="M150 42 L180 82" />
        <path d="M150 95 L182 95" />
        <path d="M150 148 L180 108" />
        <path d="M325 95 L356 95" />
      </g>
    </svg>
  );
}

function TeamDiagram() {
  return (
    <svg viewBox="0 0 520 190" role="img" aria-label="Project manager coordinating 2 business analysts, 2 system analysts and 2 vendor developer teams delivering the T Connected app">
      <g fontSize="13" fontWeight="700" textAnchor="middle" style={text}>
        <rect x="185" y="10" width="150" height="40" rx="12" style={key} />
        <text x="260" y="35" style={{ fill: "#fff" }}>Project Manager</text>
        <rect x="10" y="90" width="150" height="40" rx="12" style={box} />
        <text x="85" y="115">2 Business Analysts</text>
        <rect x="185" y="90" width="150" height="40" rx="12" style={box} />
        <text x="260" y="115">2 System Analysts</text>
        <rect x="360" y="90" width="150" height="40" rx="12" style={box} />
        <text x="435" y="115">2 vendor dev teams</text>
        <rect x="160" y="150" width="200" height="34" rx="12" style={highlight} />
        <text x="260" y="172" style={accentText}>T Connected app · 10+ projects</text>
      </g>
      <g strokeWidth="2" fill="none" style={line}>
        <path d="M260 50 L260 90" />
        <path d="M230 50 L120 90" />
        <path d="M290 50 L400 90" />
        <path d="M85 130 L200 150" />
        <path d="M260 130 L260 150" />
        <path d="M435 130 L320 150" />
      </g>
    </svg>
  );
}

function ReleaseDiagram() {
  return (
    <svg viewBox="0 0 520 120" role="img" aria-label="Release through CI/CD with automated testing, production, monitoring dashboards and Tier-3 escalation, supporting revenue-critical services">
      <g fontSize="12" fontWeight="700" textAnchor="middle" style={text}>
        <rect x="6" y="38" width="86" height="44" rx="10" style={box} />
        <text x="49" y="64">Release</text>
        <rect x="112" y="38" width="108" height="44" rx="10" style={box} />
        <text x="166" y="58">CI/CD +</text>
        <text x="166" y="73">auto tests</text>
        <rect x="240" y="38" width="90" height="44" rx="10" style={box} />
        <text x="285" y="64">Production</text>
        <rect x="350" y="38" width="86" height="44" rx="10" style={box} />
        <text x="393" y="58">Monitoring</text>
        <text x="393" y="73">dashboards</text>
        <rect x="452" y="30" width="62" height="60" rx="10" style={key} />
        <text x="483" y="54" fontSize="10.5" style={{ fill: "#fff" }}>Revenue-</text>
        <text x="483" y="67" fontSize="10.5" style={{ fill: "#fff" }}>critical</text>
        <text x="483" y="80" fontSize="10.5" style={{ fill: "#fff" }}>services</text>
      </g>
      <g strokeWidth="2" fill="none" style={line}>
        <path d="M92 60 L110 60" />
        <path d="M220 60 L238 60" />
        <path d="M330 60 L348 60" />
        <path d="M436 60 L450 60" />
      </g>
      <text x="393" y="108" fontSize="11" textAnchor="middle" style={sub}>Tier-3 escalation</text>
    </svg>
  );
}

function UatDiagram() {
  const steps = ["Daily test plan", "Scenario details", "Record results", "User guide"];
  return (
    <svg viewBox="0 0 520 150" role="img" aria-label="UAT Tracker: daily test plan, scenario details, a page to record results and a user guide, for the SPC New ERP on NetSuite">
      <Arrow id="uat-arrow" />
      <text x="260" y="24" textAnchor="middle" fontSize="12" fontWeight="700" style={sub}>SPC New ERP (NetSuite) · user acceptance testing</text>
      <g fontSize="12.5" fontWeight="700" textAnchor="middle" style={text}>
        {steps.map((s, i) => (
          <g key={s}>
            <rect x={10 + i * 130} y="52" width="106" height="52" rx="12" style={box} />
            <text x={63 + i * 130} y="83">{s}</text>
          </g>
        ))}
      </g>
      <g strokeWidth="2" fill="none" markerEnd="url(#uat-arrow)" style={line}>
        <path d="M116 78 L138 78" />
        <path d="M246 78 L268 78" />
        <path d="M376 78 L398 78" />
      </g>
      <text x="260" y="136" textAnchor="middle" fontSize="11" style={accentText}>Built with AI coding agents · in use</text>
    </svg>
  );
}

function AiTeamDiagram() {
  const agents = [
    { y: 20, name: "Claude Code" },
    { y: 86, name: "Antigravity (Gemini)" },
    { y: 152, name: "ChatGPT Codex" },
  ];
  return (
    <svg viewBox="0 0 600 224" role="img" aria-label="Vision: one request goes to an orchestrator that splits the work between Claude Code, Antigravity (Gemini) and ChatGPT Codex, then returns one summary">
      <Arrow id="ai-arrow" />
      <g fontSize="12.5" fontWeight="700" textAnchor="middle" style={text}>
        <rect x="8" y="80" width="104" height="64" rx="12" style={box} />
        <text x="60" y="108">You</text>
        <text x="60" y="126" fontSize="10.5" style={sub}>one request</text>
        <rect x="146" y="70" width="124" height="84" rx="14" style={key} />
        <text x="208" y="106" style={{ fill: "#fff" }}>Orchestrator</text>
        <text x="208" y="124" fontSize="10.5" style={{ fill: "#fff" }}>plans and splits</text>
        <text x="208" y="138" fontSize="10.5" style={{ fill: "#fff" }}>the work</text>
        {agents.map((a) => (
          <g key={a.name}>
            <rect x="306" y={a.y} width="146" height="52" rx="12" style={box} />
            <text x="379" y={a.y + 31}>{a.name}</text>
          </g>
        ))}
        <rect x="486" y="80" width="106" height="64" rx="12" style={highlight} />
        <text x="539" y="108" style={accentText}>Summary</text>
        <text x="539" y="126" fontSize="10.5" style={sub}>back to you</text>
      </g>
      <g strokeWidth="2" fill="none" markerEnd="url(#ai-arrow)" style={line}>
        <path d="M112 112 L142 112" />
        <path d="M270 100 L302 50" />
        <path d="M270 112 L302 112" />
        <path d="M270 124 L302 178" />
        <path d="M452 46 L482 100" />
        <path d="M452 112 L482 112" />
        <path d="M452 178 L482 124" />
      </g>
    </svg>
  );
}

/** Smallest drawing width (px) that keeps the text near 11px or more on phones. */
const MIN_WIDTH: Record<DiagramKey, number> = { netsuite: 500, team: 500, release: 500, uat: 500, aiteam: 560 };

function drawing(name: DiagramKey): ReactElement {
  switch (name) {
    case "uat":
      return <UatDiagram />;
    case "aiteam":
      return <AiTeamDiagram />;
    case "netsuite":
      return <NetSuiteDiagram />;
    case "team":
      return <TeamDiagram />;
    case "release":
      return <ReleaseDiagram />;
  }
}

export function Diagram({ name }: { name: DiagramKey }): ReactElement {
  // `name` is a typed union from our own content files, never user input.
  // eslint-disable-next-line security/detect-object-injection
  const style = { "--dmin": `${MIN_WIDTH[name]}px` } as CSSProperties;
  return (
    <>
      <div className="dscroll" style={style} role="group" tabIndex={0} aria-label="Diagram (scrolls sideways on small screens)">
        {drawing(name)}
      </div>
      <span className="dhint" aria-hidden="true">
        <T en="↔ swipe to see all" th="↔ ปัดดูทั้งหมด" />
      </span>
    </>
  );
}

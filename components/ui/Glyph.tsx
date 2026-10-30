import {
  Activity,
  Award,
  BadgeCheck,
  Bot,
  Boxes,
  BrainCircuit,
  Briefcase,
  Building2,
  Car,
  ChartGantt,
  ChartNoAxesCombined,
  CalendarClock,
  ClipboardCheck,
  Cloud,
  Copy,
  Database,
  Download,
  Flag,
  FileSpreadsheet,
  FileText,
  Gauge,
  GitMerge,
  GitPullRequest,
  GraduationCap,
  Handshake,
  Info,
  Kanban,
  Landmark,
  Lightbulb,
  Link as LinkIcon,
  ListChecks,
  Mail,
  Megaphone,
  MoonStar,
  Network,
  PackageCheck,
  Plug,
  Presentation,
  Repeat,
  Rocket,
  Scale,
  Server,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Table2,
  TrendingUp,
  UserCog,
  Users,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { siClaude, siConfluence, siCypress, siGooglegemini, siGit, siJavascript, siJira, siNextdotjs, siReact, siSelenium, siUml } from "simple-icons";

/**
 * One place for every icon on the site.
 * - Lucide: generic outline icons (ISC licence).
 * - simple-icons: official brand marks (CC0 data) for tools/certifiers that have one.
 *   Vendors without a mark in that set (Oracle, NetSuite, IBM, Microsoft Office, ITIL) get a generic icon on purpose.
 */
const LUCIDE = {
  activity: Activity,
  award: Award,
  verified: BadgeCheck,
  boxes: Boxes,
  briefcase: Briefcase,
  building: Building2,
  car: Car,
  gantt: ChartGantt,
  chart: ChartNoAxesCombined,
  clock: CalendarClock,
  cloud: Cloud,
  copy: Copy,
  database: Database,
  download: Download,
  flag: Flag,
  sheet: FileSpreadsheet,
  doc: FileText,
  gauge: Gauge,
  merge: GitMerge,
  change: GitPullRequest,
  school: GraduationCap,
  handshake: Handshake,
  info: Info,
  governance: Landmark,
  idea: Lightbulb,
  link: LinkIcon,
  checklist: ListChecks,
  mail: Mail,
  megaphone: Megaphone,
  delivered: PackageCheck,
  plug: Plug,
  slides: Presentation,
  repeat: Repeat,
  rocket: Rocket,
  scale: Scale,
  server: Server,
  risk: ShieldAlert,
  phone: Smartphone,
  table: Table2,
  growth: TrendingUp,
  role: UserCog,
  team: Users,
  workflow: Workflow,
  bot: Bot,
  brain: BrainCircuit,
  clipboard: ClipboardCheck,
  kanban: Kanban,
  moon: MoonStar,
  network: Network,
  sparkles: Sparkles,
} satisfies Record<string, LucideIcon>;

/** Logos kept as files in public/logos (see SOURCES.txt there). Wide wordmarks keep their aspect ratio. */
const FILES = {
  linkedin: { src: "/logos/linkedin.svg" },
  openai: { src: "/logos/openai.svg" },
  excel: { src: "/logos/excel.svg" },
  powerpoint: { src: "/logos/powerpoint.svg" },
  word: { src: "/logos/word.svg" },
} as const;

const BRANDS = {
  javascript: siJavascript,
  react: siReact,
  nextjs: siNextdotjs,
  cypress: siCypress,
  jira: siJira,
  confluence: siConfluence,
  git: siGit,
  selenium: siSelenium,
  uml: siUml,
  claude: siClaude,
  gemini: siGooglegemini,
} as const;

export type GlyphName = keyof typeof LUCIDE | keyof typeof BRANDS | keyof typeof FILES;

const isBrand = (n: GlyphName): n is keyof typeof BRANDS => n in BRANDS;
const isFile = (n: GlyphName): n is keyof typeof FILES => n in FILES;
/** Very dark brand colours disappear on the dark theme, so they follow the text colour instead. */
function brandFill(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.28 ? "currentColor" : `#${hex}`;
}

export function Glyph({ name, size = 20, className }: { name: GlyphName; size?: number; className?: string }) {
  if (isBrand(name)) {
    // `name` is a typed union from our own content files, never user input.
    // eslint-disable-next-line security/detect-object-injection
    const b = BRANDS[name];
    return (
      <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill={brandFill(b.hex)} aria-hidden="true" focusable="false">
        <path d={b.path} />
      </svg>
    );
  }
  if (isFile(name)) {
    // eslint-disable-next-line security/detect-object-injection
    const f: { src: string; w?: number } = FILES[name];
    // Wordmarks (very wide) get a fixed width so they don't push the label onto a new line.
    const style = f.w ? { width: f.w, height: "auto", maxHeight: size } : { height: size, width: "auto" };
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={f.src} alt="" style={style} className={className} loading="lazy" />;
  }
  // eslint-disable-next-line security/detect-object-injection
  const Icon = LUCIDE[name];
  return <Icon size={size} strokeWidth={2} className={className} aria-hidden="true" focusable="false" />;
}

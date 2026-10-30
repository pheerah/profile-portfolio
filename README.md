# profile-portfolio

Portfolio site for Pheerah Praditthaphong. Next.js (App Router, TypeScript), English/Thai, light/dark.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Structure

```
app/                    routes only (page.tsx files stay thin) + SEO routes
  page.tsx              home = Hero + sections
  projects/ case-studies/
  layout.tsx            fonts, <head> scripts, Nav / Footer / Effects / Analytics
  opengraph-image.tsx sitemap.ts robots.ts icon.svg
components/
  ui/                   reusable primitives: Button, Card, Section, PageHeader, Chips, BackLinks, T (bilingual), Icon, CopyEmail
  home/                 one file per home section (Hero, About, HowIWork, SelectedWork, Experience, Skills, Contact...)
  work/                 ProjectsGrid, ProjectCard, CaseStudy
  layout/               Nav, Footer, Effects (mounts lib/effects)
lib/
  site.ts               name, email, URLs, résumé files, nav items, routes  <- change facts here
  content/              all copy as data: experience, projects, cases, home
  effects/              page effects, one function per file + index.ts (initEffects)
  prefs.ts              theme / language persistence + pre-paint script
  seo.ts                metadata + JSON-LD
  cx.ts                 class helper + reveal-stagger helper
public/                 résumé PDFs, project images, profile photo
```

## Common edits

- **Wording / facts:** `lib/content/*.ts` and `lib/site.ts`. Bilingual text is `[english, thai]` tuples (`Bi`).
- **Add a project / case study / job:** add an entry to `projects.ts` / `cases.ts` / `experience.ts`; the pages render the list.
- **Profile photo:** save it as `public/img/profile.jpg`; it appears in the hero automatically (falls back to "PP").
- **Résumé PDFs:** built by `../build_resume.py` (`RESUME_PUBLIC=1` for the web version) and copied to `public/resume.pdf` (one résumé only).
- **New animation:** add a function in `lib/effects/`, register it in `lib/effects/index.ts`.

## Deploy

Every push to `main` auto-deploys on Vercel (`vercel.json` sets the Next.js preset). Treat a push as a public release.

## Colours

Tokens live at the top of `app/globals.css`. Light mode is pastel (pale blue surfaces, pink actions, navy text); dark mode is navy with soft pink and gold. No green, grey or black.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F6FAFE` | `#121C42` | page |
| `--surface` | `#E5F1FB` | `#1B2858` | cards (feature cards in light mode use pastel pink `#FCE4EE`) |
| `--ink` / `--mute` | `#1B2A5C` / `#4A5688` | `#FFF6E5` / `#C9C4D6` | text |
| `--accent` | `#B33A60` | `#F29BB5` | links, small headings |
| `--accent-strong` | `#8A2848` | `#F29BB5` | text on tinted pills |
| `--btn` / `--on-btn` | `#C2456B` / `#fff` | `#F29BB5` / `#121C42` | buttons (dark mode needs dark text) |
| `--accent2` | `#2F6FB5` | `#F7C948` | small highlights only, never body text |

Pastel pink and pastel blue are never used as text (about 1.8:1 on the light page). Diagram colours come from `--d-*` variables so the same SVG is pastel in light mode and navy in dark mode. All measured text pairs pass WCAG AA (4.5:1). Brand logos keep their own colours; the black OpenAI mark is inverted in dark mode.

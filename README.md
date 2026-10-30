# profile-portfolio

Portfolio site for Pheerah Praditthaphong. Next.js (App Router, TypeScript).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

- Content: `lib/data.ts` (experience, projects), `app/page.tsx` (home sections)
- Effects (scroll, reveal, tilt, particles): `components/Effects.tsx`
- Static files: `public/` (résumé PDFs, project images)
- Deploy: every push to `main` auto-deploys on Vercel (`vercel.json` sets the Next.js preset)

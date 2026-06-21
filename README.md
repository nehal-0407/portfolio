# Neyamul Islam — Portfolio

A minimal, research-focused personal portfolio built with React, Vite, and Tailwind CSS.

## Stack
- React 18 + Vite 5
- Tailwind CSS (custom design tokens: colors, fonts, animation)
- No backend, fully static — deploys anywhere

## Design notes
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (metadata/tags/nav)
- Light theme by default with a one-click dark mode toggle (persisted in `localStorage`)
- Research/Publications section is styled like a numbered citation list, with DOI links where available
- The thin gradient bar at the very top of the page is a scroll-progress indicator — a nod to the explainable-AI/medical-imaging focus of the work

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy

**Vercel**
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com → New Project.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist`. Deploy.

**Netlify**
1. Push this folder to a GitHub repo (or drag-and-drop the `dist/` folder after running `npm run build` at app.netlify.com/drop).
2. If connecting via Git: build command `npm run build`, publish directory `dist`.

## Editing content

All page copy and data lives directly in the component files under `src/components/` (e.g. `Hero.jsx`, `Projects.jsx`, `Skills.jsx`, `Contact.jsx`) as plain arrays/JSX — no CMS or data file needed. Update text there and the site reflects it on next build.

## Photo & CV

`public/profile.jpg` and `public/resume.pdf` are already in place — the Hero photo and "Download CV" button work out of the box. To swap either later, just replace the file at the same path (same filename).

## WhatsApp button

A floating WhatsApp button (bottom-right, all pages) is in `src/components/WhatsAppButton.jsx`, wired to `+880 1738-062029` with a pre-filled greeting message. Update the `phone` and `message` constants there if either changes.

# Neyamul Islam — research portfolio

Static personal site built with React 18 and Vite 5. No CSS framework and no runtime
dependencies beyond React.

## Run locally

    npm install
    npm run dev

Open the printed URL (usually http://localhost:5173).

## Build

    npm run build     # output in dist/
    npm run preview   # serve the production build locally

## Deploy

Vercel: push the folder to GitHub, import the repo in Vercel, choose the Vite preset
(build `npm run build`, output `dist`). If the existing project `neyamul-islam` is already
linked to the repo, pushing to the main branch redeploys it.

Netlify: build command `npm run build`, publish directory `dist`, or drag `dist/` onto
app.netlify.com/drop.

The canonical URL and Open Graph image in `index.html` point to
https://neyamul-islam.vercel.app. Change them if the domain changes.

## Editing content

All text, links, publications, projects, and credentials are in `src/data/content.js`.
Components only render that file.

- Publications: `status` is `published`, `accepted`, or `submitted`. `venue: null` hides the
  venue line. The hero paper counts are computed from this list.
- Dashboard preview: put the PDF in `public/previews/` and set `previewPdf` for the IBM HR
  project to its path (for example `/previews/ibm-hr-dashboard.pdf`). While it is `null`,
  a marked placeholder is shown.
- Photo: `public/profile.webp` is a background-removed cutout (transparent), so the page colour shows
  through in both themes. Replace it with another transparent WebP or PNG of similar framing.
- CV: replace `public/resume.pdf` (keep the file name).

## Design system

Tokens are CSS variables at the top of `src/styles.css` (`--bg`, `--surface`, `--fg`,
`--muted`, `--rule`, `--accent`), with a separate dark palette under
`:root[data-theme='dark']`. Type: Newsreader (headings, publication titles) and IBM Plex
Sans (body, metadata).

Theme: an inline script in `index.html` applies the stored or system theme before first
paint. A stored choice exists only after the visitor uses the toggle.

Motion: one page-load sequence in the hero, a slow scan line in the hero illustration,
opacity-only section reveals, and publication expand/collapse. All of it is disabled under
`prefers-reduced-motion`.

## Email and WhatsApp buttons

Two floating buttons (bottom-right, every page) open an email to `links.email` and a WhatsApp
chat with `links.whatsappNumber` and a pre-filled greeting (`links.whatsappMessage`). All three
values live in `src/data/content.js`; the Contact section and footer use the same values.

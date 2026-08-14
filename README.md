# Nimsika Bosilu — Portfolio

Personal vCard-style portfolio built with React + Vite, inspired by
[codewithsadee/vcard-personal-portfolio](https://github.com/codewithsadee/vcard-personal-portfolio).

Live site: https://nimsika-bosilu.github.io/

## Sections

- **About** — introduction and what I do
- **Resume** — education, leadership & activities, skills
- **Portfolio** — filterable project grid (Full-Stack & Web, IoT & Embedded, Robotics & Autonomous)
- **Certificates & Achievements** — competition achievements and certificate gallery
- **Contact** — contact details, map, and message form

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the
workflow in `.github/workflows/deploy.yml`.

## Updating content

All text content (profile info, education, skills, projects, achievements)
lives in [src/data/profileData.js](src/data/profileData.js) — edit that file
to update what's shown on the site.

- **Certificates**: add entries to the `certificates` array in `profileData.js`
  once certificate images are available (drop images in
  `src/assets/images/certificates/`).
- **Project photos**: drop images in `src/assets/images/projects/` and wire
  them into the `projects` array / `Portfolio.jsx` to replace the placeholder
  thumbnails.

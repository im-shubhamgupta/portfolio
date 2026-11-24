# DeveloperFolio — Technology Overview

A single-page React portfolio. Content is mostly config-driven; optional GitHub and Medium data is fetched at build/start time.

---

## Architecture (how the code is organized)

```
src/
├── portfolio.js       # Main config: bio, skills, jobs, projects, social links
├── App.js             # Root → renders Main
├── index.js           # React entry point
├── containers/        # Page sections (Greeting, Skills, Projects, etc.)
├── components/        # Reusable UI (Header, cards, Footer, buttons)
├── contexts/          # Theme state (dark/light mode)
├── hooks/             # Shared logic (e.g. localStorage)
├── assets/            # Images, Lottie animations, fonts
└── _globalColor.scss  # Global theme colors

fetch.js (project root)  # Runs before start/build — GitHub & Medium APIs → public/*.json
```

**Flow**

1. Edit `portfolio.js` for most content.
2. `npm start` / `npm build` runs `fetch.js` first (if env vars are set).
3. React renders one long scrolling page — no client-side router.

**Stack:** React 16 · Create React App (`react-scripts`) · JavaScript · static site (no backend API in this repo).

---

## Key libraries (what they do)

| Library | Purpose |
|---------|---------|
| **react** / **react-dom** | UI components and rendering |
| **react-scripts** | Dev server, build, and tooling (CRA) |
| **sass** | SCSS styling |
| **react-reveal** | Scroll animations (e.g. Fade) |
| **react-headroom** | Navbar show/hide on scroll |
| **lottie-react** | Animated illustrations |
| **react-easy-emoji** | Emoji in text content |
| **colorthief** | Colors from logos on experience cards |
| **react-twitter-embed** | Twitter timeline section |
| **dotenv** | `.env` for GitHub/Medium fetch script |
| **gh-pages** | Deploy `build/` to GitHub Pages |
| **prettier** | Code formatting |

---

## Styling & UI

- **SCSS** — One `.scss` file per component/section; global palette in `_globalColor.scss`.
- **Layout** — Single-page sections stacked vertically; responsive CSS.
- **Theme** — Dark/light toggle via `StyleContext` + `useLocalStorage`; respects system `prefers-color-scheme` by default.
- **Assets** — Images and Lottie JSON under `src/assets/`; logos referenced from `portfolio.js` with `require()`.

**Run locally**

```bash
cd Portfolio/developerFolio
npm start
```

**Build**

```bash
npm run build
```

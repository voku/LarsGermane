# Lars Germane

Lars Germane is a production-ready Vite + React portfolio site with a handcrafted medieval visual style. The application is a static frontend, making it straightforward to run locally, build for production, and deploy to GitHub Pages.

## Features

- Responsive single-page portfolio experience
- Custom SVG ornaments and themed typography
- Static Vite build output suitable for CDN or GitHub Pages hosting
- Automated GitHub Pages deployment workflow

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The Vite dev server listens on `http://localhost:3000`.

## Production Commands

### Type-check the project

```bash
npm run lint
```

### Build for production

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Deployment

### GitHub Pages

This repository includes a GitHub Actions workflow that builds the site and deploys the `dist/` output to GitHub Pages whenever changes are pushed to `main`.

The Vite configuration automatically detects the repository name during GitHub Actions builds and uses it as the base path, so project-page deployments work without extra manual changes.

### Manual base-path override

If you deploy the app under a custom subpath, create a local `.env` file from `.env.example` and set:

```bash
VITE_BASE_URL="/your-subpath/"
```

## Project Structure

- `/src/App.tsx` — portfolio layout and themed UI sections
- `/src/main.tsx` — React entry point
- `/src/index.css` — global styling and theme rules
- `/index.html` — HTML shell, fonts, and favicon wiring
- `/vite.config.ts` — Vite plugins and deployment-aware base path
- `/.github/workflows/deploy.yml` — GitHub Pages build and deploy workflow

## Key Files Detector Helper Prompt

Use the following helper prompt when you want an assistant to quickly identify the files most relevant to a change:

```text
You are reviewing the Lars Germane repository.

Task: [describe the change you want to make]

Identify the key files that should be reviewed before editing anything.
For each file:
- explain why it matters
- note whether it affects UI, build, deployment, or documentation
- call out any related assets, environment variables, or workflows

Keep the answer focused on the smallest set of files needed to complete the task safely.
```

## Verification Checklist

Before shipping changes, verify:

1. `npm run lint` passes
2. `npm run build` succeeds
3. The site renders correctly in a browser
4. GitHub Pages is enabled in the repository settings to use GitHub Actions as the source

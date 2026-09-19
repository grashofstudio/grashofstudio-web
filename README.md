# grashofstudio-web

Official Astro website for **Grashof — Applied AI & Space Systems**.

## Positioning

Grashof is an applied AI engineering company. Current commercial solutions focus on:

- Vision AI & Perception Systems
- Thermal-Fluid Intelligence
- AI Workflow & Decision Systems

Future product R&D focuses on:

- Space Thermal Management
- Resilient Satellite Communications

## Pages

- `/`
- `/projects/bio-vision-ai/`
- `/projects/simulation-led-development/`
- `/projects/market-pulse/`
- `/privacy/`

## Local development

Node.js 22 or newer is required.

```bash
npm install
npm run dev
```

## Quality pipeline

```bash
npm run quality
```

This runs:

1. Astro / TypeScript checks
2. Production build
3. Generated-link and required-label verification

## Production build

```bash
npm run build
```

Output is generated in `dist/`.

## Deployment

The repository includes `netlify.toml` for static deployment. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Codex instructions

Read [`AGENTS.md`](AGENTS.md) before making changes. It contains the approved company positioning, information architecture, design rules, R&D disclosure rules, and definition of done.

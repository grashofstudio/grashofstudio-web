# grashofstudio-web

Official Astro website for **Grashof — Applied AI & Space Systems**.

## Positioning

Grashof focuses on thermal digital twins and applied AI solutions. Current commercial solutions are:

- Complete Thermal-Fluid Engineering Solutions
- Custom AI & API Applications

Future product R&D focuses on:

- Satellite Thermal Management
- Spacecraft EMI Protection

## Pages

- `/`
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

## Brand icons

Browser, Google Search, and app icons use the supplied Grashof logo mark.
To regenerate the committed PNG and ICO assets after updating that mark, run
`node scripts/generate-icons.mjs` after installing the project dependencies.

Bio Vision AI is not published as a case study, and Vision AI is no longer a separate homepage service.

## Deployment

The repository includes `netlify.toml` for static deployment. See [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Codex instructions

Read [`AGENTS.md`](AGENTS.md) before making changes. It contains the approved company positioning, information architecture, design rules, R&D disclosure rules, and definition of done.

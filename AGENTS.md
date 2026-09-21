# Grashof Website Development Rules

## Project objective

Build and maintain the official Grashof company website as a static Astro site for `https://grashofstudio.com`.

The site must communicate three layers without ambiguity:

1. **Core technology** — Applied AI
2. **Current commercial solutions** — Vision AI, thermal-fluid engineering, and AI workflow / decision systems
3. **Future product R&D** — satellite thermal management and electromagnetic-interference protection for spacecraft electronics

## Company positioning

Grashof is an applied AI engineering company.

Approved English positioning:

> Grashof builds deployable AI and engineering systems for vision, thermal-fluid challenges, intelligent operations, and future space infrastructure.

Approved Chinese positioning:

> Grashof 是一家以 AI 落地應用為核心的工程科技公司，整合視覺感知、熱流工程、資料與軟體系統，協助客戶解決真實世界中的技術問題

Approved bridge statement:

> Built for industry today. Engineered for space tomorrow.

## Current solutions

1. **Vision AI & Perception Systems**
   - Camera and video-stream integration
   - Image enhancement and preprocessing
   - Feature, object, and species recognition
   - AI API and lightweight-model integration
   - Edge deployment and real-time alerts

2. **Thermal-Fluid Intelligence**
   - Heat-transfer and fluid-flow analysis
   - Multiphysics simulation
   - Thermal-management design
   - Process parameter optimization
   - Process-window development
   - Equipment and product-development support

3. **AI Workflow & Decision Systems**
   - Multi-source API integration
   - Data normalization and scheduled updates
   - AI summarization and classification
   - Dashboards and Web applications
   - Anomaly detection and scenario analysis
   - Internal decision-support systems

Web, dashboard, and API work are delivery forms for applied AI systems, not a separate company identity.

## Future R&D

1. **Space Thermal Management**
2. **Spacecraft EMI Protection**

Every future technology must be visibly labeled with at least one of:

- `R&D ROADMAP`
- `UNDER DEVELOPMENT`
- `FUTURE PRODUCT DIRECTION`

Never describe unfinished R&D as a commercialized, field-proven, or production-ready product.

Public copy should describe shielding, grounding, filtering, and packaging work accurately. Do not present this R&D as a complete anti-jamming communication system.

## Approved information architecture

### Homepage

1. Hero
2. Current Solutions
3. Selected Projects
4. Future Systems
5. About Grashof
6. Contact
7. Footer

Do not add these homepage sections without explicit approval:

- How We Work
- Built For
- Lab Notes
- A second duplicated services section
- Generic AI capability cards

### Project pages

- `/projects/bio-vision-ai/`
- `/projects/simulation-led-development/`
- `/projects/market-pulse/`

Each project page must include:

1. Hero
2. Context
3. Problem
4. Solution
5. What We Delivered
6. Technical Approach
7. Evidence
8. Contact CTA

Do not invent performance metrics, customer names, confidential process conditions, or commercial outcomes.

## Project status labels

Use the approved labels accurately:

- Bio Vision AI — `APPLIED AI PROTOTYPE`
- Simulation-Led Process Development — `APPLIED ENGINEERING CASE`
- Market Pulse — `INTERNAL AI PRODUCT PROTOTYPE`

## Design system

- Black, white, and Grashof red only
- Cinematic industrial and space imagery
- Large negative space
- Thin, condensed display typography where available
- Restrained borders and straight geometry
- Minimal rounded cards
- No blue glassmorphism
- No generic neon AI glow effects
- No decorative gradients that reduce legibility
- Use supplied Grashof logo assets
- Prefer real project media over generated abstractions
- Space imagery belongs mainly in Hero and Future Systems
- Current Solutions must use real engineering / AI project media

Do not include font files in the repository. Use system font stacks.

## Technology and architecture

- Astro static output
- TypeScript strict mode
- Reusable Astro components
- Minimal client-side JavaScript
- No React unless interactive state genuinely requires it
- Semantic HTML
- Accessible navigation and controls
- Mobile-first responsive design
- Centralized design tokens
- No inline CSS except narrowly justified dynamic values
- No duplicated CSS rules
- No broken local paths

## Accessibility

- Keyboard-accessible navigation
- Visible focus states
- Meaningful image alt text
- Decorative images use empty alt text
- Videos must be muted when autoplaying
- Respect `prefers-reduced-motion`
- Maintain WCAG AA contrast for body text and controls
- Touch targets should be at least 44 × 44 CSS pixels when practical

## SEO

Every page must have:

- Unique title
- Unique meta description
- Canonical URL
- Open Graph metadata
- Twitter card metadata

The site must include:

- `robots.txt`
- XML sitemap
- Organization JSON-LD
- Favicon
- Social preview image

## Definition of done

Before completing any milestone:

1. Run `npm run check`
2. Run `npm run build`
3. Run `npm run verify`
4. Report changed files
5. Report test results
6. Report unresolved issues honestly

Final acceptance:

- No build errors
- No console-breaking JavaScript errors
- No broken internal links or missing local assets
- Responsive at 375, 768, 1024, and 1440 px
- Reduced-motion preference supported
- All Future Systems content clearly labeled R&D
- Current solutions are clearly separated from future R&D

## Six implementation milestones

### Milestone 1 — Foundation

- Astro + TypeScript foundation
- Base layout
- Header and Footer
- Global design tokens
- Responsive navigation
- Starfield background
- AGENTS.md

### Milestone 2 — Homepage

- Hero
- Current Solutions
- Selected Projects
- Future Systems
- About
- Contact

### Milestone 3 — Case studies

- Bio Vision AI
- Simulation-Led Process Development
- Market Pulse

### Milestone 4 — Responsive, accessibility, and motion

- 375 / 768 / 1024 / 1440 layouts
- Focus states
- Reduced motion
- Media optimization
- Touch-target audit

### Milestone 5 — SEO and quality

- Metadata
- Open Graph
- Sitemap
- robots.txt
- JSON-LD
- CI build
- Internal-link verifier

### Milestone 6 — Deployment readiness

- Netlify configuration
- Deployment documentation
- Domain and email checklist
- Final production build

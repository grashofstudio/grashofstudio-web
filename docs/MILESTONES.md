# Six-Milestone Delivery Record

## 1 — Foundation

**Status:** Complete

- Astro / TypeScript project structure
- Reusable BaseLayout, Header, Footer, and Starfield
- Black / white / Grashof red design tokens
- Responsive navigation
- `AGENTS.md`

## 2 — Homepage

**Status:** Complete

- Hero
- Current Solutions
- Selected Projects
- Future Systems
- About Grashof
- Contact

## 3 — Case Studies

**Status:** Complete

- Simulation-Led Process Development
- Market Pulse

Both published pages use the same eight-part case-study framework. Bio Vision AI and the separate Vision AI service were withdrawn from the homepage on 2026-10-02.

## 4 — Responsive, Accessibility, and Motion

**Status:** Complete in source

- 375 / 768 / 1024 / 1440 breakpoints
- Keyboard navigation and visible focus
- Reduced-motion handling
- Controlled video behavior
- Responsive project media

## 5 — SEO and Quality

**Status:** Complete in source

- Page-specific metadata
- Canonical URLs
- Open Graph / Twitter metadata
- Organization JSON-LD
- `robots.txt` and XML sitemap
- GitHub Actions CI
- Generated-link verifier

## 6 — Deployment Readiness

**Status:** Complete in source

- Netlify build configuration
- Security and cache headers
- Domain / email checklist
- Deployment documentation

## Verification note

The original environment could not reach the npm registry. Local check/build/verify subsequently passed for the 2026-10-05 contact-email release. Production currently uses manual Netlify Drop uploads, not a connected Git build; a GitHub push alone does not publish the site.

The SEO release adds three topic pages with homepage internal links, expanded sitemap coverage, WebPage/BreadcrumbList metadata, and explicit development-state disclosures. Local Astro checks cover 26 files; the static build generates 8 HTML pages and the sitemap contains 7 indexable URLs. Browser checks found no horizontal overflow on the three new pages and homepage at 375/768/1024/1440, lazy images loaded after scrolling, and mobile navigation opened and closed correctly. Production deployment and Google indexing are separate checks, not ranking acceptance.

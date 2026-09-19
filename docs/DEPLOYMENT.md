# Deployment Guide

## 1. GitHub

Create a repository named `grashofstudio-web`, then push this project to `main`.

```bash
git remote add origin https://github.com/grashofstudio/grashofstudio-web.git
git push -u origin main
```

The repository includes six milestone commits for traceability.

## 2. Netlify

1. Open Netlify
2. Select **Add new site → Import an existing project**
3. Select GitHub and `grashofstudio-web`
4. Netlify reads `netlify.toml`
5. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Deploy

## 3. Domain

Connect `grashofstudio.com` to the new Netlify site. Preserve the previous Netlify deployment until the new Preview URL is approved.

## 4. Email

Before publishing the final Contact section, verify that this address can receive mail:

```text
hello@grashofstudio.com
```

A forwarding rule to the existing Gmail inbox is acceptable for the first release.

## 5. Pre-production checklist

- GitHub Actions CI is green
- Netlify Preview deploy succeeds
- `/`, three project pages, `/privacy/`, `/404.html`, and `/sitemap.xml` load
- Mobile layout has no horizontal overflow
- Videos load and expose controls on case pages
- Future Systems remains labeled R&D
- Contact email is tested
- Custom domain HTTPS is active

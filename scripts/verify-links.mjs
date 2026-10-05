import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('dist');
const exists = async (target) => { try { await fs.access(target); return true; } catch { return false; } };
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

async function resolveHtmlTarget(file, value) {
  const pathname = value.split('#')[0].split('?')[0];
  if (!pathname) return file;
  const target = pathname.startsWith('/') ? path.join(root, pathname) : path.resolve(path.dirname(file), pathname);
  const candidates = target.endsWith('.html')
    ? [target]
    : [`${target}.html`, path.join(target, 'index.html')];
  for (const candidate of candidates) {
    if (await exists(candidate)) return candidate;
  }
  return null;
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else files.push(full);
  }
  return files;
}

if (!(await exists(root))) throw new Error('dist/ does not exist. Run npm run build first.');
const files = await walk(root);
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const failures = [];
const attrPattern = /(?:href|src)=["']([^"']+)["']/g;
const hrefPattern = /href=["']([^"']+)["']/g;
const titles = new Map();
const descriptions = new Map();
const indexableUrls = new Set();

for (const file of htmlFiles) {
  const html = await fs.readFile(file, 'utf8');
  for (const match of html.matchAll(attrPattern)) {
    const value = match[1];
    if (!value || /^(?:https?:|mailto:|tel:|data:|#)/.test(value)) continue;
    const clean = value.split('#')[0].split('?')[0];
    if (!clean) continue;
    const target = clean.startsWith('/') ? path.join(root, clean) : path.resolve(path.dirname(file), clean);
    const candidates = [target, `${target}.html`, path.join(target, 'index.html')];
    if (!(await Promise.any(candidates.map(async (candidate) => (await exists(candidate)) ? candidate : Promise.reject())).catch(() => null))) {
      failures.push(`${path.relative(root, file)} -> ${value}`);
    }
  }

  for (const match of html.matchAll(hrefPattern)) {
    const value = match[1];
    if (!value.includes('#') || /^(?:https?:|mailto:|tel:|data:)/.test(value)) continue;
    const fragment = decodeURIComponent(value.split('#')[1] ?? '');
    if (!fragment) continue;
    const targetFile = await resolveHtmlTarget(file, value);
    if (!targetFile) continue;
    const targetHtml = targetFile === file ? html : await fs.readFile(targetFile, 'utf8');
    const idPattern = new RegExp(`\\sid=["']${escapeRegExp(fragment)}["']`, 'i');
    if (!idPattern.test(targetHtml)) failures.push(`${path.relative(root, file)} -> ${value} (missing fragment target)`);
  }

  const relative = path.relative(root, file);
  const expectedPath = relative === 'index.html' ? '/' : relative.endsWith('/index.html') ? `/${relative.slice(0, -'index.html'.length)}` : `/${relative}`;
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
  const noindex = /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
  if (!noindex && canonical !== `https://grashofstudio.com${expectedPath}`) failures.push(`${relative} has an incorrect canonical URL`);
  if ([...html.matchAll(/<h1(?:\s|>)/gi)].length !== 1) failures.push(`${relative} must have exactly one H1`);
  if (!noindex && canonical) indexableUrls.add(canonical);
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const schema = JSON.parse(match[1]);
      if (schema['@type'] === 'BreadcrumbList') {
        const items = schema.itemListElement;
        if (!Array.isArray(items) || items.length < 2 || items.some((item, index) => item.position !== index + 1) || items.at(-1).item !== canonical) failures.push(`${relative} has invalid breadcrumb metadata`);
      }
    } catch {
      failures.push(`${relative} has invalid JSON-LD`);
    }
  }
  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  const description = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1]?.trim();
  const requiredSeo = [
    ['canonical URL', /<link[^>]+rel=["']canonical["'][^>]+href=["'][^"']+["']/i],
    ['Open Graph title', /<meta[^>]+property=["']og:title["'][^>]+content=["'][^"']+["']/i],
    ['Open Graph description', /<meta[^>]+property=["']og:description["'][^>]+content=["'][^"']+["']/i],
    ['Open Graph URL', /<meta[^>]+property=["']og:url["'][^>]+content=["'][^"']+["']/i],
    ['Open Graph image', /<meta[^>]+property=["']og:image["'][^>]+content=["'][^"']+["']/i],
    ['Twitter card', /<meta[^>]+name=["']twitter:card["'][^>]+content=["'][^"']+["']/i],
  ];
  if (!title) failures.push(`${relative} missing page title`);
  if (!description) failures.push(`${relative} missing meta description`);
  for (const [label, pattern] of requiredSeo) {
    if (!pattern.test(html)) failures.push(`${relative} missing ${label}`);
  }
  if (title) {
    if (titles.has(title)) failures.push(`${relative} duplicates title used by ${titles.get(title)}`);
    else titles.set(title, relative);
  }
  if (description) {
    if (descriptions.has(description)) failures.push(`${relative} duplicates description used by ${descriptions.get(description)}`);
    else descriptions.set(description, relative);
  }
}

const homepage = await fs.readFile(path.join(root, 'index.html'), 'utf8');
for (const required of ['R&amp;D ROADMAP', 'UNDER DEVELOPMENT', 'APPLIED ENGINEERING CASE', 'INTERNAL AI PRODUCT PROTOTYPE']) {
  if (!homepage.includes(required)) failures.push(`index.html missing required label: ${required}`);
}

// Search identity must point to the supplied company logo, not the retired G.
const schemas = [...homepage.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .map((match) => JSON.parse(match[1]));
const organization = schemas.find((schema) => schema['@type'] === 'Organization');
const website = schemas.find((schema) => schema['@type'] === 'WebSite');
if (organization?.logo !== 'https://grashofstudio.com/icons/icon-512.png') failures.push('Organization must use the company logo');
if (website?.url !== 'https://grashofstudio.com/') failures.push('Homepage missing canonical WebSite identity');
for (const [filename, size] of [['favicon-96.png', 96], ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  const metadata = await sharp(path.join(root, 'icons', filename)).metadata();
  if (metadata.format !== 'png' || metadata.width !== size || metadata.height !== size) failures.push(`Invalid square company icon: ${filename}`);
}
const companyIcon = await fs.readFile(path.join(root, 'icons/icon-512.png'));
const legacyIcon = await fs.readFile(path.join(root, 'icons/favicon.svg'), 'utf8');
if (!legacyIcon.includes(companyIcon.toString('base64'))) failures.push('Legacy favicon URL must contain the current company logo');
if (homepage.includes('bio-vision-ai')) failures.push('Retired Bio Vision AI case must not be linked');

const sitemap = await fs.readFile(path.join(root, 'sitemap.xml'), 'utf8');
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) failures.push('Sitemap contains duplicate URLs');
for (const url of indexableUrls) if (!sitemapUrls.includes(url)) failures.push(`Indexable page missing from sitemap: ${url}`);
for (const url of sitemapUrls) if (!indexableUrls.has(url)) failures.push(`Sitemap contains an absent or noindex page: ${url}`);
for (const topicPath of ['solutions/thermal-digital-twin/index.html', 'rd/satellite-thermal-management/index.html']) {
  const topicHtml = await fs.readFile(path.join(root, topicPath), 'utf8');
  if (!topicHtml.includes('UNDER DEVELOPMENT')) failures.push(`${topicPath} must disclose development status`);
}

if (failures.length) {
  console.error('Verification failed:\n' + failures.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML files and ${sitemapUrls.length} sitemap URLs: local references, fragments, SEO, JSON-LD, and development labels passed.`);

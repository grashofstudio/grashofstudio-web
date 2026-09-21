import { promises as fs } from 'node:fs';
import path from 'node:path';

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
for (const required of ['R&amp;D ROADMAP', 'UNDER DEVELOPMENT', 'APPLIED AI PROTOTYPE', 'APPLIED ENGINEERING CASE', 'INTERNAL AI PRODUCT PROTOTYPE']) {
  if (!homepage.includes(required)) failures.push(`index.html missing required label: ${required}`);
}

if (failures.length) {
  console.error('Verification failed:\n' + failures.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML files: local references, fragment targets, and SEO metadata passed.`);

import { promises as fs } from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const exists = async (target) => { try { await fs.access(target); return true; } catch { return false; } };

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
}

const homepage = await fs.readFile(path.join(root, 'index.html'), 'utf8');
for (const required of ['R&amp;D ROADMAP', 'UNDER DEVELOPMENT', 'APPLIED AI PROTOTYPE', 'APPLIED ENGINEERING CASE']) {
  if (!homepage.includes(required)) failures.push(`index.html missing required label: ${required}`);
}

if (failures.length) {
  console.error('Verification failed:\n' + failures.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML files with no broken local references.`);

// Resize the supplied company mark; do not redraw or alter the logo.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const publicDir = new URL('../public/', import.meta.url);
const source = await sharp(new URL('logo/grashof-logo-mark-dark.png', publicDir).pathname)
  .flatten({ background: '#000000' })
  .trim({ threshold: 10 })
  .png()
  .toBuffer();

async function icon(size) {
  const padding = Math.round(size * 0.08);
  return sharp(source)
    .resize(size - padding * 2, size - padding * 2, { fit: 'contain', background: '#000000' })
    .extend({ top: padding, bottom: padding, left: padding, right: padding, background: '#000000' })
    .png()
    .toBuffer();
}

await mkdir(new URL('icons/', publicDir), { recursive: true });
for (const [size, filename] of [
  [96, 'icons/favicon-96.png'],
  [180, 'icons/apple-touch-icon.png'],
  [192, 'icons/icon-192.png'],
  [512, 'icons/icon-512.png'],
]) {
  await writeFile(new URL(filename, publicDir), await icon(size));
}

// Keep the formerly published SVG URL working with the real brand mark, so
// cached pages and crawlers cannot encounter the retired generic blue G.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><image width="512" height="512" href="data:image/png;base64,${(await icon(512)).toString('base64')}"/></svg>\n`;
await writeFile(new URL('icons/favicon.svg', publicDir), svg);

// An ICO directory containing PNG images at standard browser icon sizes.
const sizes = [16, 32, 48, 64];
const images = await Promise.all(sizes.map(icon));
const directory = Buffer.alloc(6 + sizes.length * 16);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((image, index) => {
  const entry = 6 + index * 16;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(image.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += image.length;
});
await writeFile(new URL('favicon.ico', publicDir), Buffer.concat([directory, ...images]));
console.log('Generated company-logo PNG and ICO assets.');

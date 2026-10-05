import type { APIRoute } from 'astro';
import { topics } from '../data/topics';

const paths = [
  '/',
  '/projects/simulation-led-development/',
  '/projects/market-pulse/',
  '/privacy/',
  ...topics.map((topic) => topic.path),
];

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://grashofstudio.com');
  const urls = paths.map((path) => `<url><loc>${new URL(path, base).href}</loc></url>`).join('');
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};

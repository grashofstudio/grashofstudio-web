import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://grashofstudio.com',
  output: 'static',
  build: {
    format: 'directory'
  }
});

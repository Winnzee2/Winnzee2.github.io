// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://Winnzee2.github.io',
  base: '/',
  integrations: [tailwind()],
});

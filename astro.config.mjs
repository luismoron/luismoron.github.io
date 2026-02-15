import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://luismoron.github.io',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },

  integrations: [react(), sitemap()]
});
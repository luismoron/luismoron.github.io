import { defineConfig } from 'astro/config';
import path from 'path';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://luismoron.dev',
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), './src'),
      },
    },
  },

  integrations: [sitemap()]
});
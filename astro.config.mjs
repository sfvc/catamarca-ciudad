import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  devToolbar: {
    enabled: false
  },
  adapter: netlify(),
  alias: {
    '@components': path.resolve('./src/components'),
    '@layout': path.resolve('./src/layout'),
    '@pages': path.resolve('./src/pages'),
    '@css': path.resolve('./src/css'),
    '@data': path.resolve('./src/data'),
    '@api': path.resolve('./src/api'),
  }
});
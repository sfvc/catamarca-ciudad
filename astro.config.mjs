import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
import path from 'path';

export default defineConfig({
  integrations: [react()],
  output: "static", // Cambiado a "static"
  adapter: netlify(),
  devToolbar: {
    enabled: false
  },
  alias: {
    '@components': path.resolve('./src/components'),
    '@layout': path.resolve('./src/layout'),
    '@pages': path.resolve('./src/pages'),
    '@css': path.resolve('./src/css'),
    '@data': path.resolve('./src/data'),
    '@api': path.resolve('./src/api'),
    '@helpers': path.resolve('./src/helpers'),
  }
});

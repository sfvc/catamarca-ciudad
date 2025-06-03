import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import path from 'path';

export default defineConfig({
  integrations: [react()],
  output: "server", // Servidor Node.js
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

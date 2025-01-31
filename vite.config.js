import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',  // Redirige las peticiones a tu servidor backend
    },
  },
});
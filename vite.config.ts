import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './client',  // Add this line
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  build: {
    outDir: '../dist/public',  // Update this path (relative to client folder)
    emptyOutDir: true,
  },
  server: {
    port: 5173,
  },
  base: './',
});

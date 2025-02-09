import { defineConfig } from 'vitest/config';
import Vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: 'jsdom',
    pool: "vmThreads",
    css: false, // <-- Tambahkan ini
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});

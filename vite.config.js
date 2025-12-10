// vite.config.js - Actualízalo:
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2017',
    minify: 'esbuild',
    cssMinify: true,    
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          ui: ['vue-i18n']
        }
      }
    }
  },
  server: {
    port: 5173,
    cors: true,
    strictPort: true
  }
})
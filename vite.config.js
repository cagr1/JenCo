// vite.config.js - Actualízalo:
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    target: 'es2017',
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
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
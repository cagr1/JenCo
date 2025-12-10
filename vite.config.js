import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()

  ],
  build: {
    target: 'es2017',
    minify: 'esbuild',
    cssMinify: true
  },
  server
: {
    port: 5173,
    cors: true,
    strictPort: true

  }
})

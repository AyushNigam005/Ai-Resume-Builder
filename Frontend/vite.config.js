// Frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  // must be '/' for Vercel (project root)
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      // import using "@/..." => points to Frontend/src
      '@': path.resolve(__dirname, 'src')
    }
  },
  // Optional: increase chunk warning if you don't want large-chunk warnings
  // build: {
  //   chunkSizeWarningLimit: 1200
  // }
})

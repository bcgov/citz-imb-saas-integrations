import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/miro/',
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    host: true,
    port: 3000,
  },
})

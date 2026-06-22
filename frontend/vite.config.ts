import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host : true,
    port: 3000,
    strictPort: true,
    watch: {
      usePolling: true,
    }
  },
  build: {
    outDir: '../src/main/resources/static',
    emptyOutDir:true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

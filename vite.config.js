import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Pag_Perfil-renato/',
  build: {
    outDir: 'docs'
  },
  server: {
    host: '0.0.0.0'
  }
})


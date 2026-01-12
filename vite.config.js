// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // <--- CAMBIA ESTO de '/Pag_Perfil-renato/' a './'
  build: {
    outDir: 'docs'
  },
  server: {
    host: '0.0.0.0'
  }
})
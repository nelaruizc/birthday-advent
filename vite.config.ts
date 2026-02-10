import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ajusta este valor si cambias el nombre del repositorio en GitHub.
export default defineConfig({
  base: '/birthday-advent/',
  plugins: [react()],
})

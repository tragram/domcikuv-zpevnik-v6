import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/domcikuv-zpevnik-v2",

  assetsInclude: ["/songs/images/*"],
})

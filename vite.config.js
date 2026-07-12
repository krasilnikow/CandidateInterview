import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    minify: false,
    sourcemap: true,
  },
  base: "/CandidateInterview/",
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Replace 'your-repo-name' with the name of your GitHub repo
})

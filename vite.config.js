import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Phonebook-Client",
  plugins: [react()],
  server: {
    proxy: "https://phonebook-app-wnyv.onrender.com",
  },
})

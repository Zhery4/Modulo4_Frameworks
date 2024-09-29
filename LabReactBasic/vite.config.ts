import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.GITHUB_API_URL': JSON.stringify(process.env.GITHUB_API_URL),
    'process.env.CUSTOM_API_KEY': JSON.stringify(process.env.CUSTOM_API_KEY)
  }  
})

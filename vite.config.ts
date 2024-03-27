import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente
dotenv.config();
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

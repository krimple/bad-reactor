import { defineConfig } from 'vite'
import express from 'vite-plugin-express';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    express({
      middlewareFiles: './server/**/*.ts'
    })
  ],
})

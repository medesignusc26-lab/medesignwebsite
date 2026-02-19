import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Resolve Figma asset imports to src/assets directory
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
  // File types to support raw imports
  assetsInclude: ['**/*.svg', '**/*.csv'],
  build: {
    // Ensure assets are properly handled
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          motion: ['motion'],
        },
      },
    },
  },
})

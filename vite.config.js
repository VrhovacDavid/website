import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  sitemap:{
    hostname: 'https://tilltech.ch'
  },
  plugins: [
    react(),
    visualizer({
      filename: './dist/stats.html', // Speicherort der Visualisierungsdatei
      open: true, // Öffnet die Datei automatisch nach dem Build
    })
  ],
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
});


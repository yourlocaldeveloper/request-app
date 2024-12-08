import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/styles/_breakpoints.scss' as *;
          @use '@/styles/_colors.scss' as *;
          @use '@/styles/_fonts.scss' as *;
        `,
      },
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Example alias for 'src'
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@public': path.resolve(__dirname, 'public'),
    },
  },
});

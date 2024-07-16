import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

export default defineConfig({
  plugins: [
    reactRefresh(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/variables";`
      },
    },
  },
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      "@components": path.resolve(__dirname, 'src/components/lib'),
      "@hooks": path.resolve(__dirname, 'src/hooks/lib'),
      "@constants": path.resolve(__dirname, 'src/constants/lib'),
      "@ui": path.resolve(__dirname, 'src/ui/lib'),
      "@icons": path.resolve(__dirname, 'src/icons/lib'),
      "@interfaces": path.resolve(__dirname, 'src/interfaces/lib'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@routes": path.resolve(__dirname, 'src/routes/routes'),
      "@layout": path.resolve(__dirname, 'src/layouts/lib'),
      "@types": path.resolve(__dirname, 'src/types/lib'),
      "@store": path.resolve(__dirname, 'src/store'),
      "@context": path.resolve(__dirname, 'src/context/lib'),
    },
  }
});

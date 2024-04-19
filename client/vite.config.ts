import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

const p = (src: string) => resolve(__dirname, src);

// https://vitejs.dev/config/
// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  base: '/what_i_eat_today/',
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@src', replacement: p('./src') },
      { find: '@assets', replacement: p('./src/assets') },
      { find: '@icon', replacement: p('./src/assets/icon') },
      { find: '@styles', replacement: p('./src/assets/stylesheet') },
      { find: '@static', replacement: p('./src/static') },
      { find: '@views', replacement: p('./src/views') },
    ]
  },
  cacheDir: '/.vite/',
  build: {
    outDir: "./build",
    minify: true,
    cssMinify: true,
  },
})

// vite.config.js
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [dts(
    {
      include: 'src/thy-tooltip.ts',
    }
  )],
  build: {
    lib: {
      entry: 'src/thy-tooltip.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: [/^lit/],
    }
  }
})
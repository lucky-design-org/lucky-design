// vite.config.ts
import path from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: '@lucky-design/components',
    },
    rollupOptions: {
      external: [
        'vue',
      ],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    Vue(),
    VueJSX(),
    AutoImport({
      imports: ['vue'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      ],
      dts: 'auto-imports.d.ts',
    }),
  ],
})

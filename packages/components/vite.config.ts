import path from 'node:path'
import { resolve } from 'path'
import fs from 'fs'
import AutoImport from 'unplugin-auto-import/vite'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJSX from '@vitejs/plugin-vue-jsx'
import Unocss from 'unocss/vite'
import fsExtra from 'fs-extra'

let config

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
    Unocss(),
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { root, build } = config
        const { outDir } = build
        const styleFile = resolve(root, outDir, 'style.css')
        if (fs.existsSync(styleFile)) {
          await fsExtra.copyFile(
            styleFile,
            resolve(__dirname, '../lucky-design/src/style.css'),
          )
        }
      },
    },
  ],
})

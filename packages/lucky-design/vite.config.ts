import path from 'node:path'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import fs from 'fs-extra'

let config

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lucky-design',
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
    {
      name: 'vite-plugin-copy-style',
      apply: 'build',
      enforce: 'post',
      configResolved(_config) {
        config = _config
      },
      async closeBundle() {
        const { build, root } = config
        const { outDir } = build
        const styleFile = resolve(__dirname, 'src/style.css')
        await fs.copyFile(
          styleFile,
          resolve(root, outDir, 'style.css'),
        )
      },
    },
  ],
})

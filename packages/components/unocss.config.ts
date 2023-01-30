import type { Preset } from 'unocss'
import { presetAttributify, presetUno, transformerDirectives } from 'unocss'
import { defineConfig } from 'unocss/vite'
import { presetLuckyDesign } from '@lucky-design/preset'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetLuckyDesign() as unknown as Preset,
    presetUno(),
  ],
  transformers: [transformerDirectives()],
})

import type { Preset } from 'unocss'
import { presetAttributify, presetUno, transformerDirectives } from 'unocss'
import { defineConfig } from 'unocss/vite'
import { presetLuckyDesign } from '@lucky-design/preset'
import presetIcons from '@unocss/preset-icons'
export default defineConfig({
  presets: [
    presetIcons() as unknown as Preset,
    presetAttributify(),
    presetLuckyDesign() as unknown as Preset,
    presetUno(),
  ],
  transformers: [transformerDirectives()],
})

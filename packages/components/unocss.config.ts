import { presetAttributify, presetUno } from 'unocss'
import { defineConfig } from 'unocss/vite'
import { presetLuckyDesign } from '@lucky-design/preset'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno(),
    presetLuckyDesign(),
  ],
})

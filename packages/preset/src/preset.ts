import type { Preset } from 'unocss'
import { rules } from './rules'
import type { Theme } from './theme'
import { theme } from './theme'

export const presetLuckyDesign = (): Preset<Theme> => {
  return {
    name: '@lucky-design/preset',
    rules,
    theme,
  }
}

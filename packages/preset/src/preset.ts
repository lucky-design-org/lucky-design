import type { Preset } from 'unocss'
import { rules } from './rules'
import type { Theme } from './theme'
import { theme } from './theme'
import { preflights } from './preflights'
import { shortcuts } from './shortcuts'

export const presetLuckyDesign = (): Preset<Theme> => {
  return {
    name: '@lucky-design/preset',
    rules,
    theme,
    preflights,
    shortcuts,
  }
}

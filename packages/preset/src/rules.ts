import type { Rule, RuleContext } from 'unocss'
import { parseColor } from 'unocss/preset-mini'
import type { Theme } from './theme'

export const rules: Rule<Theme>[] = [
  [
    /^ld-(.*)$/,
    ([, body]: string[], { theme }: RuleContext<Theme>) => {
      const color = parseColor(body, theme)
      if (color?.cssColor?.type === 'rgb' && color.cssColor.components)
        return { '--ld-c-context': `${color.cssColor.components.join(',')}` }
      else
        return { '--ld-c-context': color?.color }
    },
  ],
  ['ld-dashed', { 'border-style': 'dashed' }],
  [
    'ld-solid',
    {
      'background-color': 'rgba(var(--ld-c-context), 1) !important',
      'border-color': 'rgba(var(--ld-c-context), 1)',
      'color': 'white !important',
    },
  ],
] as Rule<Theme>[]

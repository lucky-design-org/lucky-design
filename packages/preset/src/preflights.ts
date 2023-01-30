import { darkTheme, getCSSPreflights, lightTheme } from './colors'

export const preflights = [{
  layer: 'base',
  getCSS: () => `
    :root {
      ${getCSSPreflights(lightTheme)}
    }
    :root.dark {
      ${getCSSPreflights(darkTheme)}
    }`.trim(),
}]

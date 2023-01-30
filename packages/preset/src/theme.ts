const PREFIX_THEME = '--ld-theme'

const getColorsTheme = (theme) => {
  return {
    [`${theme}`]: `var(${PREFIX_THEME}-${theme}Hsl)`,
    [`${theme}Base`]: `var(${PREFIX_THEME}-${theme})`,
    [`${theme}Light`]: `var(${PREFIX_THEME}-${theme}Light)`,
    [`${theme}LightHover`]: `var(${PREFIX_THEME}-${theme}LightHover)`,
    [`${theme}LightActive`]: `var(${PREFIX_THEME}-${theme}LightActive)`,
    [`${theme}LightContrast`]: `var(${PREFIX_THEME}-${theme}LightContrast)`,
    [`${theme}Border`]: `var(${PREFIX_THEME}-${theme}Border)`,
    [`${theme}BorderHover`]: `var(${PREFIX_THEME}-${theme}BorderHover)`,
    [`${theme}BorderActive`]: `var(${PREFIX_THEME}-${theme}BorderActive)`,
    [`${theme}SolidHover`]: `var(${PREFIX_THEME}-${theme}SolidHover)`,
    [`${theme}SolidContrast`]: `var(${PREFIX_THEME}-${theme}SolidContrast)`,
    [`${theme}Shadow`]: `var(${PREFIX_THEME}-${theme}Shadow)`,
  }
}

export const theme = {
  colors: {
    context: 'rgba(var(--ld-c-context),%alpha)',
    ...getColorsTheme('primary'),
    ...getColorsTheme('secondary'),
    ...getColorsTheme('success'),
    ...getColorsTheme('warning'),
    ...getColorsTheme('error'),
    ...getColorsTheme('info'),
    baseText: 'var(--ld-colors-text)',
    baseBorder: 'var(--ld-colors-border)',
    lightBorder: 'var(--ld-colors-border-light)',
    darkerBorder: 'var(--ld-colors-border-darker)',
    baseBackground: 'var(--ld-colors-background)',
    lightBackground: 'var(--ld-colors-background-light)',
    placeholder: 'var(--ld-colors-placeholder)',
    grayBd: '#var(--ld-colors-background-gray)',
    arrow: 'var(--ld-colors-arrow)',
    title: 'var(--ld-colors-title)',
    darkText: 'var(--ld-colors-text-darker)',
    darkSubText: 'var(--ld-colors-text-light)',
    grayBg: 'var(--ld-colors-grayBg)',
    embed: 'var(--ld-colors-embed)',
    darkContext: 'var(--ld-colors-darkContext)',
    lightContext: 'var(--ld-colors-lightContext)',
  },
  fontFamily: {
    sans: 'Avenir, Helvetica, Arial, sans-serif',
  },
  boxShadow: {
    xs: 'var(--un-shadow-inset) 0 1px 1px 0 var(--un-shadow-color, rgba(0,0,0,0.03))',
    switch:
      'calc(var(--o-switch-offset) * -1) 0 0 2px var(--o-switch-bc) inset, 0 0 0 2px var(--o-switch-bc) inset;',
    switchActive:
      'calc(var(--o-switch-offset)) 0 0 2px var(--o-switch-c) inset, 0 0 0 2px var(--o-switch-c) inset;',
    trigger: '0px 4px 10px #0000001a',
    cardMD: '0px 0px 12px rgb(0 0 0 / 12%)',
    cardSM: '0px 0px 6px rgb(0 0 0 / 12%)',
  },
  animation: {
    keyframes: {
      switching: `{0%{ box-shadow: 0 0 0 2px #1890ff66; }
        60%{ box-shadow: 0 0 0 4px #1890ff33; }
        80%{ box-shadow: 0 0 0 6px #1890ff1a; }
        100%{ box-shadow: 0 0 0 8px #1890ff0d; }}`,
    },
    durations: {
      switching: '0.3s',
    },
  },
}

export type Theme = typeof theme

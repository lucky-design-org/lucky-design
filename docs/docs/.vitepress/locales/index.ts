import en from './en-US'
import zh from './zh-CN'

export default {
  vitepressConfig: {
    '/': zh.vitepressConfig,
    '/en-US': en.vitepressConfig,
  },
  themeConfig: {
    '/': zh.themeConfig,
    '/en-US': en.themeConfig,
  },
}

import { defineConfig } from 'vitepress'
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin'

import locales from './locales'

export default defineConfig({
  title: 'lucky-design',
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],

  // 默认主题
  appearance: 'dark',

  // i18n
  locales: {
    'root': locales.en,
    'zh-CN': locales.zh,
  },

  // 从URL中删除尾随的.html
  cleanUrls: true,

  // 显示更新时间
  lastUpdated: true,

  markdown: {
    theme: {
      light: 'min-dark',
      dark: 'one-dark-pro',
    },
    lineNumbers: true,
    config: (md) => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      md.use(require('markdown-it-task-lists'))
      md.use(componentPreview)
      md.use(containerPreview)
    },
  },

  themeConfig: {
    logo: '/icon.png',

    // 网站header部分标题
    siteTitle: 'lucky-design',

    // 社交账号链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lucky-design-org/lucky-design',
      },
    ],

    // footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Lucky-Design',
    },

    search: {
      provider: 'local',
    },
  },
})

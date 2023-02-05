import { defineConfig } from 'vitepress'
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

    algolia: {
      appId: 'Z7DZ7S5F34',
      apiKey: 'f2fc637edfcc09751dcea9a8e26350f4',
      indexName: 'Lucky-design',
    },
  },
})

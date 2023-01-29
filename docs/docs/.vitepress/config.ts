import { defineConfig } from 'vitepress'
import locales from './locales'

export default defineConfig({
  title: 'lucky-design',
  appearance: 'dark',
  locales: {
    'root': locales.en,
    'zh-CN': locales.zh,
  },
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],
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

    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    algolia: {
      appId: 'Z7DZ7S5F34',
      apiKey: 'f2fc637edfcc09751dcea9a8e26350f4',
      indexName: 'Lucky-design',
    },
  },

  lastUpdated: true,
  markdown: {
    theme: 'material-theme-palenight',
    lineNumbers: true,
  },
})

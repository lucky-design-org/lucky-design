import { defineConfig } from 'vitepress'
import type { NavItem, Sidebar, SocialLink } from '../../types/vitepress'

export default defineConfig({
  title: 'lucky-design',
  description: '基于Vue3的高效美观的组件库',
  lang: 'zh-CN',
  appearance: 'dark',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }],
  ],
  themeConfig: {
    logo: '/icon.png',

    // 网站header部分标题
    siteTitle: 'lucky-design',

    // 顶部tab-bar
    nav: [
      { text: '指南', link: '/guide/', activeMatch: '/guide/' },
      { text: '组件', link: '/components/', activeMatch: '/components/' },
    ] as NavItem[],

    // slider-bar
    sidebar: [
      {
        text: '导航',
        collapsible: true,
        items: [
          { text: '安装', link: '/guide/install' },
          { text: '快速开始', link: '/guide/start' },
        ],
      },
      {
        text: '组件',
        collapsible: true,
        items: [
          { text: 'Button 按钮', link: '/components/button' },
          { text: 'Icon 图标', link: '/components/icon' },
        ],
      },
    ] as Sidebar,

    // 社交账号链接
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/lucky-design-org/lucky-design',
      },
    ] as SocialLink[],

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
    theme: 'material-darker',
    lineNumbers: true,
  },
})

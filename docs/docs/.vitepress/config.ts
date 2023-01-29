import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'lucky-design',
  appearance: 'dark',
  locales: {
    'root': {
      label: 'English',
      lang: 'en-US',
      description: 'lightweight component library',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/', activeMatch: '/guide' },
          {
            text: 'Components',
            link: '/components/',
            activeMatch: '/components',
          },
        ],
        sidebar: {
          '/guide': [
            {
              text: 'Guide',
              collapsible: true,
              items: [
                { text: 'Install', link: '/guide/install' },
                { text: 'Start', link: '/guide/start' },
              ],
            },
          ],
          '/components': [
            {
              text: 'Component',
              collapsible: true,
              items: [
                { text: 'Button', link: '/components/button' },
                { text: 'Icon', link: '/components/icon' },
              ],
            },
          ],
        },
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-CN/',
      description: '基于Vue3的高效美观的组件库',
      themeConfig: {
        nav: [
          { text: '指南', link: '/zh-CN/guide/', activeMatch: '/zh-CN/guide' },
          {
            text: '组件',
            link: '/zh-CN/components/',
            activeMatch: '/zh-CN/components',
          },
        ],
        sidebar: {
          '/zh-CN/guide': [
            {
              text: '导航',
              collapsible: true,
              items: [
                { text: '安装', link: '/zh-CN/guide/install' },
                { text: '快速开始', link: '/zh-CN/guide/start' },
              ],
            },
          ],
          '/zh-CN/components': [
            {
              text: '组件',
              collapsible: true,
              items: [
                { text: 'Button 按钮', link: '/zh-CN/components/button' },
                { text: 'Icon 图标', link: '/zh-CN/components/icon' },
              ],
            },
          ],
        },
      },
    },
  },
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],
  themeConfig: {
    logo: '/icon.png',

    // 网站header部分标题
    siteTitle: 'lucky-design',

    // slider-bar

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

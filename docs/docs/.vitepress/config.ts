import { defineConfig } from 'vitepress'
import {
  componentPreview,
  containerPreview,
} from '@vitepress-demo-preview/plugin'
import MarkdownIt from 'markdown-it'

import locales from './locales'

export default defineConfig({
  title: 'lucky-design',
  head: [['link', { rel: 'icon', href: '/icon.ico' }]],

  // 默认主题
  appearance: 'dark',

  // i18n
  locales: {
    root: locales.en,
    zh: locales.zh,
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
      md.use(MarkdownIt)
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
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },

    // search: {
    //   provider: 'algolia',
    //   options: {
    //     appId: 'ZZ18I131PM',
    //     apiKey: 'b4c172f1a25ceadca6a005ba2bac6192',
    //     indexName: 'lucky-design',
    //   },
    // },

    // algolia: {
    //   appId: 'ZZ18I131PM',
    //   apiKey: 'b4c172f1a25ceadca6a005ba2bac6192',
    //   indexName: 'lucky-design',
    //   locales: {
    //     'zh': {
    //       placeholder: '搜索文档',
    //       translations: {
    //         button: {
    //           buttonText: '搜索文档',
    //           buttonAriaLabel: '搜索文档',
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: '清除查询条件',
    //             resetButtonAriaLabel: '清除查询条件',
    //             cancelButtonText: '取消',
    //             cancelButtonAriaLabel: '取消',
    //           },
    //           startScreen: {
    //             recentSearchesTitle: '搜索历史',
    //             noRecentSearchesText: '没有搜索历史',
    //             saveRecentSearchButtonTitle: '保存至搜索历史',
    //             removeRecentSearchButtonTitle: '从搜索历史中移除',
    //             favoriteSearchesTitle: '收藏',
    //             removeFavoriteSearchButtonTitle: '从收藏中移除',
    //           },
    //           errorScreen: {
    //             titleText: '无法获取结果',
    //             helpText: '你可能需要检查你的网络连接',
    //           },
    //           footer: {
    //             selectText: '选择',
    //             navigateText: '切换',
    //             closeText: '关闭',
    //             searchByText: '搜索提供者',
    //           },
    //           noResultsScreen: {
    //             noResultsText: '无法找到相关结果',
    //             suggestedQueryText: '你可以尝试查询',
    //             reportMissingResultsText: '你认为该查询应该有结果？',
    //             reportMissingResultsLinkText: '点击反馈',
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  },
})

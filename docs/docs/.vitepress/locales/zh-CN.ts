export default {
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
}

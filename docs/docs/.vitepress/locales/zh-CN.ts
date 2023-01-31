export default {
  label: '简体中文',
  lang: 'zh-CN',
  link: '/zh-CN/',
  description: '基于Vue3的高效美观的组件库',
  themeConfig: {
    lastUpdatedText: '上次更新',
    outlineTitle: '当前页面',
    editLink: {
      pattern: 'https://github.com/lucky-design-org/lucky-design/edit/master/docs/docs/:path',
      text: '在github上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
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

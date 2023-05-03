export default {
  label: '简体中文',
  lang: 'zh',
  link: '/zh/',
  description: '基于Vue3的高效美观的组件库',
  themeConfig: {
    lastUpdatedText: '上次更新',
    outlineTitle: '当前页面',
    editLink: {
      pattern: 'https://github.com/lucky-design-org/lucky-design/edit/master/docs/docs/zh/:path',
      text: '在github上编辑此页面',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      { text: '指南', link: '/zh/guide/install', activeMatch: '/zh/guide' },
      {
        text: '组件',
        link: '/zh/components/button',
        activeMatch: '/zh/components',
      },
    ],
    sidebar: {
      '/zh/guide': [
        {
          text: '导航',
          collapsed: false,
          items: [
            { text: '安装', link: '/zh/guide/install' },
            { text: '快速开始', link: '/zh/guide/start' },
          ],
        },
        {
          text: '开发',
          collapsed: false,
          items: [
            { text: '开发指南', link: '/zh/guide/develop' },
            { text: '开发问题', link: '/zh/guide/problem' },
          ],
        },
        {
          text: '其他',
          collapsed: false,
          items: [
            { text: '翻译', link: '/zh/guide/translate' },
          ],
        },
      ],
      '/zh/components': [
        {
          text: 'Basic 基础组件',
          collapsed: false,
          items: [
            { text: 'Button 按钮', link: '/zh/components/button' },
            { text: 'Icon 图标', link: '/zh/components/icon' },
          ],
        },
        {
          text: 'Form 表单组件',
          collapsed: false,
          items: [
            { text: 'Checkbox 多选框', link: '/zh/components/checkbox' },
            { text: 'Upload 上传', link: '/zh/components/upload' },
          ],
        },
        {
          text: 'Data 数据展示',
          collapsed: false,
          items: [
            { text: 'Table 表格', link: '/zh/components/table' },
            { text: 'Tree 树形控件', link: '/zh/components/tree' },
          ],
        },
        {
          text: 'Navigation 导航',
          collapsed: false,
          items: [
            { text: 'Backtop 回到顶部', link: '/zh/components/backtop' },
          ],
        },
        {
          text: 'Feedback 反馈组件',
          collapsed: false,
          items: [
            { text: 'Drawer 抽屉', link: '/zh/components/drawer' },
            { text: 'Message 消息提示', link: '/zh/components/message' },
            { text: 'Tooltip 文字提示', link: '/zh/components/tooltip' },
          ],
        },
      ],
    },
  },
}

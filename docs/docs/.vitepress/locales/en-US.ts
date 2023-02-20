export default {
  label: 'English',
  lang: 'en-US',
  description: 'lightweight component library',
  themeConfig: {
    lastUpdatedText: 'Last updated',
    outlineTitle: 'On this page',
    editLink: {
      pattern:
        'https://github.com/lucky-design-org/lucky-design/edit/master/docs/docs/:path',
      text: 'Edit this page on GitHub',
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
    nav: [
      { text: 'Guide', link: '/guide/install', activeMatch: '/guide' },
      {
        text: 'Components',
        link: '/components/button',
        activeMatch: '/components',
      },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'install', link: '/guide/install' },
            { text: 'start', link: '/guide/start' },
          ],
        },
        {
          text: 'development',
          collapsed: false,
          items: [
            { text: 'develop guide', link: '/guide/develop' },
            { text: 'develop problem', link: '/guide/problem' },
          ],
        },
        {
          text: 'other',
          collapsed: false,
          items: [{ text: 'translate', link: '/guide/translate' }],
        },
      ],
      '/components': [
        {
          text: 'Basic',
          collapsed: false,
          items: [
            { text: 'Button', link: '/components/button' },
            { text: 'Icon', link: '/components/icon' },
          ],
        },
        {
          text: 'Form',
          collapsed: false,
          items: [
            { text: 'Checkbox', link: '/components/checkbox' },
            { text: 'Upload', link: '/components/upload' },
          ],
        },
        {
          text: 'Data',
          collapsed: false,
          items: [
            { text: 'Table', link: '/components/table' },
            { text: 'Tree', link: '/components/tree' },
          ],
        },
        {
          text: 'Navigation',
          collapsed: false,
          items: [{ text: 'Backtop', link: '/components/backtop' }],
        },
        {
          text: 'Feedback',
          collapsed: false,
          items: [
            { text: 'Drawer', link: '/components/drawer' },
            { text: 'Message', link: '/components/message' },
            { text: 'Tooltip', link: '/components/tooltip' },
          ],
        },
      ],
    },
  },
}

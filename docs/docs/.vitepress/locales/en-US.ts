export default {
  label: 'English',
  lang: 'en-US',
  description: 'lightweight component library',
  themeConfig: {
    lastUpdatedText: 'Last updated',
    outlineTitle: 'On this page',
    editLink: {
      pattern: 'https://github.com/lucky-design-org/lucky-design/edit/master/docs/docs/:path',
      text: 'Edit this page on GitHub',
    },
    docFooter: {
      prev: 'Previous page',
      next: 'Next page',
    },
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
          collapsed: false,
          items: [
            { text: 'Install', link: '/guide/install' },
            { text: 'Start', link: '/guide/start' },
          ],
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
          items: [
            { text: 'Backtop', link: '/components/backtop' },
          ],
        },
        {
          text: 'Feedback',
          collapsed: false,
          items: [
            { text: 'Drawer', link: '/components/drawer' },
            { text: 'Message', link: '/components/message' },
          ],
        },
      ],
    },
  },
}

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
}

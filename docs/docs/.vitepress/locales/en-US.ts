export default {
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
}

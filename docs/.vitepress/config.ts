import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'AAXT',
  description: 'AdonisJS, AlpineJS, HTMX and Tailwind meta-framework.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          {
            text: 'Overview',
            link: '/',
          },
          {
            text: 'Installation',
            link: '/installation',
          },
          {
            text: 'Getting started',
            link: '/getting-started',
          },
        ],
      },
      {
        text: 'Usage',
        items: [
          {
            text: 'Creating pages',
            link: '/creating-pages',
          },
          {
            text: 'Triggers',
            link: '/triggers',
          },
          {
            text: 'Templates',
            link: '/templates',
          },
          {
            text: 'Components',
            link: '/components',
          },
        ],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/craigharman/aaxt' }],
  },
})

import type { Options as DocsOptions } from '@docusaurus/plugin-content-docs';
import type { Options as PageOptions } from '@docusaurus/plugin-content-pages';
import type { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';
// import type { Options as SitemapOptions } from '@docusaurus/plugin-sitemap';
import type { Options as ThemeClassicOptions } from '@docusaurus/theme-classic';
import type { UserThemeConfig as ClassicThemeConfig } from '@docusaurus/theme-common';
import type { ThemeConfig as BaseThemeConfig, Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

type ThemeConfig = BaseThemeConfig & ClassicThemeConfig;

const config: Config = {
  title: 'VKUI Documentation',
  tagline: 'VKUI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://vkcom.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  noIndex: true, // no search engines allowed (temporally)

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        sidebarPath: './sidebars.ts',
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        // editUrl: '',
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-pages',
      {
        path: 'src/pages',
        routeBasePath: '',
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        exclude: [
          '**/_*.{js,jsx,ts,tsx,md,mdx}',
          '**/_*/**',
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
        ],
        mdxPageComponent: '@theme/MDXPage',
        rehypePlugins: [],
        beforeDefaultRemarkPlugins: [],
        beforeDefaultRehypePlugins: [],
      } satisfies PageOptions,
    ],
    '@docusaurus/plugin-debug',
    // [
    //   '@docusaurus/plugin-sitemap',
    //   {
    //     // @ts-expect-error: TS2322 Value as Enum is not exported
    //     changefreq: 'weekly',
    //     priority: 0.5,
    //     ignorePatterns: ['/tags/**'],
    //     filename: 'sitemap.xml',
    //   } satisfies SitemapOptions,
    // ],
    [
      '@docusaurus/theme-classic',
      {
        customCss: './src/css/custom.css',
      } satisfies ThemeClassicOptions,
    ],
    '@docusaurus/theme-live-codeblock',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    announcementBar: {
      id: 'announcementBar-3', // Increment on change
      content: `❌ <b>Under Construction!</b> ❌ `,
    },
    navbar: {
      logo: {
        alt: 'VK logo + ui',
        src: 'img/vkui-logo-light.svg',
        srcDark: 'img/vkui-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          'href': 'https://github.com/VKCOM/VKUI',
          'position': 'right',
          'className': 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/VKCOM/VKUI',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VKUI. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies ThemeConfig,
};

export default config;

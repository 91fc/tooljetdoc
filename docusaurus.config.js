const devServerPlugin = require('./src/plugins/devServer/index.js');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ToolJet',
  tagline: '用于构建内部工具和业务应用程序的低代码框架。',
  url: 'https://tdoc.xhrjy.cn',
  baseUrl: '/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.svg',
  organizationName: 'ToolJet', // Usually your GitHub org/user name.
  projectName: 'ToolJet', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      zh: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
    },
  },
  themeConfig: {
    image: 'img/tooljet-og-image.png',
    announcementBar: {
      id: 'support_us',
      content:
        '⭐️ 如果您喜欢 ToolJet，请在 <a target="_blank" rel="noopener noreferrer" href="https://gitee.com/wanddyh/tooljet">GitHub</a> 上给它加星',
      backgroundColor: '#4D72DA',
      textColor: '#ffffff',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true
      }
    },
    colorMode: {

    },
    navbar: {
      logo: {
        href: '/docs',
        alt: 'ToolJet Logo',
        src: 'img/Logomark.svg',
        srcDark: `img/Logomark_white.svg`,
        width: 90
      },
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'search',
          position: 'left',
        },
        {
          href: 'https://gitee.com/wanddyh/tooljet',
          position: 'right',
          className: 'navbar-social-link navbar-github-logo',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/1.x.x/category/tutorial',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '码云',
              href: 'https://gitee.com/wanddyh/tooljet',
            },
          ],
        },
      ],
      copyright: `版权 © ${new Date().getFullYear()} ToolJet Solutions, Inc.中文翻译由达州小黄仁科技有限公司完成`,
    },
    algolia: {
      appId: '2Q8LT30XV1',
      apiKey: process.env.ALGOLIA_API_KEY || '3812f4e6598c41b852e4f364a140192a', // Public API key: it is safe to commit it
      indexName: 'tooljetdocs',
      contextualSearch: true,
      externalUrlRegex: 'external\\.com|domain\\.com',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitee.com/wanddyh/tooljet/blob/develop/docs/',
          includeCurrentVersion: false,
          lastVersion: '2.0.0-beta-zh',
          versions: {
            '2.0.0-beta-zh': {
              label: 'v2.0.0-zh',
              banner: 'none',
            },
            '2.0.0-beta': {
              label: 'v2.0.0',
              banner: 'none',
            },
            '1.x.x': {
              label: 'v1.x.x',
              banner: 'none',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      // gtag: isProd
        //   ? {
        //     trackingID: process.env.GA_MID || "development",
        //     // Optional fields.
        //     anonymizeIP: true, // Should IPs be anonymized?
        //   }
        //   : undefined,
      },
    ],
  ],
  plugins: [
    devServerPlugin,
  ],
};

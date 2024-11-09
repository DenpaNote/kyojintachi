import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: '《离开的人们》知识领航员',
  tagline: '虽说很辛苦，但是我还是睁开眼睛，开始写起了报告书。',
  favicon: 'img/t_op.png',

  // Set the production url of your site here
  url: 'https://denpanote.moe',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DenpaNote', // Usually your GitHub org/user name.
  projectName: 'kyojintachi', // Usually your repo name.
  
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  
  markdown: {
    remarkRehypeOptions: {
      // i18n footnote
      footnoteLabel: "参考文献"
    }
  },
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    }
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/title01.png',
    navbar: {
      title: '离开的人们',
      logo: {
        alt: '离开的人们',
        src: 'img/t_op.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'naviSidebar',
          position: 'left',
          label: 'NAVI',
        },
        {
          to: "blog",
          label: "乱声",
        },
        {
          href: "https://github.com/DenpaNote/kyojintachi",
          label: "GitHub",
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub Repository",
        }
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Denpa Note Group. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    }
  } satisfies Preset.ThemeConfig,
};

export default config;

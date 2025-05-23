import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  docs: {
    type: 'page',
    title: 'Компоненты',
  },
  icons: {
    type: 'page',
    title: 'Иконки',
    href: 'https://vkcom.github.io/icons/',
  },
  tokens: {
    type: 'page',
    title: 'Токены',
    href: 'https://vkcom.github.io/vkui-tokens/',
  },
  blog: {
    type: 'doc',
    display: 'hidden',
    title: 'Блог',
    theme: {
      breadcrumb: false,
      toc: false,
      sidebar: false,
      pagination: false,
      layout: 'full',
    },
  },
};

export default meta;

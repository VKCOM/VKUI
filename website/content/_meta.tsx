import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  overview: {
    type: 'page',
    title: 'О системе',
  },
  components: {
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
    type: 'page',
    title: 'Блог',
    theme: {
      breadcrumb: false,
      sidebar: false,
      pagination: false,
      layout: 'full',
    },
  },
};

export default meta;

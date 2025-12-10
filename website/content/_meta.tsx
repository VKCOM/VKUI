import type { MetaRecord } from 'nextra';

const meta: MetaRecord = {
  index: {
    type: 'doc',
    display: 'hidden',
  },
  overview: {
    type: 'doc',
    title: 'Начало работы',
  },
  components: {
    type: 'doc',
    title: 'Компоненты',
  },
  integrations: {
    type: 'doc',
    title: 'Интеграции',
  },
  migrations: {
    type: 'doc',
    title: 'Миграции',
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
      copyPage: false,
    },
  },
};

export default meta;

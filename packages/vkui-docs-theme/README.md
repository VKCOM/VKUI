# VKUI Docs Theme

`VKUI Docs Theme` - это тема, которая включает в себя практически всё, что необходимо для создания документации в экосистеме `VKUI`. В список готовых компонентов для использования входит навигационный блок, поиск, TOC, боковое меню и компоненты MDX.

## Создание новой документации

### Установка

```sh
# npm
npm i react react-dom next nextra @vkontakte/vkui-docs-theme
# yarn
yarn add react react-dom next nextra @vkontakte/vkui-docs-theme
# or pnpm
pnpm add react react-dom next nextra @vkontakte/vkui-docs-theme
```

Далее добавьте следующие скрипты в `package.json`:

```json filename="package.json"
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
},
```

Обратитесь к документации [Next.js](https://nextjs.org/docs/getting-started/installation#manual-installation), если вам нужны подробности.

### Конфигурация Next.js

Создайте `next.config.mjs` файл, который позволит подключить обработку `markdown`-файлов через `nextra` с заданной темой, а также подключит траспиляцию необходимых пакетов:

```js filename="next.config.mjs"
import nextra from 'nextra';

const withNextra = nextra({
  theme: '@vkontakte/vkui-docs-theme',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  // ... your Nextra config
});

export default withNextra({
  // ... your Next.js config
  transpilePackages: ['@vkontakte/vkui', '@vkontakte/vkui-docs-theme'],
  modularizeImports: {
    '@vkontakte/vkui': {
      transform: '@vkontakte/vkui/dist/cssm',
      skipDefaultConversion: true,
    },
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
});
```

### Конфигурация VKUI Docs Theme

Далее необходимо создать файл `theme.config.tsx`, который позволит настроить тему под свои нужды:

```tsx filename="theme.config.tsx"
import { DocsThemeConfig } from '@vkontakte/vkui-docs-theme';

const config: DocsThemeConfig = {
  project: {
    link: 'https://vkcom.github.io/vkui-tokens/',
  },
};

export default config;
```

Ориентируйтесь на тип `DocsThemeConfig`, чтобы добавить/изменить необходимые компоненты.

### Подключение стилей

Последним шагом подключите файл со стилями в `pages/_app.tsx`:

```tsx filename="pages/_app.tsx"
import '@vkontakte/vkui-nextra-theme/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

## Организация файловой структуры

Файлы документации необходимо создавать в папке `pages` в формате `*.mdx`/`*.md`. Конфигурировать страницы можно через `meta.[js|ts]` файл.

Обратитесь к документации [`Nextra`](https://nextra.site/docs/guide/organize-files) за подробностями.

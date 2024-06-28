# Компоненты для документации

В данном пакете содержатся компоненты для документации

```sh
yarn add -D next nextra @vkontakte/vkui-nextra-theme
```

## Nextra

### Настройка Next.js

В конфигурации Next.js требуется подключить nextra и настроить транспиляцию
пакетов

**next.config.js**

```js
const isProd = process.env.NODE_ENV === 'production';

// Префикс для правильной работы на GitHub Pages
const assetPrefix = '/icons';

const withNextra = require('nextra')({
  theme: '@vkontakte/vkui-nextra-theme',
  themeConfig: './theme.config.tsx',
});

module.exports = withNextra({
  transpilePackages: ['@vkontakte/vkui', '@vkontakte/vkui-nextra-theme'],

  modularizeImports: {
    '@vkontakte/vkui': {
      transform: '@vkontakte/vkui/dist/cssm',
      skipDefaultConversion: true,
    },
  },

  assetPrefix: isProd ? assetPrefix : undefined,
  output: 'export',
  images: {
    unoptimized: true,
  },
});
```

### Настройка темы

**theme.config.tsx**

```tsx
import { DocsThemeConfig } from './vkui-nextra-theme';

const config: DocsThemeConfig = {
  header: {
    selectedHref: 'https://vkcom.github.io/icons/',
  },
};

export default config;
```

### Подключение глобальных стилей

**pages/\_app.tsx**

```tsx
import '@vkontakte/vkui-nextra-theme/styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

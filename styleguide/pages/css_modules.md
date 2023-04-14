VKUI позволяет подключить специальную версию c
[**CSS Modules**](https://github.com/css-modules/css-modules) и **ESNext**. Сборка
позволяет уменьшить размер приложения, однако для её использования необходимо
дополнительно настроить сборщики.

# Инструкция

1. Удалите импорт `vkui.css` и подключите дефолтные темы

```diff
- import "@vkontakte/vkui/dist/vkui.css";
+ import "@vkontakte/vkui/dist/cssm/styles/themes.css";
```

Если вы используете [кастомные темы](#/Customize), то необходимо просто удалить
`components.css`

```diff
- import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css';
```

2. Дальше необходимо трансформировать импорт, включить транспиляцию и подключить
   css modules

## Next.js

```js static
// next.config.js

module.exports = {
  // ...

  // Включаем транспиляцию
  transpilePackages: ['@vkontakte/vkui'],

  // Трансформируем импорты
  modularizeImports: {
    '@vkontakte/vkui': {
      transform: '@vkontakte/vkui/dist/cssm',
      skipDefaultConversion: true,
    },
  },
};
```

[Пример приложения](https://codesandbox.io/p/sandbox/vkui-next-js-cssm-el0g7c) на Next.js

## Vite

```js static
// vite.config.js

export default defineConfig({
  // ...
  resolve: {
    alias: [{ find: /^@vkontakte\/vkui$/, replacement: '@vkontakte/vkui/dist/cssm' }],
  },
});
```

[Пример приложения](https://codesandbox.io/p/sandbox/vkui-vite-cssm-4iikku) на Vite

## webpack

```js static
// webpack.config.js

module.exports = {
  //...

  module: {
    rules: [
      // Включаем транспиляцию
      {
        test: /\.js$/,
        include: /node_modules\/@vkontakte\/vkui/,
        use: ['babel-loader'],
      },

      // Обрабатываем css modules
      {
        test: /\.css$/,
        include: /node_modules\/@vkontakte\/vkui/,
        use: ['css-loader'],
      },
    ],
  },

  // Трансформируем импорты
  resolve: {
    alias: {
      '@vkontakte/vkui$': '@vkontakte/vkui/dist/cssm',
    },
  },
};
```

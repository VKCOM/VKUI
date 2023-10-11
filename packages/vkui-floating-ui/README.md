# @vkontakte/vkui-floating-ui

Библиотека [Floating UI](https://floating-ui.com/) скомпилированная в ES5 для поддержки
`browserslist` VKUI. У [Floating UI](https://floating-ui.com/) версии браузеров гораздо выше
([ссылка на `browserslist` библиотеки](https://floating-ui.com/docs/misc)).

## Миграция с [Floating UI](https://floating-ui.com/)

### Вариант 1. Прямое использование.

```diff
- import {} from '@floating-ui/core';
+ import {} from '@vkontakte/vkui-floating-ui/core';
```

```diff
- import {} from '@floating-ui/dom';
+ import {} from '@vkontakte/vkui-floating-ui/dom';
```

```diff
- import {} from '@floating-ui/utils';
+ import {} from '@vkontakte/vkui-floating-ui/utils';
```

```diff
- import {} from '@floating-ui/utils/dom';
+ import {} from '@vkontakte/vkui-floating-ui/utils/dom';
```

```diff
- import {} from '@floating-ui/react-dom';
+ import {} from '@vkontakte/vkui-floating-ui/react-dom';
```

### Вариант 2. Добавить алиас в своём инструменте сборки.

На примере Webpack (см. документацию [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias)).

```js
module.exports = {
  //...
  resolve: {
    alias: {
      '@floating-ui': '@vkontakte/vkui-floating-ui',
    },
  },
};
```

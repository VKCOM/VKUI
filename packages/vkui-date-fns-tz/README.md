# @vkontakte/vkui-date-fns-tz

Библиотека @date-fns/tz скомпилированная в ES2017 для поддержки
`browserslist` VKUI. У @date-fns/tz версии браузеров гораздо выше.

## Миграция с @date-fns/tz

### Вариант 1. Прямое использование.

```diff
- import {} from '@date-fns/tz';
+ import {} from '@vkontakte/vkui-date-fns-tz';
```

### Вариант 2. Добавить алиас в своём инструменте сборки.

На примере Webpack (см. документацию [resolve.alias](https://webpack.js.org/configuration/resolve/#resolvealias)).

```js
module.exports = {
  //...
  resolve: {
    alias: {
      '@date-fns/tz': '@vkontakte/vkui-date-fns-tz',
    },
  },
};
```

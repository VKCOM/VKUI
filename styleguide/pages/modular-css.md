VKUI поддерживает модульный CSS для уменьшения бандла приложения. Это экспериментальная функция. Чтобы подключить:

1. Удалите импорты `vkui.css` и `unstable.css`.
2. Убедитесь, что в вебпаке настроены лоадеры для стилей: [css-loader](https://webpack.js.org/loaders/css-loader/), а также [style-loader](https://webpack.js.org/loaders/style-loader/) или [mini-css-extract-plugin](https://webpack.js.org/plugins/mini-css-extract-plugin/). Если вы используете create-react-app или create-vk-mini-app, все нужные лоадеры уже настроены.
3. Подключите babel-плагин, который перенаправляет импорты vkui на специальную сборку с css-импортами:
```js static
// babel.config.js
const vkuiCssOptimizer = require('@vkontakte/vkui/babel-plugin-css-optimizer');
module.exports = {
  // ...
  plugins: [
    // ...
    vkuiCssOptimizer(),
  ]
};
```
4. Убедитесь, что в основном чанке приложения есть хотя бы один `import ... from '@vkontakte/vkui'` (без `/dist`) или добавьте `import '@vkontakte/vkui/dist/global.css'` — это нужно для подключения цветовых схем и глобальных стилей.

> НЕ ЗАВЯЗЫВАЙТЕСЬ НА ВНУТРЕННЮЮ РЕАЛИЗАЦИЮ КОМПОНЕНТОВ, ИНАЧЕ ПОТЕРЯЕТЕ ВОЗМОЖНОСТЬ ОБНОВЛЕНИЯ VKUI!

Все цвета, используемые в библиотеке, занесены в [css-custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*).
Чтобы использовать цвета в своем коде, достаточно посмотреть на список доступных цветов и применить их, используя
синтаксис css-custom-properties:

```css static
.MyBlock {
  background: var(--vkui--color_background_content);
  color: var(--vkui--color_text_primary);
}
```

Доступные цвета находятся [тут](https://unpkg.com/@vkontakte/vkui-tokens@4/themes/vkBase/cssVars/declarations/onlyVariables.css)

## Платформы и темы

В стили библиотеки встроены стили для 3 платформ:

- `vkcom` — стиль сайта [vk.com](https://vk.com);
- `ios` — стиль мобильного приложения ВКонтакте под iOS;
- `android` — стиль мобильного приложения ВКонтакте под Android. Этот стиль является дефолтным.

Каждая платформа доступна в светлом и темном вариантах.

Пример использования:

```jsx static
import { AppRoot, ConfigProvider, Button } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```

## Текущие способы кастомизации

Мы поддерживаем [новую систему токенов](https://github.com/VKCOM/vkui-tokens), которая
позволяет кастомизировать не только цвета, но и скругления, размеры, отступы и тени.

Пример использования:

```jsx static
import { AppRoot, ConfigProvider, Button } from '@vkontakte/vkui';
/*
 * В components.css уже нет значений токенов из Appearance. Предполагается, что
 * если разработчик использует vkui-tokens, то файлы со значениями он подключает
 * самостоятельно.
 */
import '@vkontakte/vkui/dist/components.css';
import '@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariables.css';
import '@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css';

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root,
);
```

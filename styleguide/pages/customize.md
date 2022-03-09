В стили библиотеки встроены стили для 3 платформ:

- `vkcom` — стиль сайта [vk.com](https://vk.com);
- `ios` — стиль мобильного приложения ВКонтакте под iOS;
- `android` — стиль мобильного приложения ВКонтакте под Android. Этот стиль является дефолтным.

Каждая платформа доступна в светлом и темном вариантах.

Пример использования:

```jsx static
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

## Текущие способы кастомизации

На данный момент все компоненты используют css-переменные (токены) из [Appearance](https://github.com/VKCOM/Appearance)
для адаптации под разные платформы и темы. При желании разработчик может переопределить значения цветов:

```css
:root {
  --button_primary_background: purple;
}
```

Если подключить такой CSS после стилей библиотеки, то заливка всех `<Button mode="primary" />` станет фиолетовой.

## vkui-tokens

Мы плавно переходим на [новую систему токенов](https://github.com/VKCOM/vkui-tokens), которая
позволит кастомизировать не только цвета, но и скругления, размеры, отступы и тени. Пока что на эту
систему переехал только [Button](https://vkcom.github.io/VKUI/#/Button), но вскоре все компоненты
будут поддерживать эти токены.

Пример использования:

```jsx static
import { AppRoot, ConfigProvider, Button } from "@vkontakte/vkui";
/*
 * В components.css уже нет значений токенов из Appearance. Предполагается, что
 * если разработчик использует vkui-tokens, то файлы со значениями он подключает
 * самостоятельно.
 */
import "@vkontakte/vkui/dist/components.css";
import "@vkontakte/vkui-tokens/themes/vkCom/cssVars/declarations/onlyVariables.css";
import "@vkontakte/vkui-tokens/themes/vkComDark/cssVars/declarations/onlyVariablesLocal.css";

ReactDOM.render(
  <ConfigProvider platform="vkcom" appearance="light">
    <AppRoot>
      <Button />
    </AppRoot>
  </ConfigProvider>,
  root
);
```

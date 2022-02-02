В стили библиотеки встроены стили для 3 платформ:

- `vkcom` — стиль сайта [vk.com](vk.com);
- `ios` — стиль мобильного приложения ВКонакте под iOS;
- `android` — стиль мобильного приложения ВКонтакнте под Android.

Каждая платформа доступна в светлом и темном вариантах.

Пример использования:

```jsx
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

На данный момент все компоненты используют css-переменные из Appearance для адаптации под разные платформы и темы.
При желании разработчик может переопределить значения цветов.

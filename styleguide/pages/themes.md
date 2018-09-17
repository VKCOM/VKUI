С версии `2.11.0` VK UI поддерживает темы. Пока что доступны две цветовые схемы: `client_light` и `client_dark`.
В левом верхем углу есть переключатель, который позволяет посмотреть, как выглядят компоненты в разных
схемах.

### Как это работает?
Поддержка тем реализована с помощью стандарта
[css-custom-properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*). Все цвета, используемые в
компонентах, заданы в css переменных и их значения меняются в зависимости от выбранной темы. Чтобы сохранить обратную
соместимость, по-умолчанию используется стандартная цветовая схема (`client_light`).
Для задания темы используется специальный атрибут на `body`, который называется `scheme`. В CSS переменные меняют
свои значения, в зависимости от значения этого атрибута. Пример для наглядности:

```css static
:root {
  --background_page: #141414;
}

body[scheme="client_dark"] {
  --background_page: #ebedf0;
}

.Panel__in {
  background: var(--background_page);
}

```

### Как с этим работать?
Пользователь выбирает тему в настройках клиента (iOS, Android). Клиент в свою очередь пробрасывает vkui-приложениям
специальное событие: `VKWebAppUpdateConfig`. В `e.detail.data` этого события находится свойство `scheme`, которое мы
должны навесить на `body`.

Для этого есть специальный компонент, `ConfigProvider`, задачей которого является задание и обновление
глобальной конфигураций приложения. Достаточно передать ему значение `scheme`, все остальное он сделает сам.
Важно понимать, что событие `VKWebAppUpdateConfig` будет вызываться каждый раз, когда пользователь меняет тему в
настройках клиента. Первоначальный вызов этого события происходит сразу после того, как vkui-приложение
шлет `VKWebAppInit`.

### Пример:

```jsx static
import { ConfigProvider, isWebView } from '@vkontakte/vkui';
import connect from '@vkontakte/vkui-connect';

connect.subscribe((e) => {
  switch (e.detail.type) {
    case 'VKWebAppUpdateConfig':
      const { scheme } = e.detail.data;
      render({ scheme });
  }
});

connect.send('VKWebAppInit');

function render (props) {
  ReactDOM.render(
    <ConfigProvider {...props}>
      <App />
    </ConfigProvider>, document.getElementById('root')
  )
}

```

Собрать простое приложение можно за четыре шага:

## Шаг 1

Подготовьте [SPA React приложение](https://ru.reactjs.org/docs/create-a-new-react-app.html).

Вы можете использовать любые шаблоны и сборщики, в том числе и Create React App.
**Обратите внимание:** VKUI поддерживает Typescript.

## Шаг 2

Установите необходимые пакеты. Для этого воспользуйтесь одной из команд:

```shell static
# npm
npm i --save @vkontakte/vkui @vkontakte/icons @vkontakte/vk-bridge
# or yarn
yarn add @vkontakte/vkui @vkontakte/icons @vkontakte/vk-bridge
```

- `@vkontakte/icons` — это наши иконки, которые напрямую используются в некоторых компонентах VKUI.
- `@vkontakte/vk-bridge` необходима для интеграции в клиенты VK (она обеспечит корректные отступы на мобильных
  устройствах, свайпы, определение темы и тд).

## Шаг 3

Добавьте тег viewport для корректного отображения интерфейса на безрамочных смартфонах (подробнее см. в статье ["The Notch" and CSS](https://css-tricks.com/the-notch-and-css/)).

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
/>
```

## Шаг 4

Соберите базовый app shell для VKUI.

```jsx static
import React from "react";
import ReactDOM from "react-dom";
import {
  AdaptivityProvider,
  ConfigProvider,
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const App = () => {
  const { viewWidth } = useAdaptivity();

  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />}>
        <SplitCol spaced={viewWidth && viewWidth > ViewWidth.MOBILE}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <SimpleCell>Hello</SimpleCell>
                <SimpleCell>World</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
```

Ваше приложение готово!

Теперь можно добавлять более сложные компоненты, новые экраны и настроить переходы между ними.

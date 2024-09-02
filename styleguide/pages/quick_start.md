Собрать простое приложение можно за четыре шага:

## Шаг 1

Подготовьте [SPA React приложение](https://react.dev/learn/start-a-new-react-project).

Вы можете использовать любые шаблоны и сборщики, в том числе и Create React App.
**Обратите внимание:** VKUI поддерживает Typescript.

## Шаг 2

Если вы используете [библиотеку `create-vk-mini-app`](https://www.npmjs.com/package/@vkontakte/create-vk-mini-app), отдельно подключать VKUI не нужно. Переходите сразу к шагу 3.

Если нет, то установите необходимые пакеты. Для этого воспользуйтесь одной из команд:

```shell static
# npm
npm i --save @vkontakte/vkui
# yarn
yarn add @vkontakte/vkui
# or pnpm
pnpm add @vkontakte/vkui
```

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
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import {
  AdaptivityProvider,
  ConfigProvider,
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const App = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
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

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
);
```

Ваше приложение готово!

Теперь можно добавлять более сложные компоненты, новые экраны и настроить переходы между ними.

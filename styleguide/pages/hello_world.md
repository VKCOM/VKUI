```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { AppRoot, View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <PanelHeader>VKUI</PanelHeader>
          <Group header={<Header mode="secondary">Items</Header>}>
            <Cell>Hello</Cell>
            <Cell>World</Cell>
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

_Hello World пример с самой минимальной функциональностью. Для примера реального приложения смотрите <a href="https://vkui-demos.vercel.app/vkui-full/index.html" target="_blank">демо тут</a> и его <a href="https://github.com/ewgenius/vkui-demos" target="_blank">исходный код тут</a>._
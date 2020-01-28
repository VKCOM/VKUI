```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Header, Group, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group header={<Header mode="secondary">Items</Header>}>
          <Cell>Hello</Cell>
          <Cell>World</Cell>
        </Group>
      </Panel>
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

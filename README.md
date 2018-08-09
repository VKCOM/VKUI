```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, ListItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group title="Items">
          <List>
            <ListItem>Hello</ListItem>
            <ListItem>World</ListItem>
          </List>
        </Group>
      </Panel>
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```


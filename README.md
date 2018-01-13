```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import * as UI from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <UI.View activePanel="main">
      <UI.ScrollView id="main" header={{ title: 'VKUI' }}>
        <UI.Group title="Items">
          <UI.List>
            <UI.ListItem>Hello</UI.ListItem>
            <UI.ListItem>World</UI.ListItem>
          </UI.List>
        </UI.Group>
      </UI.ScrollView>
    </UI.View>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


# VKUI

## 1. Install package.


`npm i http://github.com/vkcom/vkui --save`

## 2. Подключение стилей

`import ./node_modules/vkui/dist/vkui.css`

## 3. Базовый пример

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import * as UI from 'vkui';

function App () {
  return (
    <UI.ConfigProvider>
      <UI.View activePanel="main">
        <UI.ScrollView id="main" header={{ title: 'VKUI' }}>
          <UI.Group title="Items">
            <UI.List>
              <UI.ListItem>One</UI.ListItem>
              <UI.ListItem>Two</UI.ListItem>
            </UI.List>
          </UI.Group>
        </UI.ScrollView>
      </UI.View>
    </UI.ConfigProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


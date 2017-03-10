#VKUI

##Getting started

###1. Install package.

```
npm i http://github.com/vkcom/vkui --save
```

###2. Add styles

Add styles from `./node_modules/vkui/dist/vkui.css`.

###3. Use it in your application.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import UI from 'vkui';

function App () {
  return (
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
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```


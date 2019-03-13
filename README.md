## VKUI

VK UI – библиотека React-компонентов, позволяющая создавать сложные интерфейсы на основе имеющегося опыта VK. Мы повторили нативные элементы и решили многие проблемы с которыми вы можете встретиться при построении мобильного интерфейса.

## Установка

Чтобы установить нашу библиотеку компонентов, нужно сделать:
``npm install @vkontakte/vkui``

## Использование

Пример использования библиотеки:
```jsx static
import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group title="Items">
          <List>
            <Cell>Hello</Cell>
            <Cell>World</Cell>
          </List>
        </Group>
      </Panel>
    </View>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Как выглядят компоненты

Мы собрали дополнительную wiki по каждому из компонентов:
https://vkcom.github.io/vkui-styleguide/

## Contribute

Если вы хотите помочь нам с созданием или нашли баг, то создавайте issues или отправьте pull request. 
Мы будем рады вашей помощи и вкладу в open source сообщество!

## Licence

[MIT](https://choosealicense.com/licenses/mit/)

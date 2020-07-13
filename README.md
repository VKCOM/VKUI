# VKUI
VKUI – это набор React-компонентов, с помощью которых можно создавать интерфейсы,
внешне неотличимые от наших iOS и Android приложений.

## License
[![License](https://img.shields.io/github/license/VKCOM/VKUI.svg)](https://github.com/VKCOM/VKUI/blob/master/LICENSE)

## Установка
`npm i @vkontakte/vkui` или `yarn add @vkontakte/vkui`

*Не забудьте посмотреть в консоль и установить необходимые пакету `peerDependencies`*

## Hello World
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

## Браузеры
На данный момент мы поддерживаем webview следующих операционных систем:
* android >= 4.4
* ios >= 9

Иными словами, мы поддерживаем браузеры следующих версий:
* Safari для iOS >= 9
* Android Browser >= 4.4 (Chrome 30)
* Chrome для Android, начиная с Android 5.0 (Chrome 36)

### vk.com и m.vk.com
Сейчас библиотека не гарантирует стабильную работу при интеграции в [vk.com](vk.com) и [m.vk.com](m.vk.com). В vk.com есть нерешенные проблемы с элементами ввода типа клавиатуры и мышки. В m.vk.com есть несоответствия в списках поддерживаемых браузеров.

### Десктопный UI
В данный момент ведется [активная разработка](https://github.com/VKCOM/VKUI/pull/665) адаптивного UI, который будет работать на десктопных и планшетных браузерах. Stay tuned. 

## Документация
В [документации](https://vkcom.github.io/vkui-styleguide/) вы сможете найти информацию об использовании компонентов и утилит.

## Сообщить о проблеме
Напишите нам [issue](https://github.com/VKCOM/VKUI/issues/new/choose), если нашли баг или у вас есть предложения по улучшению библиотеки.

## Contributing
Мы очень радуемся, когда пользователи библиотеки работают над её улучшением. Для того, чтобы оставить след в
истории, сделайте форк проекта, внесите изменения и отправьте нам [pull request](https://github.com/VKCOM/VKUI/pulls).






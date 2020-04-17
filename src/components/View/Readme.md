Базовый компонент для создания панелей. В качестве `children` принимает коллекцию `Panel`.
У каждой `Panel` должен быть уникальный `id`. Свойство `activePanel` определяет какая `Panel` активна.

При смене значения свойства `activePanel` происходит плавный переход от одной панели к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'panel1'
    }
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="panel1">
          <PanelHeader>Panel 1</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel2' }) }>
              Go to panel 2
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader>Panel 2</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel3' }) }>
              Go to panel 3
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader>Panel 3</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel1' }) }>
              Back to panel 1
            </CellButton>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

### <a id="iosswipeback"></a>[iOS Swipe Back](#iosswipeback)

В iOS есть возможность свайпнуть от левого края назад, чтобы перейти на предыдущую панель. Для того, чтобы
повторить такое поведение в VKUI нужно:

* Передать во `View` свойство `onSwipeBack`. Это callback, срабатывающий при завершении анимации свайпа.
Как правило в нём прописывают логику, которая выставит нужный `activePanel` и обновит свойство `history`.

* Передать во `View` свойство `history`. Это массив, состоящий из id панелей, которые были открыты на текущий момент.
Например, если пользователь из `main` перешел в `profile`, а оттуда попал в `education`, то
`history=['main', 'profile', 'education']`.

* Убедиться, что приложение открыто внутри webview (так как внутри обычного мобильного браузера
как правило есть свой swipe back). Для этого достаточно обернуть ваше приложение компонентом `ConfigProvider`.
Он внутри себя определяет, открыто приложение внутри webview или в мобильном браузере. Для тестов в браузере
можно явно передать в `СonfigProvider` свойство `isWebView={true}`.

* При попадании на первую панель слать `vkui-сonnect` событие `VKWebAppDisableSwipeBack`. При уходе с первой панели –
слать `VKWebAppEnableSwipeBack`. Таким образом VKUI свайп не будет конфликтовать со свайпом нативного клиента.

Пример:

```jsx static
import React from 'react';
import { View, Panel, ConfigProvider } from '@vkontakte/vkui';
import vkBridge from '@vkontakte/vk-bridge';

class App extends React.Component {

  state = {
    activePanel: 'main',
    history: ['main']
  }

  goBack = () => {
    const history = [...this.state.history];
    history.pop();
    const activePanel = history[history.length - 1];
    if (activePanel === 'main') {
      vkBridge.send('VKWebAppDisableSwipeBack');
    }
    this.setState({ history, activePanel });
  }

  goForward = (activePanel) => {
    const history = [...this.state.history];
    history.push(activePanel);
    if (this.state.activePanel === 'main') {
      vkBridge.send('VKWebAppEnableSwipeBack');
    }
    this.setState({ history, activePanel });
  }

  render () {
    return (
      <ConfigProvider isWebView={true}>
        <View
          onSwipeBack={this.goBack}
          history={this.state.history}
          activePanel={this.state.activePanel}
        >
          <Panel id="main"/>
          <Panel id="profile"/>
          <Panel id="education"/>
        </View>
      </ConfigProvider>
    )
  }
}

```

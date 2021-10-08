Базовый компонент для создания панелей. В качестве `children` принимает коллекцию `Panel`.
У каждой `Panel` должен быть уникальный `id`. Свойство `activePanel` определяет какая `Panel` активна.

При смене значения свойства `activePanel` происходит плавный переход от одной панели к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```jsx
const [activePanel, setActivePanel] = useState('panel1');

<View activePanel={activePanel}>
  <Panel id="panel1">
    <PanelHeader>Panel 1</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={ () => setActivePanel('panel2') }>
        Go to panel 2
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel2">
    <PanelHeader>Panel 2</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={ () => setActivePanel('panel3') }>
        Go to panel 3
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel3">
    <PanelHeader>Panel 3</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={ () => setActivePanel('panel1') }>
        Back to panel 1
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
</View>
```

### <a id="/View?id=iosswipeback"></a>[iOS Swipe Back](#/View?id=iosswipeback)

В iOS есть возможность свайпнуть от левого края назад, чтобы перейти на предыдущую панель. Для того, чтобы
повторить такое поведение в VKUI нужно:

- Передать во `View` свойство `onSwipeBack`. Это callback, срабатывающий при завершении анимации свайпа.
Как правило в нём прописывают логику, которая выставит нужный `activePanel` и обновит свойство `history`.
- Передать во `View` свойство `history`. Это массив, состоящий из id панелей, которые были открыты на текущий момент.
Например, если пользователь из `main` перешел в `profile`, а оттуда попал в `education`, то
`history=['main', 'profile', 'education']`.
- Убедиться, что приложение открыто внутри webview (так как внутри обычного мобильного браузера
как правило есть свой swipe back). Для этого достаточно обернуть ваше приложение компонентом `ConfigProvider`.
Он внутри себя определяет, открыто приложение внутри webview или в мобильном браузере. Для тестов в браузере
можно явно передать в `СonfigProvider` свойство `isWebView={true}`.
- При попадании на первую панель слать `vk-bridge` событие `VKWebAppEnableSwipeBack`. При уходе с первой панели –
слать `VKWebAppDisableSwipeBack`. Таким образом VKUI свайп не будет конфликтовать со свайпом нативного клиента.
- Компоненты, которые сами обрабатывают жесты (например, карта), могут конфликтовать со свайпбеком — повесьте на них свойство `data-vkui-swipe-back={false}`

```jsx
import vkBridge from '@vkontakte/vk-bridge';

const [history, setHistory] = useState(['main']);
const activePanel = history[history.length - 1];
const isFirst = history.length === 1;

React.useEffect(() => {
  vkBridge.send(isFirst
    ? 'VKWebAppEnableSwipeBack'
    : 'VKWebAppDisableSwipeBack');
}, [isFirst]);

const goBack = () => setHistory(history.slice(0, -1));
const go = (panel) => setHistory([...history, panel]);

<ConfigProvider platform={IOS} isWebView>
  <View
    onSwipeBack={goBack}
    history={history}
    activePanel={activePanel}
  >
    <Panel id="main">
      <PanelHeader>Main</PanelHeader>
      <Group>
        <CellButton onClick={() => go('profile')}>profile</CellButton>
      </Group>
    </Panel>
    <Panel id="profile">
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Placeholder>Теперь свайпните от левого края направо, чтобы вернуться</Placeholder>
        <Div style={{ height: 50, background: '#eee' }} data-vkui-swipe-back={false}>
          Здесь свайпбек отключен
        </Div>
      </Group>
    </Panel>
  </View>
</ConfigProvider>
```

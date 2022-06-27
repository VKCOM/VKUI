Базовый компонент для создания панелей. В качестве `children` принимает коллекцию `Panel`.
У каждой `Panel` должен быть уникальный `id`. Свойство `activePanel` определяет какая `Panel` активна.

При смене значения свойства `activePanel` происходит плавный переход от одной панели к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```jsx
const [activePanel, setActivePanel] = useState("panel1");

<View activePanel={activePanel}>
  <Panel id="panel1">
    <PanelHeader>Panel 1</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={() => setActivePanel("panel2")}>
        Go to panel 2
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel2">
    <PanelHeader>Panel 2</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={() => setActivePanel("panel3")}>
        Go to panel 3
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel3">
    <PanelHeader>Panel 3</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={() => setActivePanel("panel1")}>
        Back to panel 1
      </CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
</View>;
```

### <a id="/View?id=iosswipeback"></a>[iOS Swipe Back](#/View?id=iosswipeback)

В iOS есть возможность свайпнуть от левого края назад, чтобы перейти на предыдущую панель. Для того, чтобы
повторить такое поведение в VKUI нужно:

- Передать во `View` коллбек `onSwipeBack` — он сработает при завершении анимации свайпа. Поменяйте в нем `activePanel` и обновите `history`.
- Передать во `View` проп `history` — массив из id панелей в порядке открытия. Например, если пользователь из `main` перешел в `profile`, а оттуда попал в `education`, то `history=['main', 'profile', 'education']`.
- Обернуть ваше приложение в `ConfigProvider` — он определит, открыто приложение в webview клиента VK или в браузере (там есть свой swipe back, который будет конфликтовать с нашим). Для проверки в браузере форсируйте определение webview: `<ConfigProvider isWebView>`.
- На первой панели должен включаться свайпбек нативного клиента, чтобы пользователь смог выйти из приложения — для этого используют `vk-bridge`. **Если вы не из ВК,** при переходах отправляйте [событие `VKWebAppSetSwipeSettings`](https://dev.vk.com/bridge/VKWebAppSetSwipeSettings) с `history: true` на первой панели или `history: false` на других. **Если вы из ВК,** при переходе на первую панель отправляйте событие `VKWebAppEnableSwipeBack`, на любую другую — `VKWebAppDisableSwipeBack`.
- Компоненты, которые сами обрабатывают жесты (например, карта), могут конфликтовать со свайпбеком — повесьте на них свойство `data-vkui-swipe-back={false}`

```jsx
import vkBridge from "@vkontakte/vk-bridge";

const [history, setHistory] = useState(["main"]);
const activePanel = history[history.length - 1];
const isFirst = history.length === 1;

React.useEffect(() => {
  // Если вы из ВК, делайте так
  vkBridge.send(
    isFirst ? "VKWebAppEnableSwipeBack" : "VKWebAppDisableSwipeBack"
  );
  // Если вы не из ВК, то так:
  vkBridge.send("VKWebAppSetSwipeSettings", { history: isFirst });
}, [isFirst]);

const goBack = () => setHistory(history.slice(0, -1));
const go = (panel) => setHistory([...history, panel]);

<ConfigProvider platform={IOS} isWebView>
  <View onSwipeBack={goBack} history={history} activePanel={activePanel}>
    <Panel id="main">
      <PanelHeader>Main</PanelHeader>
      <Group>
        <CellButton onClick={() => go("profile")}>profile</CellButton>
      </Group>
    </Panel>
    <Panel id="profile">
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Placeholder>
          Теперь свайпните от левого края направо, чтобы вернуться
        </Placeholder>
        <Div
          style={{ height: 50, background: "#eee" }}
          data-vkui-swipe-back={false}
        >
          Здесь свайпбек отключен
        </Div>
      </Group>
    </Panel>
  </View>
</ConfigProvider>;
```

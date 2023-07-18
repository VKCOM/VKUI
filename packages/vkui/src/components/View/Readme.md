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
      <CellButton onClick={() => setActivePanel('panel2')}>Go to panel 2</CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel2">
    <PanelHeader>Panel 2</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={() => setActivePanel('panel3')}>Go to panel 3</CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
  <Panel id="panel3">
    <PanelHeader>Panel 3</PanelHeader>
    <Group>
      <div style={{ height: 200 }} />
      <CellButton onClick={() => setActivePanel('panel1')}>Back to panel 1</CellButton>
      <div style={{ height: 600 }} />
    </Group>
  </Panel>
</View>;
```

### <a id="/View?id=iosswipeback"></a>[iOS Swipe Back](https://vkcom.github.io/VKUI/#/View?id=iosswipeback)

В iOS есть возможность свайпнуть от левого края назад, чтобы перейти на предыдущую панель. Для того, чтобы
повторить такое поведение в VKUI, нужно:

- Передать во `View` коллбек `onSwipeBack` — он сработает при завершении анимации свайпа. Поменяйте в нем `activePanel` и обновите `history`.
- Передать во `View` проп `history` — массив из id панелей в порядке открытия. Например, если пользователь из `main` перешел в `profile`, а оттуда попал в `education`, то `history=['main', 'profile', 'education']`.
- Обернуть ваше приложение в `ConfigProvider` — он определит, открыто приложение в webview клиента VK или в браузере (там есть свой swipe back, который будет конфликтовать с нашим). Для проверки в браузере форсируйте определение webview: `<ConfigProvider isWebView>`.
<!--TODO [>=6]: удалить этот пункт, т.к. это информацию про VK Mini Apps-->
- На первой панели должен включаться свайпбек нативного клиента, чтобы пользователь смог выйти из приложения — для этого используют `vk-bridge`. **Если вы делаете стандартное мини-приложение ВКонтакте,** при переходах отправляйте [событие `VKWebAppSetSwipeSettings`](https://dev.vk.com/bridge/VKWebAppSetSwipeSettings) с `history: true` на первой панели или `history: false` на других. **Если тип вашего мини-приложения — `WebviewType.INTERNAL`,** отправляйте событие `VKWebAppEnableSwipeBack` при переходе на первую панель и событие `VKWebAppDisableSwipeBack` при переходе на любую другух.

**Блокировка свайпа (вариант #1)**

Компоненты, которые сами обрабатывают жесты (например, карта), могут конфликтовать со свайпбеком — повесьте на них свойство `data-vkui-swipe-back={false}`

<br />

**Блокировка свайпа (вариант #2)**

Для блокирования свайпа по вашему условию есть коллбек `onSwipeBackStart()` (см. **Свойства и методы**)

```tsx static
import * as React from 'react';
import { type ViewProps, View } from '@vkontakte/vkui';

type ViewOnSwipeBackStartProp = Required<ViewProps>['onSwipeBackStart'];

const App = () => {
  const handleSwipeBackStart = React.useCallback<ViewOnSwipeBackStartProp>((activePanel) => {}, []);
  return <View onSwipeBackStart={handleSwipeBackStart} />;
};
```

<!--TODO [>=6]: удалить информацию про VK Mini Apps-->

```jsx
import vkBridge from '@vkontakte/vk-bridge';

const App = () => {
  const [history, setHistory] = useState(['main']);
  const activePanel = history[history.length - 1];
  const isFirst = history.length === 1;

  const go = React.useCallback((panel) => {
    setHistory((prevHistory) => [...prevHistory, panel]);
  }, []);
  const goBack = React.useCallback(() => {
    setHistory((prevHistory) => prevHistory.slice(0, -1));
  }, []);

  const handleProfileClick = React.useCallback(() => go('profile'), [go]);
  const handleSettingsClick = React.useCallback(() => go('settings'), [go]);

  React.useEffect(() => {
    // В стандартных мини-приложениях делайте так:
    vkBridge.send('VKWebAppSetSwipeSettings', { history: isFirst });
    // В мини-приложениях `WebviewType.INTERNAL` делайте так:
    vkBridge.send(isFirst ? 'VKWebAppEnableSwipeBack' : 'VKWebAppDisableSwipeBack');
  }, [isFirst]);

  const [userName, setUserName] = React.useState('');
  const [popoutWithRestriction, setPopoutWithRestriction] = React.useState(null);

  const handleSwipeBackStartForPreventIfNeeded = React.useCallback(
    (activePanel) => {
      if (activePanel === 'settings') {
        if (userName !== '') {
          return;
        }

        setPopoutWithRestriction(
          <Alert
            header="Поле Имя не заполнено"
            text="Пожалуйста, заполните его."
            onClose={() => setPopoutWithRestriction(null)}
          />,
        );

        return 'prevent';
      }
    },
    [userName],
  );

  return (
    <SplitLayout popout={popoutWithRestriction}>
      <SplitCol>
        <View
          history={history}
          activePanel={activePanel}
          onSwipeBackStart={handleSwipeBackStartForPreventIfNeeded}
          onSwipeBack={goBack}
        >
          <Panel id="main">
            <MainPanelContent onProfileClick={handleProfileClick} />
          </Panel>
          <Panel id="profile">
            <ProfilePanelContent onSettingsClick={handleSettingsClick} />
          </Panel>
          <Panel id="settings">
            <SettingsPanelContent name={userName} onChangeName={setUserName} />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

const MainPanelContent = ({ onProfileClick }) => {
  return (
    <React.Fragment>
      <PanelHeader>Main</PanelHeader>
      <Group>
        <div style={{ height: 200 }} />
        <CellButton onClick={onProfileClick}>Профиль</CellButton>
        <div style={{ height: 600 }} />
      </Group>
    </React.Fragment>
  );
};

const ProfilePanelContent = ({ onSettingsClick }) => {
  return (
    <React.Fragment>
      <PanelHeader>Профиль</PanelHeader>
      <Group>
        <Placeholder>Теперь свайпните от левого края направо, чтобы вернуться</Placeholder>
        <Div style={{ height: 50, background: '#eee' }} data-vkui-swipe-back={false}>
          Здесь свайпбек отключен
        </Div>
      </Group>
      <Group>
        <CellButton onClick={onSettingsClick}>Настройки</CellButton>
      </Group>
    </React.Fragment>
  );
};

const SettingsPanelContent = ({ name, onChangeName }) => {
  const handleNameChange = React.useCallback(
    (event) => {
      onChangeName(event.target.value.trim());
    },
    [onChangeName],
  );

  return (
    <React.Fragment>
      <PanelHeader>Настройки</PanelHeader>
      <Group>
        <Placeholder>Пример с блокированием свайпбека пока не будет выполнено условие</Placeholder>
        <FormItem htmlFor="name" top="Имя">
          <Input id="name" value={name} onChange={handleNameChange} />
        </FormItem>
      </Group>
    </React.Fragment>
  );
};

<ConfigProvider platform={Platform.IOS} isWebView>
  <App />
</ConfigProvider>;
```

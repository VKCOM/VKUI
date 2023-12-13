Базовый компонент для создания панелей.

- В качестве `children` принимает коллекцию [Panel](#/Panel). У каждой [Panel](#/Panel) должен быть
  уникальный `id`.
- Свойство `activePanel` принимает `id` той [Panel](#/Panel), которая должна быть активна. При смене
  значения происходит плавный переход от одной панели к другой. Как только он заканчивается,
  вызывается свойство-функция `onTransition`. При возврате на предыдущую панель восстанавливает
  в ней последнее состояние скролла.

> **Важно**
>
> Чтобы анимация переходов происходила правильно, порядок [Panel](#/Panel) в вёрстке должен соответствовать их
> подразумеваемому роутингу. Рассмотрим на примере ниже.
>
> ```jsx static
> <View activePanel="1">
>   <Panel id="1" />
>   <Panel id="2" />
>   <Panel id="3" />
> </View>
> ```
>
> В примере навигация между панелями будет в порядке 1 -> 2 -> 3.

Чтобы понять, был это переход вперёд или назад, можно воспользоваться хуком <a href="{{anchor}}">useNavDirection</a>. Этот хук работает, даже если анимации выключены (`<ConfigProvider transitionMotionEnabled={false}>`).

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

<br />

## iOS Swipe Back

В iOS есть возможность свайпнуть от левого края назад, чтобы перейти на предыдущую панель. Для того, чтобы
повторить такое поведение в VKUI, нужно:

- Передать во `View` коллбек `onSwipeBack` — он сработает при завершении анимации свайпа. Поменяйте в нем `activePanel` и обновите `history`.
- Передать во `View` проп `history` — массив из id панелей в порядке открытия. Например, если пользователь из `main` перешел в `profile`, а оттуда попал в `education`, то `history=['main', 'profile', 'education']`.
- Обернуть ваше приложение в `ConfigProvider` — он определит, открыто приложение в webview клиента VK или в браузере (там есть свой swipe back, который будет конфликтовать с нашим). Для проверки в браузере форсируйте определение webview: `<ConfigProvider isWebView>`.

**Блокировка свайпа (вариант #1)**

Компоненты, которые сами обрабатывают жесты (например, карта или кастомный компонент по типу карусели), могут конфликтовать со свайпбеком. Вот как можно это решить:

- либо повесьте на них свойство `data-vkui-swipe-back={false}`;
- либо вызывайте `event.stopPropagation()` на событие `onStartX` компонента [Touch](#/Touch).

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

```jsx
const App = () => {
  const [history, setHistory] = useState(['main']);
  const activePanel = history[history.length - 1];

  const go = React.useCallback((panel) => {
    setHistory((prevHistory) => [...prevHistory, panel]);
  }, []);
  const goBack = React.useCallback(() => {
    setHistory((prevHistory) => prevHistory.slice(0, -1));
  }, []);

  const handleProfileClick = React.useCallback(() => go('profile'), [go]);
  const handleSettingsClick = React.useCallback(() => go('settings'), [go]);

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
      <Group
        header={<Header>Gallery</Header>}
        description="Полностью блокирует свайпбэк (за счёт event.stopPropagation() на onStartX компонента Touch)"
      >
        <Gallery slideWidth="90%" bullets="dark">
          <div style={{ backgroundColor: 'var(--vkui--color_background_negative)' }} />
          <img src="https://placebear.com/1024/640" style={{ display: 'block' }} />
          <div style={{ backgroundColor: 'var(--vkui--color_background_accent)' }} />
        </Gallery>
      </Group>
      <Group
        header={<Header>HorizontalScroll</Header>}
        description="Свайпбэк срабатывает либо если мы тянем за левый край экрана, либо если позиция горизонтального скролла равна нулю"
      >
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            {getRandomUsers(15).map((user) => (
              <HorizontalCell key={user.id} size="s" header={user.first_name}>
                <Avatar size={56} src={user.photo_100} />
              </HorizontalCell>
            ))}
          </div>
        </HorizontalScroll>
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

<ConfigProvider platform={'ios'} isWebView>
  <App />
</ConfigProvider>;
```

<br />

## useNavDirection

### Определение типа перехода (вперёд/назад), с которым была отрисована панель.

Хук `useNavDirection()` возвращает одно из трёх значений:

- `undefined` означает, что компонент был смонтирован без перехода (тип перехода может быть не определён при самом первом монтировании приложения, когда ещё не было переходов между [View](#/View) и [Panel](#/Panel));
- `"forwards"` переход вперёд;
- `"backwards"` переход назад.

Xук возвращает правильное значение даже если анимация **выключена** через [ConfigProvider](#/ConfigProvider) (`<ConfigProvider transitionMotionEnabled={false}>`).

Значение известно ещё до завершения анимации и определяется один раз, при первом монтировании панели.

Этот хук можно использовать для определения типа анимации перехода не только между `Panel` внутри одного `View`, но и между `View` внутри `Root`.

<br />

Хук также работает в режиме <a href="{{anchor}}">iOS Swipe Back</a>. Тип перехода известен как только пользователь начал движение.

<br />

В примере ниже c помощью спиннера имитируется загрузка данных если панель отрисована с анимацией перехода вперед.
Используется два `View` и по три `Panel` компонента в каждом, чтобы показать, что тип перехода известен как при переходе между `View`, так и при переходе между `Panel`.

На третьем `View` пример со свайпом в iOS от левого края назад, где видно, что панель на которую идёт переход определяет его тип в самом начале свайпа.

```jsx
const Content = () => {
  const direction = useNavDirection();

  const [spinner, setSpinner] = useState(null);

  React.useEffect(
    function simulateDataLoadingWhenMovingForwards() {
      let timerId = null;
      const loadData = () => {
        setSpinner(<Spinner size="large" style={{ margin: '20px 0' }} />);
        timerId = setTimeout(() => setSpinner(null), 1000);
      };

      if (direction !== 'backwards') {
        loadData();
      }

      return () => clearTimeout(timerId);
    },
    [direction],
  );

  return (
    <Div>
      <Headline level="1" style={{ marginBottom: 16 }}>
        Направление перехода:{' '}
        {direction === 'forwards'
          ? 'вперёд'
          : direction === 'backwards'
          ? 'назад'
          : 'не определено'}
      </Headline>
      {spinner}
    </Div>
  );
};

const Example = () => {
  const [activeView, setActiveView] = useState('view1');
  const [activePanel, setActivePanel] = useState(1);

  const [swipeViewHistory, setSwipeViewHistory] = useState([`swipeView.${activePanel}`]);
  const pushSwipeViewHistory = React.useCallback((panel) => {
    setSwipeViewHistory((prevHistory) => [...prevHistory, `swipeView.${panel}`]);
  }, []);
  const onSwipeBack = React.useCallback(() => {
    const newHistory = swipeViewHistory.slice(0, -1);
    setSwipeViewHistory(newHistory);

    const newActiveSwipeViewPanel = newHistory[newHistory.length - 1];
    const swipeViewPanel = +newActiveSwipeViewPanel.split('swipeView.')[1];
    setActivePanel(swipeViewPanel);
  }, [swipeViewHistory]);

  handleActivePanelSet = React.useCallback(
    (panel) => {
      setActivePanel(panel);
      if (activeView === 'swipeView') {
        pushSwipeViewHistory(panel);
      }
    },
    [pushSwipeViewHistory, activeView],
  );

  handleActiveViewSet = React.useCallback(
    (view) => {
      if (view === 'swipeView') {
        const defaultSwipeViewActivePanel = 1;
        setSwipeViewHistory([`swipeView.${defaultSwipeViewActivePanel}`]);
        setActivePanel(defaultSwipeViewActivePanel);
      }
      setActiveView(view);
    },
    [activePanel],
  );

  const navigationButtons = (
    <NavigationButtons
      activePanel={activePanel}
      activeView={activeView}
      setActivePanel={handleActivePanelSet}
      setActiveView={handleActiveViewSet}
    />
  );

  const swipeViewActivePanel = swipeViewHistory[swipeViewHistory.length - 1];
  return (
    <ConfigProvider {...(activeView === 'swipeView' ? { platform: 'ios', isWebView: true } : {})}>
      <SplitLayout>
        <SplitCol>
          <Root activeView={activeView}>
            <View activePanel={`panel1.${activePanel}`} id="view1">
              <Panel id="panel1.1">
                <PanelHeader>Панель 1.1</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="panel1.2">
                <PanelHeader>Панель 1.2</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="panel1.3">
                <PanelHeader>Панель 1.3</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
            </View>
            <View activePanel={`panel2.${activePanel}`} id="view2">
              <Panel id="panel2.1">
                <PanelHeader>Панель 2.1</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="panel2.2">
                <PanelHeader>Панель 2.2</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="panel2.3">
                <PanelHeader>Панель 2.3</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
            </View>
            <View
              id="swipeView"
              activePanel={swipeViewActivePanel}
              history={swipeViewHistory}
              onSwipeBack={onSwipeBack}
            >
              <Panel id="swipeView.1">
                <PanelHeader>П.1 iOS Swipe Back</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="swipeView.2">
                <PanelHeader>П.2 iOS Swipe Back</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
              <Panel id="swipeView.3">
                <PanelHeader>П.3 iOS Swipe Back</PanelHeader>
                {navigationButtons}
                <Content />
              </Panel>
            </View>
          </Root>
        </SplitCol>
      </SplitLayout>
    </ConfigProvider>
  );
};

function NavigationButtons({ activePanel, activeView, setActiveView, setActivePanel }) {
  return (
    <>
      <Spacing size={12} />
      {activeView === 'view1' ? (
        <>
          <CellButton disabled>Перейти на View 1</CellButton>
          <CellButton onClick={() => setActiveView('view2')}>Перейти на View 2</CellButton>
          <CellButton onClick={() => setActiveView('swipeView')}>
            Перейти на пример с iOS Swipe Back
          </CellButton>
        </>
      ) : activeView === 'view2' ? (
        <>
          <CellButton onClick={() => setActiveView('view1')}>Назад View 1</CellButton>
          <CellButton disabled>Перейти на View 2</CellButton>
          <CellButton onClick={() => setActiveView('swipeView')}>
            Перейти на пример с iOS Swipe Back
          </CellButton>
        </>
      ) : (
        activeView === 'swipeView' && (
          <>
            <CellButton onClick={() => setActiveView('view1')}>Назад на View 1</CellButton>
            <CellButton onClick={() => setActiveView('view2')}>Назад на View 2</CellButton>
            <CellButton disabled>Перейти на пример с iOS Swipe Back</CellButton>
          </>
        )
      )}
      <Spacing size={24}>
        <Separator />
      </Spacing>
      <Group>
        {activeView === 'view1' ? (
          <>
            {Array.from({ length: 3 }, (_, index) => (
              <PanelNavigationButton
                key={index}
                viewNumber={1}
                panelNumber={index + 1}
                activePanel={activePanel}
                setActivePanel={setActivePanel}
              />
            ))}
          </>
        ) : activeView === 'view2' ? (
          <>
            {Array.from({ length: 3 }, (_, index) => (
              <PanelNavigationButton
                key={index}
                viewNumber={2}
                panelNumber={index + 1}
                activePanel={activePanel}
                setActivePanel={setActivePanel}
              />
            ))}
          </>
        ) : (
          activeView === 'swipeView' && (
            <SwipeViewNavigationButton activePanel={activePanel} setActivePanel={setActivePanel} />
          )
        )}
      </Group>
      <Spacing size={24}>
        <Separator />
      </Spacing>
    </>
  );
}

function PanelNavigationButton({ activePanel, viewNumber, panelNumber, setActivePanel }) {
  const goOrBack = activePanel <= panelNumber ? 'Перейти' : 'Назад';
  return (
    <CellButton disabled={activePanel === panelNumber} onClick={() => setActivePanel(panelNumber)}>
      {goOrBack} на панель {viewNumber}.{panelNumber}
    </CellButton>
  );
}

function SwipeViewNavigationButton({ activePanel, setActivePanel }) {
  return (
    <>
      {activePanel === 1 && (
        <Placeholder>Перейдите на панель 2 чтобы можно было свайпнуть назад</Placeholder>
      )}
      {activePanel > 1 && (
        <Placeholder>Теперь свайпните от левого края направо, чтобы вернуться</Placeholder>
      )}
      {activePanel < 3 && (
        <CellButton onClick={() => setActivePanel(activePanel + 1)}>
          Перейти на панель {activePanel + 1}
        </CellButton>
      )}
    </>
  );
}

<Example />;
```

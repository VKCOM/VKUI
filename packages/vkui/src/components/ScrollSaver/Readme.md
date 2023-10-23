Компонент-обертка для сохранения позиции скролла элемента при переходах между View и Panel.
По умолчанию позволяет восстановить значение скролла при возвращении назад.

<br />

Примеры использования **ScrollSaver**:

- С компонентом Div.

```jsx static
<ScrollSaver id="div-scroll-saver">
  <Div style={{ display: 'flex'; "max-width": "100px" }}>
    <AlbumItems />
  </Div>
</ScrollSaver>
```

- С компонентом HorizontalScroll требуется задать проп withGetRef, потому что область скролла HorizontalScroll доступна не через getRootRef, а через getRef.

```jsx static
<ScrollSaver id="horizontal-scroll-saver-hook" useGetRef>
  <HorizontalScroll>
    <div style={{ display: 'flex' }}>
      <AlbumItems />
    </div>
  </HorizontalScroll>
</ScrollSaver>
```

- ScrollSaverWithCustomRef берёт ref не из children а из пропа elementRef.

```jsx static
<ScrollSaverWithCustomRef id="horizontal-scroll-saver-hook" elementRef={horizontalRef}>
  <HorizontalScroll getRef={horizontalRef}>
    <div style={{ display: 'flex' }}>
      <AlbumItems />
    </div>
  </HorizontalScroll>
</ScrollSaverWithCustomRef>
```

- useScrollSaver хук

```jsx static
const ContentWithScrollSaverHook = () => {
  const horizontalScrollRef = useRef();
  useScrollSaver(horizontalScrollRef, 'horizontal-scroll-saver-hook');

  return (
    <Div>
      <Headline level="1" style={{ marginBottom: 16 }}>
        With ScrollSaverHook
      </Headline>
      <HorizontalScroll getRef={horizontalScrollRef}>
        <div style={{ display: 'flex' }}>
          <AlbumItems />
        </div>
      </HorizontalScroll>
    </Div>
  );
};
```

<br />

## Хук useClearScrollSaverCache() позволяет получить функцию глобальной очистки кэша ScrollSaver.

```jsx static
const clearScrollCache = useClearScrollSaverCache();
```

<br />

В примере ниже на View1 и View2 сохраняются позиции скролла HorizontalScroll используя **ScrollSaver**, **useScrollSaver** и **ScrollSaverWithCustomRef**.
Позиция сохраняется как при переходе между View так и при переходе между Panel
При возврате на View1 c других View мы сбрасываем весь кэш ScrollSaver.

```jsx
const albumItems = [
  {
    id: 1,
    title: 'Команда <3',
    size: 4,
    thumb_src: 'https://sun9-33.userapi.com/ODk8khvW97c6aSx_MxHXhok5byDCsHEoU-3BwA/sO-lGf_NjN4.jpg',
  },
  {
    id: 2,
    title: 'Зингер',
    size: 22,
    thumb_src: 'https://sun9-60.userapi.com/bjwt581hETPAp4oY92bDcRvMymyfCaEsnojaUA/_KWQfS-MAd4.jpg',
  },
  {
    id: 3,
    title: 'Медиагалерея ВКонтакте',
    size: 64,
    thumb_src: 'https://sun9-26.userapi.com/YZ5-1A6cVgL7g1opJGQIWg1Bl5ynfPi8p41SkQ/IYIUDqGkkBE.jpg',
  },
];

const largeImageStyles = {
  width: 220,
  height: 124,
  borderRadius: 4,
  boxSizing: 'border-box',
  border: 'var(--vkui--size_border--regular) solid var(--vkui--color_image_border_alpha)',
  objectFit: 'cover',
};

const AlbumItems = () => {
  return albumItems.map(({ id, title, size, thumb_src }) => (
    <HorizontalCell key={id} size="l" header={title} subtitle={`${size} фотографии`}>
      <img style={largeImageStyles} src={thumb_src} />
    </HorizontalCell>
  ));
};

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

const ContentWithScrollSaverComponent = () => {
  return (
    <Div>
      <Headline level="1" style={{ marginBottom: 16 }}>
        With ScrollSaver component
      </Headline>
      <ScrollSaver id="horizontal-scroll-saver-hook" useGetRef>
        <HorizontalScroll>
          <div style={{ display: 'flex' }}>
            <AlbumItems />
          </div>
        </HorizontalScroll>
      </ScrollSaver>
    </Div>
  );
};

const ContentWithScrollSaverWithCustomRef = () => {
  const horizontalRef = useRef();
  return (
    <Div>
      <Headline level="1" style={{ marginBottom: 16 }}>
        With ScrollSaverWithCustomRef - doesn't look for children ref
      </Headline>
      <ScrollSaverWithCustomRef id="horizontal-scroll-saver-hook" elementRef={horizontalRef}>
        <HorizontalScroll getRef={horizontalRef}>
          <div style={{ display: 'flex' }}>
            <AlbumItems />
          </div>
        </HorizontalScroll>
      </ScrollSaverWithCustomRef>
    </Div>
  );
};

const ContentWithScrollSaverHook = () => {
  const horizontalScrollRef = useRef();
  useScrollSaver(horizontalScrollRef, 'horizontal-scroll-saver-hook');

  return (
    <Div>
      <Headline level="1" style={{ marginBottom: 16 }}>
        With ScrollSaverHook
      </Headline>
      <HorizontalScroll getRef={horizontalScrollRef}>
        <div style={{ display: 'flex' }}>
          <AlbumItems />
        </div>
      </HorizontalScroll>
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

  const cache = useScrollSaverCache();
  const clearScrollCache = useClearScrollSaverCache();
  handleActiveViewSet = React.useCallback(
    (view) => {
      if (view === 'view1') {
        clearScrollCache();
      }
      console.log(cache);
      if (view === 'swipeView') {
        const defaultSwipeViewActivePanel = 1;
        setSwipeViewHistory([`swipeView.${defaultSwipeViewActivePanel}`]);
        setActivePanel(defaultSwipeViewActivePanel);
      }
      setActiveView(view);
    },
    [activePanel, clearScrollCache, cache],
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
    <ConfigProvider
      {...(activeView === 'swipeView' ? { platform: Platform.IOS, isWebView: true } : {})}
    >
      <SplitLayout>
        <SplitCol>
          <Root activeView={activeView}>
            <View activePanel={`panel1.${activePanel}`} id="view1">
              <Panel id="panel1.1">
                <PanelHeader>Панель 1.1</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverComponent />
              </Panel>
              <Panel id="panel1.2">
                <PanelHeader>Панель 1.2</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverHook />
              </Panel>
              <Panel id="panel1.3">
                <PanelHeader>Панель 1.3</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverWithCustomRef />
              </Panel>
            </View>
            <View activePanel={`panel2.${activePanel}`} id="view2">
              <Panel id="panel2.1">
                <PanelHeader>Панель 2.1</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverComponent />
              </Panel>
              <Panel id="panel2.2">
                <PanelHeader>Панель 2.2</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverHook />
              </Panel>
              <Panel id="panel2.3">
                <PanelHeader>Панель 2.3</PanelHeader>
                {navigationButtons}
                <Content />
                <ContentWithScrollSaverWithCustomRef />
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

Содержимое `Root` – это коллекция `View`. У каждой `View` должен быть `id`.
Свойство `activeView` определяет, какая `View` сейчас активна.

При смене значения свойства `activeView` происходит плавный переход от одной `View` к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

Чтобы понять был это переход вперёд или назад можно воспользоваться хуком [`useNavTransition()`](#/Root?id=usenavtransition_example).

```jsx
const [activeView, setActiveView] = useState('view1');

<Root activeView={activeView}>
  <View activePanel="panel1.1" id="view1">
    <Panel id="panel1.1">
      <PanelHeader>View 1</PanelHeader>
      <Group>
        <div style={{ height: 200 }} />
        <CellButton onClick={() => setActiveView('view2')}>Open View 2</CellButton>
        <div style={{ height: 600 }} />
      </Group>
    </Panel>
  </View>
  <View activePanel="panel2.1" id="view2">
    <Panel id="panel2.1">
      <PanelHeader>View 2</PanelHeader>
      <Group>
        <div style={{ height: 200 }} />
        <CellButton onClick={() => setActiveView('view1')}>Back to View 1</CellButton>
        <div style={{ height: 600 }} />
      </Group>
    </Panel>
  </View>
</Root>;
```

<br />

## <a id="usenavtransition_example" style="position: relative; top: -100px;"></a>[Определение типа анимации перехода, с которой была отрисована панель, с помощью хука `useNavTransition()`](#/Root?id=usenavtransition_example)

Хук `useNavTransition()` возвращает объект, где свойство `direction` имеет одно из трёх значений:

- `undefined` означает, что компонент был смонтирован без анимации перехода (тип перехода не определён);
- `"forwards"` переход вперёд;
- `"backwards"` переход назад.

Значение известно ещё до завершения анимации.
Для того, чтобы привязаться к моменту когда анимация закончилась можно воспользоваться другими свойствами объекта, которые возвращает хук `useNavTransition()` и следить за изменением флага `entering` который имеет значение `true` во время анимации. В этом же хуке можно найти флаг `isBack` который тоже отражает тип перехода. Свойство `direction` опирается на значение флага `isBack`.
Это хук можно использовать для определения типа анимации перехода не только между `View` внутри `Root`, но и между `Panel` внутри одного `View`.

В примере ниже мы имитируем загрузку данныx, показывая спиннер, если панель была отрисована с анимацией перехода вперед.
Используем два `View` и по три `Panel` компонента в каждом, чтобы показать, что тип перехода можно узнать как при переходе между `View`, так и при переходе между `Panel`.

```jsx
const Content = () => {
  const { direction } = useNavTransition();

  const [spinner, setSpinner] = useState(null);
  const isMountedRef = React.useRef(false);

  React.useEffect(
    function simulateDataLoadingWhenMovingForwards() {
      let timerId = null;
      const loadData = () => {
        setSpinner(<Spinner size="large" style={{ margin: '20px 0' }} />);
        timerId = setTimeout(() => setSpinner(null), 1000);
      };

      if (isMountedRef.current) {
        return () => clearTimeout(timerId);
      }
      isMountedRef.current = true;

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
        Transition direction: {direction}
      </Headline>
      {spinner}
    </Div>
  );
};

const Example = () => {
  const [activeView, setActiveView] = useState('view1');

  const [activePanel, setActivePanel] = useState(1);

  const navigationButtons = (
    <NavigationButtons
      activePanel={activePanel}
      activeView={activeView}
      setActivePanel={setActivePanel}
      setActiveView={setActiveView}
    />
  );

  return (
    <Root activeView={activeView}>
      <View activePanel={`panel1.${activePanel}`} id="view1">
        <Panel id="panel1.1">
          <PanelHeader>Panel 1.1</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
        <Panel id="panel1.2">
          <PanelHeader>Panel 1.2</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
        <Panel id="panel1.3">
          <PanelHeader>Panel 1.3</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
      </View>
      <View activePanel={`panel2.${activePanel}`} id="view2">
        <Panel id="panel2.1">
          <PanelHeader>Panel 2.1</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
        <Panel id="panel2.2">
          <PanelHeader>Panel 2.2</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
        <Panel id="panel2.3">
          <PanelHeader>Panel 2.3</PanelHeader>
          {navigationButtons}
          <Content />
        </Panel>
      </View>
    </Root>
  );
};

function NavigationButtons({ activePanel, activeView, setActiveView, setActivePanel }) {
  return (
    <>
      <Spacing size={12} />
      {activeView === 'view1' ? (
        <CellButton onClick={() => setActiveView('view2')}>Go to View 2</CellButton>
      ) : (
        <CellButton onClick={() => setActiveView('view1')}>Back to View 1</CellButton>
      )}
      <Spacing size={24}>
        <Separator />
      </Spacing>
      <Group>
        {(() => {
          const getCellButton = (viewNumber, panelNumber) => {
            const goOrBack = activePanel <= panelNumber ? 'Go' : 'Back';
            return (
              <CellButton
                disabled={activePanel === panelNumber}
                onClick={() => setActivePanel(panelNumber)}
              >
                {goOrBack} to panel {viewNumber}.{panelNumber}
              </CellButton>
            );
          };
          return (
            <>
              {activeView === 'view1' ? (
                <>
                  {getCellButton(1, 1)}
                  {getCellButton(1, 2)}
                  {getCellButton(1, 3)}
                </>
              ) : (
                <>
                  {getCellButton(2, 1)}
                  {getCellButton(2, 2)}
                  {getCellButton(2, 3)}
                </>
              )}
            </>
          );
        })()}
      </Group>
      <Spacing size={24}>
        <Separator />
      </Spacing>
    </>
  );
}

<Example />;
```

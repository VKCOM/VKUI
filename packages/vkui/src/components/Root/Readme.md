Содержимое `Root` – это коллекция `View`. У каждой `View` должен быть `id`.
Свойство `activeView` определяет, какая `View` сейчас активна.

При смене значения свойства `activeView` происходит плавный переход от одной `View` к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

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

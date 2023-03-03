Контейнер для однородных [Cell](#!/Cell) со свойством `draggable`. Для всех остальных [Cell](#!/Cell) его можно опустить.

```jsx
const Example = () => {
  const [draggingList, updateDraggingList] = React.useState([
    'Say',
    'Hello',
    'To',
    'My',
    'Little',
    'Friend',
  ]);

  return (
    <View activePanel="list">
      <Panel id="list">
        <PanelHeader>List</PanelHeader>
        <Group>
          <List>
            {draggingList.map((item) => (
              <Cell
                key={item}
                before={<Avatar />}
                draggable
                onDragFinish={({ from, to }) =>
                  reorderList({ from, to }, draggingList, updateDraggingList)
                }
              >
                {item}
              </Cell>
            ))}
          </List>
        </Group>
      </Panel>
    </View>
  );
};
```

Надстройка над SimpleCell, позволяющая удалять, перетаскивать и выделять ячейки.

```jsx
const [removeList, updateRemoveList] = React.useState([
  "Михаил Андриевский",
  "Вадим Дорохов",
  "Саша Колобов",
]);
const [draggingList, updateDraggingList] = React.useState([
  "Say",
  "Hello",
  "To",
  "My",
  "Little",
  "Friend",
]);
const [dragAndSelectList, updateDragAndSelectList] = React.useState([
  { label: "Фотографии", defaultChecked: true },
  { label: "Музыка" },
  { label: "Видео" },
]);
const [dragAndRemoveList, updateDragAndRemoveList] = React.useState([
  "Евгения Полозова",
  "Артур Стамбульцян",
  "Владимир Клепов",
]);

const removeFromList = (idx, list, updateListFn) => {
  const _list = [...list];
  _list.splice(idx, 1);
  updateListFn(_list);
};

const reorderList = ({ from, to }, list, updateListFn) => {
  const _list = [...list];
  _list.splice(from, 1);
  _list.splice(to, 0, list[from]);
  updateListFn(_list);
};

<View activePanel="list">
  <Panel id="list">
    <PanelHeader>Cell</PanelHeader>

    <Group
      header={
        <Header subtitle={<code>mode="selectable"</code>}>Выделение</Header>
      }
    >
      <Cell mode="selectable" before={<Avatar />}>
        Артур Стамбульцян
      </Cell>
      <Cell mode="selectable" before={<Avatar />}>
        Игорь Федоров
      </Cell>
      <Cell mode="selectable" disabled before={<Avatar />}>
        Михаил Лихачев
      </Cell>
    </Group>

    {removeList.length > 0 && (
      <Group
        header={
          <Header subtitle={<code>mode="removable"</code>}>Удаление</Header>
        }
      >
        <List>
          {removeList.map((item, idx) => (
            <Cell
              key={item}
              mode="removable"
              onRemove={() => removeFromList(idx, removeList, updateRemoveList)}
            >
              {item}
            </Cell>
          ))}
        </List>
      </Group>
    )}

    <Group
      header={<Header subtitle={<code>draggable</code>}>Перетаскивание</Header>}
    >
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

    <Group
      header={
        <Header subtitle={<code>draggable mode="selectable"</code>}>
          Перетаскивание c выделением
        </Header>
      }
    >
      <List>
        {dragAndSelectList.map(({ label, ...restItem }) => (
          <Cell
            key={label}
            mode="selectable"
            draggable
            before={<Image borderRadius="l" size={32} />}
            onDragFinish={({ from, to }) =>
              reorderList(
                { from, to },
                dragAndSelectList,
                updateDragAndSelectList
              )
            }
            {...restItem}
          >
            {label}
          </Cell>
        ))}
      </List>
    </Group>

    {dragAndRemoveList.length > 0 && (
      <Group
        header={
          <Header subtitle={<code>draggable mode="removable"</code>}>
            Перетаскивание c удалением
          </Header>
        }
      >
        <List>
          {dragAndRemoveList.map((item, idx) => (
            <Cell
              key={item}
              mode="removable"
              draggable
              before={<Avatar />}
              onRemove={() =>
                removeFromList(idx, dragAndRemoveList, updateDragAndRemoveList)
              }
              onDragFinish={({ from, to }) =>
                reorderList(
                  { from, to },
                  dragAndRemoveList,
                  updateDragAndRemoveList
                )
              }
            >
              {item}
            </Cell>
          ))}
        </List>
      </Group>
    )}
  </Panel>
</View>;
```

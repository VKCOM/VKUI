Надстройка над SimpleCell, позволяющая удалять, перетаскивать и выделять ячейки.

```jsx
  class Example extends React.Component {

    constructor() {
      this.state = {
        activePanel: 'list',
        removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
        draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              Cell
            </PanelHeader>

            <Group header={<Header subtitle={<code>mode="selectable"</code>}>Выделение</Header>}>
              <Cell mode="selectable" before={<Avatar />}>Артур Стамбульцян</Cell>
              <Cell mode="selectable" before={<Avatar />}>Игорь Федоров</Cell>
              <Cell mode="selectable" disabled before={<Avatar />}>Михаил Лихачев</Cell>
            </Group>

            {this.state.removeList.length &&
              <Group header={<Header subtitle={<code>mode="removable"</code>}>Удаление</Header>}>
                <List>
                  {this.state.removeList.map((item, index) => (
                    <Cell key={item} mode="removable" onRemove={() => {
                      this.setState({
                        removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
                      })
                    }}>{item}</Cell>
                  ))}
                </List>
              </Group>
            }

            <Group header={
              <Header subtitle={<code>draggable</code>}>Перетаскивание</Header>}>
              <List>
                {this.state.draggingList.map((item) => (
                  <Cell before={<Avatar />} key={item} draggable onDragFinish={({ from, to }) => {
                    const draggingList = [...this.state.draggingList];
                    draggingList.splice(from, 1);
                    draggingList.splice(to, 0, this.state.draggingList[from]);
                    this.setState({ draggingList });
                  }}>{item}</Cell>
                ))}
              </List>
            </Group>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```

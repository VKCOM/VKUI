Используется для создания модальных окон. Содержимое `Root` – это коллекция `View`. У каждой `View` должен быть `id`.
Свойство `activeView` определяет, какая `View` сейчас активна.

При смене значения свойства `activeView` плавный происходит переход от одной `View` к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.

```
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: 'view1'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View activePanel="panel1.1" id="view1">
          <Panel id="panel1.1">
            <PanelHeader>View 1</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'view2' }) }>
                Open View 2
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View header activePanel="panel2.1" id="view2">
          <Panel id="panel2.1">
            <PanelHeader>View 2</PanelHeader>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'view1' }) }>
                Back to View 1
              </CellButton>
            </Group>
          </Panel>
        </View>
      </Root>
    )
  }
}

<Example />
```

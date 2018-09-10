Базовый компонент для создания панелей. В качестве `children` принимает коллекцию `Panel`.
У каждой `Panel` должен быть уникальный `id`. Свойство `activePanel` определяет какая `Panel` активна.

При смене значения свойства `activePanel` происходит плавный переход от одной панели к другой.
Как только он заканчивается, вызывается свойство-функция `onTransition`.


```
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'panel1'
    }
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="panel1">
          <PanelHeader>Panel 1</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel2' }) }>
              Go to panel 2
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader>Panel 2</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel3' }) }>
              Go to panel 3
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader>Panel 3</PanelHeader>
          <Group>
            <CellButton onClick={ () => this.setState({ activePanel: 'panel1' }) }>
              Back to panel 1
            </CellButton>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

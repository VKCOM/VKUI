Компонент для отрисовки шапки внутри панели. В качестве `children` принимает то, что будет являться заголовком панели.
По бокам располагаются управляющие кнопки `HeaderButton`.

```
class Example extends React.Component {

  constructor () {
    this.state = {
      activePanel: 'brand'
    }
  }

  render () {

    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="brand">
          <PanelHeader>
            Настройки
          </PanelHeader>
          <Group>
            <CellButton onClick={() => this.setState({ activePanel: 'light' })}>Альтернативная тема</CellButton>
          </Group>
        </Panel>
        <Panel id="light">
          <PanelHeader
            theme="light"
            left={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            addon={<HeaderButton onClick={() => this.setState({ activePanel: 'brand' })}>Назад</HeaderButton>}
          >
            Котики
          </PanelHeader>
        </Panel>
      </View>
    )
  }
}

<Example />
```

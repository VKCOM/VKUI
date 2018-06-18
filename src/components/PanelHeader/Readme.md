Компонент для отрисовки шапки внутри [Panel](#panel). В качестве children принимает то, что будет находиться в центре.
Это может быть текст, элемент или [Search](#search). По бокам располагаются управляющие кнопки. Более подробно об этих
кнопках можно почитать [тут](#headerbutton).

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
            <Button type="cell" onClick={() => this.setState({ activePanel: 'light' })}>Светлая тема</Button>
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

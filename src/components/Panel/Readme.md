`Panel` – это контейнер для контента. Практически всегда содержимое панели должно начинаться с
[`Separator`](https://vkcom.github.io/vkui-styleguide/#!/Separator), поэтому он рисуется там по-умолчанию.

Исключения, в которых разделитель в начале панели не нужен:
* В [`PanelHeader`](https://vkcom.github.io/vkui-styleguide/#!/PanelHeader) рисуется [`Search`](https://vkcom.github.io/vkui-styleguide/#!/Search).
* В [`PanelHeader`](https://vkcom.github.io/vkui-styleguide/#!/PanelHeader) рисуются [`Tabs`](https://vkcom.github.io/vkui-styleguide/#!/Tabs).
* В начале `Panel` рисуется [`Search`](https://vkcom.github.io/vkui-styleguide/#!/Search).

В таких случаях передавайте в `Panel` свойство `separator={false}`.

```jsx
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
          <PanelHeader>More</PanelHeader>
          <Group>
            <Cell expandable before={<Icon24User/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Friends
            </Cell>
            <Cell expandable before={<Icon24Users/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Communities
            </Cell>
            <Cell expandable before={<Icon24Music/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2" separator={false}>
          <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>Communities</PanelHeader>
          <Search />
          <Cell description="Humor" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Swipe Right
          </Cell>
          <Cell description="Cultural Center" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Out Cinema
          </Cell>
          <Cell description="Movies" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            #ARTPOKAZ
          </Cell>
        </Panel>
        <Panel id="panel3" centered>
          <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel2' })}/>}>Out Cinema</PanelHeader>
          <Spinner />
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    )
  }
}

<Example />
```

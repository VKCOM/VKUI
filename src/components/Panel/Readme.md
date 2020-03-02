`Panel` – это контейнер для контента.

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
      <View activePanel={this.state.activePanel} header={false}>
        <Panel id="panel1" separator={false}>
          <PanelHeaderSimple>More</PanelHeaderSimple>
          <Group>
            <Cell expandable before={<Icon28UserOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Friends
            </Cell>
            <Cell expandable before={<Icon28UsersOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Communities
            </Cell>
            <Cell expandable before={<Icon28MusicOutline/>} onClick={() => this.setState({ activePanel: 'panel2' })}>
              Music
            </Cell>
          </Group>
        </Panel>
        <Panel id="panel2" separator={false}>
          <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
            Communities
          </PanelHeaderSimple>
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
        <Panel id="panel3" centered separator={false}>
          <PanelHeaderSimple left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel2' })}/>}>
            Out Cinema
          </PanelHeaderSimple>
          <Spinner />
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    )
  }
}

<Example />
```

Используется для создания модальных окон. Содержимое View – это коллекция Panel, содержимое Root – коллекция View. Принцип тот же. У каждой View должен быть id, свойство activeView определяет, какая View активна. Так же есть свойство onTransition.

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
        <View header activePanel="panel1.1" id="view1">
          <Panel id="panel1.1" header={{ title: "View 1" }}>
            <Group>
              <Button onClick={ () => this.setState({ activeView: 'view2' }) }>
                Open View 2
              </Button>
            </Group>
          </Panel>
        </View>
        <View header activePanel="panel2.1" id="view2">
          <Panel id="panel2.1" header={{ title: "View 2" }}>
            <Group>
              <Button onClick={ () => this.setState({ activeView: 'view1' }) }>
                Back to View 1
              </Button>
            </Group>
          </Panel>
        </View>
      </Root>
    )       
  }
}

<Example />
```

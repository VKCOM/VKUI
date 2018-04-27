Базовый компонент для создания панелей. В качестве children принимает коллекцию [Panel](#panel). У каждой Panel должен быть уникальный id. Свойство activePanel определяет какая Panel активна.

При смене значения свойства activePanel происходит переход от одной панели к другой. Как только он заканчивается, вызывается свойство-функция onTransition.


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
      <View header activePanel={this.state.activePanel}>
        <Panel id="panel1" header={{ title: "Panel 1" }}>
          <Group>
            <Button onClick={ () => this.setState({ activePanel: 'panel2' }) }>
              Go to panel 2
            </Button>
          </Group>  
        </Panel>
        <Panel id="panel2" header={{ title: "Panel 2" }}>
          <Group>
            <Button onClick={ () => this.setState({ activePanel: 'panel3' }) }>
              Go to panel 3
            </Button>
          </Group>  
        </Panel>
        <Panel id="panel3" header={{ title: "Panel 3" }}>
          <Group>
            <Button onClick={ () => this.setState({ activePanel: 'panel1' }) }>
              Back to panel 1
            </Button>
          </Group>  
        </Panel>
      </View>
    )
  }
}

<Example />
```

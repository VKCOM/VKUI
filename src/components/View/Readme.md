Базовый компонент для создания панелей. В качестве children принимает коллекцию [ScrollView](#scrollview). У каждой ScrollView должен быть уникальный id. Свойство activePanel определяет какая ScrollView активна.

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
        <ScrollView id="panel1" header={{ title: "Panel 1" }}>
          <div style={{ marginTop: 10 }}>
            <Button onClick={ () => this.setState({ activePanel: 'panel2' }) }>
              Go to panel 2
            </Button>
          </div>
        </ScrollView>
        <ScrollView id="panel2" header={{ title: "Panel 2" }}>
          <div style={{ marginTop: 10 }}>
            <Button onClick={ () => this.setState({ activePanel: 'panel3' }) }>
              Go to panel 3
            </Button>
          </div>
        </ScrollView>
        <ScrollView id="panel3" header={{ title: "Panel 3" }}>
          <div style={{ marginTop: 10 }}>
            <Button onClick={ () => this.setState({ activePanel: 'panel1' }) }>
              Back to panel 1
            </Button>
          </div>
        </ScrollView>
      </View>
    )
  }
}

<Example />
```

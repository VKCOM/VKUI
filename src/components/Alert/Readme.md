```

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null
    }
  }

  componentDidMount() {
    this.openSheet()
  }

  openSheet () {
    this.setState({ popout: 
      <Alert
        actions={[{
          title: 'Close',
          action: () => this.setState({ popout: null })
        }]} 
      >
        <h2>Hi!</h2>
        <p>I am alert</p>
      </Alert> 
    });
  }

  render() {
    return (
      <View popout={this.state.popout} header={{}} activePanel="alert">
        <ScrollView id="alert" header={{ title: "Alert" }}>
          <div style={{ padding: 10 }}>
            <Button appearance="vk-primary" wide={false} onClick={this.openSheet.bind(this)}>Open Alert</Button>
          </div>
        </ScrollView>
      </View>
    )
  }
}

<Example />
```

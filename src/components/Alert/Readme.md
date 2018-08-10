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
          autoclose: true,
          style: 'destructive'
        }, {
          title: 'Cancel',
          autoclose: true,
          style: 'cancel'
        }]}
        onClose={ () => this.setState({ popout: null }) }
      >
        <h2>Hi!</h2>
        <p>I am alert</p>
      </Alert>
    });
  }

  render() {
    return (
      <View popout={this.state.popout} header={false} activePanel="alert">
        <Panel id="alert">
          <Button type="cell" onClick={this.openSheet.bind(this)}>Open Alert</Button>
        </Panel>
      </View>
    )
  }
}

<Example />
```

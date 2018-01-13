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
    this.setState({ popout: <ActionSheet onClose={ () => this.setState({ popout: null }) }>
      <ActionSheetItem>Action</ActionSheetItem>
      <ActionSheetItem>Sheet</ActionSheetItem>
    </ActionSheet> });
  }

  render() {
    return (
      <View popout={this.state.popout} header={{}} activePanel="panel">
        <ScrollView id="panel" header={{ title: "Action Sheet" }}>
          <div style={{ padding: 10 }}>
            <Button appearance="vk-primary" wide={false} onClick={this.openSheet.bind(this)}>Open Sheet</Button>
          </div>
        </ScrollView>
      </View>
    )
  }
}

<Example />
```

```jsx
  class Example extends React.Component {
  
    constructor() {
      this.state = {
        activePanel: 'list'
      };
    }
    
    render() {
      return (
        <View header={{}} activePanel={this.state.activePanel}>
          <ScrollView id="list" header={{ title: 'List' }}>
            <Group title="Simple list">
              <List>
                <ListItem>Label 1</ListItem>
                <ListItem>Label 2</ListItem>
                <ListItem>Label 3</ListItem>
              </List>
            </Group>
        
            <Group title="Expandable">
              <List>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })}>Label 1</ListItem>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })}>Label 2</ListItem>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })}>Label 3</ListItem>
              </List>
            </Group>
        
            <Group title="Indicator">
              <List>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Indicator">Feature 1</ListItem>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Off">Feature 2</ListItem>
                <ListItem expandable={true} onClick={() => this.setState({ activePanel: 'nothing' })} indicator="On">Feature 3</ListItem>
              </List>
            </Group>
          </ScrollView>
          <ScrollView id="nothing" header={{ title: 'Nothing', icon: <BackButton onClick={() => this.setState({ activePanel: 'list' })} /> }}>
            <div
              style={{
                padding: '100px 0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  color: 'gray',
                  textAlign: 'center'
                }}
              >
                Here is nothing<br />
                <span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Back to start screen</span>
              </div>
            </div>
          </ScrollView>
        </View>
      )
    }
  }
  
  <Example />
```

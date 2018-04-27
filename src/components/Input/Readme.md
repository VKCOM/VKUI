```jsx

  class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activePanel: 'new'
      }
    }
  
    render() {
      return (
        <View header activePanel={this.state.activePanel}>
          <Panel id="button" header={{ title: 'Button' }}>
            <Group>
              <List>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'old' })}>Old</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'new' })}>New</ListItem>
              </List>
            </Group>
          </Panel>
          <Panel 
            id="old" 
            header={{ 
              title: 'Old',
              icon: osname === IOS && 
                <HeaderButton onClick={() => this.setState({ activePanel: 'button' })}>
                  <Icon28Chevron_back/>
                </HeaderButton> 
            }}
          >
            <Group title="Simple inputs">
              <FormLayout allowSubmit={false}>
                <Input type="text" placeholder="Your login" />
                <Input type="password" placeholder="Your password" />
              </FormLayout>
            </Group>
      
            <Group title="Date and time">
              <FormLayout>
                <Input type="date" placeholder="1 янв. 2017 г." label="Date" />
                <Input type="datetime-local" placeholder="Very very long placeholder to test text-overflow: ellipsis" label="Local datetime" />
                <Input type="time" placeholder="Time" label="Time" />
                <Input type="month" placeholder="Month" label="Month" />
              </FormLayout>
            </Group>
      
            <Group title="Other">
              <FormLayout>
                <Input type="email" placeholder="E-mail" label="E-mail" />
                <Input type="url" placeholder="URL" label="URL" />
                <Input type="tel" placeholder="Phone" label="Phone" />
                <Input type="number" placeholder="Number" label="Number" />
              </FormLayout>
            </Group>
          </Panel>
          <Panel 
            id="new" 
            header={{ 
              title: 'New',
              icon: osname === IOS && 
                <HeaderButton onClick={() => this.setState({ activePanel: 'button' })}>
                  <Icon28Chevron_back />
                </HeaderButton> 
            }}
            theme="white"
          >
            <FormLayout v="new" allowSubmit={false}>
              <Input v="new" type="text" placeholder="Your login" label="Simple input" />
            </FormLayout>
          </Panel>
        </View>
      )
    }
  }
  
  <Example />
```


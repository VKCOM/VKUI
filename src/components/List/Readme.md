```jsx
  class Example extends React.Component {
  
    constructor() {
      this.state = {
        activePanel: 'list'
      };
    }
    
    render() {
      return (
        <View header activePanel={this.state.activePanel}>
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
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 1</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 2</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 3</ListItem>
              </List>
            </Group>
        
            <Group title="Indicator">
              <List>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Indicator">Feature 1</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Off">Feature 2</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="On">Feature 3</ListItem>
              </List>
            </Group>
            
            <Group title="Icons">
              <List>
                <ListItem icon={<Icon24About />}>Information</ListItem>
                <ListItem icon={<Icon24Services />}>Services</ListItem>
              </List>
            </Group>
            
            <Group title="Selectable (Beta)">
              <List>
                <ListItem selectable name="selectable-list" value="Feature 1">Feature 1</ListItem>
                <ListItem selectable name="selectable-list" value="Feature 2">Feature 2</ListItem>
                <ListItem selectable name="selectable-list" value="Feature 3">Feature 3</ListItem>
              </List>
            </Group>
            
            <Group title="Users list">
              <List>
                <ListItem avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</ListItem>
                <ListItem avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</ListItem>
                <ListItem avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</ListItem>
              </List>
            </Group>
            
            <Group title="Selectable users list">
              <List>
                <ListItem selectable avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</ListItem>
                <ListItem selectable avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</ListItem>
                <ListItem selectable avatar={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</ListItem>
              </List>
            </Group>
          </ScrollView>
          <ScrollView 
            id="nothing" 
            header={{ 
              title: 'Nothing', 
              icon: 
                <HeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
                  {osname === ANDROID && <Icon24Back fill="#fff" />}
                  {osname === IOS && <Icon28Chevron_back fill="#fff" />}
                </HeaderButton> 
            }}>
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

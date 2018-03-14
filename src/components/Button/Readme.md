Появился новый дизайн кнопок. Он доступен, если в Button передать prop v="new":

```jsx static
  <Button v="new">Click me</Button>
```

В следующей мажорной версии v="new" будет по-умолчанию. Сейчас по-умолчанию v="old".

Описание props новых кнопок можно посмотреть [тут](#buttonnew). 

```jsx

  class Example extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activePanel: 'button'
      }
    }
  
    render() {
      return (
        <View header activePanel={this.state.activePanel}>
          <ScrollView id="button" header={{ title: 'Button' }}>
            <Group>
              <List>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'old' })}>Old</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'new' })}>New</ListItem>
              </List>
            </Group>
          </ScrollView>
          <ScrollView 
            id="old" 
            header={{ 
              title: 'Old',
              icon: osname === IOS && 
                <HeaderButton onClick={() => this.setState({ activePanel: 'button' })}>
                  <Icon28Chevron_back/>
                </HeaderButton> 
            }}
          >
            <Group title="Appearance">
              <Button appearance="default" onClick={() => {}}>Default button</Button>
              <Button appearance="primary" onClick={() => {}}>Primary button</Button>
              <Button appearance="danger" onClick={() => {}}>Danger button</Button>
              <Button disabled onClick={() => {}}>Disabled button</Button>
            </Group>
      
            <Group title="Alignment">
              <Button alignment="left" onClick={() => {}}>Button</Button>
              <Button alignment="center" onClick={() => {}}>Button</Button>
              <Button alignment="right" onClick={() => {}}>Button</Button>
            </Group>
      
            <Group title="VK wide button">
              <div style={{ marginBottom: '6px' }}>
                <Button appearance="vk-wide-primary" onClick={() => {}}>VK wide primary button</Button>
              </div>
              <div style={{ marginBottom: '6px' }}>
                <Button appearance="vk-wide-primary" onClick={() => {}} disabled>VK wide primary disabled button</Button>
              </div>
              <div style={{ marginBottom: '6px' }}>
                <Button appearance="vk-wide" onClick={() => {}}>VK wide button</Button>
              </div>
              <div style={{ marginBottom: '6px' }}>
                <Button appearance="vk-wide" onClick={() => {}} disabled>VK wide disabled button</Button>
              </div>
            </Group>
      
            <Group title="VK rich button">
              <Div>
                <Button appearance="vk-rich" onClick={() => {}}>VK rich button</Button>
              </Div>
              <Div>
                <Button appearance="vk-rich" onClick={() => {}} disabled>VK rich disabled button</Button>
              </Div>
            </Group>
      
            <Group title="VK buttons">
              <Div>
                <Button appearance="vk-primary" onClick={() => {}}>VK primary button</Button>
              </Div>
              <Div>
                <Button appearance="vk-primary" onClick={() => {}} disabled>VK primary disabled button</Button>
              </Div>
              <Div>
                <Button appearance="vk-secondary" onClick={() => {}}>VK secondary button</Button>
              </Div>
              <Div>
                <Button appearance="vk-secondary" onClick={() => {}} disabled>VK secondary disabled button</Button>
              </Div>
              <Div>
                <Button appearance="vk-tertiary" onClick={() => {}}>VK tertiary button</Button>
              </Div>
              <Div>
                <Button appearance="vk-tertiary" onClick={() => {}} disabled>VK tertiary disabled button</Button>
              </Div>
            </Group>
      
            <Group title="Inline buttons">
              <Div>
                <Flex>
                  <Button appearance="vk-primary" wide={false} onClick={() => {}}>Apply</Button>
                  <Button appearance="vk-secondary" wide={false} onClick={() => {}}>Cancel</Button>
                </Flex>
              </Div>
            </Group>
          </ScrollView>
          <ScrollView 
            id="new" 
            header={{ 
              title: 'New',
              icon: osname === IOS && 
                <HeaderButton onClick={() => this.setState({ activePanel: 'button' })}>
                  <Icon28Chevron_back />
                </HeaderButton> 
            }}
          >
            <Group title="Levels">
              <Pane>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}}>level={1} (default)</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} level={2}>level={2}</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} level={3}>level={3}</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} level="buy">level="buy"</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} level="sell">level="sell"</Button>
                </div>  
              </Pane>    
            </Group>
            <Group title="Sizes">
              <Pane>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}}>size="m" (default)</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} size="l">size="l"</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} size="xl" level="2">size="xl"</Button>
                </div>  
              </Pane>
            </Group>
            <Group title="Stretched">
              <Pane>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} size="l">No stretch</Button>
                </div>
                <div style={{display: 'flex', margin: '10px 0'}}>
                  <Button v="new" onClick={() => {}} size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
                  <Button v="new" onClick={() => {}} size="l" stretched level="2">Stretched</Button>
                </div>  
              </Pane>
            </Group>
            <Group title="Icons">
              <Pane>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" 
                    onClick={() => {}}
                    before={<Icon16Add/>}
                  >Add item</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" 
                    onClick={() => {}}
                    before={<Icon24Camera/>}
                    size="l"
                  >Take a photo</Button>
                </div>
                <div style={{margin: '10px 0'}}>
                  <Button v="new" 
                    onClick={() => {}}
                    level="2"
                    before={<Icon24Shuffle fill={colors.mutedBlue}/>}
                    size="l"
                  >Shuffle</Button>
                </div>  
              </Pane>
            </Group>
            <Group title="Cell">
              <Button v="new" onClick={() => {}} type="cell">Cell Button</Button>
              <Button v="new" onClick={() => {}} type="cell" level="danger">Danger Button</Button>
            </Group>
          </ScrollView>
        </View>
      )
    }
  }
  
  <Example />
```

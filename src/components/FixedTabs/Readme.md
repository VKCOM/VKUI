```jsx
  class Example extends React.Component {
  
    constructor (props) {
      super(props);
      
      this.state = {
        activeTab: 'medium'
      };
    }
  
    render () {
    
      return (
        <View activePanel="fixed-tabs" header>
          <ScrollView id="fixed-tabs" header={{ title: 'Образование', noShadow: true }} theme="white">
            <FixedTabs>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'medium' })} 
                selected={this.state.activeTab === 'medium'}
              >
                Среднее
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab: 'high' })} 
                selected={this.state.activeTab === 'high'}
              >
                Высшее
              </TabsItem>
            </FixedTabs>
          </ScrollView>
        </View>
      )
    }
  }
  
  <Example />
```

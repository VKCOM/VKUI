```jsx
  class SearchExample extends React.Component {
  
    constructor () {
      
      this.state = {
        showSearch: false
      }
    }
    
    render () {
      return (
        <View activePanel="panel" header>
          <ScrollView id="panel" header={{ 
            title: 'Search', 
            search: this.state.showSearch ? <Search onClose={() => this.setState({ showSearch: false })} /> : null,
            right: osname === ANDROID ? <HeaderButton onClick={() => this.setState({ showSearch: true })}><Icon24Search fill="#fff" /></HeaderButton> : null
          }}>
            {osname === IOS && <Search />}
          </ScrollView>
        </View>
      );
    }
  }
  
  <SearchExample />
```

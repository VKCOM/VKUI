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
          <Panel id="panel">
            <PanelHeader>
              <Search theme="header" before={<Icon24Users />}/>
            </PanelHeader>
            {osname === IOS && <Search />}
          </Panel>
        </View>
      );
    }
  }
  
  <SearchExample />
```

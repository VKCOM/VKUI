Каждая иконка – это JS-файл, который экспортирует React-компонент. Базовый пример использования:
```jsx static
  import IconAbout24 from '@vkontakte/vkui/dist/icons/24/about';
  
  ReactDOM.render(<IconAbout24 />, root);
```

Список доступных иконок:

```
  class Example extends React.Component {
  
    constructor (props) {
      super(props); 
      
      this.state = {
        activePanel: 'icons'
      }
    }
    
    backButton () {
      let BackIcon = osname === IOS ? Icon28Chevron_back : Icon24Back;
      
      return (
        <HeaderButton onClick={() => this.setState({ activePanel: 'icons' })}>
          <BackIcon fill="#fff" />
        </HeaderButton>
      );
    }
  
    getPanels () {
      const panels = [
        <ScrollView id="icons" header={{ title: 'Icons' }}>
          <Group title="Sizes">
            <List>
              { Object.keys(Icon).map(iconSize => {
                return <ListItem expandable onClick={() => this.setState({ activePanel: `size_${iconSize}` })}>{iconSize}</ListItem>
              }) }
            </List>
          </Group>
          <Group title="Colors">
            <List>
              <ListItem before={<Icon24About fill={colors.red} />}>Icon24About, {colorKeys.red}</ListItem>
              <ListItem before={<Icon24Services fill={colors.green} />}>Icon24Services, {colorKeys.green}</ListItem>
            </List>
          </Group>
        </ScrollView>
      ];
      Object.keys(Icon).forEach(iconSize => {
        panels.push(<ScrollView id={`size_${iconSize}`} header={{ title: `Icons: ${iconSize}`, icon: this.backButton() }}>
          <Group>
            <List>
              { Object.keys(Icon[iconSize]).map((iconName) => {
                let ListIcon = Icon[iconSize][iconName];
                return <ListItem before={<ListIcon />} iconSize={iconSize}>{iconName}</ListItem>
              }) }
            </List>
          </Group>
        </ScrollView>)
      })
      
      return panels;
    }
  
    render() {
      return (
        <View activePanel={this.state.activePanel} header>
          {this.getPanels()}
        </View>
      )
    }
  }
  
  <Example />
```

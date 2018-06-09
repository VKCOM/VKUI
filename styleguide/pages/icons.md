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

    back () { this.setState({ activePanel: 'icons' }) }

    getPanels () {
      const panels = [
        <Panel id="icons" key="icons">
          <PanelHeader>
            Icons
          </PanelHeader>
          <Group title="Sizes">
            <List>
              { Object.keys(Icon).map(iconSize => {
                return <ListItem key={iconSize} expandable onClick={() => this.setState({ activePanel: `size_${iconSize}` })}>{iconSize}</ListItem>
              }) }
            </List>
          </Group>
          <Group title="Colors">
            <List>
              <ListItem before={<Icon24About fill={colors.red} />}>Icon24About, {colorKeys.red}</ListItem>
              <ListItem before={<Icon24Services fill={colors.green} />}>Icon24Services, {colorKeys.green}</ListItem>
            </List>
          </Group>
        </Panel>
      ];
      Object.keys(Icon).forEach(iconSize => {
        panels.push(
          <Panel id={`size_${iconSize}`} key={`size_${iconSize}`}>
            <PanelHeader
              left={osname === ANDROID && <HeaderButton onClick={this.back.bind(this)}><Icon24Back /></HeaderButton>}
              icon={osname === IOS && <HeaderButton onClick={this.back.bind(this)}><Icon28Chevron_back /></HeaderButton>}
            >
              Icons: {iconSize}
            </PanelHeader>
            <Group>
              <List>
                { Object.keys(Icon[iconSize]).map((iconName) => {
                  let ListIcon = Icon[iconSize][iconName];
                  return <ListItem before={<ListIcon />} iconSize={iconSize} key={iconName}>{iconName}</ListItem>
                }) }
              </List>
            </Group>
          </Panel>
        )
      })

      return panels;
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          {this.getPanels()}
        </View>
      )
    }
  }

  <Example />
```

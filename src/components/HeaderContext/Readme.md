```
class Example extends React.Component {

  constructor () {
    this.state = {
      contextOpened: true,
      mode: 'all'
    }
    this.toggleContext = this.toggleContext.bind(this);
    this.select = this.select.bind(this);
  }

  toggleContext () {
    this.setState({ contextOpened: !this.state.contextOpened });
  }

  select (e) {
    const mode = e.currentTarget.dataset.mode;
    this.setState({ mode });
    requestAnimationFrame(this.toggleContext);
  }

  render () {

    return (
      <View activePanel="context">
        <Panel id="context">
          <PanelHeader
            left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
            right={<HeaderButton>{<Icon24Add />}</HeaderButton>}
          >
            <PanelHeaderContent aside={<Icon16Dropdown />} onClick={this.toggleContext}>
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <HeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon24Users />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill={colors.blue_300} /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon24Settings />}
                asideContent={this.state.mode === 'managed' ? <Icon24Done fill={colors.blue_300} /> : null}
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </HeaderContext>
        </Panel>
      </View>
    )
  }
}

<Example />
```

```jsx
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
            left={<PanelHeaderButton>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</PanelHeaderButton>}
            right={<PanelHeaderButton>{<Icon24Add />}</PanelHeaderButton>}
          >
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeader>
          <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon24Users />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon24Settings />}
                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </PanelHeaderContext>
        </Panel>
      </View>
    )
  }
}

<Example />
```

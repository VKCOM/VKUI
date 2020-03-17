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
      <View activePanel="context" header={false}>
        <Panel id="context" separator={false}>
          <PanelHeaderSimple
            left={<PanelHeaderBack />}
            right={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>}
          >
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
              Communities
            </PanelHeaderContent>
          </PanelHeaderSimple>
          <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon28UsersOutline />}
                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon28SettingsOutline />}
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

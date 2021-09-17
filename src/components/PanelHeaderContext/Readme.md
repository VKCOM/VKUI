```jsx
const Example = withPlatform(withAdaptivity(
class ExampleClass extends React.Component {
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
    const hasHeader = this.props.platform !== VKCOM;
    const isDesktop = this.props.viewWidth >= ViewWidth.SMALL_TABLET;

    return (
      <SplitLayout
        style={{ justifyContent: "center" }}
        header={hasHeader && <PanelHeader separator={false} />}
      >
        <SplitCol
          animate={!isDesktop}
          spaced={isDesktop}
          width={isDesktop ? '560px' : '100%'}
          maxWidth={isDesktop ? '560px' : '100%'}
        >
          <View activePanel="context2">
            <Panel id="context2">
              <PanelHeader
                left={<PanelHeaderBack />}
                right={<PanelHeaderButton><Icon28AddOutline /></PanelHeaderButton>}
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
                    before={<Icon28UsersOutline />}
                    after={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                    onClick={this.select}
                    data-mode="all"
                  >
                    Communities
                  </Cell>
                  <Cell
                    before={<Icon28SettingsOutline />}
                    after={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                    onClick={this.select}
                    data-mode="managed"
                  >
                    Managed Communities
                  </Cell>
                </List>
              </PanelHeaderContext>
              <Group>
                <div style={{ height: 300 }} />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    )
  }
}, { viewWidth: true }));

<Example />
```

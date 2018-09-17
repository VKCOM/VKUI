Визуальная имитация компонента Select.

```
  class Example extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        country: '',
        activeView: 'profile'
      }
    }

    render () {
      return (
        <Root activeView={this.state.activeView}>
          <View activePanel="profile" id="profile">
            <Panel id="profile" theme="white">
              <PanelHeader>
                Профиль
              </PanelHeader>
              <FormLayout>
                <SelectMimicry
                  top="Выберите страну"
                  placeholder="Не выбрана"
                  onClick={() => this.setState({ activeView: 'countries' })}
                >{this.state.country}</SelectMimicry>
              </FormLayout>
            </Panel>
          </View>
          <View activePanel="countries" id="countries">
            <Panel id="countries">
              <PanelHeader>
                Выбор страны
              </PanelHeader>
              <Group>
                <List>
                  <Cell
                    onClick={() => this.setState({ country: 'Россия', activeView: 'profile' })}
                    asideContent={this.state.country === 'Россия' ? <Icon24Done fill={colors.blue_300} /> : null}
                  >
                    Россия
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: 'Италия', activeView: 'profile' })}
                    asideContent={this.state.country === 'Италия' ? <Icon24Done fill={colors.blue_300} /> : null}
                  >
                    Италия
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: 'Англия', activeView: 'profile' })}
                    asideContent={this.state.country === 'Англия' ? <Icon24Done fill={colors.blue_300} /> : null}
                  >
                    Англия
                  </Cell>
                </List>
              </Group>
            </Panel>
          </View>
        </Root>
      )
    }
  }

  <Example />
```

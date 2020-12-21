Визуальная имитация компонента [NativeSelect](#!/NativeSelect). У него нет свойства `value`, а `children`
вместо массива `options` принимает любой `ReactNode`, отображая его без изменений. Используется внутри
[CustomSelect](#!/CustomSelect)

```jsx
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
            <Panel id="profile">
              <PanelHeader>
                Профиль
              </PanelHeader>
              <Group>
                <FormItem top="Выберите страну">
                  <SelectMimicry
                    placeholder="Не выбрана"
                    onClick={() => this.setState({ activeView: 'countries' })}
                  >{this.state.country}</SelectMimicry>
                </FormItem>
                <FormItem top="Выберите город">
                  <SelectMimicry
                    placeholder="Не выбран"
                    disabled
                  />
                </FormItem>
              </Group>
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
                    after={this.state.country === 'Россия' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Россия
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: 'Италия', activeView: 'profile' })}
                    after={this.state.country === 'Италия' ? <Icon24Done fill="var(--accent)" /> : null}
                  >
                    Италия
                  </Cell>
                  <Cell
                    onClick={() => this.setState({ country: 'Англия', activeView: 'profile' })}
                    after={this.state.country === 'Англия' ? <Icon24Done fill="var(--accent)" /> : null}
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

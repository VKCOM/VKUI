```jsx
  class Example extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
        activeTab1: 'recomendations',
        activeTab2: 'all',
        activeTab3: 'all',
        activeTab4: 'dial',
        activeTab5: 'events',
        activeTab6: 'all',
      };
    }

    render () {

      return (
        <View activePanel="tabs">
          <Panel id="tabs">
            <PanelHeader
              noShadow
              left={
                <HeaderButton>
                  {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </HeaderButton>
              }
              right={
                <HeaderButton>
                  <Icon24Search />
                </HeaderButton>
              }
            >
              {osname === IOS ?
                <Tabs theme="header" style={{ width: 250 }}>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'music' })}
                    selected={this.state.activeTab1 === 'music'}
                  >
                    Музыка
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab1: 'recomendations' })}
                    selected={this.state.activeTab1 === 'recomendations'}
                  >
                    Рекомендации
                  </TabsItem>
                </Tabs> :
                'Tabs'
              }
            </PanelHeader>
            {osname === ANDROID &&
            <FixedLayout vertical="top">
              <Tabs>
                <TabsItem
                  onClick={() => this.setState({ activeTab5: 'groups' })}
                  selected={this.state.activeTab5 === 'groups'}
                >176 сообществ</TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab5: 'events' })}
                  selected={this.state.activeTab5 === 'events'}
                >9 событий</TabsItem>
              </Tabs>
            </FixedLayout>
            }
            {osname === IOS &&
            <FixedLayout vertical="top">
              <HorizontalScroll>
                <Tabs theme="header" type="buttons">
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'all' })}
                    selected={this.state.activeTab6 === 'all'}
                  >
                    Все
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'users' })}
                    selected={this.state.activeTab6 === 'users'}
                  >
                    Люди
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab6: 'groups' })}
                    selected={this.state.activeTab6 === 'groups'}
                  >
                    Сообщества
                  </TabsItem>
                </Tabs>
              </HorizontalScroll>
            </FixedLayout>
            }
            {osname === IOS &&
            <Group style={{ marginTop: 60 }}>
              <Tabs>
                <TabsItem
                  onClick={() => this.setState({ activeTab4: 'dial' })}
                  selected={this.state.activeTab4 === 'dial'}
                >
                  Диалоги
                </TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab4: 'messages' })}
                  selected={this.state.activeTab4 === 'messages'}
                >
                  Сообщения
                </TabsItem>
              </Tabs>
            </Group>
            }
            {osname === IOS &&
            <Group title="Вкладки-кнопки">
              <Tabs type="buttons">
                <TabsItem
                  onClick={() => this.setState({ activeTab2: 'all' })}
                  selected={this.state.activeTab2 === 'all'}
                >
                  Все записи
                </TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab2: 'user' })}
                  selected={this.state.activeTab2 === 'user'}
                >
                  Записи Павла
                </TabsItem>
              </Tabs>
            </Group>
            }
            {osname === IOS &&
            <Group title="Много кнопок" description="В случае, когда вкладки не помещаются, оберните Tabs в HorizontalScroll">
              <HorizontalScroll>
                <Tabs type="buttons">
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'all' })}
                    selected={this.state.activeTab3 === 'all'}
                  >
                    Все записи
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'user' })}
                    selected={this.state.activeTab3 === 'user'}
                  >
                    Записи Павла
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'inter' })}
                    selected={this.state.activeTab3 === 'inter'}
                  >
                    Сначала интересные
                  </TabsItem>
                  <TabsItem
                    onClick={() => this.setState({ activeTab3: 'top' })}
                    selected={this.state.activeTab3 === 'top'}
                  >
                    Топ 10 интересных
                  </TabsItem>
                </Tabs>
              </HorizontalScroll>
            </Group>
            }
            {osname === IOS &&
            <FixedLayout vertical="bottom">
              <Tabs>
                <TabsItem
                  onClick={() => this.setState({ activeTab5: 'groups' })}
                  selected={this.state.activeTab5 === 'groups'}
                >176 сообществ</TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab5: 'events' })}
                  selected={this.state.activeTab5 === 'events'}
                >9 событий</TabsItem>
              </Tabs>
            </FixedLayout>
            }
          </Panel>
        </View>
      )
    }
  }

  <Example />
```

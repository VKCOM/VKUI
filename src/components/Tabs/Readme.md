```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "panel1",
      contextOpened: false,
      mode: "all",
      activeTab1: "recomendations",
      activeTab2: "music",
      activeTab3: "news",
      activeTab4: "all",
      activeTab5: "all",
    };

    this.select = this.select.bind(this);
  }

  select(e) {
    const mode = e.currentTarget.dataset.mode;
    this.setState({ mode, contextOpened: false });
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="panel1">
          <PanelHeader
            left={
              <PanelHeaderButton>
                <Icon28CameraOutline />
              </PanelHeaderButton>
            }
            right={
              <PanelHeaderButton>
                <Icon28AddOutline />
              </PanelHeaderButton>
            }
            separator={this.props.sizeX === SizeType.REGULAR}
          >
            <Tabs>
              <TabsItem
                onClick={() => {
                  if (this.state.activeTab1 === "news") {
                    this.setState({ contextOpened: !this.state.contextOpened });
                  }
                  this.setState({ activeTab1: "news" });
                }}
                selected={this.state.activeTab1 === "news"}
                after={
                  <Icon16Dropdown
                    style={{
                      transform: `rotate(${
                        this.state.contextOpened ? "180deg" : "0"
                      }) translateY(1px)`,
                    }}
                  />
                }
              >
                Новости
              </TabsItem>
              <TabsItem
                onClick={() => {
                  this.setState({
                    activeTab1: "recomendations",
                    contextOpened: false,
                  });
                }}
                selected={this.state.activeTab1 === "recomendations"}
              >
                Интересное
              </TabsItem>
            </Tabs>
          </PanelHeader>
          <PanelHeaderContext
            opened={this.state.contextOpened}
            onClose={() => {
              this.setState({ contextOpened: false });
            }}
          >
            <List>
              <Cell
                before={<Icon28UsersOutline />}
                after={
                  this.state.mode === "all" ? (
                    <Icon24Done fill="var(--accent)" />
                  ) : null
                }
                onClick={this.select}
                data-mode="all"
              >
                Communities
              </Cell>
              <Cell
                before={<Icon28SettingsOutline />}
                after={
                  this.state.mode === "managed" ? (
                    <Icon24Done fill="var(--accent)" />
                  ) : null
                }
                onClick={this.select}
                data-mode="managed"
              >
                Managed Communities
              </Cell>
            </List>
          </PanelHeaderContext>
          <Group>
            <CellButton
              onClick={() => this.setState({ activePanel: "panel2" })}
            >
              Под шапкой
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            left={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel1" })}
              />
            }
            separator={this.props.sizeX === SizeType.REGULAR}
          >
            Музыка
          </PanelHeader>
          <Group>
            <Tabs>
              <TabsItem
                onClick={() => this.setState({ activeTab2: "music" })}
                selected={this.state.activeTab2 === "music"}
              >
                Моя музыка
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab2: "recomendations" })}
                selected={this.state.activeTab2 === "recomendations"}
              >
                Рекомендации
              </TabsItem>
            </Tabs>
            <CellButton
              onClick={() => this.setState({ activePanel: "panel3" })}
            >
              Со скроллом
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader
            left={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel2" })}
              />
            }
            separator={this.props.sizeX === SizeType.REGULAR}
          >
            Новости
          </PanelHeader>
          <Group>
            <Tabs>
              <HorizontalScroll>
                <TabsItem
                  onClick={() => this.setState({ activeTab3: "news" })}
                  selected={this.state.activeTab3 === "news"}
                >
                  Лента
                </TabsItem>
                <TabsItem
                  onClick={() =>
                    this.setState({ activeTab3: "recomendations" })
                  }
                  selected={this.state.activeTab3 === "recomendations"}
                >
                  Рекомендации
                </TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab3: "friends" })}
                  selected={this.state.activeTab3 === "friends"}
                >
                  Друзья
                </TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab3: "photos" })}
                  selected={this.state.activeTab3 === "photos"}
                >
                  Фотографии
                </TabsItem>
                <TabsItem
                  onClick={() => this.setState({ activeTab3: "groups" })}
                  selected={this.state.activeTab3 === "groups"}
                >
                  Сообщества
                </TabsItem>
              </HorizontalScroll>
            </Tabs>
            <CellButton
              onClick={() => this.setState({ activePanel: "panel4" })}
            >
              Табы-кнопки
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel4">
          <PanelHeader
            left={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel2" })}
              />
            }
          >
            Кнопки
          </PanelHeader>
          <Group>
            <Tabs mode="buttons">
              <TabsItem
                onClick={() => this.setState({ activeTab4: "all" })}
                selected={this.state.activeTab4 === "all"}
              >
                Все записи
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab4: "user" })}
                selected={this.state.activeTab4 === "user"}
              >
                Записи Павла
              </TabsItem>
            </Tabs>
            <CellButton
              onClick={() => this.setState({ activePanel: "panel5" })}
            >
              Segmented (iOS only)
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel5">
          <PanelHeader
            left={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "panel4" })}
              />
            }
            separator={this.props.sizeX === SizeType.REGULAR}
          >
            Лента
          </PanelHeader>
          <Group>
            <Tabs mode="segmented">
              <TabsItem
                onClick={() => this.setState({ activeTab5: "all" })}
                selected={this.state.activeTab5 === "all"}
              >
                Все записи
              </TabsItem>
              <TabsItem
                onClick={() => this.setState({ activeTab5: "user" })}
                selected={this.state.activeTab5 === "user"}
                after={<Counter>3</Counter>}
              >
                Записи Павла
              </TabsItem>
            </Tabs>
          </Group>
        </Panel>
      </View>
    );
  }
}

const AdaptivityExample = withAdaptivity(Example, { sizeX: true });

<AdaptivityExample />;
```

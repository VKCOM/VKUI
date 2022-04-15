Практически всегда содержимое панели должно начинаться с [`Separator`](#!/Separator),
поэтому он рисуется в `PanelHeader` по-умолчанию.

Исключения, в которых разделитель в начале панели не нужен:

- В `PanelHeader` рисуется [`Search`](#!/Search).
- После `PanelHeader` рисуется [`Search`](#!/Search).
- В `PanelHeader` рисуются [`Tabs`](#!/Tabs).

В таких случаях передавайте в `PanelHeader` свойство `separator={false}`.

> **Важно**
>
> Правая часть шапки будет скрыта, если в [`ConfigProvider`](#/ConfigProvider) передан `webviewType={WebviewType.VKAPPS}`.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPanel: "panel1",
      modalPanel: "modal-panel1",
      activeView: "main",
    };
  }

  render() {
    const { sizeX, platform } = this.props;
    return (
      <Root activeView={this.state.activeView}>
        <View id="main" activePanel={this.state.mainPanel}>
          <Panel id="panel1">
            <PanelHeader
              left={<PanelHeaderClose />}
              right={<Avatar size={36} />}
            >
              Стартовый экран
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ mainPanel: "panel2" })}
              >
                Вторая панель
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel2">
            <PanelHeader
              left={
                <PanelHeaderBack
                  onClick={() => this.setState({ mainPanel: "panel1" })}
                  label={platform === VKCOM ? "Назад" : undefined}
                />
              }
              right={
                <PanelHeaderButton
                  aria-label="Изображения"
                  label={
                    <Counter
                      size="s"
                      mode="prominent"
                      aria-label="Обновлений: "
                    >
                      21
                    </Counter>
                  }
                >
                  <Icon28PictureOutline />
                </PanelHeaderButton>
              }
            >
              Вторая панель
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ mainPanel: "panel3" })}
              >
                Несколько иконок
              </CellButton>
            </Group>
          </Panel>
          <Panel id="panel3">
            <PanelHeader
              left={
                <PanelHeaderBack
                  onClick={() => this.setState({ mainPanel: "panel2" })}
                />
              }
              right={
                <React.Fragment>
                  <PanelHeaderButton
                    aria-label="Настройки"
                    label={
                      <Counter
                        size="s"
                        mode="prominent"
                        aria-label="Новые настройки: "
                      >
                        3
                      </Counter>
                    }
                  >
                    <Icon28SettingsOutline />
                  </PanelHeaderButton>
                  <PanelHeaderButton
                    aria-label="Уведомления"
                    label={
                      <Counter
                        size="s"
                        mode="prominent"
                        aria-label="Уведомлений: "
                      >
                        2
                      </Counter>
                    }
                  >
                    <Icon28Notifications />
                  </PanelHeaderButton>
                </React.Fragment>
              }
            >
              Две иконки
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ activeView: "modal" })}
              >
                Модальное окно
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View id="modal" activePanel={this.state.modalPanel}>
          <Panel id="modal-panel1">
            <PanelHeader
              left={
                <PanelHeaderButton
                  onClick={() => this.setState({ activeView: "main" })}
                >
                  Отмена
                </PanelHeaderButton>
              }
              right={
                <PanelHeaderButton
                  disabled
                  primary
                  onClick={() => this.setState({ activeView: "main" })}
                >
                  Готово
                </PanelHeaderButton>
              }
            >
              Модальное окно
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ modalPanel: "modal-panel2" })}
              >
                Сложный контент
              </CellButton>
            </Group>
          </Panel>
          <Panel id="modal-panel2">
            <PanelHeader
              left={
                <PanelHeaderBack
                  onClick={() => this.setState({ modalPanel: "modal-panel1" })}
                  label={platform === VKCOM ? "Назад" : undefined}
                />
              }
            >
              <PanelHeaderContent
                before={<Avatar size={36} />}
                status="Был в сети вчера"
              >
                Влад Анесов
              </PanelHeaderContent>
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ modalPanel: "modal-panel3" })}
              >
                Поиск
              </CellButton>
            </Group>
          </Panel>
          <Panel id="modal-panel3">
            <PanelHeader
              separator={platform === VKCOM || sizeX === SizeType.REGULAR}
              left={
                platform !== VKCOM && (
                  <PanelHeaderBack
                    onClick={() =>
                      this.setState({ modalPanel: "modal-panel2" })
                    }
                  />
                )
              }
            >
              <Search />
            </PanelHeader>
            <Group>
              <CellButton
                onClick={() => this.setState({ modalPanel: "modal-panel4" })}
              >
                Табы
              </CellButton>
              {platform === VKCOM && (
                <CellButton
                  onClick={() => this.setState({ modalPanel: "modal-panel2" })}
                >
                  Сложный контент
                </CellButton>
              )}
            </Group>
          </Panel>
          <Panel id="modal-panel4">
            <PanelHeader
              separator={platform === VKCOM || sizeX === SizeType.REGULAR}
              left={
                <PanelHeaderBack
                  onClick={() => this.setState({ modalPanel: "modal-panel3" })}
                />
              }
            >
              <Tabs>
                <TabsItem selected>Новости</TabsItem>
                <TabsItem>Интересное</TabsItem>
              </Tabs>
            </PanelHeader>
          </Panel>
        </View>
      </Root>
    );
  }
}

const ExampleWithPlatform = withAdaptivity(withPlatform(Example), {
  sizeX: true,
});

<ExampleWithPlatform />;
```

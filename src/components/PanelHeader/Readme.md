Практически всегда содержимое панели должно начинаться с [`Separator`](#!/Separator),
поэтому он рисуется в `PanelHeader` по-умолчанию.

Исключения, в которых разделитель в начале панели не нужен:

- В `PanelHeader` рисуется [`Search`](#!/Search).
- После `PanelHeader` рисуется [`Search`](#!/Search).
- В `PanelHeader` рисуются [`Tabs`](#!/Tabs).

В таких случаях передавайте в `PanelHeader` свойство `separator={false}`.

> **Важно**
>
> Правая часть шапки скрыта по умолчанию, если требуется показать её, передайте в [`ConfigProvider`](https://vkcom.github.io/VKUI/#/ConfigProvider) свойство `webviewType={WebviewType.INTERNAL}`.

```jsx { "props": { "webviewType": true } }
const Example = () => {
  const platform = usePlatform();

  const [mainPanel, setMainPanel] = useState("panel1");
  const [modalPanel, setModalPanel] = useState("modal-panel1");
  const [activeView, setActiveView] = useState("main");

  return (
    <Root activeView={activeView}>
      <View id="main" activePanel={mainPanel}>
        <Panel id="panel1">
          <PanelHeader
            before={<PanelHeaderClose />}
            after={<Avatar size={36} />}
          >
            Стартовый экран
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setMainPanel("panel2")}>
              Вторая панель
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => setMainPanel("panel1")}
                label={platform === Platform.VKCOM ? "Назад" : undefined}
              />
            }
            after={
              <PanelHeaderButton
                aria-label="Изображения"
                label={
                  <Counter size="s" mode="prominent" aria-label="Обновлений: ">
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
            <CellButton onClick={() => setMainPanel("panel3")}>
              Несколько иконок
            </CellButton>
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader
            before={<PanelHeaderBack onClick={() => setMainPanel("panel2")} />}
            after={
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
            <CellButton onClick={() => setActiveView("modal")}>
              Модальное окно
            </CellButton>
          </Group>
        </Panel>
      </View>
      <View id="modal" activePanel={modalPanel}>
        <Panel id="modal-panel1">
          <PanelHeader
            before={
              <PanelHeaderButton onClick={() => setActiveView("main")}>
                Отмена
              </PanelHeaderButton>
            }
            after={
              <PanelHeaderButton
                disabled
                primary
                onClick={() => setActiveView("main")}
              >
                Готово
              </PanelHeaderButton>
            }
          >
            Модальное окно
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setModalPanel("modal-panel2")}>
              Сложный контент
            </CellButton>
          </Group>
        </Panel>
        <Panel id="modal-panel2">
          <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => setModalPanel("modal-panel1")}
                label={platform === Platform.VKCOM ? "Назад" : undefined}
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
            <CellButton onClick={() => setModalPanel("modal-panel3")}>
              Поиск
            </CellButton>
          </Group>
        </Panel>
        <Panel id="modal-panel3">
          <PanelHeader
            before={
              platform !== Platform.VKCOM && (
                <PanelHeaderBack
                  onClick={() => setModalPanel("modal-panel2")}
                />
              )
            }
          >
            <Search />
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setModalPanel("modal-panel4")}>
              Табы
            </CellButton>
            {platform === Platform.VKCOM && (
              <CellButton onClick={() => setModalPanel("modal-panel2")}>
                Сложный контент
              </CellButton>
            )}
          </Group>
        </Panel>
        <Panel id="modal-panel4">
          <PanelHeader
            before={
              <PanelHeaderBack onClick={() => setModalPanel("modal-panel3")} />
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
};

<Example />;
```

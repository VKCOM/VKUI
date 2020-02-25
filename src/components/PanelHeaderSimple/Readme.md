`PanelHeaderSimple` — это то, что в 4-й версии заменит `PanelHeader`. У `PanelHeader` есть ряд проблем:

1. Части этого компонента рендерятся с помощью порталов в ближайший `View`, что делает невозможным SSR и замедляет
отрисовку и перерисовку компонента.
2. Невозможно было в пределах одного `View` мешать панели с шапкой и без шапки.
3. Большая вложенность вёрстки.
4. Наличием или отсутствием разделителя управляет `Panel`, было бы удобнее, если бы это делал `PanelHeader`

У `PanelHeaderSimple` этих проблем нет. Он рендерится как обычный компонент, имеет простую структуру, быстро рисуется и
поддерживает SSR.

### Сепаратор после шапки

Практически всегда содержимое панели должно начинаться с [`Separator`](https://vkcom.github.io/vkui-styleguide/#!/Separator),
 поэтому он рисуется в PanelHeaderSimple по-умолчанию.

Исключения, в которых разделитель в начале панели не нужен:
* В `PanelHeaderSimple` рисуется [`Search`](https://vkcom.github.io/vkui-styleguide/#!/Search).
* После `PanelHeaderSimple` рисуется [`Search`](https://vkcom.github.io/vkui-styleguide/#!/Search).
* В `PanelHeaderSimple` рисуются [`Tabs`](https://vkcom.github.io/vkui-styleguide/#!/Tabs).

В таких случаях передавайте в `PanelHeaderSimple` свойство `separator={false}`.

### Переход от PanelHeader к PanelHeaderSimple

1. Во `<View />` добавляем `header={false}`
2. В `<Panel />` добавляем `separator={false}`. Это свойство теперь есть у `PanelHeaderSimple`
3. Заменяем `<PanelHeader />` на `<PanelHeaderSimple />`
4. Вы крутой :)

В 4-й версии библиотеки первых двух шагов не будет, PanelHeaderSimple переименуется в PanelHeader, а текущий PanelHeader
будет удален.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mainPanel: 'panel1',
      modalPanel: 'modal-panel1',
      activeView: 'main'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View id="main" header={false} activePanel={this.state.mainPanel}>
          <Panel separator={false} id="panel1">
            <PanelHeaderSimple left={<PanelHeaderClose />}>
              Стартовый экран
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ mainPanel: 'panel2' }) }>
                Вторая панель
              </CellButton>
            </Group>
          </Panel>
          <Panel separator={false} id="panel2">
            <PanelHeaderSimple
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel1' })} />}
              addon={<PanelHeaderButton onClick={() => this.setState({ mainPanel: 'panel1' })}>Назад</PanelHeaderButton>}
              right={<PanelHeaderButton><Icon28PictureOutline/></PanelHeaderButton>}
            >
              Вторая панель
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ mainPanel: 'panel3' }) }>
                Несколько иконок
              </CellButton>
            </Group>
          </Panel>
          <Panel separator={false} id="panel3">
            <PanelHeaderSimple
              left={<PanelHeaderBack onClick={() => this.setState({ mainPanel: 'panel2' })}/>}
              addon={<PanelHeaderButton onClick={() => this.setState({ mainPanel: 'panel2' })}>Назад</PanelHeaderButton>}
              right={
                <React.Fragment>
                  <PanelHeaderButton><Icon28SettingsOutline/></PanelHeaderButton>
                  <PanelHeaderButton><Icon28Notifications/></PanelHeaderButton>
                </React.Fragment>
              }
            >
              Две иконки
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </CellButton>
            </Group>
          </Panel>
        </View>
        <View id="modal" header={false} activePanel={this.state.modalPanel}>
          <Panel separator={false} id="modal-panel1">
            <PanelHeaderSimple
              left={<PanelHeaderClose onClick={() => this.setState({ activeView: 'main' })} />}
              right={<PanelHeaderSubmit disabled primary onClick={() => this.setState({ activeView: 'main' })} />}
            >
              Модальное окно
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel2' }) }>
                Сложный контент
              </CellButton>
            </Group>
          </Panel>
          <Panel separator={false} id="modal-panel2">
            <PanelHeaderSimple left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel1' })} />}>
              <PanelHeaderContent before={<Avatar size={36} />} status="Был в сети вчера">
                Влад Анесов
              </PanelHeaderContent>
            </PanelHeaderSimple>
            <Group>
              <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel3' }) }>
                Поиск
              </CellButton>
            </Group>
          </Panel>
          <Panel separator={false} id="modal-panel3">
            <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel2' })} />}>
              <Search />
            </PanelHeaderSimple>
            <CellButton onClick={ () => this.setState({ modalPanel: 'modal-panel4' }) }>
              Табы
            </CellButton>
          </Panel>
          <Panel separator={false} id="modal-panel4">
            <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ modalPanel: 'modal-panel3' })} />}>
              <Tabs>
                <TabsItem selected>Новости</TabsItem>
                <TabsItem>Интересное</TabsItem>
              </Tabs>
            </PanelHeaderSimple>
          </Panel>
        </View>
      </Root>
    )
  }
}

<Example/>
```

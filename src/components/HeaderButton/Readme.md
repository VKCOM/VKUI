Компонент для отрисовки кнопок в [PanelHeader](#panelheader). Внутрь компонента передается либо иконка, либо текст. Текстовые кнопки
чаще всего используются в iOS, но есть исключения для Android.

Шапки iOS и Android достаточно сильно отличаются внешне, поэтому описание будет разделено на две части.

**Android**

Кнопки могут быть переданы в `left` или `right` свойства `header`:

```jsx static
  <PanelHeader
    left={<HeaderButton><Icon24Back/></HeaderButton>}
    right={<HeaderButton><Icon24Search/></HeaderButton>}
  />
```

Если нужно несколько кнопок справа или слева, то передаем массив:

```jsx static
  <PanelHeader
    right={[
      <HeaderButton key="search"><Icon24Search/></HeaderButton>,
      <HeaderButton key="add"><Icon24Add/></HeaderButton>
    ]}
  />
```

**iOS**

Основное отличие – это составность левой кнопки. Она может состоять из иконки и текста. Пример:

```jsx static
  <PanelHeader
    addon={<HeaderButton>Назад</HeaderButton>}
    left={<HeaderButton>{osname === IOS <Icon28Chevron_back/> ? <Icon24Back/>}</HeaderButton>}
  />
```

В примере выше появляется новое свойство `addon`, актуальное только для iOS версии.

```
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'panel1',
      activeView: 'main'
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View id="main" activePanel={this.state.activePanel}>
          <Panel id="panel1">
            <PanelHeader left={<HeaderButton>{osname === IOS ? 'отмена' : <Icon24Cancel/>}</HeaderButton>}>
              Стартовый экран
            </PanelHeader>
            <Group>
              <Div>
                Если приложение открывается как модальное окно, то в качестве левой кнопки принято кнопку "отмена".
                <br/>
                <br/>
                В противном случае показывается кнопка "назад".
              </Div>
            </Group>
            <Group>
              <Button type="cell" onClick={ () => this.setState({ activePanel: 'panel2' }) }>
                Больше примеров
              </Button>
            </Group>
          </Panel>
          <Panel id="panel2">
            <PanelHeader
              left={<HeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}>{osname === IOS ? <Icon28Chevron_back/> : <Icon24Back/>}</HeaderButton>}
              addon={<HeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}>назад</HeaderButton>}
              right={<HeaderButton onClick={() => {}}><Icon24Story/></HeaderButton>}
            >
              Заголовок
            </PanelHeader>
            <Group>
              <Button type="cell" onClick={ () => this.setState({ activePanel: 'panel3' }) }>
                Несколько иконок
              </Button>
            </Group>
          </Panel>
          <Panel id="panel3">
            <PanelHeader
              left={<HeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}>{osname === IOS ? <Icon28Chevron_back/> : <Icon24Back/>}</HeaderButton>}
              addon={<HeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}>назад</HeaderButton>}
              right={[
                <HeaderButton key="add" onClick={() => {}}><Icon24Add/></HeaderButton>,
                <HeaderButton key="more" onClick={() => {}}><Icon24More_vertical/></HeaderButton>
              ]}
            >
              Две иконки
            </PanelHeader>
            <Group>
              <Button type="cell" onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </Button>
            </Group>
          </Panel>
        </View>
        <View id="modal" header activePanel="modal-panel">
          <Panel id="modal-panel">
            <PanelHeader
              left={<HeaderButton onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Отмена' : <Icon24Cancel/>}</HeaderButton>}
              right={<HeaderButton primary onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Готово' : <Icon24Done/>}</HeaderButton>}
            >
              Модальное окно
            </PanelHeader>
          </Panel>
        </View>
      </Root>
    )
  }
}

<Example/>
```

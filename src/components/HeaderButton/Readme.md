Компонент для отрисовки кнопок в шапке ScrollView. Внутрь компонента передается либо иконка, либо текст. Текстовые кнопки
чаще всего используются в iOS, но есть исключения для Android.

Иконки должны быть выкрашены в белый цвет:

```jsx static
  <ScrollView 
    header={{ 
      left: <HeaderButton><Icon24Back fill="#fff"/></HeaderButton> 
    }}
  />  
```

Шапки iOS и Android достаточно сильно отличаются внешне, поэтому описание будет разделено на две части.

**Android**

Кнопки могут быть переданы в `left` или `right` свойства `header`:

```jsx static
  <ScrollView 
    header={{ 
      left: <HeaderButton><Icon24Back fill="#fff"/></HeaderButton>, 
      right: <HeaderButton><Icon24Search fill="#fff"/></HeaderButton> 
    }}
  />  
```

Если нужно несколько кнопок справа или слева, то передаем массив:

```jsx static
  <ScrollView 
    header={{  
      right: [
        <HeaderButton key="search"><Icon24Search fill="#fff"/></HeaderButton>, 
        <HeaderButton key="add"><Icon24Add fill="#fff"/></HeaderButton>
      ] 
    }}
  />
```

**iOS**

Основное отличие – это составность левой кнопки. Она может состоять из иконки и текста. Пример:

```jsx static
  <ScrollView 
    header={{  
      left: <HeaderButton>Back</HeaderButton>,
      icon: <HeaderButton><Icon28Chevron_back fill="#fff"/></HeaderButton> 
    }}
  />
```

**Кнопка "назад"**

```jsx static
  <ScrollView
    header={{
      left: <HeaderButton>{osname === IOS ? 'Cancel' : <Icon24Back fill="#fff"/>}</HeaderButton>
      icon: osname === IOS && <HeaderButton><Icon28Chevron_back fill="#fff"/><?HeaderButton>
    }}
  />
```

**Кнопка "закрыть"**

```jsx static
  <ScrollView
    header={{
      left: <HeaderButton>{osname === IOS ? 'Close' : <Icon24Cancel fill="#fff"/>}</HeaderButton>
    }}
  />
```

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
        <View id="main" header activePanel={this.state.activePanel}>
          <ScrollView 
            id="panel1" 
            header={{ 
              title: "Стартовый экран",
              left: <HeaderButton>{osname === IOS ? 'Close' : <Icon24Cancel fill="#fff"/>}</HeaderButton> 
            }}
          >
            <Group>
              <Pane>
                Если приложение открывается как модальное окно, то в качестве левой кнопки принято кнопку "закрыть".
                <br />
                <br />
                В противном случае показывается кнопка "назад". 
              </Pane>
            </Group>
            <Group>
              <Button onClick={ () => this.setState({ activePanel: 'panel2' }) }>
                Больше примеров
              </Button>
            </Group>
          </ScrollView>
          <ScrollView
            id="panel2" 
            header={{ 
              title: "Заголовок",
              icon: osname === IOS && <HeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}><Icon28Chevron_back fill="#fff"/></HeaderButton>,
              left:  <HeaderButton onClick={() => this.setState({ activePanel: 'panel1' })}>{osname === IOS ? 'Back' : <Icon24Back fill="#fff"/>}</HeaderButton>,
              right: <HeaderButton onClick={() => {}}><Icon24Story fill="#fff"/></HeaderButton> 
            }} 
          >
            <Group>
              <Button onClick={ () => this.setState({ activePanel: 'panel3' }) }>
                Несколько иконок
              </Button>
            </Group>
          </ScrollView>
          <ScrollView
            id="panel3" 
            header={{ 
              title: "Две иконки",
              icon: osname === IOS && <HeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}><Icon28Chevron_back fill="#fff"/></HeaderButton>,
              left: osname === ANDROID && <HeaderButton onClick={() => this.setState({ activePanel: 'panel2' })}><Icon24Back fill="#fff"/></HeaderButton>,
              right: [
                <HeaderButton key="add" onClick={() => {}}><Icon24Add fill="#fff"/></HeaderButton>,
                <HeaderButton key="more" onClick={() => {}}><Icon24More_vertical fill="#fff"/></HeaderButton>
              ] 
            }}
          >
            <Group>
              <Button onClick={ () => this.setState({ activeView: 'modal' }) }>
                Модальное окно
              </Button>
            </Group>
          </ScrollView>
        </View>
        <View id="modal" header activePanel="modal-panel">
          <ScrollView 
            id="modal-panel" 
            header={{
              left: <HeaderButton onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Отмена' : <Icon24Cancel fill="#fff"/>}</HeaderButton>,
              right: <HeaderButton primary onClick={() => this.setState({ activeView: 'main' })}>{osname === IOS ? 'Готово' : <Icon24Done fill="#fff"/>}</HeaderButton>,  
              title: 'Модальное окно' 
            }} 
          />
        </View>
      </Root>
    )
  }
}

<Example />
```

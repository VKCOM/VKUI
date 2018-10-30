```jsx
  class Example extends React.Component {

    constructor() {
      this.state = {
        activePanel: 'list',
        removeList: ['Михаил Андриевский', 'Вадим Дорохов', 'Саша Колобов'],
        draggingList: ['Say', 'Hello', 'To', 'My', 'Little', 'Friend']
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              Ячейки
            </PanelHeader>

            <Group title="Простейший пример">
              <List>
                <Cell>Пятница</Cell>
                <Cell>Суббота</Cell>
                <Cell>Воскресение</Cell>
              </List>
            </Group>

            <Group title="Переходы">
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Учетная запись</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Основные</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Приватность</Cell>
              </List>
            </Group>

            <Group title="Индикатор">
              <List>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="При использовании">Геолокация</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Всегда">Автопроигрывание медиа</Cell>
                <Cell expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Выключены">Стикеры</Cell>
              </List>
            </Group>

            <Group title="Многострочность">
              <List>
                <Cell multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</Cell>
                <Cell multiline>The Avalanches</Cell>
              </List>
            </Group>

            <Group title="Подпись">
              <List>
                <Cell description="Depeche Mode">Where’s the Revolution</Cell>
                <Cell description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</Cell>
              </List>
            </Group>

            <Group title="Большая ячейка">
              <List>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Друзья в Facebook"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Семён Ефимов</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="29 лет, Санкт-Петербург"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Александр Попов</Cell>
                <Cell
                  before={<Avatar size={72} />}
                  size="l"
                  description="Команда ВКонтакте"
                  asideContent={<Icon24MoreHorizontal />}
                  bottomContent={
                    <div style={{ display: 'flex' }}>
                      <Button size="m">Добавить</Button>
                      <Button size="m" level="secondary" style={{ marginLeft: 8 }}>Скрыть</Button>
                    </div>
                  }
                >
                  Екатерина Скобейко</Cell>
              </List>
            </Group>

            <Group title="Иконки">
              <List>
                <Cell before={<Icon24About />}>Информация</Cell>
                <Cell before={<Icon24Services />}>Сервисы</Cell>
              </List>
            </Group>

            <Group title="Чекбоксы">
              <List>
                <Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</Cell>
                <Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</Cell>
                <Cell selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</Cell>
              </List>
            </Group>

            {this.state.removeList.length > 0 &&
              <Group title="Удаление">
                <List>
                  {this.state.removeList.map((item, index) => (
                    <Cell key={item} removable onRemove={() => {
                      this.setState({
                        removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
                      })
                    }}>{item}</Cell>
                  ))}
                </List>
              </Group>
            }
            
            {this.state.removeList.length > 0 &&
              <Group title="Перетаскивание">
                <List>
                  {this.state.draggingList.map((item) => (
                    <Cell key={item} draggable onDragFinish={({ from, to }) => {
                      const draggingList = [...this.state.draggingList];
                      draggingList.splice(from, 1);
                      draggingList.splice(to, 0, this.state.draggingList[from]);
                      this.setState({ draggingList });
                    }}>{item}</Cell>
                  ))}
                </List>
              </Group>
            }
          </Panel>
          <Panel id="nothing">
              <PanelHeader
                left={
                  <HeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
                    {osname === ANDROID ? <Icon24Back/> : <Icon28ChevronBack/>}
                  </HeaderButton>
                }
              >
                Ничего
              </PanelHeader>
            <div
              style={{
                padding: '100px 0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  color: 'gray',
                  textAlign: 'center'
                }}
              >
                Тут ничего нет<br />
                <span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Пошли обратно</span>
              </div>
            </div>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```

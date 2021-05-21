Группа – базовый компонент для группировки контента по смыслу.

```jsx
const MODAL_NAME = 'modal'

class App extends React.Component {
  constructor() {
    this.state = {
      isModalOpened: false
    }
  }

  renderGroup() {
    return (
    <>
      <Group>
        <Group mode="plain">
          <SimpleCell indicator="+7 ••• •• •• 96" before={<Icon28PhoneOutline />}>
            Номер телефона
          </SimpleCell>
          <SimpleCell indicator="g•••@gmail.com" before={<Icon28MailOutline />}>
            Email
          </SimpleCell>
        </Group>
        <Group mode="plain">
          <SimpleCell indicator="Обновлён 3 года назад" before={<Icon28KeyOutline />}>
            Пароль
          </SimpleCell>
          <SimpleCell indicator="Вкл." before={<Icon28CheckShieldDeviceOutline />}>
            Подтверждение входа
          </SimpleCell>
          <SimpleCell indicator="2" before={<Icon28DevicesOutline />}>
            Привязанные устройства
          </SimpleCell>
        </Group>
      </Group>

      <Group
        header={<Header>Последняя активность</Header>}
      >
        <SimpleCell 
          after={<IconButton aria-label="Подробнее"><Icon16MoreVertical /></IconButton>} 
          description="Санкт-Петербург, Россия" 
          before={<Avatar size={32} mode="app" />}
        >
          VK · Приложение для iPhone
        </SimpleCell>
        <SimpleCell 
          after={<IconButton aria-label="Подробнее"><Icon16MoreVertical /></IconButton>} 
          description="Санкт-Петербург, Россия" 
          before={<Avatar size={32} mode="app" />}
        >
          VK · Браузер Chrome для macOS
        </SimpleCell>
        <CellButton>Показать историю активности</CellButton>
        <CellButton mode="danger">Завершить все остальные сеансы</CellButton>
      </Group>
      
      <Group 
        header={<Header>Адреса</Header>}
        description="Для использования в мини-приложениях, Delivery Cub, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам."
      >
        <CellButton>Добавить домашний адрес</CellButton>
        <CellButton>Добавить рабочий адрес</CellButton>
      </Group> 
    </>   
    )  
  }

  render() {
    const modal = (
      <ModalRoot
        activeModal={this.state.isModalOpened ? MODAL_NAME : null}
        onClose={() => this.setState({ isModalOpened: false })}
      >
        <ModalPage
          id={MODAL_NAME}
          onClose={() => this.setState({ isModalOpened: false })}
          header={
            <ModalPageHeader
              left={this.props.platform !== IOS && <PanelHeaderClose onClick={() => this.setState({ isModalOpened: false })} />}
              right={this.props.platform === IOS && <PanelHeaderButton onClick={() => this.setState({ isModalOpened: false })}><Icon24Dismiss /></PanelHeaderButton>}
            >
              Group в модальном окне
            </ModalPageHeader>
          }
        >
          {this.renderGroup()}
        </ModalPage>
      </ModalRoot>
    );

    return (
      <View activePanel="group" modal={modal}>
        <Panel id="group">
          <PanelHeader>
            Group
          </PanelHeader>

          {this.renderGroup()}

          <Group header={<Header mode="secondary">Модальное окно с Group</Header>}>
            <SimpleCell onClick={() => this.setState({ isModalOpened: true })}>
              Открыть Group в модальном окне
            </SimpleCell>
          </Group>
        </Panel>
      </View>
    )
  }
}

const AppWithPlatform = withPlatform(App);


<AppWithPlatform />;
```

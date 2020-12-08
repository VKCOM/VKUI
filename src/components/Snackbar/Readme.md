`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахиванием вправо.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в список на странице добавился элемент.

После закрытия компонент вызывает обязательное свойство `onClose`, и вам необходимо убрать `Snackbar` со страницы.

```jsx
class SnackBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      snackbar: null,
      hasModal: false,
    };

    this.openBaseWithAction = this.openBaseWithAction.bind(this);
    this.openVertical = this.openVertical.bind(this);
    this.openWithAvatar = this.openWithAvatar.bind(this);
  }

  componentDidMount() {
    this.openBaseWithAction()
  }

  openBaseWithAction () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        duration={4000}
        onClose={() => this.setState({ snackbar: null })}
        action="Поделиться"
        onActionClick={() => this.setState({ text: 'Добавляем метку.' })}
        before={<Avatar size={24} style={{ background: 'var(--accent)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
        Ссылка скопирована
      </Snackbar>
    });
  }

  openVertical () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        action="Перейти в раздел «Понравилось»"
        onActionClick={() => this.setState({ text: 'Открыта подробная информация.' })}
        before={<Avatar size={24} style={{ background: 'var(--accent)' }}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
        Ссылка сохранена в закладки
      </Snackbar>
    });
  }

  openWithAvatar () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        onClose={() => this.setState({ snackbar: null })}
        onActionClick={() => this.setState({ text: 'Сообщение Ивану было отменено.' })}
        after={<Avatar src={getAvatarUrl('user_wayshev')} size={32} />}
      >
        Отправлено Ивану Барышеву
      </Snackbar>
    });
  }

  render() {
    const closeModal = () => this.setState({ hasModal: false });
    const modal = (
      <ModalRoot activeModal={this.state.hasModal ? 'modal' : null} onClose={closeModal}>
        <ModalPage
          id="modal"
          onClose={closeModal}
          header={
            <ModalPageHeader
              left={IS_PLATFORM_ANDROID && <PanelHeaderButton onClick={closeModal}><Icon24Cancel /></PanelHeaderButton>}
              right={IS_PLATFORM_IOS && <PanelHeaderButton onClick={closeModal}><Icon24Done /></PanelHeaderButton>}
            >Модалка</ModalPageHeader>
          }
        >
          <div style={{ height: '600px' }} />
        </ModalPage>
      </ModalRoot>
    );
    return (
      <View activePanel="example" modal={modal}>
        <Panel id="example">
          <PanelHeader>Snackbar</PanelHeader>
          <Group>
            <CellButton onClick={this.openBaseWithAction}>Уведомление с иконкой и кнопкой</CellButton>
            <CellButton onClick={this.openVertical}>Вертикальное расположение</CellButton>
            <CellButton onClick={this.openWithAvatar}>Уведомление с аватаркой</CellButton>
          </Group>

          <Group>
            <CellButton onClick={() => this.setState({ hasModal: true })}>Открыть модалку</CellButton>
          </Group>

          {this.state.text && <Group><Div>{this.state.text}</Div></Group>}
          {this.state.snackbar}
        </Panel>
      </View>
    )
  }
}

<SnackBarExample />
```

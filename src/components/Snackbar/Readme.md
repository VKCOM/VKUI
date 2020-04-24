`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахиванием вправо.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в список на странице добавился элемент.

После закрытия компонент вызывает обязательное свойство `onClose`, и вам необходимо убрать `Snackbar` со страницы.

```jsx

const orangeBackground = {
  backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)'
};

const blueBackground = {
  backgroundColor: 'var(--accent)'
};

class SnackBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      snackbar: null
    };

    this.openBase = this.openBase.bind(this);
    this.openBaseWithAction = this.openBaseWithAction.bind(this);

    this.openLongText = this.openLongText.bind(this);
    this.openWithAvatar = this.openWithAvatar.bind(this);
  }

  componentDidMount() {
    this.openBase()
  }

  openBase () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        before={<Avatar size={24} style={blueBackground}><Icon16Done fill="#fff" width={14} height={14} /></Avatar>}
      >
        Уведомления о подкастах включены
      </Snackbar>
    });
  }

  openBaseWithAction () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        onClose={() => this.setState({ snackbar: null })}
        action="Добавить метку"
        onActionClick={() => this.setState({ text: 'Добавляем метку.' })}
        before={<Avatar size={24} style={orangeBackground}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
      >
        Ссылка сохранена в закладки
      </Snackbar>
    });
  }

  openLongText () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        action="Подробнее"
        onActionClick={() => this.setState({ text: 'Открыта подробная информация.' })}
        before={<Avatar size={24} style={orangeBackground}><Icon24Favorite fill="#fff" width={14} height={14} /></Avatar>}
      >
        Ссылка сохранена в закладки. Все отметки «Нравится» переместились в новости
        под вкладкой «Понравилось».
      </Snackbar>
    });
  }

  openWithAvatar () {
    if (this.state.snackbar) return;
    this.setState({ snackbar:
      <Snackbar
        layout="vertical"
        onClose={() => this.setState({ snackbar: null })}
        action="Отменить"
        onActionClick={() => this.setState({ text: 'Сообщение Ивану было отменено.' })}
        after={<Avatar src={getAvatarUrl('user_wayshev')} size={32} />}
      >
        Отправлено Ивану Барышеву
      </Snackbar>
    });
  }

  render() {
    return (
      <View activePanel="example">
        <Panel id="example">
          <Group>
            <CellButton onClick={this.openBase}>Простое уведомление с иконкой</CellButton>
            <CellButton onClick={this.openBaseWithAction}>Уведомление с иконкой и кнопкой</CellButton>
            <CellButton onClick={this.openLongText}>Длинный текст</CellButton>
            <CellButton onClick={this.openWithAvatar}>Уведомление с аватаркой</CellButton>
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

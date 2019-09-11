`Snackbar` – компонент для показа кратких сообщений в нижней части экрана. Его можно использовать, чтобы информировать пользователя о каких-то процессах в приложении, например, "Статья добавлена в закладки".

Плашка с уведомлением автоматически исчезает после какого-то времени (свойств `duration` в миллисекундах), либо же её можно скрыть смахиванием вправо.

Не нужно показывать это уведомление, если в приложении каким-то другим образом видно, что действие совершено. Например, когда заменяется текст в кнопке, или в какой-то список всё добавляется.

После закрытия компонент вызывает обязательное свойство `onClose`, и вам необходимо убрать `Snackbar` со страницы.

```jsx

const snackbarIconStyle = {
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 12
};

const orangeBackground = {
  backgroundImage: 'linear-gradient(135deg, #ffb73d, #ffa000)',
  color: '#fff'
};

const blueBackground = {
  backgroundColor: 'var(--accent)',
  color: '#fff'
};

function SnackbarIcon({ style, children }) {
  return <div style={{ ...snackbarIconStyle, ...style }}>{children}</div>;
}

class SnackBarExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
        before={<SnackbarIcon style={blueBackground}><Icon16Done width={14} height={14} /></SnackbarIcon>}
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
        action={{ title: 'Добавить метку', onClick: () => {} }}
        before={<SnackbarIcon style={orangeBackground}><Icon24Favorite width={14} height={14} /></SnackbarIcon>}
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
        action={{ title: 'Подробнее', onClick: () => {} }}
        before={<SnackbarIcon style={orangeBackground}><Icon24Favorite width={14} height={14} /></SnackbarIcon>}
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
        action={{ title: 'Отменить', onClick: () => {} }}
        after={<Avatar src="https://sun9-20.userapi.com/c846018/v846018136/164bc/XoLIN4P5Kb0.jpg?ava=1" size={32} />}
      >
        Отправлено Ивану Барышеву
      </Snackbar>
    });
  }

  render() {
    return (
      <View header={false} activePanel="example">
        <Panel id="example">
          <Group>
            <CellButton onClick={this.openBase}>Простое уведомление с иконкой</CellButton>
            <CellButton onClick={this.openBaseWithAction}>Уведомление с иконкой и кнопкой</CellButton>
            <CellButton onClick={this.openLongText}>Уведомление с вертикальной разметкой и длинным текстом</CellButton>
            <CellButton onClick={this.openWithAvatar}>Уведомление с аватаркой</CellButton>
          </Group>

          {this.state.snackbar}
        </Panel>
      </View>
    )
  }
}

<SnackBarExample />
```

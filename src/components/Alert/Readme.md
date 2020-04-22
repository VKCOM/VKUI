В Алертах особое внимание нужно уделить кнопкам. Всего есть три типа кнопок:
`cancel`, `destructive` и `default`.

Типом `cancel` нужно подсветить действие, возвращающее пользователя к
состоянию, когда алерт был закрыт. Пользователь кликнет по нему в случае, когда он открыл алерт для
совершения какого-то действия и передумал.

Стиль `destructive` используется в случае, когда действие влечёт за собой какие-то деструктивные последствия:
удаление, разжалование и т.д.

Во всех остальных случаях используйте стиль `default`.

**Важно:**

* Кнопка со стилем `cancel` должна быть одна на алерт.
* Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного
`actionsLayout`.
* В Android версии игнорируется стиль `cancel`, и жирность всех кнопок одинаковая.
* Порядок кнопок должен быть одинаковым на всех платформах (см. пункт 2).

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null,
      actionsLog: [],
    };

    this.openDefault = this.openDefault.bind(this);
    this.openDestructive = this.openDestructive.bind(this);
    this.closePopout = this.closePopout.bind(this);
    this.addActionLogItem = this.addActionLogItem.bind(this);
  }

  componentDidMount() {
    this.openDestructive()
  }

  addActionLogItem(value) {
    this.setState({
      actionsLog: [...this.state.actionsLog, value],
    });
  }

  openDefault () {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }, {
          title: 'Добавить',
          autoclose: true,
          action: () => this.addActionLogItem('Право на модерацию контента добавлено.'),
        }]}
        onClose={this.closePopout}
      >
        <h2>Подтвердите действие</h2>
        <p>Добавить пользователю право на модерацию контента.</p>
      </Alert>
    });
  }

  openDestructive () {
    this.setState({ popout:
      <Alert
        actionsLayout="vertical"
        actions={[{
          title: 'Лишить права',
          autoclose: true,
          mode: 'destructive',
          action: () => this.addActionLogItem('Пользователь больше не может модерировать контент.'),
        }, {
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }]}
        onClose={this.closePopout}
      >
        <h2>Подтвердите действие</h2>
        <p>Вы уверены, что хотите лишить пользователя права на модерацию контента?</p>
      </Alert>
    });
  }

  closePopout () {
    this.setState({ popout: null });
  }

  render() {
    return (
      <View popout={this.state.popout} activePanel="alert">
        <Panel id="alert">
          <CellButton onClick={this.openDefault}>Добавить право</CellButton>
          <CellButton mode="danger" onClick={this.openDestructive}>Лишить права</CellButton>

          {this.state.actionsLog.map((value, i) => <Div key={i}>{value}</Div>)}
        </Panel>
      </View>
    )
  }
}

<Example />
```

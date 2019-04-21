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

```
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null
    };

    this.openDefault = this.openDefault.bind(this);
    this.openDestructive = this.openDestructive.bind(this);
    this.closePopout = this.closePopout.bind(this);
  }

  componentDidMount() {
    this.openDestructive()
  }

  openDefault () {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Отмена',
          autoclose: true,
          style: 'cancel'
        }, {
          title: 'Добавить',
          autoclose: true,
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
          style: 'destructive'
        }, {
          title: 'Отмена',
          autoclose: true,
          style: 'cancel'
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
      <View popout={this.state.popout} header={false} activePanel="alert">
        <Panel id="alert">
          <CellButton onClick={this.openDefault}>Добавить право</CellButton>
          <CellButton level="danger" onClick={this.openDestructive}>Лишить права</CellButton>
        </Panel>
      </View>
    )
  }
}

<Example />
```

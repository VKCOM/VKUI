Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

В Алертах особое внимание нужно уделить кнопкам. Всего есть три типа кнопок:
`cancel`, `destructive` и `default`.

Типом `cancel` нужно подсветить действие, возвращающее пользователя к
состоянию, когда алерт был закрыт. Пользователь кликнет по нему в случае, когда он открыл алерт для
совершения какого-то действия и передумал.

Стиль `destructive` используется в случае, когда действие влечёт за собой какие-то деструктивные последствия:
удаление, разжалование и т.д.

Во всех остальных случаях используйте стиль `default`.

Кнопки могут быть ссылками (передайте `href`) или другим компонентом (передайте `Component`).

> **Важно:**
> 
> 1. Кнопка со стилем `cancel` должна быть одна на алерт.
> 2. Кнопку со стилем `cancel` нужно располагать либо слева, либо снизу, в зависимости от выбранного `actionsLayout`.
> 3. В Android версии игнорируется стили `cancel` и `destructive`, и жирность всех кнопок одинаковая.
> 4. В VKCOM версии возможно только горизонтальное расположение кнопок.
> 5.  Порядок кнопок должен быть одинаковым на всех платформах (см. пункт 2).

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null,
      actionsLog: [],
    };

    this.openAction = this.openAction.bind(this);
    this.openDeleteion = this.openDeleteion.bind(this);
    this.closePopout = this.closePopout.bind(this);
    this.addActionLogItem = this.addActionLogItem.bind(this);
  }

  componentDidMount() {
    this.openDeleteion()
  }

  addActionLogItem(value) {
    this.setState({
      actionsLog: [...this.state.actionsLog, value],
    });
  }

  openAction () {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Лишить права',
          mode: 'destructive',
          autoclose: true,
          action: () => this.addActionLogItem('Право на модерацию контента убрано.'),
        }, {
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }]}
        actionsLayout="vertical"
        onClose={this.closePopout}
        header="Подтвердите действие"
        text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
      />
    });
  }

  openDeleteion () {
    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Отмена',
          autoclose: true,
          mode: 'cancel'
        }, {
          title: 'Удалить',
          autoclose: true,
          mode: 'destructive',
          action: () => this.addActionLogItem('Документ удален.'),
        }]}
        actionsLayout="horizontal"
        onClose={this.closePopout}
        header="Удаление документа"
        text="Вы уверены, что хотите удалить этот документ?"
      />
    });
  }

  closePopout () {
    this.setState({ popout: null });
  }

  render() {
    return (
      <View popout={this.state.popout} activePanel="alert">
        <Panel id="alert">
          <PanelHeader>Alert</PanelHeader>
          <Group>
            <CellButton onClick={this.openAction}>Лишить права</CellButton>
            <CellButton onClick={this.openDeleteion}>Удалить документ</CellButton>
            {this.state.actionsLog.map((value, i) => <Div key={i}>{value}</Div>)}
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

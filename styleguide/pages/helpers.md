В соответствии с требованиями по дизайну на iOS и Android различаются, например, некоторые кнопки, часто используемые в шапках в приложениях. Можно использовать удобные компоненты, в которых скрыта платформенная логика показа нужного текста или иконки. Ниже представлено подробное демо с этими вспомогательными компонентами.

```js
const HOME_VIEW = 'home';
const CREATE_VIEW = 'create';

const MAIN_PANEL = 'main';
const LIST_PANEL = 'list';
const CREATE_PANEL = 'create';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      formLoaded: false,

      activeView: HOME_VIEW,
      activePanels: {
        [HOME_VIEW]: MAIN_PANEL,
        [CREATE_VIEW]: CREATE_PANEL
      }
    };
  }

  closeApp() {
    alert('Закрыть приложение');
  }

  go(view, panel = this.state.activePanels[view]) {
    this.setState({
      editing: false,
      activeView: view,
      activePanels: {
        ...this.state.activePanels,
        [view]: panel
      }
    });

    if (panel === CREATE_PANEL && !this.state.formLoaded) {
      this.getForm().then(() => {
        this.setState({ formLoaded: true });
      });
    }
  }

  onHeaderEditClick() {
    this.setState({ editing: !this.state.editing });
  }

  getForm() {
    return new Promise((resolve) => setTimeout(() => resolve(), 1000));
  }

  render() {
    const { activeView, activePanels, editing, formLoaded } = this.state;

    return (
      <Root activeView={activeView}>
        <View id={HOME_VIEW} activePanel={activePanels[HOME_VIEW]}>
          <Panel id={MAIN_PANEL}>
            <PanelHeader
              left={<PanelHeaderBack onClick={() => this.closeApp()} />}
            >
              Приложение
            </PanelHeader>

            <Group>
              <CellButton onClick={() => this.go(HOME_VIEW, LIST_PANEL)}>Перейти к списку</CellButton>
            </Group>
          </Panel>

          <Panel id={LIST_PANEL}>
            <PanelHeader
              left={<PanelHeaderBack onClick={() => this.go(HOME_VIEW, MAIN_PANEL)} />}
              right={
                <PanelHeaderEdit
                  isActive={editing}
                  editLabel="Изменить"
                  doneLabel="Готово"
                  onClick={() => this.onHeaderEditClick()}
                />
              }
            >
              Список
            </PanelHeader>

            <Group>
              <List>
                {!editing && (
                  <CellButton
                    style={{ color: 'var(--accent)' }}
                    before={<div style={{ width: 60, display: 'flex', justifyContent: 'center' }}><Icon24Add /></div>}
                    onClick={() => this.go(CREATE_VIEW)}
                  >
                    Добавить группу
                  </CellButton>
                )}

                <Cell
                  removable={editing}
                  before={<Avatar src="https://pp.userapi.com/c638629/v638629852/2afc2/nlmcXQP0V6c.jpg?ava=1" />}
                  description="Открытая группа"
                >ВКонтакте API</Cell>

                <Cell
                  removable={editing}
                  before={<Avatar src="https://sun9-34.userapi.com/c846420/v846420985/1526cd/YmiB_KSW1Q8.jpg?ava=1" />}
                  description="Открытая группа"
                >VK Apps</Cell>
              </List>
            </Group>
          </Panel>
        </View>

        <View id={CREATE_VIEW} activePanel={activePanels[CREATE_VIEW]}>
          <Panel id={CREATE_PANEL} theme="white">
            <PanelHeader
              left={<PanelHeaderClose onClick={() => this.go(HOME_VIEW)} />}
              right={<PanelHeaderSubmit onClick={() => this.go(HOME_VIEW)} />}
            >
              Добавить
            </PanelHeader>

            {!formLoaded ? <PanelSpinner /> : <FormLayout>
              <Input
                top="Название сообщества"
                placeholder="Введите название..."
              />

              <Textarea
                top="Описание"
                placeholder="Введите описание..."
              />
            </FormLayout>}
          </Panel>
        </View>
      </Root>
    );
  }
}

<Example />
```
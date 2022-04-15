```jsx
class Example extends React.Component {
  constructor() {
    this.state = {
      activePanel: "list",
    };
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="list">
          <PanelHeader>SimpleCell</PanelHeader>
          <Group>
            <Header mode="secondary">Меню</Header>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              before={<Icon28UserOutline />}
            >
              Аккаунт
            </SimpleCell>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              before={<Icon28PaletteOutline />}
            >
              Внешний вид
            </SimpleCell>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              before={<Icon28SettingsOutline />}
            >
              Основные
            </SimpleCell>
          </Group>
          <Group>
            <Header mode="secondary">Настройки</Header>
            <SimpleCell disabled after={<Switch defaultChecked />}>
              Сжимать фотографии
            </SimpleCell>
            <SimpleCell disabled after={<Switch />}>
              Сжимать видео
            </SimpleCell>
          </Group>
          <Group>
            <Header mode="secondary">Настройки системы</Header>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              indicator="Русский"
            >
              Язык
            </SimpleCell>
            <SimpleCell
              onClick={() => this.setState({ activePanel: "nothing" })}
              expandable
              indicator="При использовании"
            >
              Геолокация
            </SimpleCell>
          </Group>
          <Group>
            <Header mode="secondary">Список диалогов</Header>
            <SimpleCell
              before={<Avatar size={40} src={getAvatarUrl("user_xyz")} />}
              after={
                <IconButton>
                  <Icon28MessageOutline />
                </IconButton>
              }
            >
              Игорь Фёдоров
            </SimpleCell>
            <SimpleCell
              before={
                <Avatar size={40} src={getAvatarUrl("user_arthurstam")} />
              }
              after={
                <IconButton>
                  <Icon28MessageOutline />
                </IconButton>
              }
            >
              Artur Stambultsian
            </SimpleCell>
          </Group>
          <Group>
            <Header mode="secondary">Список друзей</Header>
            <SimpleCell
              before={<Avatar size={48} src={getAvatarUrl("user_xyz")} />}
              badge={<Icon12Verified />}
              after={
                <IconButton>
                  <Icon28MessageOutline />
                </IconButton>
              }
              description="Команда ВКонтакте"
            >
              Игорь Фёдоров
            </SimpleCell>
            <SimpleCell
              before={
                <Avatar size={48} src={getAvatarUrl("user_arthurstam")} />
              }
              after={
                <IconButton>
                  <Icon28MessageOutline />
                </IconButton>
              }
              description="Бот"
            >
              Artur Stambultsian
            </SimpleCell>
          </Group>
        </Panel>
        <Panel id="nothing">
          <PanelHeader
            left={
              <PanelHeaderBack
                onClick={() => this.setState({ activePanel: "list" })}
              />
            }
          >
            Ничего
          </PanelHeader>
          <Placeholder>Тут ничего нет</Placeholder>
        </Panel>
      </View>
    );
  }
}

<Example />;
```

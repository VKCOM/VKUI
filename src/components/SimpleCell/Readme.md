```jsx
const Example = () => {
  const [activePanel, setActivePanel] = React.useState('list');

  return (
    <View activePanel={activePanel}>
      <Panel id="list">
        <PanelHeader>SimpleCell</PanelHeader>
        <Group>
          <Header mode="secondary">Меню</Header>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable
            before={<Icon28UserOutline />}
          >
            Аккаунт
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable
            before={<Icon28PaletteOutline />}
          >
            Внешний вид
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable
            before={<Icon28SettingsOutline />}
          >
            Основные
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Настройки</Header>
          <SimpleCell Component="label" after={<Switch defaultChecked />}>
            Сжимать фотографии
          </SimpleCell>
          <SimpleCell Component="label" after={<Switch />}>
            Сжимать видео
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Настройки системы</Header>
          <SimpleCell onClick={() => setActivePanel('nothing')} expandable indicator="Русский">
            Язык
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable
            indicator="При использовании"
          >
            Геолокация
          </SimpleCell>
        </Group>
        <Group>
          <Header mode="secondary">Список диалогов</Header>
          <SimpleCell
            before={<Avatar size={40} src={getAvatarUrl('user_xyz')} />}
            after={
              <IconButton>
                <Icon28MessageOutline />
              </IconButton>
            }
          >
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={40} src={getAvatarUrl('user_arthurstam')} />}
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
            before={<Avatar size={48} src={getAvatarUrl('user_xyz')} />}
            badgeAfterTitle={<Icon12Verified />}
            after={
              <IconButton>
                <Icon28MessageOutline />
              </IconButton>
            }
            subtitle="Команда ВКонтакте"
          >
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={getAvatarUrl('user_arthurstam')} />}
            after={
              <IconButton>
                <Icon28MessageOutline />
              </IconButton>
            }
            subtitle="Бот"
          >
            Artur Stambultsian
          </SimpleCell>
        </Group>
      </Panel>
      <Panel id="nothing">
        <PanelHeader before={<PanelHeaderBack onClick={() => setActivePanel('list')} />}>
          Ничего
        </PanelHeader>
        <Placeholder>Тут ничего нет</Placeholder>
      </Panel>
    </View>
  );
};

<Example />;
```

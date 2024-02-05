```jsx
const Example = () => {
  const [activePanel, setActivePanel] = React.useState('list');

  return (
    <View activePanel={activePanel}>
      <Panel id="list">
        <PanelHeader>SimpleCell</PanelHeader>
        <Group header={<Header mode="secondary">Меню</Header>}>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28UserOutline />}
          >
            Аккаунт
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28PaletteOutline />}
          >
            Внешний вид
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            before={<Icon28SettingsOutline />}
          >
            Основные
          </SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Настройки</Header>}>
          <SimpleCell Component="label" after={<Switch defaultChecked />}>
            Сжимать фотографии
          </SimpleCell>
          <SimpleCell Component="label" after={<Switch />}>
            Сжимать видео
          </SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Настройки системы</Header>}>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            indicator="Русский"
          >
            Язык
          </SimpleCell>
          <SimpleCell
            onClick={() => setActivePanel('nothing')}
            expandable="auto"
            indicator="При использовании"
          >
            Геолокация
          </SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Список диалогов</Header>}>
          <SimpleCell
            before={<Avatar size={40} src={getAvatarUrl('user_xyz')} />}
            after={
              <IconButton label="Написать сообщение" onClick={noop}>
                <Icon28MessageOutline />
              </IconButton>
            }
            onClick={noop}
          >
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={40} src={getAvatarUrl('user_arthurstam')} />}
            after={
              <IconButton label="Написать сообщение" onClick={noop}>
                <Icon28MessageOutline />
              </IconButton>
            }
            onClick={noop}
          >
            Artur Stambultsian
          </SimpleCell>
        </Group>
        <Group header={<Header mode="secondary">Список друзей</Header>}>
          <SimpleCell
            before={<Avatar size={48} src={getAvatarUrl('user_xyz')} />}
            badgeAfterTitle={<Icon12Verified />}
            after={
              <IconButton label="Написать сообщение" onClick={noop}>
                <Icon28MessageOutline />
              </IconButton>
            }
            subtitle="Команда ВКонтакте"
            onClick={noop}
          >
            Игорь Фёдоров
          </SimpleCell>
          <SimpleCell
            before={<Avatar size={48} src={getAvatarUrl('user_arthurstam')} />}
            after={
              <IconButton label="Написать сообщение" onClick={noop}>
                <Icon28MessageOutline />
              </IconButton>
            }
            subtitle="Бот"
            onClick={noop}
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

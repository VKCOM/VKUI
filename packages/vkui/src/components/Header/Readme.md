```jsx
const Example = () => {
  const platform = usePlatform();

  return (
    <View activePanel="header">
      <Panel id="header">
        <PanelHeader>Header</PanelHeader>
        <Group>
          <Header
            mode="primary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Плейлисты
          </Header>
          <Header
            mode="primary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
            subtitle="SOHN — Conrad"
          >
            Плейлисты
          </Header>
          <Header
            mode="primary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
            indicator="12"
          >
            Плейлисты
          </Header>
          <Header
            mode="primary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
            indicator={
              <Counter size="s" mode="prominent">
                3
              </Counter>
            }
          >
            Заявки в друзья
          </Header>
        </Group>
        <Group>
          <Header
            mode="secondary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Приглашения
          </Header>
          <Header
            mode="secondary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
            indicator="667"
          >
            Фотографии
          </Header>
          <Header
            mode="secondary"
            aside={
              <Link>
                Показать все
                {platform === Platform.VKCOM && <Icon12ChevronOutline />}
              </Link>
            }
            indicator={
              <Counter size="s" mode="prominent">
                3
              </Counter>
            }
          >
            Приглашения
          </Header>
        </Group>
        <Group>
          <Header mode="tertiary">Важные</Header>
        </Group>
        <Group>
          <Header mode="primary" multiline>
            Кто может писать мне личные сообщения
          </Header>
          <Header mode="tertiary" multiline>
            Кто может комментировать мои записи
          </Header>
          <Header mode="secondary" multiline>
            Кто может оставлять записи на моей странице
          </Header>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

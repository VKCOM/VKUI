```jsx
const Example = () => {
  const platform = usePlatform();

  return (
    <View activePanel="header">
      <Panel id="header">
        <PanelHeader>Header</PanelHeader>
        <Group>
          <Header
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Плейлисты
          </Header>
          <Header
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
            subtitle="SOHN — Conrad"
            subtitleComponent="h3"
          >
            Плейлисты
          </Header>
          <Header
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
            indicator="12"
          >
            Плейлисты
          </Header>
          <Header
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
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
            size="s"
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Приглашения
          </Header>
          <Header
            size="s"
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
            indicator="667"
          >
            Фотографии
          </Header>
          <Header
            size="s"
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
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
          <Header>Важные</Header>
        </Group>
        <Group>
          <Header multiline>
            Кто может писать мне личные сообщения
          </Header>
          <Header multiline>
            Кто может комментировать мои записи
          </Header>
          <Header size="s" multiline>
            Кто может оставлять записи на моей странице
          </Header>
        </Group>
        <Group>
          <Header size="xl">
            Большой заголовок
          </Header>
        </Group>
        <Group>
          <Header
            before={<Icon28UserCircleFillBlue />}
            beforeTitle={<Icon16LockOutline />}
            afterTitle={<Icon16UnlockOutline />}
            beforeSubtitle={<Icon12Tag />}
            afterSubtitle={<Icon12Fire />}
            subtitle="SOHN — Conrad"
            subtitleComponent="h3"
            indicator={
              <Counter size="s" mode="prominent">
                3
              </Counter>
            }
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Плейлисты
          </Header>
          <Header
            before={<Icon28UserCircleFillBlue />}
            beforeTitle={<Icon16LockOutline />}
            afterTitle={<Icon16UnlockOutline />}
            beforeSubtitle={<Icon12Tag />}
            afterSubtitle={<Icon12Fire />}
            subtitle="SOHN — Conrad"
            subtitleComponent="h3"
            multiline
            indicator={
              <Counter size="s" mode="prominent">
                3
              </Counter>
            }
            after={
              <Link>
                Показать все
                {platform === 'vkcom' && <Icon12ChevronOutline />}
              </Link>
            }
          >
            Плейлисты
          </Header>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

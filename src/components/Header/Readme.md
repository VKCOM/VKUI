```jsx
  <View activePanel="header">
    <Panel id="header">
      <PanelHeader>
        Header
      </PanelHeader>
      <Group>
        <Header>
          Рекомендации
        </Header>
        <Separator />
        <Header aside={<Link>Показать все</Link>}>
          Плейлисты
        </Header>
        <Separator />
        <Header aside={<Link>Добавленные<Icon16Dropdown /></Link>} indicator={16}>
          Мои видео
        </Header>
        <Separator />
        <Header aside={<Icon24Dismiss />}>
          Недавние
        </Header>
        <Separator />
        <Header indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link>Показать все</Link>}>
          Заявки в друзья
        </Header>
        <Separator />
        <Header subtitle="SOHN — Conrad" aside={<Link>Показать все</Link>}>
          Похожее на
        </Header>
        <Separator />
        <Header mode="secondary">Важные</Header>
        <Separator />
        <Header mode="secondary" aside={<Link>Показать все</Link>}>
          Приглашения
        </Header>
        <Separator />
        <Header mode="secondary" indicator="667" aside={<Icon16Chevron />}>
          Фотографии
        </Header>
        <Separator />
        <Header mode="secondary" indicator={<Counter size="s" mode="prominent">3</Counter>} aside={<Link>Показать все</Link>}>
          Приглашения
        </Header>
      </Group>
    </Panel>
  </View>
```

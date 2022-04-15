```jsx
<View activePanel="button">
  <Panel id="button">
    <PanelHeader>CellButton</PanelHeader>
    <Group header={<Header mode="secondary">Базовый пример</Header>}>
      <CellButton>Добавить новую школу</CellButton>
      <CellButton mode="danger">Удалить беседу</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Иконки</Header>}>
      <CellButton before={<Icon28AddOutline />}>
        Добавить родственника
      </CellButton>
      <CellButton before={<Icon28DeleteOutline />} mode="danger">
        Удалить беседу
      </CellButton>
    </Group>
    <Group header={<Header mode="secondary">Аватарки</Header>}>
      <CellButton
        before={
          <Avatar shadow={false} size={40}>
            <Icon24Add />
          </Avatar>
        }
      >
        Добавить участников
      </CellButton>
      <CellButton
        before={
          <Avatar shadow={false} size={48}>
            <Icon28AddOutline />
          </Avatar>
        }
      >
        Создать беседу
      </CellButton>
      <CellButton
        before={
          <Avatar shadow={false} size={72} mode="image">
            <Icon28AddOutline />
          </Avatar>
        }
      >
        Создать плейлист
      </CellButton>
    </Group>
    <Group header={<Header mode="secondary">Центрирование</Header>}>
      <CellButton centered before={<Icon24Add />}>
        Создать беседу
      </CellButton>
    </Group>
  </Panel>
</View>
```

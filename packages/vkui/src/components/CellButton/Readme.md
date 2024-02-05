```jsx
<View activePanel="button">
  <Panel id="button">
    <PanelHeader>CellButton</PanelHeader>
    <Group header={<Header mode="secondary">Базовый пример</Header>}>
      <CellButton onClick={() => {}}>Добавить новую школу</CellButton>
      <CellButton onClick={() => {}} mode="danger">
        Удалить беседу
      </CellButton>
    </Group>
    <Group header={<Header mode="secondary">Иконки</Header>}>
      <CellButton onClick={() => {}} before={<Icon28AddOutline />}>
        Добавить родственника
      </CellButton>
      <CellButton onClick={() => {}} before={<Icon28DeleteOutline />} mode="danger">
        Удалить беседу
      </CellButton>
    </Group>
    <Group header={<Header mode="secondary">Аватарки</Header>}>
      <CellButton
        onClick={() => {}}
        before={
          <Avatar noBorder size={40}>
            <Icon24Add />
          </Avatar>
        }
      >
        Добавить участников
      </CellButton>
      <CellButton
        onClick={() => {}}
        before={
          <Avatar noBorder size={48}>
            <Icon28AddOutline />
          </Avatar>
        }
      >
        Создать беседу
      </CellButton>
      <CellButton
        onClick={() => {}}
        before={
          <Image noBorder size={72}>
            <Icon28AddOutline />
          </Image>
        }
      >
        Создать плейлист
      </CellButton>
    </Group>
    <Group header={<Header mode="secondary">Центрирование</Header>}>
      <CellButton onClick={() => {}} centered before={<Icon24Add />}>
        Создать беседу
      </CellButton>
    </Group>
  </Panel>
</View>
```

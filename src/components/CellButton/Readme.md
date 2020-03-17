```jsx
<View activePanel="button" header={false}>
  <Panel id="button" separator={false}>
    <Group header={<Header mode="secondary">Кнопка-ячейка</Header>}>
      <CellButton>Добавить новую школу</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Стилизация</Header>}>
      <CellButton mode="danger">Покинуть беседу</CellButton>
    </Group>
    <Group header={<Header mode="secondary">Кнопка c иконкой</Header>}>
      <CellButton before={<Icon24Add />}>Добавить родственника</CellButton>
    </Group>
  </Panel>
</View>
```

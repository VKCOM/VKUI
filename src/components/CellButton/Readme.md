```jsx
<View activePanel="button">
  <Panel id="button">
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

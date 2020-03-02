Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `wide`.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>
      Separator
    </PanelHeader>

    <Group header={<Header mode="secondary">Сепаратор</Header>}>
      <Cell before={<Icon24Notification />}>Уведомления</Cell>
      <Cell before={<Icon24DoNotDisturb />}>Не беспокоить</Cell>

      <Separator style={{ margin: '12px 0' }} />

      <Cell before={<Icon24User />}>Учётная запись</Cell>
      <Cell before={<Icon24Filter />}>Основные</Cell>
    </Group>
  </Panel>
</View>
```

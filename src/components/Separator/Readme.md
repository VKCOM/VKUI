Используется для разделения какого-либо контента. Отступы справа и слева контролируются свойством `wide`.

```jsx
<View activePanel="separator">
  <Panel id="separator">
    <PanelHeader>
      Separator
    </PanelHeader>

    <Group header={<Header mode="secondary">Сепаратор</Header>}>
      <Cell before={<Icon28Notifications />}>Уведомления</Cell>
      <Cell before={<Icon28BlockOutline />}>Не беспокоить</Cell>

      <Separator style={{ margin: '12px 0' }} />

      <Cell before={<Icon28UserOutline />}>Учётная запись</Cell>
      <Cell before={<Icon28SlidersOutline />}>Основные</Cell>
    </Group>
  </Panel>
</View>
```

Контейнер для Cell.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>
      List
    </PanelHeader>
    <Group>
      <List>
        <Cell expandable before={<Icon24User />}>Учетная запись</Cell>
        <Cell expandable before={<Icon24Settings />}>Основные</Cell>
        <Cell expandable before={<Icon24Privacy />}>Приватность</Cell>
      </List>
    </Group>
  </Panel>
</View>
```

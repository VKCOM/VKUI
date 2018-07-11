Контейнер для ListItem.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>
      List
    </PanelHeader>
    <Group>
      <List>
        <ListItem expandable before={<Icon24User />}>Учетная запись</ListItem>
        <ListItem expandable before={<Icon24Settings />}>Основные</ListItem>
        <ListItem expandable before={<Icon24Privacy />}>Приватность</ListItem>
      </List>
    </Group>
  </Panel>
</View>
```

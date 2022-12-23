Контейнер для однородных [Cell](#!/Cell).

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>List</PanelHeader>
    <Group>
      <List>
        <Cell expandable before={<Icon28UserOutline />}>
          Учетная запись
        </Cell>
        <Cell expandable before={<Icon28SettingsOutline />}>
          Основные
        </Cell>
        <Cell expandable before={<Icon28PrivacyOutline />}>
          Приватность
        </Cell>
      </List>
    </Group>
  </Panel>
</View>
```

Используется для отображения информации рядом с именем пользователя.

```jsx
<View activePanel="badge">
  <Panel id="badge">
    <PanelHeader>Badges</PanelHeader>
    
      <Group header={<Header mode="secondary">Верифицированный пользователь</Header>}>
        <Cell before={<Avatar />}>Артур Стамбульцян</Cell>
      </Group>
  </Panel>
</View>
```

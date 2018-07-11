Подвал для списков

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>
      List
    </PanelHeader>
    <Group>
      <List>
        <ListItem before={<Avatar />}description="Веб-сайт">Команда ВКонтакте</ListItem>
        <ListItem before={<Avatar />}description="Музыкант">Robbie Williams</ListItem>
        <ListItem before={<Avatar />}description="Издательский дом">ПостНаука</ListItem>
      </List>
    </Group>
    <Footer>3 cообщества</Footer>
  </Panel>
</View>
```

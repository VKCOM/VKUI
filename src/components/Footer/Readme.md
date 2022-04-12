Подвал для списков.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>Footer</PanelHeader>
    <Group>
      <List>
        <Cell before={<Avatar />} description="Веб-сайт">
          Команда ВКонтакте
        </Cell>
        <Cell before={<Avatar />} description="Музыкант">
          Robbie Williams
        </Cell>
        <Cell before={<Avatar />} description="Издательский дом">
          ПостНаука
        </Cell>
      </List>
    </Group>
    <Footer>3 сообщества</Footer>
  </Panel>
</View>
```

Подвал для списков.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>Footer</PanelHeader>
    <Group>
      <Cell before={<Avatar />} subtitle="Веб-сайт">
        Команда ВКонтакте
      </Cell>
      <Cell before={<Avatar />} subtitle="Музыкант">
        Robbie Williams
      </Cell>
      <Cell before={<Avatar />} subtitle="Издательский дом">
        ПостНаука
      </Cell>
    </Group>
    <Footer>3 сообщества</Footer>
  </Panel>
</View>
```

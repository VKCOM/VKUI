Компонент для отрисовки "сложного" содержимого шапки.

```jsx
<View activePanel="brand" header={false}>
  <Panel id="brand" separator={false}>
    <PanelHeaderSimple
      left={<PanelHeaderBack />}
      right={<PanelHeaderButton>{<Icon28MessageOutline />}</PanelHeaderButton>}
    >
      <PanelHeaderContent
        status="был в сети сегодня, в 18:46"
        before={<Avatar size={36} src="https://sun9-5.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1" />}
      >
        Влад Анесов
      </PanelHeaderContent>
    </PanelHeaderSimple>
  </Panel>
</View>
```

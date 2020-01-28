Компонент для отрисовки "сложного" содержимого шапки.

```
<View activePanel="brand">
  <Panel id="brand">
    <PanelHeader
      left={<PanelHeaderButton>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</PanelHeaderButton>}
      right={<PanelHeaderButton>{<Icon24Phone />}</PanelHeaderButton>}
    >
      <PanelHeaderContent
        status="был в сети сегодня, в 18:46"
        before={<Avatar size={36} src="https://sun9-5.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1" />}
      >
        Влад Анесов
      </PanelHeaderContent>
    </PanelHeader>
  </Panel>
</View>
```

Компонент для отрисовки "сложного" содержимого шапки.

```
<View activePanel="brand">
  <Panel id="brand">
    <PanelHeader
      left={<HeaderButton>{osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}</HeaderButton>}
      right={<HeaderButton>{<Icon24Phone />}</HeaderButton>}
    >
      <PanelHeaderContent
        status="был в сети сегодня, в 18:46"
        aside={<Icon16Dropdown />}
        before={<Avatar size={40} src="https://sun9-5.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1" />}
        onClick={() => {}}
      >
        Влад Анесов
      </PanelHeaderContent>
    </PanelHeader>
  </Panel>
</View>
```

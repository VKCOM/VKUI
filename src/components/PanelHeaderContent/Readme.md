Компонент для отрисовки "сложного" содержимого шапки.

```jsx
<View activePanel="brand">
  <Panel id="brand">
    <PanelHeader
      left={<PanelHeaderBack />}
      right={<PanelHeaderButton><Icon28MessageOutline /></PanelHeaderButton>}
    >
      <PanelHeaderContent
        status="был в сети сегодня, в 18:46"
        before={<Avatar size={36} src={getAvatarUrl('user_va')} />}
      >
        Влад Анесов
      </PanelHeaderContent>
    </PanelHeader>
  </Panel>
</View>
```

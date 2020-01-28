Компонент для отрисовки шапки внутри панели. В качестве `children` принимает то, что будет являться заголовком панели.
По бокам располагаются управляющие кнопки [`PanelHeaderButton`](https://vkcom.github.io/vkui-styleguide/#!/PanelHeaderButton).
Так же в секции [Helpers](https://vkcom.github.io/vkui-styleguide/#!/Helpers) вы найдете вспомогательные компоненты,
которые упростят работу с боковыми контролами шапки.

```jsx
  <View activePanel="panelheader">
    <Panel id="panelheader">
      <PanelHeader
        left={<PanelHeaderBack />}
        right={<PanelHeaderButton><Icon24MoreHorizontal /></PanelHeaderButton>}
      >
        Запись
      </PanelHeader>
    </Panel>
  </View>
```

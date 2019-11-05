Компонент для отрисовки шапки внутри панели. В качестве `children` принимает то, что будет являться заголовком панели.
По бокам располагаются управляющие кнопки [`HeaderButton`](https://vkcom.github.io/vkui-styleguide/#!/HeaderButton). 
Так же в секции [Helpers](https://vkcom.github.io/vkui-styleguide/#!/Helpers) вы найдете вспомогательные компоненты, 
которые упростят работу с боковыми контролами шапки.

```jsx harmony
  <View activePanel="panelheader">
    <Panel id="panelheader">
      <PanelHeader
        left={<PanelHeaderBack />}
        right={<HeaderButton><Icon24MoreHorizontal /></HeaderButton>}
      >
        Запись
      </PanelHeader>
    </Panel>
  </View>
```

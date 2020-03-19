Компонент для отрисовки шапки внутри панели. В качестве `children` принимает то, что будет являться заголовком панели.
По бокам располагаются управляющие кнопки [`PanelHeaderButton`](https://vkcom.github.io/vkui-styleguide/#!/PanelHeaderButton)

Данный компонент использует [порталы](https://ru.reactjs.org/docs/portals.html), поэтому он не поддерживает [SSR](https://vkcom.github.io/vkui-styleguide/#!/section-server-side-rendering).
Используйте [`PanelHeaderSimple`](https://vkcom.github.io/vkui-styleguide/#!/PanelHeaderSimple), который в 4-й версии
библиотеки заменит PanelHeader.

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

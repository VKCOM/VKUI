`PanelHeaderSimple` — это то, что в 4-й версии заменит `PanelHeader`. У `PanelHeader` есть ряд проблем:

1. Части этого компонента рендерятся с помощью порталов в ближайший `View`, что делает невозможным SSR и замедляет
отрисовку и перерисовку компонента.
2. Невозможно было в пределах одного `View` мешать панели с шапкой и без шапки.
3. Большая вложенность вёрстки.
4. Наличием или отсутствием разделителя управляет `Panel`, было бы удобнее, если бы это делал `PanelHeader`

У `PanelHeaderSimple` этих проблем нет. Он рендерится как обычный компонент, имеет простую структуру, быстро рисуется и
поддерживает SSR.

### Переход от PanelHeader к PanelHeaderSimple

1. Во `<View />` добавляем `header={false}`
2. В `<Panel />` добавляем `separator={false}`. Это свойство теперь есть у `PanelHeaderSimple`
3. Заменяем `<PanelHeader />` на `<PanelHeaderSimple />`
4. Вы крутой :)

В 4-й версии библиотеки первых двух шагов не будет, PanelHeaderSimple переименуется в PanelHeader, а текущий PanelHeader
будет удален.

```jsx
<View activePanel="panelheader" header={false}>
  <Panel id="panelheader" separator={false}>
    <PanelHeaderSimple
      left={<PanelHeaderBack />}
      right={<PanelHeaderButton><Icon24MoreHorizontal /></PanelHeaderButton>}
    >
      Запись
    </PanelHeaderSimple>
  </Panel>
</View>
```

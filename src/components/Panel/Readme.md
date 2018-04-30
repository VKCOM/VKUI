Компонент для создания панели. Передается внутрь View. Панель состоит из двух частей – шапка и контент. Все, что передано внутрь Panel как свойство children, является контентом. Для отрисовки шапки есть специальное поле header:

```js static
  <Panel id="panelId" header={{ left: <SomeLeftIcon />, title: "Panel title", right: <SomeRightIcon /> }}>
    Content
  </Panel>
```

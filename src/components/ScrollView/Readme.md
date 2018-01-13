Компонент для создания панели. Передается внутрь View. Панель состоит из двух частей – шапка и контент. Все, что передано внутрь ScrollView как свойство children, является контентом. Для отрисовки шапки есть специальное поле header:

```js static
  <ScrollView id="panelId" header={{ left: <SomeLeftIcon />, title: "Panel title", right: <SomeRightIcon /> }}>
    Content
  </ScrollView>
```

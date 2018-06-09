Компонент для отрисовки шапки внутри [Panel](#panel). В качестве children принимает то, что будет находиться в центре.
Это может быть текст, элемент или [Search](#search). По бокам располагаются управляющие кнопки. Более подробно об этих
кнопках можно почитать [тут](#headerbutton).

```
<View activePanel="community-create">
  <Panel id="community-create">
    <PanelHeader
      left={<HeaderButton>{osname === IOS ? <Icon28Chevron_back /> : <Icon24Back />}</HeaderButton>}
      addon={<HeaderButton>Назад</HeaderButton>}
    >
      Настройки
    </PanelHeader>
  </Panel>
</View>
```

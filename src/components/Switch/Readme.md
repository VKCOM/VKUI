Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  <View activePanel="switch">
    <Panel id="switch">
      <PanelHeader>
        Switch
      </PanelHeader>
      <Group>
        <Cell asideContent={<Switch />}>
          Комментарии к записям
        </Cell>
        <Cell asideContent={<Switch defaultChecked />}>
          Ссылки
        </Cell>
        <Cell asideContent={<Switch disabled />}>
          Фотоальбомы
        </Cell>
      </Group>
    </Panel>
  </View>
```

Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="switch">
  <Panel id="switch">
    <PanelHeader>Switch</PanelHeader>
    <Group>
      <SimpleCell Component="label" after={<Switch />}>
        Комментарии к записям
      </SimpleCell>
      <SimpleCell Component="label" after={<Switch defaultChecked />}>
        Ссылки
      </SimpleCell>
      <SimpleCell Component="label" disabled after={<Switch disabled />}>
        Фотоальбомы
      </SimpleCell>
    </Group>
    <Group header={<Header mode="secondary">Компактный вид</Header>}>
      <AdaptivityProvider sizeY="compact">
        <SimpleCell Component="label" after={<Switch />}>
          Комментарии к записям
        </SimpleCell>
        <SimpleCell Component="label" after={<Switch defaultChecked />}>
          Ссылки
        </SimpleCell>
        <SimpleCell Component="label" disabled after={<Switch disabled />}>
          Фотоальбомы
        </SimpleCell>
      </AdaptivityProvider>
    </Group>
  </Panel>
</View>
```

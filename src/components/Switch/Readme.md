Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  <View activePanel="switch">
    <Panel id="switch">
      <PanelHeader>
        Switch
      </PanelHeader>
      <Group>
        <Cell disabled after={<Switch />}>
          Комментарии к записям
        </Cell>
        <Cell disabled after={<Switch defaultChecked />}>
          Ссылки
        </Cell>
        <Cell disabled after={<Switch disabled />}>
          Фотоальбомы
        </Cell>
      </Group>
      <Group header={<Header mode="secondary">Компактный вид</Header>}>
        <AdaptivityProvider sizeY="compact">
          <Cell disabled after={<Switch />}>
            Комментарии к записям
          </Cell>
          <Cell disabled after={<Switch defaultChecked />}>
            Ссылки
          </Cell>
          <Cell disabled after={<Switch disabled />}>
            Фотоальбомы
          </Cell>
        </AdaptivityProvider>
      </Group>
    </Panel>
  </View>
```

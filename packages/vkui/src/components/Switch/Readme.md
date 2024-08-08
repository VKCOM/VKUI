Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="switch">
  <Panel id="switch">
    <PanelHeader>Switch</PanelHeader>
    <Group>
      <SelectionControl>
        <SelectionControl.Label>Комментарии к записям</SelectionControl.Label>
        <Switch />
      </SelectionControl>

      <SelectionControl>
        <SelectionControl.Label>Ссылки</SelectionControl.Label>
        <Switch defaultChecked />
      </SelectionControl>

      <SelectionControl disabled>
        <SelectionControl.Label>Фотоальбомы</SelectionControl.Label>
        <Switch disabled />
      </SelectionControl>
    </Group>
  </Panel>
</View>
```

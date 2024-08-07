Компонент для создания переключателей

```jsx { "props": { "layout": false, "adaptivity": true } }
<Group>
  <SelectionControl>
    <Checkbox.Input />
    <SelectionControl.Label description="Description">Title</SelectionControl.Label>
  </SelectionControl>
  <SelectionControl>
    <Radio.Input />
    <SelectionControl.Label description="Description">Title</SelectionControl.Label>
  </SelectionControl>
  <SelectionControl>
    <SelectionControl.Label description="Description">Title</SelectionControl.Label>
    <Switch />
  </SelectionControl>
</Group>
```

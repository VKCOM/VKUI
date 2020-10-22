Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="input">
  <Panel id="input">
    <PanelHeader>
      Input
    </PanelHeader>
    <Group>
      <FormItem top="Фамилия">
        <Input type="text" defaultValue="Петров" />
      </FormItem>
      <FormItem>
        <Input type="text" defaultValue="Иванов" align="center" />
      </FormItem>
      <FormItem>
        <Input type="text" defaultValue="Сидоров" align="right" />
      </FormItem>
    </Group>
  </Panel>
</View>
```

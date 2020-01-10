Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="input">
  <Panel id="input">
    <PanelHeader>
      Input
    </PanelHeader>
    <FormLayout>
      <FormLayoutGroup top="Фамилия">
        <Input type="text" defaultValue="Петров" />
        <Input type="text" defaultValue="Иванов" align="center" />
        <Input type="text" defaultValue="Сидоров" align="right" />
      </FormLayoutGroup>
    </FormLayout>
  </Panel>
</View>
```

Надстройка над `<input type="radio" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>Radio</PanelHeader>
      <FormLayout>
        <div>
          <Radio name="radio" value="1" description="Lorem ipsum dolor sit amet, consectetur." defaultChecked>First</Radio>
          <Radio name="radio" value="2">Second</Radio>
          <Radio name="radio" value="3" disabled>Third (disabled)</Radio>
        </div>
      </FormLayout>
    </Panel>
  </View>
```

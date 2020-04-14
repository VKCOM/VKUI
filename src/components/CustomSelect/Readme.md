Надстройка над `SelectMimicry`. Компонент принимает все валидные для этого элемента свойства + options

```jsx
<View activePanel="сustomSelect">
  <Panel id="сustomSelect">
    <PanelHeader>
      CustomSelect
    </PanelHeader>
      <FormLayout>
        <CustomSelect
          placeholder="Не выбрано"
          options={new Array(20).fill({}).map((item, index) => ({ label: String(index), value: String(index) }))}
        />
      </FormLayout>
  </Panel>
</View>
```

Принимает те же свойства, что и обычный слайдер, за исключением `value` и `defaultValue`.
Они должны переданы в виде массива `[startValue, endValue]`. `onChange` так же возвращает подобный массив.

```jsx
<View activePanel="slider">
  <Panel id="slider">
    <PanelHeader>RangerSlider</PanelHeader>
    <Group>
      <FormItem top="Uncontrolled">
        <RangeSlider min={10} max={20} step={1} defaultValue={[12, 16]} />
      </FormItem>
      <FormItem top="Disabled">
        <RangeSlider min={10} max={20} step={1} defaultValue={[12, 16]} disabled />
      </FormItem>
    </Group>
  </Panel>
</View>
```

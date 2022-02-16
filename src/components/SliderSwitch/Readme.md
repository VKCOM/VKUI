> **Deprecated:** этот компонент устарел и будет удален в 5.0.0.
>
> Используйте [`SegmentedControl`](#/SegmentedControl).

```jsx
<View activePanel="progress">
  <Panel id="progress">
    <PanelHeader>SliderSwitch</PanelHeader>
    <Group>
      <FormItem top="Пол">
        <SliderSwitch
          options={[
            {
              name: "Мужской",
              value: "male",
            },
            {
              name: "Женский",
              value: "female",
            },
          ]}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```

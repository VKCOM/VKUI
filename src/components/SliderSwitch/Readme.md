```jsx
<View activePanel="sliderswitch">
  <Panel id="sliderswitch">
    <PanelHeader>SliderSwitch</PanelHeader>
    <Group>
      <FormItem top="Пол">
        <SliderSwitch
          options={[
            { name: "Мужской", value: "male" },
            { name: "Женский", value: "female" },
          ]}
        />
      </FormItem>
      <FormItem top="Возраст">
        <SliderSwitch
          options={[
            { name: "до 18", value: "18" },
            { name: "18-24", value: "18-24" },
            { name: "25-34", value: "25-34" },
            { name: "35-44", value: "35-44" },
            { name: "45 +", value: "45" },
          ]}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```

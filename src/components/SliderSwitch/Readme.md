```jsx
<View activePanel="sliderswitch">
  <Panel id="sliderswitch">
    <PanelHeader>SliderSwitch</PanelHeader>
    <Group>
      <FormItem top="Пол">
        <SliderSwitch
          items={[
            { title: "Мужской", value: "male" },
            { title: "Женский", value: "female" },
          ]}
        />
      </FormItem>
      <FormItem top="Возраст">
        <SliderSwitch
          items={[
            { title: "до 18", value: "18" },
            { title: "18-24", value: "18-24" },
            { title: "25-34", value: "25-34" },
            { title: "35-44", value: "35-44" },
            { title: "45 +", value: "45" },
          ]}
        />
      </FormItem>
    </Group>
  </Panel>
</View>
```

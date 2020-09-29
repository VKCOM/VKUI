```
  <View activePanel="progress">
    <Panel id="progress">
      <PanelHeader>
        SliderSwitch
      </PanelHeader>
      <FormItem top="Пол">
        <SliderSwitch 
          options={[
            {
              name: 'Мужской',
              value: 'male',
            },
            {
              name: 'Женский',
              value: 'female',
            },
          ]}
        />
      </FormItem>
    </Panel>
  </View>
```

```
  <View activePanel="progress">
    <Panel id="progress">
      <PanelHeader>
        SliderSwitch
      </PanelHeader>
      <FormLayout>
        <SliderSwitch 
          top="Пол"
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
      </FormLayout>
    </Panel>
  </View>
```

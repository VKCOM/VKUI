```jsx
  <View activePanel="progress">
    <Panel id="progress">
      <PanelHeader>
        SliderSwitch
      </PanelHeader>
      <Group>
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
      </Group>
    </Panel>
  </View>
```

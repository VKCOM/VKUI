Здесь будет документация по `RadioGroup`!

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>RadioGroup</PanelHeader>
      <Group>
        <FormLayout>
          <FormItem top="Откуда списать">
            <Radio name="radio" value="1" description="Баланс 7 320 ₽" defaultChecked>
              VK Pay  
            </Radio>
            <Radio name="radio" value="2">Mastercard **** 1234</Radio>
            <Radio name="radio" value="3" description="Заблокирована" disabled>Visa **** 4321</Radio>
          </FormItem>
        </FormLayout>
      </Group>
    </Panel>
  </View>
```

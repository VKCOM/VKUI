Надстройка над `<input type="radio" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>Radio</PanelHeader>
    <Group>
      <FormLayout>
        <FormItem top="Откуда списать">
          <Radio name="radio" value="1" description="Баланс 7 320 ₽" defaultChecked>
            VK Pay
          </Radio>
          <Radio name="radio" value="2">
            Mastercard **** 1234
          </Radio>
          <Radio
            name="radio"
            value="3"
            description="Заблокирована"
            disabled
            titleAfter={<Icon12Lock />}
          >
            Visa **** 4321
          </Radio>
        </FormItem>
      </FormLayout>
    </Group>
  </Panel>
</View>
```

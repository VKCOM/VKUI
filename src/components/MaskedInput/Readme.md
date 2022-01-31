Надстройка над [`Input`](/Input). Компонент позволяет задававать маску для `<input />`. [Больше примеров](https://github.com/s-yadav/react-number-format)

```jsx
<View activePanel="MaskedInput">
  <Panel id="MaskedInput">
    <PanelHeader>MaskedInput</PanelHeader>
    <Group>
      <FormItem top="Телефон">
        <MaskedInput format="+1 (###) ###-####" mask="_" />
      </FormItem>
      <FormItem top="Кредитная карта">
        <MaskedInput format="#### #### #### ####" />
      </FormItem>
      <FormItem top="Валюта">
        <MaskedInput thousandSeparator={true} prefix={"$"} />
      </FormItem>
    </Group>
  </Panel>
</View>
```

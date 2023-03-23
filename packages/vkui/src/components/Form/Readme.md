Компонент-надстройка над `form`. Принимает все валидные для этого элемента свойства.

По умолчанию в `onSubmit` происходит `e.preventDefault()`, чтобы избежать перезагрузки страницы. Вы можете управлять этим поведением с помощью свойства `preventDefault`.

```jsx
const Example = () => {
  const onSubmit = () => {
    console.log('Способ оплаты сохранен!');
  };

  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>Form</PanelHeader>
        <Group>
          <Form onSubmit={onSubmit}>
            <FormItem top="Откуда списать">
              <Radio name="radio" value="1" description="Баланс 7 320 ₽" defaultChecked>
                VK Pay
              </Radio>
              <Radio name="radio" value="2">
                Mastercard **** 1234
              </Radio>
              <Radio name="radio" value="3" description="Заблокирована" disabled>
                Visa **** 4321
              </Radio>
            </FormItem>
            <FormItem>
              <Button stretched size="l" type="submit">
                Сохранить способ оплаты
              </Button>
            </FormItem>
          </Form>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

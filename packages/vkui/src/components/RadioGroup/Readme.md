Помогает сгруппировать несколько `Radio`, расположив их по горизонтали или вертикали.

```jsx
const Example = () => {
  const onFitSizeSubmit = () => {
    console.log('Посадка и размер сохранены!');
  };

  const onPaymentMethodSubmit = () => {
    console.log('Способ оплаты сохранен!');
  };
  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>RadioGroup</PanelHeader>
        <Group header={<Header>Внутри FormItem</Header>}>
          <Form onSubmit={onFitSizeSubmit}>
            <FormItem top="Выберите посадку">
              <RadioGroup>
                <Radio name="fit" value="classic" defaultChecked>
                  Classic
                </Radio>
                <Radio name="fit" value="regular">
                  Regular
                </Radio>
                <Radio name="fit" value="slim" disabled description="Нет в наличии">
                  Slim
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem top="Выберите размер">
              <RadioGroup mode="horizontal">
                <Radio name="size" value="sm">
                  S-M
                </Radio>
                <Radio name="size" value="lxl">
                  L-XL
                </Radio>
              </RadioGroup>
            </FormItem>
            <FormItem>
              <Button size="l" stretched type="submit">
                Сохранить посадку и размер
              </Button>
            </FormItem>
          </Form>
        </Group>
        <Group header={<Header>Без FormItem</Header>}>
          <Form onSubmit={onPaymentMethodSubmit}>
            <RadioGroup mode="horizontal">
              <Radio name="pay" value="cash">
                Оплата наличными
              </Radio>
              <Radio name="pay" value="card">
                Оплата картой
              </Radio>
            </RadioGroup>
            <RadioGroup>
              <Radio name="delivery" value="courier">
                Курьерская доставка
              </Radio>
              <Radio name="delivery" value="pickup">
                Доставка в пункт выдачи заказов
              </Radio>
            </RadioGroup>
            <FormItem>
              <Button size="l" stretched type="submit">
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

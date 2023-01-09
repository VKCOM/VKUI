Помогает сгруппировать несколько `Radio`, расположив их по горизонтали или вертикали.

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>RadioGroup</PanelHeader>
    <Group header={<Header>Внутри FormItem</Header>}>
      <FormLayout>
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
      </FormLayout>
    </Group>
    <Group header={<Header>Без FormItem</Header>}>
      <FormLayout>
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
      </FormLayout>
    </Group>
  </Panel>
</View>
```

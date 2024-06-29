Помогает сгруппировать несколько `Radio`, расположив их по горизонтали или вертикали.

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- У элемента уже задан атрибут `role="radiogroup"`
- Рекомендуется предавать в компонент атрибуты `aria-labelledby`, `aria-label` и `aria-describedby` для предоставления
  дополнительной информации об элементе
- Рекомендуется указать атрибут `aria-required=true`, для того чтобы указать, что хотя бы один radio-button
  должен быть выбран

Для корректной работы компонента Radio следуйте рекомендациям из раздела "Цифровая доступность" компонента [Radio](#!/Radio)

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>RadioGroup</PanelHeader>
    <Group header={<Header>Внутри FormItem</Header>}>
      <FormLayoutGroup>
        <FormItem top="Выберите посадку" topId="placement">
          <RadioGroup aria-labelledby="placement">
            <Radio name="fit" value="classic">
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
        <FormItem top="Выберите размер" topId="size">
          <RadioGroup mode="horizontal" aria-labelledby="size">
            <Radio name="size" value="sm">
              S-M
            </Radio>
            <Radio name="size" value="lxl">
              L-XL
            </Radio>
          </RadioGroup>
        </FormItem>
      </FormLayoutGroup>
    </Group>
    <Group header={<Header>Без FormItem</Header>}>
      <FormLayoutGroup>
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
      </FormLayoutGroup>
    </Group>
  </Panel>
</View>
```

Надстройка над `<input type="radio" />`. Компонент принимает все валидные для этого элемента свойства.

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо соблюдать следующие правила:
<br/>

- Использовать отображение компонента `Radio` совместно с оберткой `RadioGroup`, или у родителя должна быть роль `radiogroup`
- В реализации испольуется нативный `input type="radio"` для корректной работы скринридера
- Рекомендуется предавать в компонент атрибуты `aria-labelledby`, `aria-label` и `aria-describedby` для предоставления
  дополнительной информации об элементе

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>Radio</PanelHeader>
    <Group>
      <FormLayoutGroup>
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
      </FormLayoutGroup>
    </Group>
  </Panel>
</View>
```

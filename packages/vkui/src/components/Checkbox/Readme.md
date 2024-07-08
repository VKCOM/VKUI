Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

## Цифровая доступность (a11y)

Для корректной работы скринридеров необходимо соблюдать следующие правила:

- Рекомендуется предавать в компонент атрибуты `aria-labelledby`, `aria-label` и `aria-describedby` для предоставления
  дополнительной информации об элементе
- В реализации используется нативный `input type="checkbox"` для корректной работы скринридера

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>Checkbox</PanelHeader>
    <Group>
      <FormItem>
        <Checkbox defaultChecked>Я участвую в сборе</Checkbox>
        <Checkbox description="Все пользователи получат уведомление">Закрепить сообщение</Checkbox>
        <Checkbox checked disabled titleAfter={<Icon12Lock />}>
          Автоматически зачислять на карту
        </Checkbox>
      </FormItem>
    </Group>
  </Panel>
</View>
```

```jsx { "props": { "layout": false, "iframe": false } }
<Flex gap="2xl" margin="auto">
  <Checkbox defaultChecked />
  <Checkbox />
  <Checkbox defaultChecked />
  <Checkbox indeterminate />
  <Checkbox defaultIndeterminate />
</Flex>
```

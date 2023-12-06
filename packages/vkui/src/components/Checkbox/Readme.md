Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

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
<Flex gap={16} margin="auto">
  <Checkbox defaultChecked />
  <Checkbox />
  <Checkbox defaultChecked />
  <Checkbox indeterminate />
  <Checkbox defaultIndeterminate />
</Flex>
```

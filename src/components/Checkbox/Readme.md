Надстройка над `<input type="checkbox" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>Checkbox</PanelHeader>
      <Group>
        <FormItem>
          <Checkbox defaultChecked>Я участвую в сборе</Checkbox>
          <Checkbox>Закрепить сообщение с запросом</Checkbox>
          <Checkbox description="Карта должна быть указана в настройках вашего аккаунта">Автоматически зачислять на карту</Checkbox>
        </FormItem>
      </Group>
    </Panel>
  </View>
```

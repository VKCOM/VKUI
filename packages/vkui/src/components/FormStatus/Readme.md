Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности
указать на конкретное поле. Заголовок и текст опциональны.

```jsx
<View activePanel="form-status">
  <Panel id="form-status">
    <PanelHeader>Статус формы</PanelHeader>
    <Group>
      <Div>
        <FormStatus header="Некорректный мобильный номер" mode="error">
          Необходимо корректно ввести номер в международном формате
        </FormStatus>
      </Div>
      <FormItem htmlFor="phone" top="Мобильный телефон">
        <Input id="phone" defaultValue="+7 12 344 15 48" />
      </FormItem>
      <FormItem htmlFor="code" top="Код подтверждения">
        <Input id="code" />
      </FormItem>
    </Group>
  </Panel>
</View>
```

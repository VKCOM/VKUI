Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности
указать на конкретное поле. Заголовок и текст опциональны.

```jsx
<View activePanel="form-status">
  <Panel id="form-status">
    <PanelHeader>
      Статус формы
    </PanelHeader>
    <FormLayout>
      <FormStatus header="Некорректный мобильный номер" mode="error">
        Необходимо корректно ввести номер в международном формате
      </FormStatus>
      <Input top="Мобильный телефон" defaultValue="+7 12 344 15 48" />
      <Input top="Код подтверждения" />
    </FormLayout>
  </Panel>
</View>
```

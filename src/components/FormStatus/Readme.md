Компонент используется для отображения статуса формы. Например, когда в форме допущена ошибка, и нет возможности
указать на конкретное поле. Заголовок и текст опциональны.

```
<View activePanel="form-status">
  <Panel id="form-status" theme="white">
    <PanelHeader>
      Статус формы
    </PanelHeader>
    <FormLayout>
      <FormStatus title="Некорректный мобильный номер" state="error">
        Необходимо корректно ввести номер в международном формате
      </FormStatus>
      <Input top="Мобильный телефон" defaultValue="+7 12 344 15 48" />
      <Input top="Код подтверждения" />
    </FormLayout>
  </Panel>
</View>
```

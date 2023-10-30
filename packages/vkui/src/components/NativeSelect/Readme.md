Надстройка над `<select />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="native-select">
  <Panel id="native-select">
    <PanelHeader>NativeSelect</PanelHeader>
    <Group>
      <FormItem
        top="Выберите пол"
        topId="label-id"
        htmlFor="select-id"
        bottom="Пример селекта с возможностью выбрать пол пользователя"
        bottomId="select-description-id"
      >
        <NativeSelect
          id="select-id"
          aria-labelledby="label-id"
          aria-describedby="select-description-id"
        >
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </NativeSelect>
      </FormItem>
    </Group>
  </Panel>
</View>
```

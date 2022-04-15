Надстройка над `<textarea />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>Textarea</PanelHeader>
    <Group>
      <FormItem top="Любимая музыка">
        <Textarea placeholder="Группы, исполнители, продюсеры" />
      </FormItem>
      <FormItem top="Увлечения">
        <Textarea
          cols={4}
          placeholder="Музыка, спорт"
          defaultValue="Музыка\nСпорт\nФотография\nПлавание\nПрограммирование"
        />
      </FormItem>
      <FormItem top="Прикидываемся Input">
        <Textarea rows={1} placeholder="Once upon a time" />
      </FormItem>
    </Group>
  </Panel>
</View>
```

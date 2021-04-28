Надстройка над `<textarea />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        Textarea
      </PanelHeader>
      <Group>
        <FormItem top="Любимая музыка">
          <Textarea placeholder="Группы, исполнители, продюсеры" />
        </FormItem>
      </Group>
    </Panel>
  </View>
```

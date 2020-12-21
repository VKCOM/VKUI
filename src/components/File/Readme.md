Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства.
`File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        File
      </PanelHeader>
      <Group>
        <FormItem top="Загрузите ваше фото">
          <File before={<Icon24Camera />} controlSize="m">
            Открыть галерею
          </File>
        </FormItem>
        <FormItem top="Загрузите документы">
          <File before={<Icon24Document />} controlSize="l" mode="secondary" />
        </FormItem>
      </Group>
    </Panel>
  </View>
```

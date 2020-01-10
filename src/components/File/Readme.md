Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства.
`File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        File
      </PanelHeader>
      <FormLayout>
        <File top="Загрузите ваше фото" before={<Icon24Camera />} size="l">
          Открыть галерею
        </File>
        <File top="Загрузите документы" before={<Icon24Document />} size="xl" mode="secondary" />
      </FormLayout>
    </Panel>
  </View>
```

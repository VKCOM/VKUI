Надстройка над `<input type="file" />`. Под капотом использует `Button` для визуализации. Принимает все валидные для `<input type="file" />` и `Button` свойства.

```jsx
<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>File</PanelHeader>
    <Group>
      <FormItem top="Загрузите ваше фото">
        <File before={<Icon24Camera role="presentation" />} size="m">
          Открыть галерею
        </File>
      </FormItem>
      <FormItem top="Загрузите документы">
        <File before={<Icon24Document role="presentation" />} size="l" mode="secondary" />
      </FormItem>
    </Group>
  </Panel>
</View>
```

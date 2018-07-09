File под капотом использует [Button](https://vkcom.github.io/vkui-styleguide/#button),
поэтому в качестве свойств можно пробрасывать все свойства, которые поддерживает Button.

```jsx
  <View activePanel="panel">
    <Panel id="panel" theme="white">
      <PanelHeader>
        File
      </PanelHeader>
      <FormLayout>
        <File top="Загрузите ваше фото" before={<Icon24Camera />} size="l">
          Открыть галерею
        </File>
        <File top="Загрузите документы" before={<Icon24Document />} size="xl" level="2" />
      </FormLayout>
    </Panel>
  </View>
```

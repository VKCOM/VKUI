Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test" header={false}>
  <Panel id="test" separator={false}>
    <PanelHeaderSimple>Text</PanelHeaderSimple>
    <Div>
      <Text weight="regular" style={{ marginBottom: 10 }}>Text regular</Text>
      <Text weight="medium" style={{ marginBottom: 10 }}>Text medium</Text>
      <Text weight="semibold" style={{ marginBottom: 10 }}>Text semibold</Text>
    </Div>
  </Panel>
</View>
```

Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test" header={false}>
  <Panel id="test" separator={false}>
    <PanelHeaderSimple>Headline</PanelHeaderSimple>
    <Div>
      <Headline weight="regular" style={{ marginBottom: 16 }}>Headline regular</Headline>
      <Headline weight="medium" style={{ marginBottom: 16 }}>Headline medium</Headline>
      <Headline weight="semibold" style={{ marginBottom: 16 }}>Headline semibold</Headline>
    </Div>
  </Panel>
</View>
```

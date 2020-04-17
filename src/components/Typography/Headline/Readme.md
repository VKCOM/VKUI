Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test" header={false}>
  <Panel id="test" separator={false}>
    <PanelHeaderSimple>Headline</PanelHeaderSimple>
    <Div>
      <Headline weight="regular" style={{ marginBottom: 10 }}>Headline regular</Headline>
      <Headline weight="medium" style={{ marginBottom: 10 }}>Headline medium</Headline>
      <Headline weight="semibold" style={{ marginBottom: 10 }}>Headline semibold</Headline>
    </Div>
  </Panel>
</View>
```

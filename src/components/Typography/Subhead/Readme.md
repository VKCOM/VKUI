Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test" header={false}>
  <Panel id="test" separator={false}>
    <PanelHeaderSimple>Subhead</PanelHeaderSimple>
    <Div>
      <Subhead weight="regular" style={{ marginBottom: 16 }}>Subhead regular</Subhead>
      <Subhead weight="medium" style={{ marginBottom: 16 }}>Subhead medium</Subhead>
      <Subhead weight="semibold" style={{ marginBottom: 16 }}>Subhead semibold</Subhead>
      <Subhead weight="bold" style={{ marginBottom: 16 }}>Subhead bold</Subhead>
    </Div>
  </Panel>
</View>
```

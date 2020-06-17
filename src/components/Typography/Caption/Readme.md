Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test">
  <Panel id="test">
    <PanelHeader>Caption</PanelHeader>
    <Div>
      <Caption level="1" weight="semibold" style={{ marginBottom: 16 }}>Caption 1 semibold</Caption>
      <Caption level="1" weight="bold" style={{ marginBottom: 16 }}>Caption 1 bold</Caption>
      <Caption level="1" weight="heavy" style={{ marginBottom: 16 }}>Caption 1 heavy</Caption>
      <Caption level="1" weight="heavy" caps style={{ marginBottom: 16 }}>Caption CAPS 1 heavy</Caption>
      <Caption level="2" weight="regular" style={{ marginBottom: 16 }}>Caption 2 regular</Caption>
      <Caption level="2" weight="semibold" style={{ marginBottom: 16 }}>Caption 2 semibold</Caption>
      <Caption level="2" weight="heavy" style={{ marginBottom: 16 }}>Caption 2 heavy</Caption>
      <Caption level="2" weight="heavy" caps style={{ marginBottom: 16 }}>Caption CAPS 2 heavy</Caption>
      <Caption level="3" weight="regular" style={{ marginBottom: 16 }}>Caption 3 regular</Caption>
      <Caption level="3" weight="semibold" caps style={{ marginBottom: 16 }}>Caption CAPS 3 semibold</Caption>
      <Caption level="4" weight="regular" style={{ marginBottom: 16 }}>Caption 4 regular</Caption>
      <Caption level="4" weight="semibold" caps>Caption CAPS 4 semibold</Caption>
    </Div>
  </Panel>
</View>
```

Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`
* `heavy` превращается в `bold`
* `<Title level="3" />` превращается в `<Headline />`

```jsx
<View activePanel="test">
  <Panel id="test">
    <PanelHeader>Title</PanelHeader>
    <Div>
      <Title level="1" weight="semibold" style={{ marginBottom: 16 }}>Title 1 semibold</Title>
      <Title level="1" weight="bold" style={{ marginBottom: 16 }}>Title 1 bold</Title>
      <Title level="1" weight="heavy" style={{ marginBottom: 16 }}>Title 1 heavy</Title>
      <Title level="2" weight="regular" style={{ marginBottom: 16 }}>Title 2 regular</Title>
      <Title level="2" weight="semibold" style={{ marginBottom: 16 }}>Title 2 semibold</Title>
      <Title level="2" weight="heavy" style={{ marginBottom: 16 }}>Title 2 heavy</Title>
      <Title level="3" weight="regular" style={{ marginBottom: 16 }}>Title 3 regular</Title>
      <Title level="3" weight="medium" style={{ marginBottom: 16 }}>Title 3 medium</Title>
      <Title level="3" weight="semibold">Title 3 semibold</Title>
    </Div>
  </Panel>
</View>
```

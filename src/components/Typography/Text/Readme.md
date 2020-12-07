Упрощения в Android-версии (происходят автоматически):
* `semibold` превращается в `medium`

```jsx
<View activePanel="test">
  <Panel id="test">
    <PanelHeader>Text</PanelHeader>
    <Group>
      <Div>
        <Text weight="regular" style={{ marginBottom: 16 }}>Text regular</Text>
        <Text weight="medium" style={{ marginBottom: 16 }}>Text medium</Text>
        <Text weight="semibold">Text semibold</Text>
      </Div>
    </Group>
  </Panel>
</View>
```

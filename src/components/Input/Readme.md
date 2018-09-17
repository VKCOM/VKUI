```jsx
<View activePanel="input">
  <Panel id="input" theme="white">
    <PanelHeader>
      Input
    </PanelHeader>
    <FormLayout>
      <FormLayoutGroup top="Фамилия">
        <Input type="text" defaultValue="Петров" />
        <Input type="text" defaultValue="Иванов" alignment="center" />
        <Input type="text" defaultValue="Сидоров" alignment="right" />
      </FormLayoutGroup>
    </FormLayout>
  </Panel>
</View>
```


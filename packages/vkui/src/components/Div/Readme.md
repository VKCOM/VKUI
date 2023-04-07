Компонент с установленными отступами, которые отличаются в зависимости от платформы. Необходим, когда есть какой-то
кастомный блок, у которого должны быть стандартные отступы.

```jsx
<View activePanel="div">
  <Panel id="div">
    <PanelHeader>Div</PanelHeader>
    <Group>
      <Div>
        <Button stretched mode="secondary" size="m">
          Edit Info
        </Button>
      </Div>
    </Group>
  </Panel>
</View>
```

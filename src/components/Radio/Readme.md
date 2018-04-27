```jsx
  <View activePanel="panel" header>
    <Panel id="panel" header={{ title: 'Radio' }}>
      <Group title="Old version">
        <List>
          <Radio name="radio" value="1" description="Lorem ipsum dolor sit amet, consectetur." defaultChecked>First</Radio>
          <Radio name="radio" value="2">Second</Radio>
          <Radio name="radio" value="3">Third</Radio>
        </List>
      </Group>
      
      <Group title="New version">
        <Radio v="new" name="radio" value="1" description="Lorem ipsum dolor sit amet, consectetur." defaultChecked>First</Radio>
        <Radio v="new" name="radio" value="2">Second</Radio>
        <Radio v="new" name="radio" value="3">Third</Radio>
      </Group>
    </Panel>
  </View>
```

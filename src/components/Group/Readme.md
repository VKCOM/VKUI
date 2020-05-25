Группа – базовый компонент для группировки контента по смыслу.

```jsx
  <View activePanel="group">
    <Panel id="group">
      <PanelHeader>
        Group
      </PanelHeader>
      <div>
        <Group header={<Header mode="secondary">Media Upload</Header>}>
          <SimpleCell after={<Switch defaultChecked/>}>
            Comppress Photos
          </SimpleCell>
          <SimpleCell after={<Switch/>}>
            Compress Videos
          </SimpleCell>
        </Group>
        <Group
          header={<Header mode="secondary">System settings</Header>}
          description="Allow access to location services to attach your location to messages, posts, photos and stories, to improve ads in your news feed and optimize content and friend suggestions"
          separator="show"
        >
          <SimpleCell indicator="While Using" expandable>
            Location
          </SimpleCell>
        </Group>
      </div>
      <Group header={<Header mode="secondary">Other</Header>}>
        <SimpleCell indicator="Wi-Fi" expandable>
          Autoplay Media
        </SimpleCell>
        <SimpleCell expandable>
          Stickers
        </SimpleCell>
      </Group>
    </Panel>
  </View>
```

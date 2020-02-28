Группа – базовый компонент для группировки контента по смыслу.

```jsx
  <View activePanel="group">
    <Panel id="group">
      <PanelHeader>
        Group
      </PanelHeader>
      <div>
        <Group header={<Header mode="secondary">Media Upload</Header>}>
          <Cell asideContent={<Switch defaultChecked/>}>
            Comppress Photos
          </Cell>
          <Cell asideContent={<Switch/>}>
            Compress Videos
          </Cell>
        </Group>
        <Group
          header={<Header mode="secondary">System settings</Header>}
          description="Allow access to location services to attach your location to messages, posts, photos and stories, to improve ads in your news feed and optimize content and friend suggestions"
          separator="show"
        >
          <Cell indicator="While Using" expandable>
            Location
          </Cell>
        </Group>
      </div>
      <Group header={<Header mode="secondary">Other</Header>}>
        <Cell indicator="Wi-Fi" expandable>
          Autoplay Media
        </Cell>
        <Cell expandable>
          Stickers
        </Cell>
      </Group>
    </Panel>
  </View>
```

Группа – базовый компонент для группировки контента по смыслу. Группы должны быть разделены компонентом
[Separator](https://vkcom.github.io/vkui-styleguide/#!/Separator).

```jsx
  <View activePanel="group">
    <Panel id="group">
      <PanelHeader>
        Group
      </PanelHeader>
      <Group header={<Header level="secondary">Media Upload</Header>}>
        <Cell asideContent={<Switch defaultChecked/>}>
          Comppress Photos
        </Cell>
        <Cell asideContent={<Switch/>}>
          Compress Videos
        </Cell>
      </Group>
      <Separator />
      <Group header={<Header level="secondary">System settings</Header>} description="Allow access to location services to attach your location to messages, posts, photos and stories, to improve ads in your news feed and optimize content and friend suggestions">
        <Cell indicator="While Using" expandable>
          Location
        </Cell>
      </Group>
      <Separator />
      <Group header={<Header level="secondary">Other</Header>}>
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

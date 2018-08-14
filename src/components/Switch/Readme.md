```
  <View activePanel="switch">
    <Panel id="switch">
      <PanelHeader>
        Switch
      </PanelHeader>
      <Group>
        <List>
          <Cell asideContent={<Switch />}>
            Комментарии к записям
          </Cell>
          <Cell asideContent={<Switch defaultChecked />}>
            Ссылки
          </Cell>
          <Cell asideContent={<Switch disabled />}>
            Фотоальбомы
          </Cell>
        </List>
      </Group>
    </Panel>
  </View>
```

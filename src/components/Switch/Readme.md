```
  <View activePanel="switch">
    <Panel id="switch">
      <PanelHeader>
        Switch
      </PanelHeader>
      <Group>
        <List>
          <ListItem asideContent={<Switch />}>
            Комментарии к записям
          </ListItem>
          <ListItem asideContent={<Switch defaultChecked />}>
            Ссылки
          </ListItem>
          <ListItem asideContent={<Switch disabled />}>
            Фотоальбомы
          </ListItem>
        </List>
      </Group>  
    </Panel>
  </View>
```

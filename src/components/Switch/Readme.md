```
  <View activePanel="switch" header>
    <ScrollView header={{ title: 'Switch' }} id="switch">
      <Group>
        <List>
          <ListItem asideContent={<Switch />}>
            Комментарии к записям
          </ListItem>
          <ListItem asideContent={<Switch checked />}>
            Ссылки
          </ListItem>
          <ListItem asideContent={<Switch disabled />}>
            Фотоальбомы
          </ListItem>
        </List>
      </Group>  
    </ScrollView>
  </View>
```

```jsx
  <View activePanel="avatar">
    <Panel id="avatar">
      <PanelHeader>Avatar</PanelHeader>
      <Group title="Standart size">
        <Div>
          <Entity
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"
            description="VKonktakte"
            title="Артур Стамбульцян"
          >
            <Button>Добавить</Button>
          </Entity>
        </Div>
      </Group>
      <Group title="Big avatar (80px)">
        <Div>
          <Entity
            photo="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg"
            description="VKonktakte"
            title="Артур Стамбульцян"
            avatarProps={{ size: 80 }}
          >
            <Button>Добавить</Button>
          </Entity>
        </Div>
      </Group>
      <Group title="Placeholder">
        <List>
          <ListItem
            before={<Avatar style={{ background: colors.blue }} size={28}><Icon16Add fill="#fff" /></Avatar>}
            description="Только от друзей друзей"
          >
            Заявки в друзья
          </ListItem>
          <ListItem
            before={<Avatar style={{ background: colors.red }} size={28}><Icon16Like fill="#fff" /></Avatar>}
            description="Только важные"
          >
            Отметки «Мне нравится»
          </ListItem>
        </List>
      </Group>
      <Group title="Using in ListItem">
        <List>
          <ListItem before={<Avatar><Icon28User /></Avatar>}>Артур Стамбульцян</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1" />}>Тимофей Чаптыков</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1" />}>Влад Анесов</ListItem>
        </List>
      </Group>
    </Panel>
  </View>
```

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
        <Div>
          <Entity
            description="Без аватарки"
            title="Пользователь"
            avatarProps={{ children: <Icon28User /> }}
          >
            <Button>Добавить</Button>
          </Entity>
        </Div>
      </Group>
      <Group title="Using in ListItem">
        <List>
          <ListItem before={<Avatar src="https://pp.userapi.com/c847016/v847016962/78cf1/JQV2b1aOA8M.jpg?ava=1" />}>Артур Стамбульцян</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c845121/v845121950/63c02/4hP61FL56YM.jpg?ava=1" />}>Тимофей Чаптыков</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c834100/v834100961/4f8f1/hjsBzq433co.jpg?ava=1" />}>Влад Анесов</ListItem>
        </List>
      </Group>
    </Panel>
  </View>
```

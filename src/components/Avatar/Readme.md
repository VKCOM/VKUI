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
      <Header>Типы</Header>
      <Group title="default" description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
        <List>
          <ListItem before={<Avatar src="https://pp.userapi.com/c625316/v625316293/347b7/DmD1VKYbwwI.jpg?ava=1" />}>Евгений Авсиевич</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c636327/v636327034/2be85/gt3uFFWTw-w.jpg?ava=1" />}>Татьяна Плуталова</ListItem>
          <ListItem before={<Avatar src="https://pp.userapi.com/c841629/v841629884/290ab/STZCXV5wZbg.jpg?ava=1" />}>Олег Илларианов</ListItem>
        </List>
      </Group>
      <Group title="app" description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
        <List>
          <ListItem before={<Avatar type="app" src="https://pp.userapi.com/c844616/v844616889/9ec4a/9Fk-RI7uchQ.jpg" />} description="Ролевая">Шторм онлайн</ListItem>
          <ListItem before={<Avatar type="app" src="https://pp.userapi.com/c848536/v848536020/18242/ZLjAYM59EqY.jpg" />} description="Настольная" multiline={false}>Шашки - 3 вида: шашки, уголки, поддавки</ListItem>
          <ListItem before={<Avatar type="app" src="https://pp.userapi.com/c849028/v849028348/1b353/Na_GRlqgRNM.jpg" />} description="Головолмка">Вега Микс на даче</ListItem>
        </List>
      </Group>
      <Group title="image" description="Используется для остальных случаев. Например, для музыки и плейлистов.">
        <List>
          <ListItem before={<Avatar type="image" src="https://pp.userapi.com/c841025/v841025503/617f7/bkN1Def0s14.jpg" />} description="Arctic Monkeys" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>I Wanna Be Yours</ListItem>
          <ListItem before={<Avatar type="image" src="https://pp.userapi.com/c845220/v845220642/7cacc/XzhH5b7FSKY.jpg" />} description="Лето (звери)" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>6 утра</ListItem>
          <ListItem before={<Avatar type="image" src="https://pp.userapi.com/c837628/v837628453/39175/4JRjMaFvCrw.jpg" />} description="Depeche Mode" asideContent={<Icon24MoreHorizontal fill={colors.accentBlue}/>}>Enjoy the Silence</ListItem>
        </List>
      </Group>
    </Panel>
  </View>
```

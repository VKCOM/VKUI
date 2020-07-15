```jsx
<View activePanel="information_cell">
  <Panel id="information_cell">
    <PanelHeader>
      Ячейка информации
    </PanelHeader>

    <Group>
      <MiniInfoCell
        before={<Icon20ArticleOutline />}
        multiline
      >
        ВКонтакте начинался как сайт для выпускников вузов, а сейчас это огромная экосистема с безграничными возможностями и миллионами пользователей.
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20FollowersOutline />}
        after={
          <UsersStack
            photos={[
              getAvatarUrl('user_mm'),
              getAvatarUrl('user_arthurstam'),
              getAvatarUrl('user_xyz'),
            ]}
          />
        }
      >
        514,7K подписчиков · 77 друзей
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20GlobeOutline />}
      >
        <Link href="https://vk.com/team">vk.com/team</Link>
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20WorkOutline />}
        after={<Avatar size={24} src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1" />}
      >
        Место работы: Команда ВКонтакте
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20WorkOutline />}
        mode="add"
        onClick={() => console.log('Указать место учёбы')}
      >
        Укажите место учёбы
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20Info />}
        mode="more"
        onClick={() => console.log('Показать подробную информацию')}
      >
        Подробная информация
      </MiniInfoCell>

    </Group>
  </Panel>
</View>
```

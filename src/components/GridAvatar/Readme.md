Отображение нескольких аватаров в сетке от 1 до 4 элементов. Внутри использует компонент [Avatar](#!/Avatar).


```jsx
  <View activePanel="gridavatar">
    <Panel id="gridavatar">
      <PanelHeader>GridAvatar</PanelHeader>
      <Group>
        <SimpleCell
          description="Нет участников"
          before={<GridAvatar />}
        >
          Тайное общество
        </SimpleCell>
        <SimpleCell
          description="1 участник"
          before={<GridAvatar src={[getAvatarUrl('user_ji')]} />}
        >
         Тайное общество
        </SimpleCell>
        <SimpleCell
          description="2 участника"
          before={<GridAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]} />}
        >
          Тайное общество
        </SimpleCell>
        <SimpleCell
          description="3 участника"
          before={<GridAvatar src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]} />}
        >
          Тайное общество
        </SimpleCell>
        <SimpleCell
          description="12 участников"
          before={<GridAvatar src={[getAvatarUrl('user_ilyagrshn'), getAvatarUrl('user_tc'), getAvatarUrl('user_lihachyov'), getAvatarUrl('user_va')]} />}
        >
          Тайное общество
        </SimpleCell>
      </Group>
    </Panel>
  </View>
```

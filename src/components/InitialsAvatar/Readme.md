Компонент для отображения текстовых аватаров на фоне градиента (например, когда у пользователя нет установленного изображения). Для лучшего отображения, рекомендуется использовать длину текста <b>не более 2 символов</b>. Внутри использует компонент [Avatar](#!/Avatar).<br />
ВКонтакте использует формулу `user_id % 6 + 1` для определения градиента пользователя. Например, у пользователя 106 будет 5 цвет градиента.

```jsx
  <View activePanel="initialsavatar">
    <Panel id="initialsavatar">
      <PanelHeader>InitialsAvatar</PanelHeader>
      <Group>
        {getRandomUsers(6).map((user) => (
          <SimpleCell
            key={user.id}
            description="VK"
            before={<InitialsAvatar gradientColor={user.id % 6 + 1}>{user.initials}</InitialsAvatar>}
          >
            {user.name}
          </SimpleCell>
        ))}
      </Group>
    </Panel>
  </View>
```

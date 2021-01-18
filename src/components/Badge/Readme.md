Используется для отображения информации рядом с именем пользователя.

```jsx
<View activePanel="badge">
  <Panel id="badge">
    <PanelHeader>Badges</PanelHeader>
    
      <Group header={<Header mode="secondary">Друзья</Header>}>
        <SimpleCell before={<Avatar size={48} src={getAvatarUrl('user_arthurstam')} />} badge={<Badge><Icon12Verified/></Badge>} description="Команда ВКонтакте" after={<Icon28MessageOutline />}
        >Артур Стамбульцян</SimpleCell>

        <SimpleCell multiline before={<Avatar size={48} src={getAvatarUrl('user_arthurstam')} />} badge={<Badge><Icon12Verified/></Badge>} description="Бот" after={<Icon28MessageOutline />}
        >Константин Стамбульцян</SimpleCell>
      </Group>
    
      <Group header={<Header mode="secondary">Новый пункт меню</Header>}>
        <Cell expandable before={<Icon28Notifications />} badge={<Badge />}>Уведомления</Cell>
      </Group>
  </Panel>
</View>
```

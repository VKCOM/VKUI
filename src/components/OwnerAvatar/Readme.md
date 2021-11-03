Обертка для `<Avatar />`, позволяющая отображать статус онлайна и рендерить текстовый аватар

```jsx
  <View activePanel="owneravatar">
    <Panel id="owneravatar">
      <PanelHeader>OwnerAvatar</PanelHeader>
      <Group>
        <Header mode="secondary">Статус онлайна</Header>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar src={getAvatarUrl('user_wayshev')} online={true} />}
        >
          Иван Барышев
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar src={getAvatarUrl('user_wayshev')} online="mobile" />}
        >
          Иван Барышев
        </SimpleCell>
      </Group>
      <Group>
        <Header mode="secondary">Сетка</Header>
        <SimpleCell
          description="128 участников"
          before={<OwnerAvatar src={[getAvatarUrl('user_wayshev'), getAvatarUrl('user_mm')]} />}
        >
          Тайное общество
        </SimpleCell>
        <SimpleCell
          description="92 участника"
          before={<OwnerAvatar src={[getAvatarUrl('user_arthurstam'), getAvatarUrl('user_xyz'), getAvatarUrl('user_ox')]} />}
        >
          Тайное общество
        </SimpleCell>
        <SimpleCell
          description="12 участников"
          before={<OwnerAvatar src={[getAvatarUrl('user_ilyagrshn'), getAvatarUrl('user_tc'), getAvatarUrl('user_lihachyov'), getAvatarUrl('user_va')]} />}
        >
          Тайное общество
        </SimpleCell>
      </Group>
      <Group>
        <Header mode="secondary">Текстовые версии</Header>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={1} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={2} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={3} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={4} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={5} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
        <SimpleCell
          description="VK"
          before={<OwnerAvatar mode="text" gradientColor={6} text="АС" src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
      </Group>
    </Panel>
  </View>
```

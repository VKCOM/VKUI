Используется для отображения аватарок пользователей с каким-то сопроводительным текстом.

У компонента есть вертикальный режим – когда текст располагается под аватарками. В таком режиме рекомендуется использовать размер `m`.

```jsx
<View activePanel="usersstack">
  <Panel id="usersstack">
    <PanelHeader>Аватарки пользователей</PanelHeader>

    <Group>
      <Div>
        <UsersStack photos={[getAvatarUrl('user_lihachyov')]}>
          Понравилось Муртолу Левзачеву
        </UsersStack>
      </Div>
    </Group>

    <Group>
      <Div>
        <UsersStack photos={[getAvatarUrl('user_manzuk'), getAvatarUrl('user_ji')]} size="l">
          Настя и Jean пойдут на это мероприятие
        </UsersStack>
      </Div>
    </Group>

    <Group>
      <Div>
        <UsersStack
          photos={[
            getAvatarUrl('user_ox'),
            getAvatarUrl('user_vitalyavolyn'),
            getAvatarUrl('user_eee'),
          ]}
          size="s"
        >
          Иван и ещё 2 ваших друга подписаны
        </UsersStack>
      </Div>
    </Group>

    <Group header={<Header mode="secondary">Вертикальный режим</Header>}>
      <Div>
        <UsersStack
          photos={[
            getAvatarUrl('user_mm'),
            getAvatarUrl('user_ilyagrshn'),
            getAvatarUrl('user_lihachyov'),
            getAvatarUrl('user_wayshev'),
            getAvatarUrl('user_arthurstam'),
            getAvatarUrl('user_xyz'),
          ]}
          size="l"
          layout="vertical"
        >
          Алексей, Илья, Михаил
          <br />и ещё 3 человека
        </UsersStack>
      </Div>
    </Group>

    <Group>
      <Div>
        <div
          style={{
            backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
            height: 200,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '6px',
            borderRadius: 12,
          }}
        >
          <UsersStack
            photos={[getAvatarUrl('user_xyz'), getAvatarUrl('user_va'), getAvatarUrl('user_tc')]}
            style={{ color: '#fff', padding: '8px 16px' }}
          >
            Проголосовали 2 176 человек
          </UsersStack>
        </div>
      </Div>
    </Group>
  </Panel>
</View>
```

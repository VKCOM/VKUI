Используется для отображения аватарок пользователей с каким-то сопроводительным текстом.

У компонента есть вертикальный режим – когда текст располагается под аватарками. В таком режиме рекомендуется использовать размер `m`.

```jsx
<View activePanel="usersstack">
  <Panel id="usersstack">
    <PanelHeader>Аватарки пользователей</PanelHeader>

    <Group>
      <UsersStack
        photos={[
          'https://sun9-5.userapi.com/c850332/v850332555/11502f/rVlRIjlWkWw.jpg?ava=1',
        ]}
      >Понравилось Муртолу Левзачеву</UsersStack>
    </Group>

    <Group>
      <UsersStack
        photos={[
          'https://sun9-1.userapi.com/c850624/v850624456/9f63e/c2_IbBit7I8.jpg?ava=1',
          'https://sun9-6.userapi.com/c851528/v851528416/e0360/1UfQ8aSIGVA.jpg?ava=1'
        ]}
        size="m"
      >Настя и Jean пойдут на это мероприятие</UsersStack>
    </Group>

    <Group>
      <UsersStack
        photos={[
          'https://sun9-6.userapi.com/c846121/v846121540/195e4d/17NeSTKMR1o.jpg?ava=1',
          'https://sun9-30.userapi.com/c845017/v845017447/1773bb/Wyfyi8-7e5A.jpg?ava=1',
          'https://sun9-25.userapi.com/c849432/v849432217/18ad61/0UFtoEhCsgA.jpg?ava=1'
        ]}
      >Иван и ещё 2 ваших друга подписаны</UsersStack>
    </Group>

    <Group title="Вертикальный режим">
      <UsersStack
        photos={[
          'https://sun9-9.userapi.com/c847219/v847219582/1eac9d/jxtvce2MwZk.jpg?ava=1',
          'https://pp.userapi.com/c834200/v834200315/1039ea/iFd9WUOdmDo.jpg?ava=1',
          'https://sun9-20.userapi.com/c850332/v850332555/115030/JyNJrr4cytY.jpg?ava=1',
          'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
          'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
          'https://sun9-18.userapi.com/c850024/v850024671/16f784/jDmN7V0YVb4.jpg?ava=1',
        ]}
        size="m"
        count={3}
        vertical
      >Алексей, Илья, Михаил<br />и ещё 3 человека</UsersStack>
    </Group>

    <Group>
      <Div>
        <div style={{
          backgroundImage: 'linear-gradient(135deg, #f24973 0%, #3948e6 100%)',
          height: 200,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '6px',
          borderRadius: 12
        }}>
          <UsersStack
            photos={[
              'https://sun9-19.userapi.com/c851232/v851232757/fb949/4rDdDHqGglQ.jpg?ava=1',
              'https://sun9-3.userapi.com/c851536/v851536176/a9b1d/xdPOltpVQRI.jpg?ava=1',
              'https://sun9-21.userapi.com/c851416/v851416327/be840/bnUHAblZoBY.jpg?ava=1'
            ]}
            style={{ color: "#fff" }}
          >Проголосовали 2 176 человек</UsersStack>
        </div>
      </Div>
    </Group>
  </Panel>
</View>
```



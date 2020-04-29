```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>
      RichCell
    </PanelHeader>
    <Group>
      <RichCell
        disabled
        multiline
        before={<Avatar size={72} src={getAvatarUrl('user_ti')} />}
        text="Держи за обед в EZO"
        caption="Вчера в 20:30"
        after="+ 1 500 ₽"
        actions={
          <React.Fragment>
            <Button>Принять</Button>
            <Button mode="secondary">Отклонить</Button>
          </React.Fragment>
        }
      >
        Тарас Иванов
      </RichCell>
      <RichCell
        disabled
        after={<Icon28UserAddOutline />}
        before={<Avatar size={72} src={getAvatarUrl('user_ilyagrshn')} />}
        caption="Команда ВКонтакте, Санкт-Петербург"
        bottom={
          <UsersStack
            photos={[
              getAvatarUrl('user_ox'),
              getAvatarUrl('user_vitalyavolyn'),
              getAvatarUrl('user_eee'),
            ]}
          >73 общих друга</UsersStack>
        }
        actions={
          <React.Fragment>
            <Button>Добавить</Button>
            <Button mode="secondary">Скрыть</Button>
          </React.Fragment>
        }
      >
        Илья Гришин
      </RichCell>
      <RichCell
        before={<Avatar size={48} src={getAvatarUrl('user_lihachyov')} />}
        text="Поездка в Лиссабон"
        caption="Вчера в 20:30"
        after="+ 1 500 ₽"
      >
        Михаил Лихачев
      </RichCell>
      <RichCell
        before={<Avatar size={48} src={getAvatarUrl('user_tc')} />}
        caption="Вчера в 20:30"
        after="- 700 ₽"
      >
        Тимофей Чаптыков
      </RichCell>
    </Group>
  </Panel>
</View>
```

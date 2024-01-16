Если вы хотите прокинуть в `after` иконку, то воспользуйтесь вспомогательным компонентом `RichCell.Icon`.

```jsx
<View activePanel="list">
  <Panel id="list">
    <PanelHeader>RichCell</PanelHeader>
    <Group>
      <RichCell
        before={<Avatar size={72} src={getAvatarUrl('')} />}
        subhead="Subhead"
        text="Text"
        caption="Caption"
        after="After"
        afterCaption="After Caption"
        bottom={
          <UsersStack photos={[getAvatarUrl(''), getAvatarUrl(''), getAvatarUrl('')]}>
            N общих друга
          </UsersStack>
        }
        actions={
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button mode="primary" size="s">
              Primary
            </Button>
            <Button mode="secondary" size="s">
              Secondary
            </Button>
          </ButtonGroup>
        }
      >
        Children
      </RichCell>
    </Group>
    <Group header={<Header>Рекомендации друзей</Header>}>
      <RichCell
        before={<Avatar size={72} src={getAvatarUrl('user_ilyagrshn')} />}
        caption="Команда ВКонтакте, Санкт-Петербург"
        bottom={
          <UsersStack
            photos={[
              getAvatarUrl('user_ox'),
              getAvatarUrl('user_vitalyavolyn'),
              getAvatarUrl('user_eee'),
            ]}
          >
            73 общих друга
          </UsersStack>
        }
        actions={
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button mode="primary" size="s">
              Добавить
            </Button>
            <Button mode="secondary" size="s">
              Скрыть
            </Button>
          </ButtonGroup>
        }
      >
        Илья Гришин
      </RichCell>
      <RichCell
        before={<Avatar size={72} src={getAvatarUrl('user_rom')} />}
        after={
          <RichCell.Icon aria-hidden>
            <Icon28ViewOutline />
          </RichCell.Icon>
        }
        bottom={
          <UsersStack
            photos={[
              getAvatarUrl('user_casper6479'),
              getAvatarUrl('user_me'),
              getAvatarUrl('user_evg'),
            ]}
          >
            12 общих друзей
          </UsersStack>
        }
        actions={
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button mode="primary" size="s">
              Добавить
            </Button>
            <Button mode="secondary" size="s">
              Скрыть
            </Button>
          </ButtonGroup>
        }
      >
        Ром Захаров
      </RichCell>
    </Group>
    <Group header={<Header>История переводов</Header>}>
      <RichCell
        before={<Avatar size={48} src={getAvatarUrl('user_ti')} />}
        text="Держи за обед в EZO"
        caption="сегодня в 18:00"
        after="+ 1 232 ₽"
        afterCaption="Комиссия 1%"
        actions={
          <ButtonGroup mode="horizontal" gap="s" stretched>
            <Button mode="primary" size="s">
              Принять
            </Button>
            <Button mode="secondary" size="s">
              Отклонить
            </Button>
          </ButtonGroup>
        }
        multiline
      >
        Тарас Иванов{' '}
        <Icon16Verified
          style={{
            display: 'inline-block',
            color: 'var(--vkui--color_icon_accent)',
            verticalAlign: 'text-top',
          }}
        />
      </RichCell>
      <RichCell
        before={<Avatar size={48} src={getAvatarUrl('user_lihachyov')} />}
        caption="Вчера в 20:30"
        after="- 1 800 ₽"
      >
        Михаил Лихачев
      </RichCell>
    </Group>
  </Panel>
</View>
```

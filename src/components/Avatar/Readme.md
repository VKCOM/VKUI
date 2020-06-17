Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

**Важно**: свойство `style` применяется к `img`, а не к корневому элементу. Чаще всего требуется стилизовать именно
изображение, а не обертку.

```jsx
  <View activePanel="avatar">
    <Panel id="avatar">
      <PanelHeader>Avatar</PanelHeader>
      <Group>
        <Header mode="secondary">Дефолтный размер</Header>
        <SimpleCell
          description="VKontakte"
          before={<Avatar src={getAvatarUrl('user_arthurstam')}/>}
        >
          Артур Стамбульцян
        </SimpleCell>
      </Group>
      <Group>
        <Header mode="secondary">RichCell</Header>
        <RichCell
          disabled
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
      </Group>
      <Group>
        <Header mode="secondary">Placeholder</Header>
        <SimpleCell
          before={<Avatar style={{ background: 'var(--accent)' }} size={28} shadow={false}><Icon16Add fill="var(--white)" /></Avatar>}
          description="Только от друзей друзей"
        >
          Заявки в друзья
        </SimpleCell>
        <SimpleCell
          before={<Avatar style={{ background: 'var(--destructive)' }} size={28} shadow={false}><Icon16Like fill="var(--white)" /></Avatar>}
          description="Только важные"
        >
          Отметки «Мне нравится»
        </SimpleCell>
      </Group>
      <Group description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
        <Header mode="secondary">Дефолтный тип</Header>
        <SimpleCell before={<Avatar src={getAvatarUrl('user_evg')} />}>Евгений Авсиевич</SimpleCell>
        <SimpleCell before={<Avatar src={getAvatarUrl('user_id34')} />}>Татьяна Плуталова</SimpleCell>
        <SimpleCell before={<Avatar src={getAvatarUrl('user_illarionov')} />}>Олег Илларианов</SimpleCell>
      </Group>
      <Group description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
        <Header mode="secondary">Приложения</Header>
        <SimpleCell before={<Avatar mode="app" src={getAvatarUrl('app_shorm_online')} />} description="Ролевая">Шторм онлайн</SimpleCell>
        <SimpleCell before={<Avatar mode="app" src={getAvatarUrl('app_shashki')} />} description="Настольная" multiline={false}>Шашки - 3 вида: шашки, уголки, поддавки</SimpleCell>
        <SimpleCell before={<Avatar mode="app" src={getAvatarUrl('app_vega_mix')} />} description="Головоломка">Вега Микс на даче</SimpleCell>
      </Group>
      <Group description="Используется для остальных случаев. Например, для музыки и плейлистов.">
        <Header mode="secondary">Обложки</Header>
        <SimpleCell before={<Avatar mode="image" src={getAvatarUrl('audio_arctic_monkeys')} />} description="Arctic Monkeys" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>I Wanna Be Yours</SimpleCell>
        <SimpleCell before={<Avatar mode="image" src={getAvatarUrl('audio_leto_zveri')} />} description="Лето (звери)" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>6 утра</SimpleCell>
        <SimpleCell before={<Avatar mode="image" src={getAvatarUrl('audio_depeche_mode')} />} description="Depeche Mode" after={<Icon24MoreHorizontal fill="var(--accent)"/>}>Enjoy the Silence</SimpleCell>
      </Group>
    </Panel>
  </View>
```

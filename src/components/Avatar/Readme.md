Надстройка над `<img />`. Компонент принимает все валидные для этого элемента свойства.

**Важно**: свойство `style` применяется к `img`, а не к корневому элементу. Чаще всего требуется стилизовать именно
изображение, а не обертку.

```jsx
  <View activePanel="avatar">
    <Panel id="avatar">
      <PanelHeader>Avatar</PanelHeader>
      <Group header={<Header mode="secondary">Standart size</Header>}>
        <Cell
          size="l"
          description="VKontakte"
          before={<Avatar src={getAvatarUrl('user_arthurstam')}/>}
          bottomContent={<Button>Добавить</Button>}
        >
          Артур Стамбульцян
        </Cell>
      </Group>
      <Group header={<Header mode="secondary">Big avatar (80px)</Header>}>
        <Cell
          description="VKontakte"
          bottomContent={<Button>Добавить</Button>}
          before={<Avatar src={getAvatarUrl('user_arthurstam', 200)} size={80}/>}
          size="l"
        >
          Артур Стамбульцян
        </Cell>
      </Group>
      <Group header={<Header mode="secondary">Placeholder</Header>}>
        <List>
          <Cell
            before={<Avatar style={{ background: 'var(--accent)' }} size={28}><Icon16Add fill="var(--white)" /></Avatar>}
            description="Только от друзей друзей"
          >
            Заявки в друзья
          </Cell>
          <Cell
            before={<Avatar style={{ background: 'var(--destructive)' }} size={28}><Icon16Like fill="var(--white)" /></Avatar>}
            description="Только важные"
          >
            Отметки «Мне нравится»
          </Cell>
        </List>
      </Group>
      <Group header={<Header mode="secondary">Using in Cell</Header>}>
        <List>
          <Cell before={<Avatar><Icon24User /></Avatar>}>Артур Стамбульцян</Cell>
          <Cell before={<Avatar src={getAvatarUrl('user_tc')} />}>Тимофей Чаптыков</Cell>
          <Cell before={<Avatar src={getAvatarUrl('user_va')} />}>Влад Анесов</Cell>
        </List>
      </Group>
      <Group header={<Header mode="secondary">default type</Header>} description="Дефолтный стиль аватарки. Используется для юзеров, групп.">
        <List>
          <Cell before={<Avatar src={getAvatarUrl('user_evg')} />}>Евгений Авсиевич</Cell>
          <Cell before={<Avatar src={getAvatarUrl('user_id34')} />}>Татьяна Плуталова</Cell>
          <Cell before={<Avatar src={getAvatarUrl('user_illarionov')} />}>Олег Илларианов</Cell>
        </List>
      </Group>
      <Group header={<Header mode="secondary">app type</Header>} description="Аватарки для приложений. Радиус скургления зависит от значения свойства size.">
        <List>
          <Cell before={<Avatar mode="app" src={getAvatarUrl('app_shorm_online')} />} description="Ролевая">Шторм онлайн</Cell>
          <Cell before={<Avatar mode="app" src={getAvatarUrl('app_shashki')} />} description="Настольная" multiline={false}>Шашки - 3 вида: шашки, уголки, поддавки</Cell>
          <Cell before={<Avatar mode="app" src={getAvatarUrl('app_vega_mix')} />} description="Головоломка">Вега Микс на даче</Cell>
        </List>
      </Group>
      <Group header={<Header mode="secondary">image type</Header>} description="Используется для остальных случаев. Например, для музыки и плейлистов.">
        <List>
          <Cell before={<Avatar mode="image" src={getAvatarUrl('audio_arctic_monkeys')} />} description="Arctic Monkeys" asideContent={<Icon24MoreHorizontal fill="var(--accent)"/>}>I Wanna Be Yours</Cell>
          <Cell before={<Avatar mode="image" src={getAvatarUrl('audio_leto_zveri')} />} description="Лето (звери)" asideContent={<Icon24MoreHorizontal fill="var(--accent)"/>}>6 утра</Cell>
          <Cell before={<Avatar mode="image" src={getAvatarUrl('audio_depeche_mode')} />} description="Depeche Mode" asideContent={<Icon24MoreHorizontal fill="var(--accent)"/>}>Enjoy the Silence</Cell>
        </List>
      </Group>
    </Panel>
  </View>
```

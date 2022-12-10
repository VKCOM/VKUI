## Доступность

Для корректной работы скринридеров необходимо вручную передавать некоторые параметры:
<br />

- В компонент вкладки (`TabsItem`) нужно передать `id` и `aria-controls`, указывающий на id области с его контентом. <br />
- В область контента необходимо передать параметры `id`, `tabIndex = 0` и `aria-labelledby`, ссылающийся на компонент таба

```jsx
const Example = () => {
  const [mode, setMode] = React.useState('all');
  const [menuOpened, setMenuOpened] = React.useState(false);
  const [selected, setSelected] = React.useState('news');

  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader
          before={
            <PanelHeaderButton>
              <Icon28CameraOutline />
            </PanelHeaderButton>
          }
          after={
            <PanelHeaderButton>
              <Icon28AddOutline />
            </PanelHeaderButton>
          }
        >
          <DefaultInPanel
            selected={selected}
            setSelected={setSelected}
            menuOpened={menuOpened}
            onMenuClick={(opened) => {
              setMenuOpened((prevState) => (opened ? !prevState : false));
            }}
          />
        </PanelHeader>

        {selected === 'news' && (
          <Group id="tab-content-news" aria-labelledby="tab-news" role="tabpanel">
            <Div>Контент новостей</Div>
          </Group>
        )}
        {selected === 'recommendations' && (
          <Group
            id="tab-content-recommendations"
            aria-labelledby="tab-recommendations"
            role="tabpanel"
          >
            <Div>Контент рекомендаций</Div>
          </Group>
        )}

        <Scrollable />

        <PanelHeaderContext opened={menuOpened} onClose={() => setMenuOpened(false)}>
          <List>
            <Cell
              before={<Icon28UsersOutline />}
              after={mode === 'all' && <Icon24Done fill="var(--vkui--color_icon_accent)" />}
              onClick={() => setMode('all')}
            >
              Communities
            </Cell>
            <Cell
              before={<Icon28SettingsOutline />}
              after={mode === 'managed' && <Icon24Done fill="var(--vkui--color_icon_accent)" />}
              onClick={() => setMode('managed')}
            >
              Managed Communities
            </Cell>
          </List>
        </PanelHeaderContext>
      </Panel>
    </View>
  );
};

const DefaultInPanel = ({ menuOpened, onMenuClick, selected, setSelected }) => {
  return (
    <Tabs>
      <TabsItem
        after={
          <Icon16Dropdown
            style={{
              transform: `rotate(${menuOpened ? '180deg' : '0'})`,
            }}
          />
        }
        selected={selected === 'news'}
        onClick={() => {
          if (selected === 'news') {
            onMenuClick(true);
          }
          setSelected('news');
        }}
        id="tab-news"
        aria-controls="tab-content-news"
      >
        Новости
      </TabsItem>
      <TabsItem
        selected={selected === 'recommendations'}
        onClick={() => {
          onMenuClick(false);
          setSelected('recommendations');
        }}
        id="tab-recommendations"
        aria-controls="tab-content-recommendations"
      >
        Интересное
      </TabsItem>
    </Tabs>
  );
};

const Scrollable = () => {
  const [mode, setMode] = React.useState('default');
  const [selected, setSelected] = React.useState('news');
  const [disabled, setDisabled] = React.useState(false);

  return (
    <Group>
      <Tabs mode={mode}>
        <HorizontalScroll arrowSize="m">
          <TabsItem
            selected={selected === 'groups'}
            disabled={disabled}
            onClick={() => setSelected('groups')}
          >
            Сообщества
          </TabsItem>
          <TabsItem
            before={mode === 'default' ? <Icon24NewsfeedOutline /> : <Icon20NewsfeedOutline />}
            after={<Icon16Dropdown />}
            selected={selected === 'news'}
            disabled={disabled}
            onClick={() => setSelected('news')}
          >
            Лента
          </TabsItem>
          <TabsItem
            before={mode === 'default' ? <Icon24ThumbsUpOutline /> : <Icon20ThumbsUpOutline />}
            status={<Badge mode="prominent" />}
            after={<Icon16Dropdown />}
            selected={selected === 'recommendations'}
            disabled={disabled}
            onClick={() => setSelected('recommendations')}
          >
            Рекомендации
          </TabsItem>
          <TabsItem
            before={mode === 'default' ? <Icon24UsersOutline /> : <Icon20UsersOutline />}
            status={
              <Counter mode="prominent" size="s">
                3
              </Counter>
            }
            after={<Icon16Dropdown />}
            selected={selected === 'friends'}
            disabled={disabled}
            onClick={() => setSelected('friends')}
          >
            Друзья
          </TabsItem>
          <TabsItem
            before={mode === 'default' ? <Icon24PictureOutline /> : <Icon20PictureOutline />}
            status={23}
            after={<Icon16Dropdown />}
            selected={selected === 'photos'}
            disabled={disabled}
            onClick={() => setSelected('photos')}
          >
            Фотографии
          </TabsItem>
        </HorizontalScroll>
      </Tabs>
      <FormItem top="mode">
        <CustomSelect
          value={mode}
          options={[
            {
              label: 'default',
              value: 'default',
            },
            {
              label: 'accent',
              value: 'accent',
            },
            {
              label: 'secondary',
              value: 'secondary',
            },
          ]}
          onChange={(event) => setMode(event.target.value)}
        />
      </FormItem>
      <Checkbox onChange={() => setDisabled((prev) => !prev)}>disabled</Checkbox>
    </Group>
  );
};

<ConfigProvider webviewType="internal">
  <Example />
</ConfigProvider>;
```

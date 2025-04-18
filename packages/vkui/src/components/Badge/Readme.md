Индикатор, с помощью которого можно привлечь внимание пользователя к определенному разделу.

## Цифровая доступность (a11y)

Чтобы `Badge` был доступным для ассистивных технологий, у него должен быть текст, который сможет прочитать скринридер. Этот текст можно передать в `children`.

```jsx
const Example = () => {
  const [tab, setTab] = React.useState('dialogs');

  return (
    <View activePanel="badge">
      <Panel id="badge">
        <PanelHeader>Бейдж</PanelHeader>

        <Group header={<Header size="s">В пунктах меню</Header>}>
          <Cell
            chevron
            before={<Icon28Notifications />}
            badgeAfterTitle={<Badge>Есть новые</Badge>}
            onClick={noop}
          >
            Уведомления
          </Cell>
        </Group>

        <Group header={<Header size="s">В переключателях</Header>}>
          <Tabs>
            <TabsItem
              selected={tab === 'dialogs'}
              onClick={() => setTab('dialogs')}
              after={<Badge mode="prominent">Есть новые</Badge>}
            >
              Диалоги
            </TabsItem>
            <TabsItem
              selected={tab === 'messages'}
              onClick={() => setTab('messages')}
              after={<Badge mode="prominent">Есть новые</Badge>}
            >
              Сообщения
            </TabsItem>
          </Tabs>
        </Group>

        <Tabbar>
          <TabbarItem label="Новости">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            indicator={
              <Counter size="s" mode="primary" appearance="accent-red">
                12
              </Counter>
            }
            label="Сообщения"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem indicator={<Badge mode="prominent">Новый раздел</Badge>} label="Клипы">
            <Icon28ClipOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};

<Example />;
```

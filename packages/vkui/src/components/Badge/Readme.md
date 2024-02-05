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

        <Group header={<Header mode="secondary">В пунктах меню</Header>}>
          <Cell
            expandable
            before={<Icon28Notifications />}
            badgeAfterTitle={<Badge>Есть новые</Badge>}
            onClick={noop}
          >
            Уведомления
          </Cell>
        </Group>

        <Group header={<Header mode="secondary">В переключателях</Header>}>
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
          <TabbarItem text="Новости">
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            indicator={
              <Counter size="s" mode="prominent">
                12
              </Counter>
            }
            text="Сообщения"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem indicator={<Badge mode="prominent">Новый раздел</Badge>} text="Клипы">
            <Icon28ClipOutline />
          </TabbarItem>
        </Tabbar>
      </Panel>
    </View>
  );
};

<Example />;
```

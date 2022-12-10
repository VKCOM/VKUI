Индикатор, с помощью которого можно привлечь внимание пользователя к определенному разделу.

```jsx
<View activePanel="badge">
  <Panel id="badge">
    <PanelHeader>Бейдж</PanelHeader>

    <Group header={<Header mode="secondary">В пунктах меню</Header>}>
      <Cell expandable before={<Icon28Notifications />} badge={<Badge aria-label="Есть новые" />}>
        Уведомления
      </Cell>
    </Group>

    <Group header={<Header mode="secondary">В переключателях</Header>}>
      <Tabs>
        <TabsItem after={<Badge mode="prominent" aria-label="Есть новые" />}>Диалоги</TabsItem>
        <TabsItem selected after={<Badge mode="prominent" aria-label="Есть новые" />}>
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
      <TabbarItem indicator={<Badge mode="prominent" aria-label="Новый раздел" />} text="Клипы">
        <Icon28ClipOutline />
      </TabbarItem>
    </Tabbar>
  </Panel>
</View>
```

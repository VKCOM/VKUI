Компонент для обновления контента жестом pull-to-refresh.
Работает на тач-экранах.

При достаточном вытягивании спиннера вызывается обязательное свойство-функция `onRefresh`.

Необходимо при срабатывании `onRefresh` передать `isFetching={true}` компоненту, а затем после получения контента установить его как `false` для скрытия спиннера.

> **Важно**
>
> В компонент нельзя помещать любой контент с фиксированным позиционированием. PullToRefresh подходит прежде всего, например, для каких-либо простых списков.

```jsx
const initUsers = getRandomUsers(10);

const Example = () => {
  const [users, setUsers] = React.useState(initUsers);
  const [fetching, setFetching] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setFetching(true);

    setTimeout(() => {
      setFetching(false);
      setUsers((prevUsers) => [getRandomUser(), ...prevUsers]);
    }, getRandomInt(600, 2000));
  }, []);

  return (
    <View activePanel="users">
      <Panel id="users">
        <PanelHeader>Пользователи</PanelHeader>

        <PullToRefresh onRefresh={onRefresh} isFetching={fetching}>
          <Group>
            <List>
              {users.map(({ id, name, photo_100 }, i) => {
                return (
                  <Cell key={i} before={<Avatar src={photo_100} />}>
                    {name}
                  </Cell>
                );
              })}
            </List>
          </Group>
        </PullToRefresh>
      </Panel>
    </View>
  );
};

<Example />;
```

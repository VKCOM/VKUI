Компонент для обновления контента жестом pull-to-refresh.
Работает на тач-экранах.

При достаточном вытягивании спиннера вызывается обязательное свойство-функция `onRefresh`.

Необходимо при срабатывании `onRefresh` передать `isFetching={true}` компоненту, а затем после получения контента установить его как `false` для скрытия спиннера.

**Важно:** в компонент нельзя помещать любой контент с фиксированным позиционированием. PullToRefresh подходит прежде всего, например, для каких-либо простых списков.

```jsx
class Example extends React.Component {
  constructor () {
    let items = [];

    for (let i = 0; i < 10; i++) {
      items.push(this.getNewItem())
    }

    this.state = {
      items: items,
      fetching: false
    }

    this.onRefresh = () => {
      this.setState({ fetching: true });

      setTimeout(() => {
        this.setState({
          items: [this.getNewItem(), ...this.state.items],
          fetching: false
        });
      }, getRandomInt(600, 2000));
    }
  }

  getNewItem() {
    return getRandomUser();
  }

  render () {

    return (
      <View activePanel="users">
        <Panel id="users">
          <PanelHeader>Пользователи</PanelHeader>

          <PullToRefresh onRefresh={this.onRefresh} isFetching={this.state.fetching}>
            <Group>
              <List>
                {this.state.items.map(({ id, name, photo_100 }, i) => {
                  return (
                    <Cell
                      key={i}
                      before={<Avatar src={photo_100} />}
                    >
                      {name}
                    </Cell>
                  )
                })}
              </List>
            </Group>
          </PullToRefresh>
        </Panel>
      </View>
    )
  }
}

<Example />
```

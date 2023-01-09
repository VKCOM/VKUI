Компонент для отрисовки счетчика в ячейках и кнопках.
Принимает в качестве `children` число или строку с отформатированным числом по разрядам.

```jsx
<View activePanel="counter-demo">
  <Panel id="counter-demo">
    <PanelHeader>Counter</PanelHeader>
    <Group header={<Header mode="secondary">Счётчики в ячейках</Header>}>
      <List>
        <Cell before={<Icon28UserOutline />} indicator={<Counter>4</Counter>}>
          Друзья
        </Cell>
        <Cell before={<Icon28UsersOutline />} indicator={<Counter mode="primary">2</Counter>}>
          Группы
        </Cell>
        <Cell before={<Icon28MessageOutline />} indicator={<Counter>224</Counter>}>
          Сообщения
        </Cell>
        <Cell before={<Icon28FavoriteOutline />} indicator={<Counter mode="primary">1</Counter>}>
          Закладки
        </Cell>
      </List>
    </Group>
    <Group header={<Header mode="secondary">Счётчики в кнопках</Header>}>
      <FormItem>
        <Button mode="secondary" size="m" after={<Counter>16</Counter>}>
          Secondary medium
        </Button>
      </FormItem>
      <FormItem>
        <Button mode="tertiary" after={<Counter size="s">6</Counter>}>
          Tertiary small
        </Button>
      </FormItem>
      <FormItem>
        <Button mode="outline" size="m" after={<Counter>20</Counter>}>
          Outline medium
        </Button>
      </FormItem>
      <FormItem>
        <Button mode="primary" appearance="positive" size="m" after={<Counter>4</Counter>}>
          Commerce medium
        </Button>
      </FormItem>
      <FormItem>
        <Button size="l" after={<Counter>8</Counter>}>
          Primary large
        </Button>
      </FormItem>
    </Group>
    <Group
      header={
        <Header
          indicator={
            <Counter size="s" mode="prominent">
              5
            </Counter>
          }
          aside={<Link>Посмотреть все</Link>}
        >
          Заявки в друзья
        </Header>
      }
    >
      <Cell before={<Avatar />}>Александр Сорокин</Cell>
      <Cell before={<Avatar />}>Виктор Пелевин</Cell>
      <Cell before={<Avatar />}>Михаил Зыгарь</Cell>
    </Group>
    <Group header={<Header mode="secondary">В переключателях</Header>}>
      <Tabs mode="buttons">
        <HorizontalScroll>
          <TabsItem after={<Counter size="s">8</Counter>}>Все</TabsItem>
          <TabsItem selected after={<Counter size="s">24</Counter>}>
            Люди
          </TabsItem>
          <TabsItem
            after={
              <Counter size="s" mode="primary">
                2
              </Counter>
            }
          >
            Сообщества
          </TabsItem>
          <TabsItem>Музыка</TabsItem>
        </HorizontalScroll>
      </Tabs>
      <Tabs>
        <TabsItem
          after={
            <Counter size="s" mode="prominent">
              6
            </Counter>
          }
        >
          Диалоги
        </TabsItem>
        <TabsItem selected after={<Counter size="s">24</Counter>}>
          Сообщения
        </TabsItem>
      </Tabs>
    </Group>
  </Panel>
</View>
```

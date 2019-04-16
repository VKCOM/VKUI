Компонент для отрисовки счетчика в ячейках и кнопках.
Принимает в качестве `children` число или строку с отформатированным числом по разрядам.

 ```jsx
<View activePanel="counter-demo" header={false}>
  <Panel id="counter-demo">
    <Group title="Счётчики в ячейках">
      <List>
        <Cell before={<Icon24User />} indicator={<Counter>4</Counter>}>Друзья</Cell>
        <Cell before={<Icon24Users />} indicator={<Counter type="primary">2</Counter>}>Группы</Cell>
        <Cell before={<Icon24Message />} indicator={<Counter>224</Counter>}>Сообщения</Cell>
        <Cell before={<Icon24Favorite />} indicator={<Counter type="primary">1</Counter>}>Закладки</Cell>
      </List>
    </Group>
    
    <Group title="Счётчики в кнопках">
      <FormLayout>
        <Button level="secondary" size="l" after={<Counter>16</Counter>}>Secondary large</Button>
        <Button level="tertiary" after={<Counter>6</Counter>}>Tertiary medium</Button>
        <Button level="outline" size="l" after={<Counter>20</Counter>}>Outline large</Button>
        <Button level="commerce" size="l" after={<Counter>4</Counter>}>Commerce large</Button>
        <Button size="xl" after={<Counter>8</Counter>}>Primary extra large</Button>
      </FormLayout>
    </Group>

    <Group>
      <Header level="2" aside={<Counter type="prominent">1</Counter>}>
        Вопросы
      </Header>
    </Group>

    <Group>
      <Tabs theme="header" type="buttons">
        <HorizontalScroll>
          <TabsItem counter={8}>
            Все
          </TabsItem>
          <TabsItem selected counter="24">
            Люди
          </TabsItem>
          <TabsItem counter={2}>
            Сообщества
          </TabsItem>
          <TabsItem>
            Музыка
          </TabsItem>
        </HorizontalScroll>
      </Tabs>
    </Group>

    <Group>
      <Tabs theme="light">
        <TabsItem counter={6}>
          Диалоги
        </TabsItem>
        <TabsItem selected counter={24}>
          Сообщения
        </TabsItem>
      </Tabs>
    </Group>

    <Group>
      <Tabs type="buttons">
        <TabsItem selected counter={6}>
          Диалоги
        </TabsItem>
        <TabsItem counter={24}>
          Сообщения
        </TabsItem>
      </Tabs>
    </Group>
  </Panel>
</View>
```

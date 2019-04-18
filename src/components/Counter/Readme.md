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
      <Header level="2" indicator={<Counter type="prominent">1</Counter>} aside={<Link>Подробнее</Link>}>
        Вопросы
      </Header>
    </Group>

    <Group>
      <Tabs theme="header" type="buttons">
        <HorizontalScroll>
          <TabsItem after={<Counter>8</Counter>}>
            Все
          </TabsItem>
          <TabsItem selected after={<Counter>24</Counter>}>
            Люди
          </TabsItem>
          <TabsItem after={<Counter>2</Counter>}>
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
        <TabsItem after={<Counter>6</Counter>}>
          Диалоги
        </TabsItem>
        <TabsItem selected after={<Counter>24</Counter>}>
          Сообщения
        </TabsItem>
      </Tabs>
    </Group>

    <Group>
      <Tabs type="buttons">
        <TabsItem selected after={<Counter>6</Counter>}>
          Диалоги
        </TabsItem>
        <TabsItem after={<Counter>24</Counter>}>
          Сообщения
        </TabsItem>
      </Tabs>
    </Group>
  </Panel>
</View>
```

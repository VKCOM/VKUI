```jsx
  <View activePanel="card">
    <Panel id="card">
      <PanelHeader>Card</PanelHeader>
      <Group separator="hide" header={<Header mode="secondary">Дефолтный стиль</Header>}>
        <CardGrid>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group separator="hide" header={<Header mode="secondary">С внутренней обводкой</Header>}>
        <CardGrid>
          <Card size="l" mode="outline">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group separator="hide" header={<Header mode="secondary">С внешней тенью</Header>}>
        <CardGrid>
          <Card size="l" mode="shadow">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
    </Panel>
  </View>
```

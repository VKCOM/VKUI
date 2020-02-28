```jsx
<View activePanel="gradient">
  <Panel id="gradient">
    <PanelHeader>Gradient</PanelHeader>
    <Gradient>
      <Group header={
        <Header
          aside={<Link>Показать все</Link>}
          subtitle="С быстрым входом"
        >
          Другие сервисы VK
        </Header>
      }>
        <CardScroll style={{ paddingBottom: 20 }}>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card mode="outline" size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
    </Gradient>
  </Panel>
</View>
```

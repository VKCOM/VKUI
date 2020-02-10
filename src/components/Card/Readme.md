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
      <Group header={<Header mode="secondary">Сетка</Header>} separator="hide">
        <CardGrid>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="m">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="m">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group header={<Header mode="secondary">Скролл</Header>} separator="hide" description="Рекомендуемый размер карточки — 144px">
        <CardScroll>
          <Card size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
          <Card size="s">
            <div style={{ width: 144, height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
      <Group separator="hide" description="Рекомендуемый размер карточки — 224px">
        <CardScroll>
          <Card size="m">
            <div style={{ width: 224, height: 96 }} />
          </Card>
          <Card size="m">
            <div style={{ width: 224, height: 96 }} />
          </Card>
          <Card size="m">
            <div style={{ width: 224, height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
      <Group separator="hide" description="Ширина карточки <Card size='l' /> зафиксирован в CSS так, чтобы каждая карточка занимала всю ширину вьюпорта">
        <CardScroll>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
          <Card size="l">
            <div style={{ height: 96 }} />
          </Card>
        </CardScroll>
      </Group>
    </Panel>
  </View>
```

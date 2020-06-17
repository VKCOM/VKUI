Горизонтальный скролл для [Card](https://vkcom.github.io/vkui-styleguide/#!/Card).

```jsx
<View activePanel="card">
  <Panel id="card">
    <PanelHeader>CardScroll</PanelHeader>
    <Group separator="hide" description="Рекомендуемый размер карточки — 144px">
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
    <Group separator="hide" description="Ширина карточки <Card size='l' /> зафиксирована в CSS так, чтобы каждая карточка занимала всю ширину вьюпорта">
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

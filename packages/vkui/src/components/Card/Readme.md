## Цифровая доступность (a11y)

- По умолчанию используеся тег `"li"` для повышения доступности компонента. Вы можете прокинуть необходимый вам тег через prop `Component`.
  Ссылки на источники: [статья про доступность карточек](https://inclusive-components.design/cards/).

```jsx
<View activePanel="card">
  <Panel id="card">
    <PanelHeader>Card</PanelHeader>
    <Group>
      <Group mode="plain" header={<Header size="s">Стандартный стиль</Header>}>
        <CardGrid size="l">
          <Card>
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group mode="plain" header={<Header size="s">Стандартный фон с обводкой</Header>}>
        <CardGrid size="l">
          <Card mode="outline-tint">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
    </Group>
    <Group style={{ background: 'var(--vkui--color_background_secondary)' }}>
      <Group mode="plain" header={<Header size="s">Светлый фон без обводки и тени</Header>}>
        <CardGrid size="l">
          <Card mode="plain">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group mode="plain" header={<Header size="s">Светлый фон с обводкой</Header>}>
        <CardGrid size="l">
          <Card mode="outline">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
      <Group mode="plain" header={<Header size="s">Светлый фон с тенью</Header>}>
        <CardGrid size="l">
          <Card mode="shadow">
            <div style={{ height: 96 }} />
          </Card>
        </CardGrid>
      </Group>
    </Group>
  </Panel>
</View>
```

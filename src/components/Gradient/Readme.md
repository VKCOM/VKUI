```jsx
const Example = ({ sizeX }) => {
  return (
    <View activePanel="gradient">
      <Panel id="gradient">
        <PanelHeader>Gradient</PanelHeader>
        <Group>
          <Gradient style={{
            margin: sizeX === SizeType.REGULAR ? '-7px -7px 0 -7px' : 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}>
            <Avatar size={96} />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="medium">Алексей Мазелюк</Title>
            <Text style={{ marginBottom: 24, color: 'var(--text_secondary)' }}>Учащийся</Text>
            <Button size="m" mode="secondary">Редактировать</Button>
          </Gradient>
          <Group mode="plain">
            <Header>Учебные заведения и классы</Header>
            <SimpleCell before={<Icon28SchoolOutline />} description="Екатеринбург">Школа №180</SimpleCell>
            <CellButton before={<Icon28AddOutline />}>Добавить учебное заведение</CellButton>
          </Group>
        </Group>
      </Panel>
    </View>
  )
}

const ExampleWithAdaptivity = withAdaptivity(Example, { sizeX: true });

<ExampleWithAdaptivity />
```

```jsx
import { Icon16Done, Icon16Down, Icon16Up } from '@vkontakte/icons';

const Example = () => {
  const [direction, setDirection] = React.useState('top');

  const styles = {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 32,
  };

  if (direction === 'bottom') {
    styles.borderRadius = 'inherit';
  }

  return (
    <View activePanel="gradient">
      <Panel id="gradient">
        <PanelHeader>Gradient</PanelHeader>
        <Group>
          <Gradient mode="tint" to={direction} style={styles}>
            <Avatar size={96} />
            <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
              Алексей Мазелюк
            </Title>
            <Text
              style={{
                marginBottom: 24,
                color: 'var(--vkui--color_text_secondary)',
              }}
            >
              Учащийся
            </Text>
            <Button size="m" mode="secondary">
              Редактировать
            </Button>
          </Gradient>
          <Group mode="plain">
            <Header>Учебные заведения и классы</Header>
            <SimpleCell before={<Icon28SchoolOutline />} subtitle="Екатеринбург">
              Школа №180
            </SimpleCell>
            <CellButton before={<Icon28AddOutline />}>Добавить учебное заведение</CellButton>
          </Group>
        </Group>
        <Group>
          <Group mode="plain" header={<Header mode="secondary">Направление to="bottom"</Header>}>
            <Gradient to="bottom">
              <div style={{ height: 150 }} />
            </Gradient>
          </Group>
          <Group mode="plain" header={<Header mode="secondary">Тип градиента white</Header>}>
            <Gradient mode="white">
              <div style={{ height: 150 }} />
            </Gradient>
          </Group>
          <Group mode="plain" header={<Header mode="secondary">Тип градиента black</Header>}>
            <Gradient mode="black">
              <div style={{ height: 150 }} />
            </Gradient>
          </Group>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

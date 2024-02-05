```jsx
const styles = {
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: 32,
};

const Example = () => {
  return (
    <View activePanel="gradient">
      <Panel id="gradient">
        <PanelHeader>Gradient</PanelHeader>
        <FixedLayout vertical="bottom">
          <Gradient to="top" style={styles}>
            <Button>mode="default"</Button>
          </Gradient>
        </FixedLayout>
        <Group>
          <Gradient mode="tint" to="top" style={styles}>
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
          <Group mode="plain" header={<Header>Учебные заведения и классы</Header>}>
            <SimpleCell before={<Icon28SchoolOutline />} subtitle="Екатеринбург">
              Школа №180
            </SimpleCell>
            <CellButton onClick={noop} before={<Icon28AddOutline />}>
              Добавить учебное заведение
            </CellButton>
          </Group>
        </Group>
        <Group mode="plain" header={<Header mode="secondary">Направление to="bottom"</Header>}>
          <Gradient mode="tint" to="bottom">
            <Div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lectus, a
              commodo sapien. Vivamus a urna leo. Integer iaculis dignissim urna, sit amet
              vestibulum diam bibendum a. Donec eu arcu ut augue porttitor faucibus. Vestibulum nec
              pretium tortor, sit amet congue nunc. Aenean ullamcorper ex sem, sed interdum quam
              consequat et. Vestibulum a ex non diam fringilla feugiat. Nunc eu tellus sed leo
              elementum cursus. Mauris blandit porta egestas. Curabitur eget justo elementum,
              malesuada lacus ut, congue mauris. Integer orci nisi, convallis vitae dapibus sit
              amet, molestie a risus. Aenean ultricies lacus eros, sit amet condimentum urna
              malesuada et. Sed quis dolor tempus orci fringilla volutpat in sed velit. Aenean
              aliquet bibendum pretium.
            </Div>
          </Gradient>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

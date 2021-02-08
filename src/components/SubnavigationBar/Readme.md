В режиме `fixed` может потребоваться уменьшить размер шрифта у `SubnavigationButton`, чтобы текст показывался полностью.
За это отвечает свойство `textLevel` у `SubnavigationButton`.

```jsx
const SubnavigationBarExample = () => {
  const [sizeSelected, setSizeSelected] = React.useState(false);
  const [inStockSelected, setInStockSelected] = React.useState(false);
  const [highRatingSelected, setHighRatingSelected] = React.useState(false);

  const { viewWidth } = useAdaptivity();

  return (
    <View activePanel="example">
      <Panel id="example">
        <PanelHeader>SubnavigationBar</PanelHeader>
        <Group>
          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24Filter/>}
              selected
              expandable
              after={<Counter mode="primary" size="s">3</Counter>}
            >
              Фильтры
            </SubnavigationButton>

            <SubnavigationButton
              selected={sizeSelected}
              onClick={() => setSizeSelected(!sizeSelected)}
            >
              Мой размер
            </SubnavigationButton>

            <SubnavigationButton
              selected={inStockSelected}
              onClick={() => setInStockSelected(!inStockSelected)}
            >
              В наличии
            </SubnavigationButton>

            <SubnavigationButton
              selected={highRatingSelected}
              onClick={() => setHighRatingSelected(!highRatingSelected)}
            >
              Высокий рейтинг
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24FavoriteOutline/>}
            >
              Избранное
            </SubnavigationButton>
          </SubnavigationBar>
        </Group>

        <Group>
          <SubnavigationBar mode="fixed">
            <SubnavigationButton
              before={<Icon24ScanViewfinderOutline />}
              size="l"
              textLevel={viewWidth <= ViewWidth.MOBILE ? 3 : 1}
            >
              Сканировать QR
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24UserAddOutline />}
              size="l"
              textLevel={viewWidth <= ViewWidth.MOBILE ? 3 : 1}
            >
              Добавить друга
            </SubnavigationButton>
          </SubnavigationBar>

          <Header>Важные</Header>
          <SimpleCell before={<Avatar src={getAvatarUrl('user_wayshev')} />}>Иван Барышев</SimpleCell>
          <SimpleCell before={<Avatar src={getAvatarUrl('user_lihachyov')} />}>Михаил Лихачёв</SimpleCell>
          <SimpleCell before={<Avatar src={getAvatarUrl('user_arthurstam')} />}>Artur Stambultsian</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
};

<SubnavigationBarExample />
```

Компонент, используемый в качестве кнопок в [SubnavigationBar](#/SubnavigationBar).

Этот компонент может использоваться:

- В качестве ссылки для создания быстрой и заметной точки входа в важный подраздел.
- В качестве кнопки, для управления контентом на странице. Например, показать модальную страницу с фильтрами или сразу активировать какой-то фильтр.

```jsx
const filters = ["Мой размер", "В наличии", "Высокий рейтинг", "Избранное"];

const SubnavigationFilter = (props) => {
  const [state, setState] = useState(() => new Set());

  const addItem = (item) => {
    setState((prev) => new Set(prev).add(item));
  };

  const removeItem = (item) => {
    setState((prev) => {
      const next = new Set(prev);

      next.delete(item);

      return next;
    });
  };

  const toggleItem = (item) => {
    if (state.has(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  const propsDescription = Object.keys(props)
    .map((keys) => `${keys}="${props[keys]}"`)
    .join(" ");

  return (
    <Group>
      <Header mode="secondary">{propsDescription}</Header>
      <SubnavigationBar>
        {filters.map((item) => (
          <SubnavigationButton
            key={item}
            selected={state.has(item)}
            onClick={() => toggleItem(item)}
            {...props}
          >
            {item}
          </SubnavigationButton>
        ))}
      </SubnavigationBar>
    </Group>
  );
};

<View activePanel="example">
  <Panel id="example">
    <PanelHeader>SubnavigationButton</PanelHeader>
    <Group>
      <SubnavigationBar>
        <SubnavigationButton before={<Icon24Filter />} expandable>
          Фильтры
        </SubnavigationButton>

        <SubnavigationButton
          before={<Icon24Filter />}
          selected
          expandable
          after={
            <Counter mode="primary" size="s">
              3
            </Counter>
          }
        >
          Фильтры
        </SubnavigationButton>
      </SubnavigationBar>

      <SubnavigationBar>
        <SubnavigationButton before={<Icon24ScanViewfinderOutline />} size="l">
          Сканировать QR
        </SubnavigationButton>

        <SubnavigationButton before={<Icon24UserAddOutline />} size="l">
          Добавить друга
        </SubnavigationButton>
      </SubnavigationBar>

      <SubnavigationBar>
        <SubnavigationButton>Мой размер</SubnavigationButton>

        <SubnavigationButton selected>Мой размер</SubnavigationButton>
      </SubnavigationBar>

      <SubnavigationBar>
        <SubnavigationButton
          after={
            <Counter mode="prominent" size="s">
              3
            </Counter>
          }
        >
          Новинки
        </SubnavigationButton>
      </SubnavigationBar>

      <SubnavigationBar>
        <SubnavigationButton
          before={<Icon24Filter />}
          selected
          expandable
          after={
            <Counter mode="primary" size="s">
              3
            </Counter>
          }
        >
          Фильтры
        </SubnavigationButton>

        <SubnavigationButton selected>Мой размер</SubnavigationButton>

        <SubnavigationButton>В наличии</SubnavigationButton>

        <SubnavigationButton before={<Icon24FavoriteOutline />}>
          Избранное
        </SubnavigationButton>
      </SubnavigationBar>
    </Group>

    <SubnavigationFilter mode="primary" />
    <SubnavigationFilter mode="outline" />
    <SubnavigationFilter mode="tertiary" />
    <SubnavigationFilter size="s" />
    <SubnavigationFilter size="m" />
    <SubnavigationFilter size="l" />
    <SubnavigationFilter textLevel={1} />
    <SubnavigationFilter textLevel={2} />
    <SubnavigationFilter textLevel={3} />
  </Panel>
</View>;
```

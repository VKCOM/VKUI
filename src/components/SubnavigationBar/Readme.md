В режиме `fixed` может потребоваться уменьшить размер шрифта у `SubnavigationButton`, чтобы текст показывался полностью.
За это отвечает свойство `textLevel` у `SubnavigationButton`.

```jsx
import { useState } from 'react';

const MODAL_NAME = 'filters';

const FILTERS_SIZE = [
  { value: 36, label: 36 },
  { value: 37, label: 37 },
  { value: 38, label: 38 },
  { value: 39, label: 39 },
];

const FILTERS_STYLE = [
  { value: 'Вечерний', label: 'Вечерний' },
  { value: 'Деловой', label: 'Деловой' },
  { value: 'Повседневный', label: 'Повседневный' },
  { value: 'Спортивный', label: 'Спортивный' },
];

const SubnavigationBarExample = () => {
  const platform = usePlatform();
  const { viewWidth } = useAdaptivity();

  const [activePanel, setActivePanel] = useState('example');
  const [filtersModalOpened, setFiltersModalOpened] = useState(false);
  const [filtersCount, setFiltersCount] = useState(2);
  
  const [filterSizes, setFilterSizes] = useState([36]);
  const [filterStyles, setFilterStyles] = useState(['Вечерний']);

  const [sizeSelected, setSizeSelected] = useState(false);
  const [inStockSelected, setInStockSelected] = useState(false);
  const [highRatingSelected, setHighRatingSelected] = useState(false);
  const [faveSelected, setFaveSelected] = useState(false);

  const openModal = () => {
    setFiltersModalOpened(true);
  };

  const closeModal = () => {
    setFiltersModalOpened(false);
  };
  
  const onChangeFilterSize = (e) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setFilterSizes([...filterSizes, +value]);
    } else {
      setFilterSizes(filterSizes.filter((v) => v !== +value));
    }
  };

  const onChangeFilterStyle = (e) => {
    const { value, checked } = e.currentTarget;
    if (checked) {
      setFilterStyles([...filterStyles, value]);
    } else {
      setFilterStyles(filterStyles.filter((v) => v !== value));
    }
  };
  
  const applyFilters = () => {
    let count = 0;

    filterSizes.length && (count++);
    filterStyles.length && (count++);

    closeModal();
    setFiltersCount(count);
  };

  const modal = (
    <ModalRoot
      activeModal={filtersModalOpened ? MODAL_NAME : null}
      onClose={closeModal}
    >
      <ModalPage
        id={MODAL_NAME}
        header={
          <ModalPageHeader
            left={platform !== IOS && <PanelHeaderClose onClick={closeModal} />}
            right={platform === IOS && <PanelHeaderButton onClick={closeModal}><Icon24Dismiss /></PanelHeaderButton>}
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <FormLayout>
          <FormItem top="Размер">
            {FILTERS_SIZE.map(({ value, label }) => {
              return (
                <Checkbox
                  value={value}
                  checked={filterSizes.includes(value)}
                  onChange={onChangeFilterSize}
                >{label}</Checkbox>
              );
            })}
          </FormItem>

          <FormItem top="Стиль">
            {FILTERS_STYLE.map(({ value, label }) => {
              return (
                <Checkbox
                  value={value}
                  checked={filterStyles.includes(value)}
                  onChange={onChangeFilterStyle}
                >{label}</Checkbox>
              );
            })}
          </FormItem>

          <FormItem>
            <Button size="l" stretched onClick={applyFilters}>Показать результаты</Button>
          </FormItem>
        </FormLayout>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <View activePanel={activePanel} modal={modal}>
      <Panel id="example">
        <PanelHeader>SubnavigationBar</PanelHeader>
        <Group>
          <SubnavigationBar>
            <SubnavigationButton
              before={<Icon24Filter/>}
              selected={filtersCount > 0}
              expandable
              after={filtersCount > 0 && <Counter mode="primary" size="s">{filtersCount}</Counter>}
              onClick={openModal}
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
              selected={faveSelected}
              onClick={() => setFaveSelected(!faveSelected)}
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
              onClick={() => setActivePanel('add_friend')}
            >
              Сканировать QR
            </SubnavigationButton>

            <SubnavigationButton
              before={<Icon24UserAddOutline />}
              size="l"
              textLevel={viewWidth <= ViewWidth.MOBILE ? 3 : 1}
              onClick={() => setActivePanel('add_friend')}
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
      <Panel id="add_friend">
        <PanelHeader
          left={<PanelHeaderBack onClick={() => setActivePanel('example')} />}
        >Добавить друга</PanelHeader>

        <Group>
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

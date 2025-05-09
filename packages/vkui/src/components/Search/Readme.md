Надстройка над `<input type="search" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx { "props": { "layout": false, "adaptivity": true, "showCustomPanelHeaderAfterProps": true } }
const thematics = [
  { id: 3201, name: 'Аренда автомобилей' },
  { id: 3273, name: 'Автотовары' },
  { id: 3205, name: 'Автосалон' },
  { id: 3282, name: 'Автосервис' },
  { id: 3283, name: 'Услуги для автовладельцев' },
  { id: 3284, name: 'Велосипеды' },
  { id: 3285, name: 'Мотоциклы и другая мототехника' },
  { id: 3286, name: 'Водный транспорт' },
  { id: 3287, name: 'Автопроизводитель' },
  { id: 3288, name: 'Автомойка' },
  { id: 3117, name: 'Автошкола' },
  { id: 3118, name: 'Детский сад' },
  { id: 3119, name: 'Гимназия' },
  { id: 3120, name: 'Колледж' },
  { id: 3121, name: 'Лицей' },
  { id: 3122, name: 'Техникум' },
  { id: 3123, name: 'Университет' },
  { id: 3124, name: 'Школа' },
  { id: 3125, name: 'Институт' },
  { id: 3126, name: 'Обучающие курсы' },
  { id: 3276, name: 'Дополнительное образование' },
  { id: 3275, name: 'Тренинг, семинар' },
  { id: 3127, name: 'Танцевальная школа' },
];

const users = getRandomUsers(18);

const SimpleSearch = ({ goHeaderSearch }) => {
  const platform = usePlatform();

  const [search, setSearch] = React.useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const thematicsFiltered = thematics.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <React.Fragment>
      <PanelHeader
        after={
          <PanelHeaderButton onClick={goHeaderSearch}>
            <VisuallyHidden>Добавить</VisuallyHidden>
            <Icon28AddOutline />
          </PanelHeaderButton>
        }
        delimiter="spacing"
      >
        Выбор тематики
      </PanelHeader>
      <Group>
        <Search value={search} onChange={onChange} after={null} />
        {thematicsFiltered.length > 0 &&
          thematicsFiltered.map((thematic) => <Cell key={thematic.id}>{thematic.name}</Cell>)}
        {thematicsFiltered.length === 0 && <Footer>Ничего не найдено</Footer>}
      </Group>
    </React.Fragment>
  );
};

const HeaderSearch = ({ goSearch, onFiltersClick }) => {
  const platform = usePlatform();

  const [search, setSearch] = React.useState('');

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const usersFiltered = users.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1,
  );

  return (
    <React.Fragment>
      <PanelHeader
        delimiter="spacing"
        before={platform !== 'vkcom' && <PanelHeaderBack onClick={goSearch} />}
      >
        <Search
          value={search}
          onChange={onChange}
          icon={<Icon24Filter />}
          onIconClick={onFiltersClick}
        />
      </PanelHeader>
      <Group>
        {usersFiltered.length > 0 &&
          usersFiltered.map((user) => (
            <SimpleCell
              before={<Avatar size={40} src={user.photo_100} />}
              key={user.id}
              onClick={goSearch}
            >
              {user.name}
            </SimpleCell>
          ))}
        {usersFiltered.length === 0 && <Footer>Ничего не найдено</Footer>}
      </Group>
    </React.Fragment>
  );
};

const SearchExample = () => {
  const platform = usePlatform();

  const [activePanel, setActivePanel] = React.useState('search');
  const [activeModal, setActiveModal] = React.useState(null);

  const goHeaderSearch = () => setActivePanel('header-search');

  const goSearch = () => setActivePanel('search');

  const openFilters = () => setActiveModal('filters');

  const hideModal = () => setActiveModal(null);

  const isVKCOM = platform === 'vkcom';

  return (
    <React.Fragment>
      <SplitLayout header={!isVKCOM && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced={!isVKCOM}>
          <View activePanel={activePanel}>
            <Panel id="search">
              <SimpleSearch goHeaderSearch={goHeaderSearch} />
            </Panel>
            <Panel id="header-search">
              <HeaderSearch onFiltersClick={openFilters} goSearch={goSearch} />
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
      <ModalRoot activeModal={activeModal}>
        <ModalPage
          id="filters"
          onClose={hideModal}
          header={
            <ModalPageHeader
              before={
                platform === 'android' && (
                  <PanelHeaderButton onClick={hideModal}>
                    <VisuallyHidden>Отмена</VisuallyHidden>
                    <Icon24Cancel />
                  </PanelHeaderButton>
                )
              }
              after={
                <PanelHeaderButton onClick={hideModal}>
                  {platform === 'ios' ? (
                    'Готово'
                  ) : (
                    <>
                      <VisuallyHidden>Готово</VisuallyHidden>
                      <Icon24Done />
                    </>
                  )}
                </PanelHeaderButton>
              }
            >
              Фильтры
            </ModalPageHeader>
          }
        >
          <Group>
            <FormItem top="Страна">
              <SelectMimicry placeholder="Не выбрана" />
            </FormItem>
            <FormItem top="Город">
              <SelectMimicry placeholder="Не выбран" />
            </FormItem>
            <FormItem top="Пол">
              <Radio name="sex" value="male" defaultChecked>
                Любой
              </Radio>
              <Radio name="sex" value="male">
                Мужской
              </Radio>
              <Radio name="sex" value="female">
                Женский
              </Radio>
            </FormItem>
          </Group>
        </ModalPage>
      </ModalRoot>
    </React.Fragment>
  );
};

<SearchExample />;
```

## Поиск с кнопкой Найти

```jsx { "props": { "adaptivity": true } }
const App = () => {
  const platform = usePlatform();

  const isVKCOM = platform === Platform.VKCOM;

  const [activeModal, setActiveModal] = React.useState(null);

  const onFindButtonClick = () => {
    setActiveModal('findModal');
  };
  return (
    <React.Fragment>
      <SplitLayout header={!isVKCOM && <PanelHeader delimiter="none" />}>
        <SplitCol>
          <View activePanel="find">
            <Panel id="find">
              <PanelHeader>Только для Compact-версии</PanelHeader>
              <Group>
                <Search
                  defaultValue="value"
                  icon={(renderButton) => (
                    <Popover
                      noStyling
                      trigger="click"
                      id="menupopup"
                      role="dialog"
                      aria-labelledby="menubutton"
                      content={({ onClose }) => (
                        <div
                          style={{
                            backgroundColor: 'var(--vkui--color_background_modal_inverse)',
                            borderRadius: 8,
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                          }}
                        >
                          <CellButton
                            role="menuitem"
                            before={<Icon28AddOutline />}
                            onClick={onClose}
                          >
                            Добавить
                          </CellButton>
                          <CellButton
                            role="menuitem"
                            before={<Icon28DeleteOutline />}
                            appearance="negative"
                            onClick={onClose}
                          >
                            Добавить и очистить
                          </CellButton>
                        </div>
                      )}
                    >
                      {renderButton(<Icon24Done />)}
                    </Popover>
                  )}
                  after={<Icon24User />}
                  onFindButtonClick={onFindButtonClick}
                />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
      <ModalRoot activeModal={activeModal}>
        <ModalCard
          id="findModal"
          onClose={() => setActiveModal(null)}
          icon={<Icon56MoneyTransferOutline />}
          title="Здесь ничего нет"
          actions={
            <Button size="l" mode="primary" stretched onClick={() => setActiveModal(null)}>
              Понятно
            </Button>
          }
        ></ModalCard>
      </ModalRoot>
    </React.Fragment>
  );
};

<App />;
```

Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

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

  const thematicsFiltered = thematics.filter(
    ({ name }) => name.toLowerCase().indexOf(search.toLowerCase()) > -1,
  );

  return (
    <React.Fragment>
      <PanelHeader
        after={
          <PanelHeaderButton aria-label="Добавить" onClick={goHeaderSearch}>
            <Icon28AddOutline />
          </PanelHeaderButton>
        }
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
      <PanelHeader before={platform !== Platform.VKCOM && <PanelHeaderBack onClick={goSearch} />}>
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

  const isVKCOM = platform === Platform.VKCOM;

  return (
    <SplitLayout
      header={!isVKCOM && <PanelHeader separator={false} />}
      modal={
        <ModalRoot activeModal={activeModal}>
          <ModalPage
            id="filters"
            onClose={hideModal}
            header={
              <ModalPageHeader
                before={
                  platform === Platform.ANDROID && (
                    <PanelHeaderButton aria-label="Отмена" onClick={hideModal}>
                      <Icon24Cancel />
                    </PanelHeaderButton>
                  )
                }
                after={
                  <PanelHeaderButton aria-label="Готово" onClick={hideModal}>
                    {platform === Platform.IOS ? 'Готово' : <Icon24Done />}
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
      }
    >
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
  );
};

<SearchExample />;
```

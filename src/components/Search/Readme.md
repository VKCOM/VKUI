Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const thematics = [
  { id: 3201, name: "Аренда автомобилей" },
  { id: 3273, name: "Автотовары" },
  { id: 3205, name: "Автосалон" },
  { id: 3282, name: "Автосервис" },
  { id: 3283, name: "Услуги для автовладельцев" },
  { id: 3284, name: "Велосипеды" },
  { id: 3285, name: "Мотоциклы и другая мототехника" },
  { id: 3286, name: "Водный транспорт" },
  { id: 3287, name: "Автопроизводитель" },
  { id: 3288, name: "Автомойка" },
  { id: 3117, name: "Автошкола" },
  { id: 3118, name: "Детский сад" },
  { id: 3119, name: "Гимназия" },
  { id: 3120, name: "Колледж" },
  { id: 3121, name: "Лицей" },
  { id: 3122, name: "Техникум" },
  { id: 3123, name: "Университет" },
  { id: 3124, name: "Школа" },
  { id: 3125, name: "Институт" },
  { id: 3126, name: "Обучающие курсы" },
  { id: 3276, name: "Дополнительное образование" },
  { id: 3275, name: "Тренинг, семинар" },
  { id: 3127, name: "Танцевальная школа" },
];

const users = getRandomUsers(18);

class SimpleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  get thematics() {
    const search = this.state.search.toLowerCase();
    return thematics.filter(
      ({ name }) => name.toLowerCase().indexOf(search) > -1
    );
  }

  render() {
    return (
      <React.Fragment>
        <PanelHeader
          right={
            <PanelHeaderButton onClick={this.props.goHeaderSearch}>
              <Icon28AddOutline />
            </PanelHeaderButton>
          }
          separator={this.props.sizeX === SizeType.REGULAR}
        >
          Выбор тематики
        </PanelHeader>
        <Group>
          <Search
            value={this.state.search}
            onChange={this.onChange}
            after={null}
          />
          {this.thematics.length > 0 &&
            this.thematics.map((thematic) => (
              <Cell key={thematic.id}>{thematic.name}</Cell>
            ))}
          {this.thematics.length === 0 && <Footer>Ничего не найдено</Footer>}
        </Group>
      </React.Fragment>
    );
  }
}

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ search: e.target.value });
  }

  get users() {
    const search = this.state.search.toLowerCase();
    return users.filter(({ name }) => name.toLowerCase().indexOf(search) > -1);
  }

  render() {
    const { platform, sizeX, goSearch, onFiltersClick } = this.props;
    return (
      <React.Fragment>
        <PanelHeader
          left={platform !== VKCOM && <PanelHeaderBack onClick={goSearch} />}
          separator={sizeX === SizeType.REGULAR}
        >
          <Search
            value={this.state.search}
            onChange={this.onChange}
            icon={<Icon24Filter />}
            onIconClick={onFiltersClick}
          />
        </PanelHeader>
        <Group>
          {this.users.length > 0 &&
            this.users.map((user) => (
              <SimpleCell
                before={<Avatar size={40} src={user.photo_100} />}
                key={user.id}
                onClick={goSearch}
              >
                {user.name}
              </SimpleCell>
            ))}
          {this.users.length === 0 && <Footer>Ничего не найдено</Footer>}
        </Group>
      </React.Fragment>
    );
  }
}

class SearchExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: "search",
      activeModal: null,
    };

    this.goSearch = this.goSearch.bind(this);
    this.goHeaderSearch = this.goHeaderSearch.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  goHeaderSearch() {
    this.setState({ activePanel: "header-search" });
  }
  goSearch() {
    this.setState({ activePanel: "search" });
  }
  hideModal() {
    this.setState({ activeModal: null });
  }

  render() {
    const { platform } = this.props;
    return (
      <View
        activePanel={this.state.activePanel}
        modal={
          <ModalRoot activeModal={this.state.activeModal}>
            <ModalPage
              id="filters"
              onClose={this.hideModal}
              header={
                <ModalPageHeader
                  left={
                    platform === ANDROID && (
                      <PanelHeaderButton onClick={this.hideModal}>
                        <Icon24Cancel />
                      </PanelHeaderButton>
                    )
                  }
                  right={
                    <PanelHeaderButton onClick={this.hideModal}>
                      {platform === IOS ? "Готово" : <Icon24Done />}
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
        <Panel id="search">
          <SimpleSearch
            sizeX={this.props.sizeX}
            goHeaderSearch={this.goHeaderSearch}
            platform={platform}
          />
        </Panel>
        <Panel id="header-search">
          <HeaderSearch
            sizeX={this.props.sizeX}
            onFiltersClick={() => this.setState({ activeModal: "filters" })}
            goSearch={this.goSearch}
            platform={platform}
          />
        </Panel>
      </View>
    );
  }
}

const AdaptivitySearch = withPlatform(
  withAdaptivity(SearchExample, { sizeX: true })
);

<AdaptivitySearch />;
```

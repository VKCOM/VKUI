`ModalRoot` – контейнер для модальных страниц и карточек.
Модальные страницы и карточки поддерживают различные жесты: раскрытие на весь экран, закрытие смахиванием вниз.

#### Структура

Этот компонент должен быть передан в качестве свойства `modal` компоненту [`SplitLayout`](#/SplitLayout).

**Важно:** структура модальных страниц и карточек должна определяться единожды на старте приложения. Структура – это *декларация* приложения.
То есть, один раз определив структуру вида:

```jsx static
class App extends Component {
  render() {
    const modal = (
      <ModalRoot activeModal={this.state.activeModal}>
        <ModalPage id="select">
          ...
        </ModalPage>
        <ModalCard id="faq">
          ...
        </ModalCard>
      </ModalRoot>
    );

    return (
      <View modal={modal}>
        ...
      </View>
    );
  }
}
```

она не должна меняться в ходе работы приложения. Нельзя добавлять новые `ModalPage` и `ModalCard`, нельзя менять их `id`.
Можно только менять содержимое модальных страниц или карточек. Например, отрендерить список элементов в модальной странице фильтра.

#### Описание работы

В качестве `children` принимает коллекцию `ModalPage` и `ModalCard`.
У каждого модального окна должен быть уникальный `id`. Свойство `activeModal` определяет какая страница или карточка активна.

- При смене значения свойства `activeModal` происходит плавный переход от одного модального окна к другому.
- При установке `activeModal` как `null` текущее модальное окно закрывается.

`ModalRoot` принимает свойство `onClose`, которое будет вызвано с идентификатором текущего активного модального окна
или карточки после свайпа или нажатия на крестик. Приложение должно установить в качестве нового значения `activeModal`
либо идентификатор предыдущей модалки, либо `null` для скрытия.
Каждой конкретной `ModalPage` или `ModalCard` можно передать свой обработчик `onClose`, если нужно переопределить поведение.

```jsx
const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_COUNTRIES = 'countries';
const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
const MODAL_PAGE_USER_INFO = 'user-info';
const MODAL_PAGE_FULLSCREEN = 'fullscreen';
const MODAL_PAGE_DYNAMIC = 'dynamic';

const MODAL_CARD_MONEY_SEND = 'money-send';
const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
const MODAL_CARD_ABOUT = 'say-about';
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const MODAL_CARD_CHAT_INVITE = 'chat-invite';

const DynamicModalPage = ({ updateModalHeight, onClose, ...props }) => {
  const { viewWidth } = useAdaptivity();
  const isMobile = viewWidth <= ViewWidth.MOBILE;
  const platform = usePlatform();
  const [expanded, setExpanded] = React.useState(false);
  const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <ModalPage
      {...props}
      header={
        <ModalPageHeader
          right={isMobile && platform === IOS && <PanelHeaderButton onClick={onClose}><Icon24Dismiss/></PanelHeaderButton>}
          left={isMobile && platform === ANDROID && <PanelHeaderClose onClick={onClose}/>}
        >
          Dynamic modal
        </ModalPageHeader>
      }
    >
      <Group>
        <CellButton onClick={toggle}>
          {expanded ? "collapse" : "expand"}
        </CellButton>
        {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
      </Group>
    </ModalPage>
  );
};

const App = withPlatform(withAdaptivity(class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeModal: null,
      modalHistory: []
    };

    this.users = 'k'.repeat(25).split('').map(() => {
      return getRandomUser();
    });
    
    this.randomUser = getRandomUser();

    this.modalBack = () => {
      this.setActiveModal(this.state.modalHistory[this.state.modalHistory.length - 2]);
    };
  }

  setActiveModal(activeModal) {
    activeModal = activeModal || null;
    let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

    if (activeModal === null) {
      modalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
    } else {
      modalHistory.push(activeModal);
    }

    this.setState({
      activeModal,
      modalHistory
    });
  };

  render() {
    const isMobile = this.props.viewWidth <= ViewWidth.MOBILE;
    const platform = this.props.platform;
    
    const modal = (
      <ModalRoot
        activeModal={this.state.activeModal}
        onClose={this.modalBack}
      >
        <ModalPage
          id={MODAL_PAGE_FULLSCREEN}
          onClose={this.modalBack}
          settlingHeight={100}
          header={
            <ModalPageHeader
              right={platform === IOS && <PanelHeaderButton onClick={this.modalBack}><Icon24Dismiss/></PanelHeaderButton>}
              left={isMobile && platform === ANDROID && <PanelHeaderClose onClick={this.modalBack}/>}
            >
              @{this.randomUser.screen_name}
            </ModalPageHeader>
          }
        >
          <Gradient style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}>
            <Avatar size={96} src={this.randomUser.photo_100}/>
            <Title style={{marginBottom: 8, marginTop: 20}} level="2"
                   weight="medium">{this.randomUser.first_name + " " + this.randomUser.last_name}</Title>
          </Gradient>
          <Group header={<Header mode="secondary" indicator="25">Друзья</Header>}>
            {this.users.map((user) => {
              return (
                <SimpleCell
                  before={<Avatar src={user.photo_100}/>}
                  key={user.id}
                >{user.name}</SimpleCell>
              );
            })}
          </Group>
        </ModalPage>

        <DynamicModalPage
          id={MODAL_PAGE_DYNAMIC}
          onClose={this.modalBack}
          dynamicContentHeight
        />
      
        <ModalPage
          id={MODAL_PAGE_FILTERS}
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={isMobile && <PanelHeaderClose onClick={this.modalBack}/>}
              right={<PanelHeaderSubmit onClick={this.modalBack}/>}
            >
              Фильтры
            </ModalPageHeader>
          }
        >
          <Group>
            <CellButton onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)}>Выбор страны</CellButton>
            <CellButton onClick={() => this.setActiveModal(MODAL_PAGE_STORY_FEEDBACK)}>Просмотры истории</CellButton>
            <CellButton onClick={() => this.setActiveModal(MODAL_PAGE_USER_INFO)}>Информация о пользователе</CellButton>

            <FormItem top="Страна">            
              <SelectMimicry placeholder="Выбрать страну" onClick={() => this.setActiveModal(MODAL_PAGE_COUNTRIES)} />
            </FormItem>
            <FormItem top="Город">            
              <SelectMimicry placeholder="Выбрать город" disabled />
            </FormItem>

            <FormItem top="Пол">
              <Radio name="sex" value={0} defaultChecked>Любой</Radio>
              <Radio name="sex" value={1}>Мужской</Radio>
              <Radio name="sex" value={2}>Женский</Radio>
            </FormItem>

            <FormItem top="Школа">            
              <SelectMimicry placeholder="Выбрать школу" disabled />
            </FormItem>
            <FormItem top="Университет">            
              <SelectMimicry placeholder="Выбрать университет" disabled />
            </FormItem>

            <FormItem top="Дополнительно">
              <Checkbox>С фотографией</Checkbox>
              <Checkbox>Сейчас на сайте</Checkbox>
            </FormItem>

            <FormItem top="Работа">
              <Input placeholder="Место работы" />
            </FormItem>
            <FormItem>
              <Input placeholder="Должность" />
            </FormItem>

            <FormItem top="Дата рождения">
              <DatePicker 
                min={{day: 1, month: 1, year: 1901}} 
                max={{day: 1, month: 1, year: 2006}}
                dayPlaceholder="Д"
                monthPlaceholder="ММ"
                yearPlaceholder="ГГ" 
              />
            </FormItem>
          </Group>
        </ModalPage>

        <ModalPage
          id={MODAL_PAGE_COUNTRIES}
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={<PanelHeaderBack label="Назад" onClick={this.modalBack} />}
            >
              Выберите страну
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
          <Group>
            <CellButton onClick={() => this.setActiveModal(MODAL_PAGE_USER_INFO)}>Информация о пользователе</CellButton>

            <FormLayoutGroup>
              {importantCountries.map(({ id, title }) => {
                return (
                  <Radio key={id} name="country" value={id}>{title}</Radio>
                );
              })}
            </FormLayoutGroup>
          </Group>
        </ModalPage>

        <ModalPage
          id={MODAL_PAGE_STORY_FEEDBACK}
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={<PanelHeaderBack label="Назад" onClick={this.modalBack} />}
            >
              Просмотры истории
            </ModalPageHeader>
          }
          settlingHeight={80}
        >
          <Group>
            {this.users.map((user) => {
              return (
                <SimpleCell
                  before={<Avatar src={user.photo_100} />}
                  key={user.id}
                >{user.name}</SimpleCell>
              );
            })}
          </Group>
        </ModalPage>

        <ModalPage
          id={MODAL_PAGE_USER_INFO}
          onClose={this.modalBack}
          header={
            <ModalPageHeader
              left={<PanelHeaderBack label="Назад" onClick={this.modalBack} />}
            >
              Информация о пользователе
            </ModalPageHeader>
          }
        >
          <Group>
            <Cell>
              <InfoRow header="Дата рождения">
                30 января 1993
              </InfoRow>
            </Cell>
            <Cell>
              <InfoRow header="Родной город">
                Ереван
              </InfoRow>
            </Cell>
            <Cell>
              <InfoRow header="Место работы">
                Команда ВКонтакте
              </InfoRow>
            </Cell>
          </Group>
        </ModalPage>

        <ModalCard
          id={MODAL_CARD_MONEY_SEND}
          onClose={() => this.setActiveModal(null)}
          icon={<Icon56MoneyTransferOutline />}
          header="Отправляйте деньги друзьям, используя банковскую карту"
          subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
          actions={
            <Button size="l" mode="primary" onClick={() => this.setActiveModal(MODAL_CARD_APP_TO_MENU)}>
              Попробовать
            </Button>
          }
        >

        </ModalCard>

        <ModalCard
          id={MODAL_CARD_APP_TO_MENU}
          onClose={() => this.setActiveModal(null)}
          icon={<Avatar mode="app" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
          header="Добавить игру «Загадки детства» в меню?"
          subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
          actions={
            <Button size="l" mode="primary" onClick={() => this.setActiveModal(MODAL_CARD_ABOUT)}>
              Добавить в меню
            </Button>
          }
        />

        <ModalCard
          id={MODAL_CARD_ABOUT}
          onClose={() => this.setActiveModal(null)}
          header="Расскажите о себе"
          actions={
            <Button size="l" mode="primary" onClick={() => this.setActiveModal(MODAL_CARD_NOTIFICATIONS)}>
              Сохранить
            </Button>
          }
        >
          <Textarea defaultValue="В Грузии" />
        </ModalCard>

        <ModalCard
          id={MODAL_CARD_NOTIFICATIONS}
          onClose={() => this.setActiveModal(null)}
          icon={<Icon56NotificationOutline />}
          header="Приложение запрашивает разрешение на отправку Вам уведомлений"
          actions={[
            <Button key="deny" size="l" mode="secondary" onClick={() => this.setActiveModal(MODAL_CARD_CHAT_INVITE)}>
              Запретить
            </Button>,
            <Button key="allow" size="l" mode="primary" onClick={() => this.setActiveModal(MODAL_CARD_CHAT_INVITE)}>
              Разрешить
            </Button>,
          ]}
        />

        <ModalCard
          id={MODAL_CARD_CHAT_INVITE}
          onClose={() => this.setActiveModal(null)}
          icon={<Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />}
          header="Баскетбол на выходных"
          subheader="Приглашение в беседу"
          actions={[
            <Button key="join" size="l" mode="primary" onClick={() => this.setActiveModal(null)}>
              Присоединиться
            </Button>,
            <Button key="copy" size="l" mode="secondary" onClick={() => this.setActiveModal(null)}>
              Скопировать приглашение
            </Button>,
          ]}
          actionsLayout="vertical"
        >
          <UsersStack
            photos={[
              getAvatarUrl('user_mm'),
              getAvatarUrl('user_ilyagrshn'),
              getAvatarUrl('user_lihachyov'),
              getAvatarUrl('user_wayshev'),
              getAvatarUrl('user_arthurstam'),
              getAvatarUrl('user_xyz'),
            ]}
            size="m"
            visibleCount={3}
            layout="vertical"
          >Алексей, Илья, Михаил<br />и ещё 3 человека</UsersStack>
        </ModalCard>
      </ModalRoot>
    );

    return (
      <View activePanel="modals" modal={modal}>
        <Panel id="modals">
          <PanelHeader>Модальные окна</PanelHeader>
            <Group>
              <CellButton onClick={() => this.setActiveModal(MODAL_PAGE_FILTERS)}>
                Открыть модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => this.setActiveModal(MODAL_PAGE_FULLSCREEN)}>
                Открыть полноэкранную модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => this.setActiveModal(MODAL_PAGE_DYNAMIC)}>
                Открыть модальную страницу с динамической высотой
              </CellButton>
              <CellButton onClick={() => this.setActiveModal(MODAL_CARD_MONEY_SEND)}>
                Открыть модальные карточки
              </CellButton>
            </Group>
        </Panel>
      </View>
    );
  }
}, {
  viewWidth: true
}));

<App />
```

### Решение проблем

#### Я указал `dynamicContentHeight` у `ModalPage`, но высота модальной страницы не меняется

Если содержимое вашей модальной страницы вынесено в отдельный компонент, и при смене контента не обновляется высота, оберните вынесенный компонент в hoc `withModalRootContext` и вызывайте прокидываемый проп-функцию `updateModalHeight` после действий, которые могут привести к смене высоты содержимого.

`src/App.js`

```jsx static
import SelectModal from './SelectModal';

class App extends Component {
  state = {
    activeModal: 'select',
  };

  render() {
    const modal = (
      <ModalRoot activeModal={this.state.activeModal}>
        <ModalPage id="select" dynamicContentHeight>
          <SelectModal />
        </ModalPage>
      </ModalRoot>
    );

    return (
      <View activePanel="main" modal={modal}>
        <Panel id="main">
          ...
        </Panel>
      </View>
    );
  }
}
```

`src/SelectModal.js`

```jsx static
import { withModalRootContext } from '@vkontakte/vkui';

class SelectModal extends Component {
  state = {
    items: [],
    isLoading: true,
  };

  static propTypes = {
    // Сообщает ModalRoot, что высота модальной страницы могла измениться
    updateModalHeight: PropTypes.func,
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    fetch('').then((r) => r.json()).then((items) => {
      this.setState({
        isLoading: false,
        items,
      }, () => {
        // После установки стейта и перерисовки компонента SelectModal сообщим ModalRoot об изменениях
        this.props.updateModalHeight();
      });
    });
  }

  render() {
    return (
      <div className="SelectModal">
        {this.state.isLoading && <Spinner />}
        {!this.state.isLoading &&
        <Group>
          {this.state.items.map((item) => (
            <Cell key={item.id}>
              {item.title}
            </Cell>
          ))}
        </Group>
        }
      </div>
    );
  }
}

export default withModalRootContext(SelectModal);
```

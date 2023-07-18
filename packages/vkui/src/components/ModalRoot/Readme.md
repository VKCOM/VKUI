`ModalRoot` – контейнер для модальных страниц и карточек.
Модальные страницы и карточки поддерживают различные жесты: раскрытие на весь экран, закрытие смахиванием вниз.

#### Структура

Этот компонент должен быть передан в качестве свойства `modal` компоненту [`SplitLayout`](https://vkcom.github.io/VKUI/#/SplitLayout).

> ⚠️ Структура модальных страниц и карточек должна определяться единожды на старте приложения. Структура – это _декларация_ приложения.
> То есть, один раз определив структуру вида:

```jsx static
const App = () => {
  const modal = (
    <ModalRoot activeModal={this.state.activeModal}>
      <ModalPage id="select">...</ModalPage>
      <ModalCard id="faq">...</ModalCard>
    </ModalRoot>
  );

  return <SplitLayout modal={modal}>...</SplitLayout>;
};
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

```jsx { "props": { "layout": false, "adaptivity": true, "showCustomPanelHeaderAfterProps": true } }
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
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();
  const [expanded, setExpanded] = React.useState(false);
  const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <ModalPage
      {...props}
      header={
        <ModalPageHeader
          before={
            sizeX.compact &&
            platform === Platform.ANDROID && (
              <PanelHeaderClose className={sizeX.compact.className} onClick={onClose} />
            )
          }
          after={
            sizeX.compact &&
            platform === Platform.IOS && (
              <PanelHeaderButton className={sizeX.compact.className} onClick={onClose}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        >
          Dynamic modal
        </ModalPageHeader>
      }
    >
      <Group>
        <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
        {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
      </Group>
    </ModalPage>
  );
};

const App = () => {
  const { sizeX } = useAdaptivityConditionalRender();
  const [activeModal, setActiveModal] = useState(null);
  const [modalHistory, setModalHistory] = useState([]);
  const [randomUser] = useState(() => getRandomUser());
  const [users] = useState(() =>
    'k'
      .repeat(25)
      .split('')
      .map(() => {
        return getRandomUser();
      }),
  );
  const platform = usePlatform();

  const changeActiveModal = (activeModal) => {
    activeModal = activeModal || null;
    let localModalHistory = modalHistory ? [...modalHistory] : [];

    if (activeModal === null) {
      localModalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
    } else {
      localModalHistory.push(activeModal);
    }

    setActiveModal(activeModal);
    setModalHistory(localModalHistory);
  };

  const modalBack = () => {
    changeActiveModal(modalHistory[modalHistory.length - 2]);
  };

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalPage
        id={MODAL_PAGE_FULLSCREEN}
        onClose={modalBack}
        settlingHeight={100}
        hideCloseButton={platform === Platform.IOS}
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === Platform.ANDROID && (
                <PanelHeaderClose className={sizeX.compact.className} onClick={modalBack} />
              )
            }
            after={
              platform === Platform.IOS && (
                <PanelHeaderButton onClick={modalBack}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
            @{randomUser.screen_name}
          </ModalPageHeader>
        }
      >
        <Gradient
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 32,
          }}
        >
          <Avatar size={96} src={randomUser.photo_100} />
          <Title style={{ marginBottom: 8, marginTop: 20 }} level="2" weight="2">
            {randomUser.first_name + ' ' + randomUser.last_name}
          </Title>
        </Gradient>
        <Group
          header={
            <Header mode="secondary" indicator="25">
              Друзья
            </Header>
          }
        >
          {users.map((user) => {
            return (
              <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPage>

      <DynamicModalPage id={MODAL_PAGE_DYNAMIC} onClose={modalBack} dynamicContentHeight />

      <ModalPage
        id={MODAL_PAGE_FILTERS}
        onClose={modalBack}
        header={
          <ModalPageHeader
            before={
              sizeX.compact && (
                <PanelHeaderClose className={sizeX.compact.className} onClick={modalBack} />
              )
            }
            after={<PanelHeaderSubmit onClick={modalBack} />}
          >
            Фильтры
          </ModalPageHeader>
        }
      >
        <Group>
          <CellButton onClick={() => changeActiveModal(MODAL_PAGE_COUNTRIES)}>
            Выбор страны
          </CellButton>
          <CellButton onClick={() => changeActiveModal(MODAL_PAGE_STORY_FEEDBACK)}>
            Просмотры истории
          </CellButton>
          <CellButton onClick={() => changeActiveModal(MODAL_PAGE_USER_INFO)}>
            Информация о пользователе
          </CellButton>

          <FormItem top="Страна">
            <SelectMimicry
              placeholder="Выбрать страну"
              onClick={() => changeActiveModal(MODAL_PAGE_COUNTRIES)}
            />
          </FormItem>
          <FormItem top="Город">
            <SelectMimicry placeholder="Выбрать город" disabled />
          </FormItem>

          <FormItem top="Пол">
            <Radio name="sex" value={0} defaultChecked>
              Любой
            </Radio>
            <Radio name="sex" value={1}>
              Мужской
            </Radio>
            <Radio name="sex" value={2}>
              Женский
            </Radio>
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
              min={{ day: 1, month: 1, year: 1901 }}
              max={{ day: 1, month: 1, year: 2006 }}
              dayPlaceholder="Д"
              monthPlaceholder="ММ"
              yearPlaceholder="ГГ"
            />
          </FormItem>
        </Group>
      </ModalPage>

      <ModalPage
        id={MODAL_PAGE_COUNTRIES}
        onClose={modalBack}
        header={
          <ModalPageHeader before={<PanelHeaderBack label="Назад" onClick={modalBack} />}>
            Выберите страну
          </ModalPageHeader>
        }
        settlingHeight={80}
      >
        <Group>
          <CellButton onClick={() => changeActiveModal(MODAL_PAGE_USER_INFO)}>
            Информация о пользователе
          </CellButton>

          <FormLayoutGroup>
            {importantCountries.map(({ id, title }) => {
              return (
                <Radio key={id} name="country" value={id}>
                  {title}
                </Radio>
              );
            })}
          </FormLayoutGroup>
        </Group>
      </ModalPage>

      <ModalPage
        id={MODAL_PAGE_STORY_FEEDBACK}
        onClose={modalBack}
        header={
          <ModalPageHeader before={<PanelHeaderBack label="Назад" onClick={modalBack} />}>
            Просмотры истории
          </ModalPageHeader>
        }
        settlingHeight={80}
      >
        <Group>
          {users.map((user) => {
            return (
              <SimpleCell before={<Avatar src={user.photo_100} />} key={user.id}>
                {user.name}
              </SimpleCell>
            );
          })}
        </Group>
      </ModalPage>

      <ModalPage
        id={MODAL_PAGE_USER_INFO}
        onClose={modalBack}
        header={
          <ModalPageHeader before={<PanelHeaderBack label="Назад" onClick={modalBack} />}>
            Информация о пользователе
          </ModalPageHeader>
        }
      >
        <Group>
          <Cell>
            <InfoRow header="Дата рождения">30 января 1993</InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Родной город">Ереван</InfoRow>
          </Cell>
          <Cell>
            <InfoRow header="Место работы">Команда ВКонтакте</InfoRow>
          </Cell>
        </Group>
      </ModalPage>

      <ModalCard
        id={MODAL_CARD_MONEY_SEND}
        onClose={() => changeActiveModal(null)}
        icon={<Icon56MoneyTransferOutline />}
        header="Отправляйте деньги друзьям, используя банковскую карту"
        subheader="Номер карты получателя не нужен — он сам решит, куда зачислить средства."
        actions={
          <Button
            size="l"
            mode="primary"
            stretched
            onClick={() => changeActiveModal(MODAL_CARD_APP_TO_MENU)}
          >
            Попробовать
          </Button>
        }
      ></ModalCard>

      <ModalCard
        id={MODAL_CARD_APP_TO_MENU}
        onClose={() => changeActiveModal(null)}
        icon={<Image borderRadius="l" src={getAvatarUrl('app_zagadki', 200)} size={72} />}
        header="Добавить игру «Загадки детства» в меню?"
        subheader="Игра появится под списком разделов на экране меню и будет всегда под рукой."
        actions={
          <Button
            size="l"
            mode="primary"
            stretched
            onClick={() => changeActiveModal(MODAL_CARD_ABOUT)}
          >
            Добавить в меню
          </Button>
        }
      />

      <ModalCard
        id={MODAL_CARD_ABOUT}
        onClose={() => changeActiveModal(null)}
        header="Расскажите о себе"
        actions={
          <Button
            size="l"
            mode="primary"
            stretched
            onClick={() => changeActiveModal(MODAL_CARD_NOTIFICATIONS)}
          >
            Сохранить
          </Button>
        }
      >
        <Textarea defaultValue="В Грузии" />
      </ModalCard>

      <ModalCard
        id={MODAL_CARD_NOTIFICATIONS}
        onClose={() => changeActiveModal(null)}
        icon={<Icon56NotificationOutline />}
        header="Приложение запрашивает разрешение на отправку Вам уведомлений"
        actions={
          <ButtonGroup size="s" stretched>
            <Button
              key="deny"
              size="l"
              mode="secondary"
              stretched
              onClick={() => changeActiveModal(MODAL_CARD_CHAT_INVITE)}
            >
              Запретить
            </Button>
            <Button
              key="allow"
              size="l"
              mode="primary"
              stretched
              onClick={() => changeActiveModal(MODAL_CARD_CHAT_INVITE)}
            >
              Разрешить
            </Button>
          </ButtonGroup>
        }
      />

      <ModalCard
        id={MODAL_CARD_CHAT_INVITE}
        onClose={() => changeActiveModal(null)}
        icon={<Avatar src={getAvatarUrl('chat_basketball', 200)} size={72} />}
        header="Баскетбол на выходных"
        subheader="Приглашение в беседу"
        actions={
          <ButtonGroup size="l" mode="vertical" stretched>
            <Button
              key="join"
              size="l"
              mode="primary"
              stretched
              onClick={() => changeActiveModal(null)}
            >
              Присоединиться
            </Button>
            <Button
              key="copy"
              size="l"
              mode="secondary"
              stretched
              onClick={() => changeActiveModal(null)}
            >
              Скопировать приглашение
            </Button>
          </ButtonGroup>
        }
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
          size="l"
          visibleCount={3}
          layout="vertical"
        >
          Алексей, Илья, Михаил
          <br />и ещё 3 человека
        </UsersStack>
      </ModalCard>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <PanelHeader>Модальные окна</PanelHeader>
            <Group>
              <CellButton onClick={() => changeActiveModal(MODAL_PAGE_FILTERS)}>
                Открыть модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_FULLSCREEN)}>
                Открыть полноэкранную модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_DYNAMIC)}>
                Открыть модальную страницу с динамической высотой
              </CellButton>
              <CellButton onClick={() => changeActiveModal(MODAL_CARD_MONEY_SEND)}>
                Открыть модальные карточки
              </CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<App />;
```

### FAQ

#### Как поменять максимальную ширину контента?

Используйте параметр `size`.

#### Я указал `dynamicContentHeight` у `ModalPage`, но высота модальной страницы не меняется

Если содержимое вашей модальной страницы вынесено в отдельный компонент, и при смене контента не обновляется высота, используйте хук `useModalRootContext` и вызывайте `updateModalHeight` после действий, которые могут привести к смене высоты содержимого.

`src/App.js`

```jsx static
import SelectModal from './SelectModal';

const App = () => {
  const [activeModal, setActiveModal] = React.useState('select');

  const modal = (
    <ModalRoot activeModal={activeModal}>
      <ModalPage id="select" dynamicContentHeight>
        <SelectModal />
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="main">
          <Panel id="main">...</Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
```

`src/SelectModal.js`

```jsx static
import { useModalRootContext } from '@vkontakte/vkui';

export const SelectModal = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { updateModalHeight } = useModalRootContext();

  const fetchItems = () => {
    fetch('')
      .then((r) => r.json())
      .then((items) => {
        setItems(items);
        setIsLoading(false);
      });
  };

  React.useEffect(fetchItems, []);

  // После установки стейта и перерисовки компонента SelectModal сообщим ModalRoot об изменениях
  React.useEffect(updateModalHeight, [items.length]);

  return (
    <div className="SelectModal">
      {isLoading && <Spinner />}
      {!isLoading && (
        <Group>
          {items.map((item) => (
            <Cell key={item.id}>{item.title}</Cell>
          ))}
        </Group>
      )}
    </div>
  );
};
```

#### В мобильной версии при параметре `autoFocus` у контрола ломается поведение карточки

К сожалению, из-за особенностей React, `autoFocus` ломает CSS анимацию.

Чтобы исправить проблему, следует отказаться от `autoFocus` и выставлять фокус в ручную при событии `onOpened`.
Подписываться на `onOpened` можно двумя разными способами.

1️⃣ `<ModalRoot onOpened={(id) => ...} />`

```jsx static
const App = () => {
  const inputRef = useRef(null);

  const handleOpen = React.useCallback((id) => {
    if (id === 'modal-with-auto-focus' && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const modal = (
    <ModalRoot activeModal="modal-with-auto-focus" onOpened={handleOpen}>
      <ModalPage id="modal-with-auto-focus">
        <Input getRootRef={inputRef} />
      </ModalPage>
    </ModalRoot>
  );
  // ...
};
```

2️⃣ `<ModalPage onOpened={() => ...} />`

> ⚠️ в этом случае `ModalPage` нельзя заворачивать в другой компонент
> иначе `ModalRoot` не сможет получить доступ к `onOpened`.

```jsx static
const App = () => {
  const inputRef = useRef(null);

  const handleOpen = React.useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const modal = (
    <ModalRoot activeModal="modal-with-auto-focus">
      <ModalPage id="modal-with-auto-focus" onOpened={handleOpen}>
        <Input getRootRef={inputRef} />
      </ModalPage>
    </ModalRoot>
  );
  // ...
};
```

```jsx { "props": { "layout": false, "adaptivity": true } }
const Example = () => {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [activeModal, setActiveModal] = React.useState(false);

  const handleOpenOfModalRoot = React.useCallback((id) => {
    if (id === 'modal-1') {
      firstInputRef.current.focus();
    }
  }, []);

  const handleOpenOfModalPage = React.useCallback(() => {
    secondInputRef.current.focus();
  }, []);

  const modal = (
    <ModalRoot activeModal={activeModal} onOpened={handleOpenOfModalRoot}>
      <ModalPage id="modal-1" onClose={() => setActiveModal(null)}>
        <Div>
          <input type="text" ref={firstInputRef} />
        </Div>
      </ModalPage>
      <ModalPage id="modal-2" onOpened={handleOpenOfModalPage} onClose={() => setActiveModal(null)}>
        <Div>
          <input type="text" ref={secondInputRef} />
        </Div>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="main">
          <Panel id="main">
            <CellButton multiline onClick={() => setActiveModal('modal-1')}>
              Пример с onOpened() на ModalRoot
            </CellButton>
            <CellButton multiline onClick={() => setActiveModal('modal-2')}>
              Пример с onOpened() на ModalPage
            </CellButton>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

Example();
```

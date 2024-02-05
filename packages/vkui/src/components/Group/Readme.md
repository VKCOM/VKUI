Группа – базовый компонент для группировки контента по смыслу.

```jsx { "props": { "layout": false, "showLayoutSelect": true, "adaptivity": true } }
const MODAL_NAME = 'modal';

const Example = () => {
  const [isModalOpened, setModalOpened] = React.useState(false);

  const modal = (
    <ModalRoot
      activeModal={isModalOpened ? MODAL_NAME : null}
      onClose={() => setModalOpened(false)}
    >
      <ModalPage
        id={MODAL_NAME}
        onClose={() => setModalOpened(false)}
        header={
          <ModalPageHeader
            before={
              platform !== 'ios' && <PanelHeaderClose onClick={() => setModalOpened(false)} />
            }
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={() => setModalOpened(false)}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
            Group в модальном окне
          </ModalPageHeader>
        }
      >
        <SharedContent />
      </ModalPage>
    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="group">
          <Panel id="group">
            <PanelHeader>Group</PanelHeader>

            <SharedContent />

            <Group header={<Header mode="secondary">Модальное окно с Group</Header>}>
              <SimpleCell onClick={() => setModalOpened(true)}>
                Открыть Group в модальном окне
              </SimpleCell>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

const SharedContent = () => {
  const platform = usePlatform();

  return (
    <>
      <Group>
        <Group mode="plain">
          <SimpleCell indicator="+7 ••• •• •• 96" before={<Icon28PhoneOutline />}>
            Номер телефона
          </SimpleCell>
          <SimpleCell indicator="g•••@gmail.com" before={<Icon28MailOutline />}>
            Email
          </SimpleCell>
        </Group>
        <Group mode="plain">
          <SimpleCell indicator="Обновлён 3 года назад" before={<Icon28KeyOutline />}>
            Пароль
          </SimpleCell>
          <SimpleCell indicator="Вкл." before={<Icon28CheckShieldDeviceOutline />}>
            Подтверждение входа
          </SimpleCell>
          <SimpleCell indicator="2" before={<Icon28DevicesOutline />}>
            Привязанные устройства
          </SimpleCell>
        </Group>
      </Group>

      <Group header={<Header>Последняя активность</Header>}>
        <SimpleCell
          after={
            platform === 'ios' ? (
              <IconButton label="Подробнее" onClick={noop}>
                <Icon16MoreHorizontal />
              </IconButton>
            ) : (
              <IconButton label="Подробнее" onClick={noop}>
                <Icon16MoreVertical />
              </IconButton>
            )
          }
          subtitle="Санкт-Петербург, Россия"
          before={<Avatar size={32} mode="app" />}
          onClick={noop}
        >
          VK · Приложение для iPhone
        </SimpleCell>
        <SimpleCell
          after={
            platform === 'ios' ? (
              <IconButton label="Подробнее" onClick={noop}>
                <Icon16MoreHorizontal />
              </IconButton>
            ) : (
              <IconButton label="Подробнее" onClick={noop}>
                <Icon16MoreVertical />
              </IconButton>
            )
          }
          subtitle="Санкт-Петербург, Россия"
          before={<Avatar size={32} mode="app" />}
          onClick={noop}
        >
          VK · Браузер Chrome для macOS
        </SimpleCell>
        <CellButton onClick={noop}>Показать историю активности</CellButton>
        <CellButton onClick={noop} mode="danger">
          Завершить все остальные сеансы
        </CellButton>
      </Group>

      <Group
        header={<Header>Адреса</Header>}
        description="Для использования в мини-приложениях, Delivery Club, VK Taxi и других сервисах ВКонтакте. Эти адреса видны только Вам."
      >
        <CellButton onClick={noop}>Добавить домашний адрес</CellButton>
        <CellButton onClick={noop}>Добавить рабочий адрес</CellButton>
      </Group>
    </>
  );
};

<Example />;
```

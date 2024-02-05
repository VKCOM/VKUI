Практически всегда содержимое панели должно начинаться с [`Separator`](#!/Separator),
поэтому его поведение в `PanelHeader` по-умолчанию следующее:

- на платформе `vkcom` отрисовывается сепаратор;
- на платформах `android`/`ios` при `<AdaptivityProvider sizeX="compact" />` отрисовывается разделитель;
- на платформах `android`/`ios` в `<AdaptivityProvider sizeX="regular" />` добавляется отступ после шапки.

Исключения, в которых разделитель в начале панели не нужен:

- В `PanelHeader` рисуется [`Search`](#!/Search).
- После `PanelHeader` рисуется [`Search`](#!/Search).
- После `PanelHeader` рисуется [`Banner`](#!/Banner).
- В `PanelHeader` рисуются [`Tabs`](#!/Tabs).

В таких случаях передавайте в `PanelHeader` свойство `delimiter="spacing"`.

> **Важно**
>
> Правая часть шапки доступна по умолчанию. Если вы разрабатываете мини-приложение и хотите ее скрыть, передайте в
> [`ConfigProvider`](#/ConfigProvider) свойство `hasCustomPanelHeaderAfter`.

```jsx { "props": { "showCustomPanelHeaderAfterProps": true } }
const Example = () => {
  const platform = usePlatform();

  const [mainPanel, setMainPanel] = useState('panel1');
  const [modalPanel, setModalPanel] = useState('modal-panel1');
  const [activeView, setActiveView] = useState('main');

  return (
    <Root activeView={activeView}>
      <View id="main" activePanel={mainPanel}>
        <Panel id="panel1">
          <PanelHeader before={<PanelHeaderClose onClick={noop} />} after={<Avatar size={36} />}>
            Стартовый экран
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setMainPanel('panel2')}>Вторая панель</CellButton>
          </Group>
        </Panel>
        <Panel id="panel2">
          <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => setMainPanel('panel1')}
                label={platform === 'vkcom' ? 'Назад' : undefined}
              />
            }
            after={
              <PanelHeaderButton
                label={
                  <Counter size="s" mode="prominent">
                    <VisuallyHidden>Обновлений: </VisuallyHidden>
                    21
                  </Counter>
                }
                onClick={noop}
              >
                <VisuallyHidden>Изображения</VisuallyHidden>
                <AdaptiveIconRenderer
                  IconCompact={Icon24PictureOutline}
                  IconRegular={Icon28PictureOutline}
                />
              </PanelHeaderButton>
            }
          >
            Вторая панель
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setMainPanel('panel3')}>Несколько иконок</CellButton>
          </Group>
        </Panel>
        <Panel id="panel3">
          <PanelHeader
            before={<PanelHeaderBack onClick={() => setMainPanel('panel2')} />}
            after={
              <React.Fragment>
                <PanelHeaderButton
                  label={
                    <Counter size="s" mode="prominent">
                      <VisuallyHidden>Новых: </VisuallyHidden>3
                    </Counter>
                  }
                  onClick={noop}
                >
                  <VisuallyHidden>Настройки</VisuallyHidden>
                  <AdaptiveIconRenderer
                    IconCompact={Icon24GearOutline}
                    IconRegular={Icon28SettingsOutline}
                  />
                </PanelHeaderButton>
                <PanelHeaderButton
                  label={
                    <Counter size="s" mode="prominent">
                      2
                    </Counter>
                  }
                  onClick={noop}
                >
                  <AdaptiveIconRenderer
                    IconCompact={Icon24NotificationOutline}
                    IconRegular={Icon28Notifications}
                  />
                  <VisuallyHidden>Уведомления</VisuallyHidden>
                </PanelHeaderButton>
              </React.Fragment>
            }
          >
            Две иконки
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setActiveView('modal')}>Модальное окно</CellButton>
          </Group>
        </Panel>
      </View>
      <View id="modal" activePanel={modalPanel}>
        <Panel id="modal-panel1">
          <PanelHeader
            before={
              <PanelHeaderButton onClick={() => setActiveView('main')}>Отмена</PanelHeaderButton>
            }
            after={
              <PanelHeaderButton disabled primary onClick={() => setActiveView('main')}>
                Готово
              </PanelHeaderButton>
            }
          >
            Модальное окно
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setModalPanel('modal-panel2')}>Сложный контент</CellButton>
          </Group>
        </Panel>
        <Panel id="modal-panel2">
          <PanelHeader
            before={
              <PanelHeaderBack
                onClick={() => setModalPanel('modal-panel1')}
                label={platform === 'vkcom' ? 'Назад' : undefined}
              />
            }
          >
            <PanelHeaderContent before={<Avatar size={36} />} status="Был в сети вчера">
              Влад Анесов
            </PanelHeaderContent>
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setModalPanel('modal-panel3')}>Поиск</CellButton>
          </Group>
        </Panel>
        <Panel id="modal-panel3">
          <PanelHeader
            delimiter="spacing"
            before={
              platform !== 'vkcom' && (
                <PanelHeaderBack onClick={() => setModalPanel('modal-panel2')} />
              )
            }
          >
            <Search />
          </PanelHeader>
          <Group>
            <CellButton onClick={() => setModalPanel('modal-panel4')}>Табы</CellButton>
            {platform === 'vkcom' && (
              <CellButton onClick={() => setModalPanel('modal-panel2')}>Сложный контент</CellButton>
            )}
          </Group>
        </Panel>
        <Panel id="modal-panel4">
          <PanelHeader
            delimiter="spacing"
            before={<PanelHeaderBack onClick={() => setModalPanel('modal-panel3')} />}
          >
            <Tabs>
              <TabsItem selected>Новости</TabsItem>
              <TabsItem>Интересное</TabsItem>
            </Tabs>
          </PanelHeader>
          <Group>
            <Div>Tabs content</Div>
          </Group>
        </Panel>
      </View>
    </Root>
  );
};

<Example />;
```

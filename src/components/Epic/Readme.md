`<Epic />` – это новый слой навигации. Чтобы понять, что он себя представляет, достаточно открыть VK на iOS или на
Android. Внизу располагается панель с иконками, с помощью которой пользователь может переключаться между ключевыми
разделами.

`Epic` неразрывно связан с новыми компонентами для отрисовки
нижнего меню – [Tabbar](#!/Tabbar) и
[TabbarItem](#!/TabbarItem).

Логика работы `Epic` похожа на логику `View` и `Root`: Внутри `Epic` может находиться либо коллекция `Root`,
либо коллекция `View`. У каждого элемента коллекции должен быть уникальный `id`. Свойство `activeStory` указывает
на `id` активного окна.

> **Важно**
>
>При `viewWidth < SMALL_TABLET` в `Epic` всегда должен быть передан `Tabbar`, так как он является единственным способом переключения
между окнами.

``` jsx
const Example = withAdaptivity(({ viewWidth }) => {
  const platform = usePlatform();
  const [activeStory, setActiveStory] = React.useState('profile');
  const onStoryChange = (e) => setActiveStory(e.currentTarget.dataset.story);
  const isDesktop = viewWidth >= ViewWidth.TABLET;
  const hasHeader = platform !== VKCOM;

  return (
    <SplitLayout
      header={hasHeader && <PanelHeader separator={false} />}
      style={{ justifyContent: "center" }}
    >
      {isDesktop && (
        <SplitCol fixed width="280px" maxWidth="280px">
          <Panel>
            {hasHeader && <PanelHeader />}
            <Group>
              <Cell
                disabled={activeStory === 'feed'}
                style={activeStory === 'feed' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="feed"
                onClick={onStoryChange}
                before={<Icon28NewsfeedOutline />}
              >
                feed
              </Cell>
              <Cell
                disabled={activeStory === 'services'}
                style={activeStory === 'services' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="services"
                onClick={onStoryChange}
                before={<Icon28ServicesOutline />}
              >
                services
              </Cell>
              <Cell
                disabled={activeStory === 'messages'}
                style={activeStory === 'messages' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="messages"
                onClick={onStoryChange}
                before={<Icon28MessageOutline />}
              >
                messages
              </Cell>
              <Cell
                disabled={activeStory === 'clips'}
                style={activeStory === 'clips' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="clips"
                onClick={onStoryChange}
                before={<Icon28ClipOutline />}
              >
                clips
              </Cell>
              <Cell
                disabled={activeStory === 'profile'}
                style={activeStory === 'profile' ? {
                  backgroundColor: "var(--button_secondary_background)",
                  borderRadius: 8
                } : {}}
                data-story="profile"
                onClick={onStoryChange}
                before={<Icon28UserCircleOutline />}
              >
                profile
              </Cell>
            </Group>
          </Panel>
        </SplitCol>
      )}

      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? '560px' : '100%'}
        maxWidth={isDesktop ? '560px' : '100%'}
      >
        <Epic activeStory={activeStory} tabbar={!isDesktop &&
          <Tabbar>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'feed'}
              data-story="feed"
              text="Новости"
            ><Icon28NewsfeedOutline /></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'services'}
              data-story="services"
              text="Сервисы"
            ><Icon28ServicesOutline/></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'messages'}
              data-story="messages"
              label="12"
              text="Сообщения"
            ><Icon28MessageOutline /></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'clips'}
              data-story="clips"
              text="Клипы"
            ><Icon28ClipOutline /></TabbarItem>
            <TabbarItem
              onClick={onStoryChange}
              selected={activeStory === 'profile'}
              data-story="profile"
              text="Профиль"
            ><Icon28UserCircleOutline /></TabbarItem>
          </Tabbar>
        }>
          <View id="feed" activePanel="feed">
            <Panel id="feed">
              <PanelHeader left={<PanelHeaderBack />}>Новости</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon56NewsfeedOutline width={56} height={56} />} />
              </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader left={<PanelHeaderBack />}>Сервисы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ServicesOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader left={<PanelHeaderBack />}>Сообщения</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28MessageOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28ClipOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader>
              <Group style={{ height: '1000px' }}>
                <Placeholder icon={<Icon28UserCircleOutline width={56} height={56} />}>
                </Placeholder>
              </Group>
            </Panel>
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
}, {
  viewWidth: true
});

<Example />

```

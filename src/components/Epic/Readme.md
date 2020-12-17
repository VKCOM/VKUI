`<Epic />` – это новый слой навигации. Чтобы понять, что он себя представляет, достаточно открыть VK на iOS или на
Android. Внизу располагается панель с иконками, с помощью которой пользователь может переключаться между ключевыми
разделами.

`Epic` неразрывно связан с новыми компонентами для отрисовки
нижнего меню – [Tabbar](#!/Tabbar) и
[TabbarItem](#!/TabbarItem).

Логика работы `Epic` похожа на логику `View` и `Root`: Внутри `Epic` может находиться либо коллекция `Root`,
либо коллекция `View`. У каждого элемента коллекции должен быть уникальный `id`. Свойство `activeStory` указывает
на `id` активного окна.

**Важно:** в `Epic` всегда должен быть передан `Tabbar`, так как он является единственным способом переключения
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
      <SplitCol
        animate={!isDesktop}
        spaced={isDesktop}
        width={isDesktop ? '560px' : '100%'}
        maxWidth={isDesktop ? '560px' : '100%'}
      >
        <Epic activeStory={activeStory} tabbar={
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
              <Group>
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="services" activePanel="services">
            <Panel id="services">
              <PanelHeader left={<PanelHeaderBack />}>Сервисы</PanelHeader>
              <Group>
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="messages" activePanel="messages">
            <Panel id="messages">
              <PanelHeader left={<PanelHeaderBack />}>Сообщения</PanelHeader>
              <Group>
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="clips" activePanel="clips">
            <Panel id="clips">
              <PanelHeader left={<PanelHeaderBack />}>Клипы</PanelHeader>
              <Group>
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
                </Placeholder>
              </Group>
            </Panel>
          </View>
          <View id="profile" activePanel="profile">
            <Panel id="profile">
              <PanelHeader left={<PanelHeaderBack />}>Профиль</PanelHeader>
              <Group>
                <Placeholder icon={<Icon56MentionOutline />}>
                  Введите адрес страницы в поле поиска
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

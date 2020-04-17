`<Epic />` – это новый слой навигации. Чтобы понять, что он себя представляет, достаточно открыть VK на iOS или на
Android. Внизу располагается панель с иконками, с помощью которой пользователь может переключаться между ключевыми
разделами.

`Epic` неразрывно связан с новыми компонентами для отрисовки
нижнего меню – [Tabbar](https://vkcom.github.io/vkui-styleguide/#!/Tabbar) и
[TabbarItem](https://vkcom.github.io/vkui-styleguide/#!/TabbarItem).

Логика работы `Epic` похожа на логику `View` и `Root`: Внутри `Epic` может находиться либо коллекция `Root`,
либо коллекция `View`. У каждого элемента коллекции должен быть уникальный `id`. Свойство `activeStory` указывает
на `id` активного окна.

**Важно:** в `Epic` всегда должен быть передан `Tabbar`, так как он является единственным способом переключения
между окнами.

``` jsx
class Example extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'more'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  render () {

    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'feed'}
            data-story="feed"
            text="Новости"
          ><Icon28NewsfeedOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
            text="Поиск"
          ><Icon28SearchOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'messages'}
            data-story="messages"
            label="12"
            text="Сообщения"
          ><Icon28MessageOutline /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'notifications'}
            data-story="notifications"
            text="Уведомлен."
          ><Icon28Notifications /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'more'}
            data-story="more"
            text="Ещё"
          ><Icon28More /></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Новости</PanelHeader>
          </Panel>
        </View>
        <View id="discover" activePanel="discover">
          <Panel id="discover">
            <PanelHeader>Поиск</PanelHeader>
          </Panel>
        </View>
        <View id="messages" activePanel="messages">
          <Panel id="messages">
            <PanelHeader>Сообщения</PanelHeader>
          </Panel>
        </View>
        <View id="notifications" activePanel="notifications">
          <Panel id="notifications">
            <PanelHeader>Уведомления</PanelHeader>
          </Panel>
        </View>
        <View id="more" activePanel="more">
          <Panel id="more">
            <PanelHeader>Ещё</PanelHeader>
          </Panel>
        </View>
      </Epic>
    )
  }
}

<Example />

```

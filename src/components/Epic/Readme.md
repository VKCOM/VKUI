`<Epic />` – это новый слой навигации. Чтобы понять, что он себя представляет, достаточно открыть VK на iOS или на
Android. Внизу располагается панель с иконками, с помощью которой пользователь может переключаться между ключевыми
разделами.

`Epic` неразрывно связан с новыми компонентами для отрисовки
нижнего меню – [Tabbar](https://vkcom.github.io/vkui-styleguide/#!/Tabbar) и
[TabbarItem](https://vkcom.github.io/vkui-styleguide/#!/TabbarItem).

Логика работы `Epic` похожа на логику `View` и `Root`: Внутри `Epic` может находиться либо коллекция `Root`,
либо коллекция `View`. У каждого элемента коллекции должен быть уникальный `id`. Свойство `activeStory` указывается
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
          ><Icon28Newsfeed /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
          ><Icon28Search /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'messages'}
            data-story="messages"
            label="12"
          ><Icon28Messages /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'notifications'}
            data-story="notifications"
          ><Icon28Notifications /></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'more'}
            data-story="more"
          ><Icon28More /></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Feed</PanelHeader>
          </Panel>
        </View>
        <View id="discover" activePanel="discover">
          <Panel id="discover">
            <PanelHeader>Discover</PanelHeader>
          </Panel>
        </View>
        <View id="messages" activePanel="messages">
          <Panel id="messages">
            <PanelHeader>Messages</PanelHeader>
          </Panel>
        </View>
        <View id="notifications" activePanel="notifications">
          <Panel id="notifications">
            <PanelHeader>Notifications</PanelHeader>
          </Panel>
        </View>
        <View id="more" activePanel="more">
          <Panel id="more">
            <PanelHeader>More</PanelHeader>
          </Panel>
        </View>
      </Epic>
    )
  }
}

<Example />

```

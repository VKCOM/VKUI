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
class Panel1 extends React.Component {
  constructor(props) {
    super(props);
  }

  setPanel(panel) {
    this.props.onChange(panel);
  }

  render() {
    return (
      <View activePanel="panel1" header={false}>
        <Panel id="panel1" separator={false}>
          <PanelHeaderSimple>More</PanelHeaderSimple>
          <Group>
            <Cell expandable before={<Icon28UserOutline/>} onClick={() => this.setPanel('panel2-1')}>
              Friends
            </Cell>
            <Cell expandable before={<Icon28UsersOutline/>} onClick={() => this.setPanel('panel2-2')}>
              Communities
            </Cell>
            <Cell expandable before={<Icon28MusicOutline/>} onClick={() => this.setPanel('panel2-3')}>
              Music
            </Cell>
          </Group>
        </Panel>
      </View>
    )
  }
}

class Panel2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'panel2-1'
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.panel && props.panel !== state.activePanel) {
      return { activePanel: props.panel };
    }

    return null;
  }

  render() {
    return (
      <View activePanel={this.state.activePanel} header={false}>
        <Panel id="panel2-1" separator={false}>
          <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
            Communities
          </PanelHeaderSimple>
          <Search />
          <Cell description="Humor" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Swipe Right
          </Cell>
          <Cell description="Cultural Center" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Out Cinema
          </Cell>
          <Cell description="Movies" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            #ARTPOKAZ
          </Cell>
        </Panel>
        <Panel id="panel2-2" separator={false}>
          <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
            Communities
          </PanelHeaderSimple>
          <Search />
          <Cell description="Humor" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Swipe Right
          </Cell>
          <Cell description="Cultural Center" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Out Cinema
          </Cell>
          <Cell description="Movies" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            #ARTPOKAZ
          </Cell>
        </Panel>
        <Panel id="panel2-3" separator={false}>
          <PanelHeaderSimple separator={false} left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel1' })}/>}>
            Communities
          </PanelHeaderSimple>
          <Search />
          <Cell description="Humor" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Swipe Right
          </Cell>
          <Cell description="Cultural Center" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            Out Cinema
          </Cell>
          <Cell description="Movies" before={<Avatar />} onClick={() => this.setState({ activePanel: 'panel3' })}>
            #ARTPOKAZ
          </Cell>
        </Panel>
        <Panel id="panel3" centered separator={false}>
          <PanelHeaderSimple left={<PanelHeaderBack onClick={() => this.setState({ activePanel: 'panel2' })}/>}>
            Out Cinema
          </PanelHeaderSimple>
          <Spinner />
          <div style={{ marginTop: 10 }}>Centered Content</div>
        </Panel>
      </View>
    )
  }
}

class Example extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'panel2'
    };
    this.setPanel = this.setPanel.bind(this);
  }

  setPanel(panel) {
    this.setState({ currentPanel: panel });
  }

  render () {

    return (
      <SplitLayout
        cols={[
          <Panel1 onChange={this.setPanel} />,
          <Panel2 panel={this.state.currentPanel} />,
        ]}
      />
    )
  }
}

<Example />

```

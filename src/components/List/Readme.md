```jsx
  class Example extends React.Component {

    constructor() {
      this.state = {
        activePanel: 'list',
        removeList: ['Feature 1', 'Feature 2', 'Feature 3']
      };
    }

    render() {
      return (
        <View activePanel={this.state.activePanel}>
          <Panel id="list">
            <PanelHeader>
              List
            </PanelHeader>
            {this.state.removeList.length > 0 &&
              <Group title="Removable">
                <List>
                  {this.state.removeList.map((item, index) => (
                    <ListItem key={item} removable onRemove={() => {
                      this.setState({
                        removeList: [...this.state.removeList.slice(0, index), ...this.state.removeList.slice(index + 1)]
                      })
                    }}>{item}</ListItem>
                  ))}
                </List>
              </Group>
            }

            <Group title="Simple list">
              <List>
                <ListItem>Label 1</ListItem>
                <ListItem>Label 2</ListItem>
                <ListItem>Label 3</ListItem>
              </List>
            </Group>

            <Group title="Expandable">
              <List>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 1</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 2</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })}>Label 3</ListItem>
              </List>
            </Group>

            <Group title="Indicator">
              <List>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Indicator">Feature 1</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="Off">Feature 2</ListItem>
                <ListItem expandable onClick={() => this.setState({ activePanel: 'nothing' })} indicator="On">Feature 3</ListItem>
              </List>
            </Group>

            <Group title="Icons">
              <List>
                <ListItem before={<Icon24About />}>Information</ListItem>
                <ListItem before={<Icon24Services />}>Services</ListItem>
              </List>
            </Group>

            <Group title="Selectable">
              <List>
                <ListItem selectable name="selectable-list" value="Feature 1">Feature 1</ListItem>
                <ListItem selectable name="selectable-list" value="Feature 2">Feature 2</ListItem>
                <ListItem selectable name="selectable-list" value="Feature 3">Feature 3</ListItem>
              </List>
            </Group>

            <Group title="Users list">
              <List>
                <ListItem before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</ListItem>
                <ListItem before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</ListItem>
                <ListItem before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</ListItem>
              </List>
            </Group>

            <Group title="Selectable users list">
              <List>
                <ListItem selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Артур Стамбульцян</ListItem>
                <ListItem selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Тимофей Чаптыков</ListItem>
                <ListItem selectable before={ <Avatar size={40} src="https://pp.userapi.com/c841034/v841034569/3b8c1/pt3sOw_qhfg.jpg" /> }>Влад Анесов</ListItem>
              </List>
            </Group>

            <Group title="Multiline">
              <List>
                <ListItem multiline>A Series of Unfortunate Events, Archer, Brooklyn Nine-Nine, Doctor Who, Game of Thrones</ListItem>
                <ListItem multiline>The Avalanches</ListItem>
              </List>
            </Group>

            <Group title="With description">
              <List>
                <ListItem description="Depeche Mode">Where’s the Revolution</ListItem>
                <ListItem description="The Weeknd">I Feel It Coming (Feat. Daft Punk)</ListItem>
              </List>
            </Group>
          </Panel>
          <Panel id="nothing">
              <PanelHeader
                icon={
                  <HeaderButton onClick={() => this.setState({ activePanel: 'list' })}>
                    {osname === ANDROID ? <Icon24Back/> : <Icon28Chevron_back/>}
                  </HeaderButton>
                }
              >
                Nothing
              </PanelHeader>
            <div
              style={{
                padding: '100px 0',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  color: 'gray',
                  textAlign: 'center'
                }}
              >
                Here is nothing<br />
                <span onClick={() => this.setState({ activePanel: 'list' })} style={{ textDecoration: 'underline' }}>Back to start screen</span>
              </div>
            </div>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```

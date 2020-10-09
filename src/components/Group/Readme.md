Группа – базовый компонент для группировки контента по смыслу.

```jsx
const MODAL_NAME = 'modal'

class App extends React.Component {
  constructor() {
    this.state = {
      isModalOpened: false
    }
  }

  render() {
    const modal = (
      <ModalRoot
        activeModal={this.state.isModalOpened ? MODAL_NAME : null}
        onClose={() => this.setState({ isModalOpened: false })}
      >
        <ModalPage
          id={MODAL_NAME}
          onClose={() => this.setState({ isModalOpened: false })}
          header={
            <ModalPageHeader>
              Group в модальном окне
            </ModalPageHeader>
          }
        >
          <Group 
            header={<Header mode="secondary">Group в модальном окне</Header>}
            description="Group в модальном окне по-умолчанию отображается без обводки"
          >

            <SimpleCell after={<Switch defaultChecked/>}>
              Lorem ipsum
            </SimpleCell>
            <SimpleCell expandable>
              Dolor sit amet
            </SimpleCell>
          </Group>

        </ModalPage>
      </ModalRoot>
    );

    return (
      <View activePanel="group" modal={modal}>
        <Panel id="group">
          <PanelHeader>
            Group
          </PanelHeader>

          <Group 
            header={<Header mode="secondary">Адаптивный режим</Header>}
            description="По-умолчанию внешний вид Group зависит от ширины окна и ориентации устройства"
          >
            <SimpleCell after={<Switch defaultChecked/>}>
              Compress Photos
            </SimpleCell>

            <SimpleCell after={<Switch/>}>
              Compress Videos
            </SimpleCell>
          </Group>

          <Group
            header={<Header mode="secondary">Режим card</Header>}
            description='При mode="card" Group всегда отображается с обводкой'
            separator="show"
            mode="card"
          >
            <SimpleCell indicator="While Using" expandable>
              Location
            </SimpleCell>
          </Group>
          
          <Group 
            header={<Header mode="secondary">Режим plain</Header>}
            description='При mode="plain" Group всегда отображается без обводки'
            mode="plain"
          >
            <SimpleCell indicator="Wi-Fi" expandable>
              Autoplay Media
            </SimpleCell>
            <SimpleCell expandable>
              Stickers
            </SimpleCell>
          </Group>

          <Group header={<Header mode="secondary">Модальное окно с Group</Header>}>
            <SimpleCell onClick={() => this.setState({ isModalOpened: true })}>
              Открыть Group в модальном окне
            </SimpleCell>
          </Group>
        </Panel>
      </View>
    )
  }
}

<App />
```

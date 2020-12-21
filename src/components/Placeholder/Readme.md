`Placeholder` используется для каких-либо заглушек: например, в случае отсутствия элементов в списке или ошибки.

- В качестве иконки желательно использовать аутлайновые иконки размера 56;
- В качестве действия — большую кнопку с уровнем `primary` или `tertiary`.

Если плейсхолдер используется со свойством `stretched` (показывается во всю высоту панели), то на экране не должно быть ничего другого.

```jsx
class PlaceholderExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'example-1',
    };

    this.onNavClick = this.onNavClick.bind(this);
  }

  onNavClick(e) {
    const activePanel = e.currentTarget.dataset.to;
    this.setState({ activePanel });
  }

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Panel id="example-1">
          <PanelHeader>Плейсхолдеры</PanelHeader>
          <Group>
            <Placeholder
              icon={<Icon56UsersOutline />}
              header="Уведомления от сообществ"
              action={<Button size="m">Подключить сообщества</Button>}
            >
              Подключите сообщества, от которых Вы хотите получать уведомления
            </Placeholder>
            <Separator />
            <Placeholder
              icon={<Icon56MentionOutline />}
            >
              Введите адрес страницы в поле поиска
            </Placeholder>
          </Group>
          <Group>
            <CellButton onClick={this.onNavClick} data-to="example-2">Ещё примеры</CellButton>
          </Group>
        </Panel>

        <Panel id="example-2">
          <PanelHeader
            left={<PanelHeaderBack onClick={this.onNavClick} data-to="example-1" />}
          >Плейсхолдеры</PanelHeader>
          <Group>
            <Placeholder>
              Доступ запрещён
            </Placeholder>
            <Separator />
            <Placeholder
              header="Находите друзей"
              action={<Button size="m">Найти друзей</Button>}
            >
              Здесь будут отображаться люди, которых вы добавите в друзья
            </Placeholder>
          </Group>
          <Group>
            <CellButton onClick={this.onNavClick} data-to="example-3">Полноэкранный плейсхолдер</CellButton>
          </Group>
        </Panel>

        <Panel id="example-3">
          <PanelHeader
            left={<PanelHeaderBack onClick={this.onNavClick} data-to="example-1" />}
          >Плейсхолдеры</PanelHeader>

          <Placeholder
            icon={<Icon56MessageReadOutline />}
            action={<Button size="m" mode="tertiary">Показать все сообщения</Button>}
            stretched
          >
            Нет непрочитанных<br />сообщений
          </Placeholder>
        </Panel>
      </View>
    );
  }
}

<PlaceholderExample />
```

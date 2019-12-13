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
          <Placeholder
            icon={<Icon56UsersOutline />}
            header="Уведомления от сообществ"
            action={<Button size="l">Подключить сообщества</Button>}
          >
            Подключите сообщества, от которых Вы хотите получать уведомления
          </Placeholder>
          <Separator wide />
          <Placeholder
            icon={<Icon56MentionOutline />}
          >
            Введите адрес страницы в поле поиска
          </Placeholder>

          <Div>
            <Button size="xl" onClick={this.onNavClick} data-to="example-2">Ещё примеры</Button>
          </Div>
        </Panel>

        <Panel id="example-2">
          <PanelHeader
            left={<PanelHeaderBack onClick={this.onNavClick} data-to="example-1" />}
          >Плейсхолдеры</PanelHeader>

          <Placeholder>
            Доступ запрещён
          </Placeholder>
          <Separator wide />

          <Placeholder
            header="Находите друзей"
            action={<Button size="l">Найти друзей</Button>}
          >
            Здесь будут отображаться люди, которых вы добавите в друзья
          </Placeholder>
          <Separator wide />

          <Div>
            <Button size="xl" onClick={this.onNavClick} data-to="example-3">Полноэкранный плейсхолдер</Button>
          </Div>
        </Panel>

        <Panel id="example-3">
          <PanelHeader
            left={<PanelHeaderBack onClick={this.onNavClick} data-to="example-1" />}
          >Плейсхолдеры</PanelHeader>

          <Placeholder
            icon={<Icon56MessageReadOutline />}
            action={<Button size="l" mode="tertiary">Показать все сообщения</Button>}
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

ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.

**Важно**

* Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
* Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия.
В коде примера ниже можно посмотреть, как добавить такой элемент.
Для Android версии он не нужен.

```jsx harmony
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null
    }

    this.openBase = this.openBase.bind(this);
    this.openIcons = this.openIcons.bind(this);
    this.openThemes = this.openThemes.bind(this);
  }

  componentDidMount() {
    this.openBase();
  }

  openBase () {
    this.setState({ popout:
      <ActionSheet onClose={() => this.setState({ popout: null })}>
        <ActionSheetItem>
          По дням
        </ActionSheetItem>
        <ActionSheetItem>
          По неделям
        </ActionSheetItem>
        <ActionSheetItem>
          По месяцам
        </ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    });
  }

  openIcons () {
    this.setState({ popout:
      <ActionSheet onClose={() => this.setState({ popout: null })}>
        <ActionSheetItem before={<Icon28Profile/>}>
          Редактировать профиль
        </ActionSheetItem>
        <ActionSheetItem before={<Icon28CameraOutline/>}>
          Изменить фотографию
        </ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    });
  }

  openThemes () {
    this.setState({ popout:
      <ActionSheet onClose={() => this.setState({ popout: null })}>
        <ActionSheetItem>
          Редактировать
        </ActionSheetItem>
        <ActionSheetItem theme="destructive">
          Выйти
        </ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
      </ActionSheet>
    });
  }



  render() {
    return (
      <View popout={this.state.popout} header={false} activePanel="panel">
        <Panel id="panel">
          <CellButton onClick={this.openBase}>Базовый список</CellButton>
          <CellButton onClick={this.openIcons}>Список с иконками</CellButton>
          <CellButton onClick={this.openThemes}>Темы</CellButton>
        </Panel>
      </View>
    )
  }
}

<Example />
```

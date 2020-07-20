ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.

**Важно**

* Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
* Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия, для этого предусмотрен атрибут `iosCloseItem`.
В коде примера ниже можно посмотреть, как добавить такой элемент.
Для Android версии он не нужен.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null,
      subs: 'rus'
    }

    this.openBase = this.openBase.bind(this);
    this.openIcons = this.openIcons.bind(this);
    this.openSubtitle = this.openSubtitle.bind(this);
    this.openSelectable = this.openSelectable.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.openBase();
  }

  openBase () {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      >
        <ActionSheetItem autoclose>
          Сохранить в закладках
        </ActionSheetItem>
        <ActionSheetItem autoclose>
          Закрепить запись
        </ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive">
          Удалить запись
        </ActionSheetItem>
      </ActionSheet>
    });
  }

  openIcons () {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      >
        <ActionSheetItem autoclose before={<Icon28EditOutline/>}>
          Редактировать плейлист
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28ShareOutline/>}>
          Поделиться
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28DeleteOutline/>} mode="destructive">
          Удалить плейлист
        </ActionSheetItem>
      </ActionSheet>
    });
  }

  openSubtitle () {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
      >
        <ActionSheetItem before={<Icon28SettingsOutline />} autoclose subtitle="Авто">
          Качество
        </ActionSheetItem>
        <ActionSheetItem disabled before={<Icon28PlaySpeedOutline />} autoclose subtitle="Обычная" mode="destructive">
          Скорость воспроизведения
        </ActionSheetItem>
      </ActionSheet>
    });
  }

  openSelectable () {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        header="Субтитры"
      >
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.subs === 'off'}
          name="subs"
          value="off"
          autoclose
          selectable
        >
          Отключены
        </ActionSheetItem>
        <ActionSheetItem
          meta="LostFilm"
          onChange={this.onChange}
          checked={this.state.subs === 'rus'} 
          name="subs"
          value="rus"
          autoclose
          selectable
        >
          Русские
        </ActionSheetItem>
      </ActionSheet>
    });
  }
 
  onChange(e) {
    this.setState({ subs: e.target.value });
  }

  render() {
    return (
      <View popout={this.state.popout} activePanel="panel">
        <Panel id="panel">
          <CellButton onClick={this.openBase}>Базовый список</CellButton>
          <CellButton onClick={this.openIcons}>Список с иконками</CellButton>
          <CellButton onClick={this.openSubtitle}>Subtitle</CellButton>
          <CellButton onClick={this.openSelectable}>Selectable</CellButton>
        </Panel>
      </View>
    )
  }
}

<Example />
```

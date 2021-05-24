ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

>**Важно**
>
> * Нужно обязательно передать `onClose` для обработки закрытия `ActionSheet` изнутри.
> * Согласно гайдлайнам Apple, в `ActionSheet` должен быть элемент для закрытия, для этого предусмотрен атрибут `iosCloseItem`.
> В коде примера ниже можно посмотреть, как добавить такой элемент.
Для Android версии он не нужен.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null,
      filter: 'best'
    }

    this.openBase = this.openBase.bind(this);
    this.openIcons = this.openIcons.bind(this);
    this.openSubtitle = this.openSubtitle.bind(this);
    this.openSelectable = this.openSelectable.bind(this);
    this.openTitle = this.openTitle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.openBaseTop = this.openBaseTop.bind(this);

    this.baseTargetRef = React.createRef();
    this.iconsTargetRef = React.createRef();
    this.subtitleTargetRef = React.createRef();
    this.selectableTargetRef = React.createRef();
    this.titleTargetRef = React.createRef();
    this.baseTopTargetRef = React.createRef();
  }

  componentDidMount() {
    this.openBase();
  }

  openBase () {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        toggleRef={this.baseTargetRef.current}
      >
        <ActionSheetItem autoclose>
          Сохранить в закладках
        </ActionSheetItem>
        <ActionSheetItem autoclose>
          Закрепить запись
        </ActionSheetItem>
        <ActionSheetItem autoclose>
          Выключить комментирование
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
        toggleRef={this.iconsTargetRef.current}
      >
        <ActionSheetItem autoclose before={<Icon28EditOutline/>}>
          Редактировать профиль
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28ListPlayOutline/>}>
          Слушать далее
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28ShareOutline/>}>
          Поделиться
        </ActionSheetItem>
        <ActionSheetItem autoclose before={<Icon28CopyOutline/>}>
          Скопировать ссылку
        </ActionSheetItem>
        <ActionSheetItem
          autoclose
          before={platform === IOS ? <Icon28DeleteOutline/> : <Icon28DeleteOutlineAndroid />}
          mode="destructive"
        >
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
        toggleRef={this.subtitleTargetRef.current}
      >
        <ActionSheetItem before={<Icon28SettingsOutline />} autoclose subtitle="Авто">
          Качество
        </ActionSheetItem>
        <ActionSheetItem before={<Icon28SubtitlesOutline />} autoclose subtitle="Отсутствуют" disabled>
          Субтитры
        </ActionSheetItem>
        <ActionSheetItem before={<Icon28PlaySpeedOutline />} autoclose subtitle="Обычная">
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
        toggleRef={this.selectableTargetRef.current}
      >
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.filter === 'best'}
          name="filter"
          value="best"
          autoclose
          selectable
        >
          Лучшие друзья
        </ActionSheetItem>
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.filter === 'relatives'} 
          name="filter"
          value="relatives"
          autoclose
          selectable
        >
          Родственники
        </ActionSheetItem>
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.filter === 'collegues'} 
          name="filter"
          value="collegues"
          autoclose
          selectable
        >
          Коллеги
        </ActionSheetItem>
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.filter === 'school'} 
          name="filter"
          value="school"
          autoclose
          selectable
        >
          Друзья по школе
        </ActionSheetItem>
        <ActionSheetItem
          onChange={this.onChange}
          checked={this.state.filter === 'university'} 
          name="filter"
          value="university"
          autoclose
          selectable
        >
          Друзья по вузу
        </ActionSheetItem>
      </ActionSheet>
    });
  }
  
  openTitle() {
    this.setState({ popout:
      <ActionSheet 
        onClose={() => this.setState({ popout: null })}
        iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        header="Вы действительно хотите удалить это видео из Ваших видео?"
        toggleRef={this.titleTargetRef.current}
      >
        <ActionSheetItem autoclose mode="destructive">
          Удалить видео
        </ActionSheetItem>
      </ActionSheet>
    });
  }

  openBaseTop() {
    this.setState({
      popout: (
        <ActionSheet
          onClose={() => this.setState({ popout: null })}
          iosCloseItem={<ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
          toggleRef={this.baseTopTargetRef.current}
          popupDirection="top"
        >
          <ActionSheetItem autoclose>
            Сохранить в закладках
          </ActionSheetItem>
          <ActionSheetItem autoclose>
            Закрепить запись
          </ActionSheetItem>
          <ActionSheetItem autoclose>
            Выключить комментирование
          </ActionSheetItem>
          <ActionSheetItem autoclose>
            Закрепить запись
          </ActionSheetItem>
          <ActionSheetItem autoclose mode="destructive">
            Удалить запись
          </ActionSheetItem>
        </ActionSheet>
      ),
    });
  }
 
  onChange(e) {
    this.setState({ filter: e.target.value });
  }

  render() {
    return (
      <View popout={this.state.popout} activePanel="panel">
        <Panel id="panel">
          <PanelHeader>ActionSheet</PanelHeader>
          <Group>
            <CellButton getRootRef={this.baseTargetRef} onClick={this.openBase}>Базовый список</CellButton>
            <CellButton getRootRef={this.iconsTargetRef} onClick={this.openIcons}>Список с иконками</CellButton>
            <CellButton getRootRef={this.subtitleTargetRef} onClick={this.openSubtitle}>С подзаголовком</CellButton>
            <CellButton getRootRef={this.selectableTargetRef} onClick={this.openSelectable}>Выделяемые</CellButton>
            <CellButton getRootRef={this.titleTargetRef} onClick={this.openTitle}>C заголовком</CellButton>
            <CellButton getRootRef={this.baseTopTargetRef} onClick={this.openBaseTop}>Базовый список, открывается наверх на десктопах</CellButton>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/).
Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий. В качестве `children` принимает
коллекцию `ActionSheetItem`.

**Важно**

* Нужно обязательно передать onClose для обработки закрытия ActionSheet изнутри.
* Согласно гайдлайнам Apple, в ActionSheet должен быть элемент для закрытия.
В коде примера ниже можно посмотреть, как добавить такой элемент.
Для Android версии такой элемент не нужен.

```

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null
    }

    this.openSheet = this.openSheet.bind(this);
  }

  componentDidMount() {
    this.openSheet()
  }

  openSheet () {
    this.setState({ popout:
      <ActionSheet
        onClose={() => this.setState({ popout: null })}
        title="Hi!"
        text="I am action sheet"
      >
        <ActionSheetItem autoclose>Action</ActionSheetItem>
        <ActionSheetItem autoclose theme="destructive">Sheet</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose theme="cancel">Cancel</ActionSheetItem>}
      </ActionSheet>
    });
  }

  render() {
    return (
      <View popout={this.state.popout} header={false} activePanel="panel">
        <Panel id="panel">
          <CellButton onClick={this.openSheet}>Open Sheet</CellButton>
        </Panel>
      </View>
    )
  }
}

<Example />
```

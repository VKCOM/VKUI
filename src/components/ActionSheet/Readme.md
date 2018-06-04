ActionSheet – имитация [нативного компонента](https://developer.apple.com/ios/human-interface-guidelines/views/action-sheets/). Удобно использовать, когда нужно дать пользователю выбрать одно из множества действий.
В качестве children принимает коллекцию [ActionSheetItem](#actionsheetitem).

** Важно **

* Нужно обязательно передать onClose для обработки закрытия ActionSheet изнутри.
* Согласно гайдлайнам, в ActionSheet должен быть элемент для закрытия. В коде примера ниже можно посмотреть, как добавить такой элемент. В противном случае ActionSheet подставит дефолтный.

```

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popout: null
    }
  }

  componentDidMount() {
    this.openSheet()
  }

  openSheet () {
    this.setState({ popout:
      <ActionSheet
        onClose={ () => this.setState({ popout: null }) }
        title="Hi!"
        text="I am action sheet"
      >
        <ActionSheetItem autoclose>Action</ActionSheetItem>
        <ActionSheetItem autoclose theme="destructive">Sheet</ActionSheetItem>
        <ActionSheetItem autoclose theme="cancel">Cancel</ActionSheetItem>
      </ActionSheet>
    });
  }

  render() {
    return (
      <View popout={this.state.popout} header={false} activePanel="panel">
        <Panel id="panel">
          <Button type="cell" onClick={this.openSheet.bind(this)}>Open Sheet</Button>
        </Panel>
      </View>
    )
  }
}

<Example />
```

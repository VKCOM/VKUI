Свойство-массив actions служит для отрисовки кнопок. Каждый элемент массива – это объект из трех полей:

* `action` – функция для обработки клика по кнопке.
* `style` – стилизация кнопки. Более подробно со значениями можно ознакомиться в разделе props & methods.
* `autoclose` – флаг для автозакрытия алерта при клике на кнопку. ** Важно: ** перед установкой этого флага в `true`, убедитесь, что в `Alert` передано свойство `onClose`.

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
      <Alert
        actions={[{
          title: 'Close',
          autoclose: true,
          style: 'destructive'
        }, {
          title: 'Cancel',
          autoclose: true,
          style: 'cancel'
        }]}
        onClose={ () => this.setState({ popout: null }) }
      >
        <h2>Hi!</h2>
        <p>I am alert</p>
      </Alert> 
    });
  }

  render() {
    return (
      <View popout={this.state.popout} header={{}} activePanel="alert">
        <ScrollView id="alert" header={{ title: "Alert" }}>
          <div style={{ padding: 10 }}>
            <Button appearance="vk-primary" wide={false} onClick={this.openSheet.bind(this)}>Open Alert</Button>
          </div>
        </ScrollView>
      </View>
    )
  }
}

<Example />
```

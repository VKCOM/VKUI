Компонент-обертка над [Spinner](#!/Spinner).

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

Рекомендуется использовать в случаях, когда требуется заблокировать интерфейс до завершения асинхронного процесса.

```jsx
class Example extends React.Component {

  constructor (props) {

    this.state = {
      popout: null
    }
  }

  onClick () {
    this.setState({ popout: <ScreenSpinner /> });
    setTimeout(() => { this.setState({ popout: null }) }, 2000);
  }

  render () {
    return (
      <View popout={this.state.popout} activePanel="spinner">
        <Panel id="spinner">
          <PanelHeader>ScreenSpinner</PanelHeader>
          <Group>
            <CellButton onClick={this.onClick.bind(this)}>Запустить долгий процесс</CellButton>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

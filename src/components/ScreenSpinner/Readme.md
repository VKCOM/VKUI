Компонент-обертка над [Spinner](#!/Spinner).

Передаётся в качестве значения свойства `popout` компонента [`SplitLayout`](#/SplitLayout).

Рекомендуется использовать в случаях, когда требуется заблокировать интерфейс до завершения асинхронного процесса.

```jsx { "props": { "layout": false, "adaptivity": true } }
class Example extends React.Component {
  constructor(props) {
    this.state = {
      popout: null,
    };
  }

  onClick() {
    this.setState({ popout: <ScreenSpinner /> });
    setTimeout(() => {
      this.setState({ popout: null });
    }, 2000);
  }

  render() {
    return (
      <SplitLayout popout={this.state.popout}>
        <SplitCol>
          <View activePanel="spinner">
            <Panel id="spinner">
              <PanelHeader>ScreenSpinner</PanelHeader>
              <Group>
                <CellButton onClick={this.onClick.bind(this)}>
                  Запустить долгий процесс
                </CellButton>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    );
  }
}

<Example />;
```

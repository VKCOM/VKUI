Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по вертикали или
по горизонтали.

```jsx
class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDates: true
    }
  }

  toggleDates(showDates) {
    this.setState({ showDates })
  }

  render() {
    const { showDates } = this.state;

    return (
      <View activePanel="FormLayoutGroup">
        <Panel id="FormLayoutGroup">
          <PanelHeader>FormLayoutGroup</PanelHeader>
          <Group>
            <FormLayout>
              <FormLayoutGroup mode="vertical">
                <FormItem top="Имя">
                  <Input />
                </FormItem>
                <FormItem top="Фамилия">
                  <Input />
                </FormItem>
              </FormLayoutGroup>

              {!showDates
                ? <CellButton onClick={() => this.toggleDates(true)}>Указать даты поездки</CellButton>
                : (
                  <FormLayoutGroup mode="horizontal" removable onRemove={() => this.toggleDates(false)}>
                    <FormItem bottom="Дата начала поездки">
                      <Input />
                    </FormItem>
                    <FormItem bottom="Дата конца поездки">
                      <Input />
                    </FormItem>
                  </FormLayoutGroup>
                )
              }
            </FormLayout>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

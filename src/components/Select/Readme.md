В Select можно добавлять `placeholder`:

```jsx static
<Select placeholder="Выберите пол">
  <option value="m">Мужской</option>
  <option value="f">Женский</option>
</Select>
```

```
  class Example extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }
    }

    render () {
      return (
        <View activePanel="select">
          <Panel id="select" theme="white">
            <PanelHeader>
              Select
            </PanelHeader>
            <FormLayout>
              <Select top="Обычный Select" placeholder="Выберите пол">
                <option value="m">Мужской</option>
                <option value="f">Женский</option>
              </Select>
              <SelectMimicry
                top="Имитация Select'a"
                placeholder="Нажми на меня"
                onClick={() => this.setState({ value: this.state.value ? '' : 'Привет' })}
              >{this.state.value}</SelectMimicry>
            </FormLayout>
          </Panel>
        </View>
      )
    }
  }

  <Example />
```

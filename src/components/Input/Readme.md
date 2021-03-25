Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
class Example extends React.Component {
  constructor() {
    this.textInput = React.createRef();
  }

  clear() {
    this.textInput.current.value = '';
  }

  render() {
    return (
      <View activePanel="input">
        <Panel id="input">
          <PanelHeader>
            Input
          </PanelHeader>
          <Group> 
            <FormItem top="Фамилия">
              <Input type="text" defaultValue="Петров" />
            </FormItem>
            <FormItem>
              <Input type="text" defaultValue="Иванов" align="center" />
            </FormItem>
            <FormItem>
              <Input type="text" defaultValue="Сидоров" align="right" />
            </FormItem>
            <FormItem top="С иконкой">
              <Input type="text" defaultValue="Смирнов" after={<Icon20User aria-hidden="true" />} />
            </FormItem>
            <FormItem top="С IconButton">
              <Input getRef={this.textInput} type="text" defaultValue="Кузнецов" after={<IconButton aria-label="Очистить поле" onClick={() => this.clear()}><Icon16Clear/></IconButton>} />
            </FormItem>
          </Group>
        </Panel>
      </View>
    )
  }
}

<Example />
```

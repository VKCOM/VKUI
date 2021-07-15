Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx
const textInput = React.createRef();
const clear = () => textInput.current.value = '';

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
        <Input getRef={textInput} type="text" defaultValue="Кузнецов" after={<IconButton hoverMode="opacity" aria-label="Очистить поле" onClick={clear}><Icon16Clear/></IconButton>} />
      </FormItem>
    </Group>
  </Panel>
</View>
```

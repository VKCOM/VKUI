Надстройка над `<input type="file" />`. Компонент принимает все валидные для этого элемента свойства.
`File` под капотом использует `Button`. То есть все свойства, применимые к `Button`, применимы и к `File`.

Замечание - если вы передаете `getRef`, то вам нужно правильно определить метод `onClick` с вызовом `click` у рефа на input элемент:

```jsx static
class FileFieldClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;

    this.getInputRef = (ref) => this.inputRef = ref;
    this.onClick = () => this.inputRef && this.inputRef.click();
  }

  render() {
    return (
      <FormItem top="Загрузите ваше фото">
        <File getRef={this.getInputRef} before={<Icon24Camera />} controlSize="m" onClick={this.onClick}>
          Открыть галерею
        </File>
      </FormItem>
    );
  }
}
```

```jsx static
const FileFieldFC  = () => {
  const getInputRef = React.useRef();

  const onClick = () => getInputRef.current && getInputRef.current.click();
  
  return (
    <FormItem top="Загрузите ваше фото">
      <File getRef={getInputRef} before={<Icon24Camera />} controlSize="m" onClick={onClick}>
        Открыть галерею
      </File>
    </FormItem>
  );
}
```

```jsx

class FileFieldClass extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = null;

    this.getInputRef = (ref) => this.inputRef = ref;
    this.onClick = () => this.inputRef && this.inputRef.click();
  }

  render() {
    return (
      <FormItem top="Загрузите ваше фото (ref: Class Component)">
        <File getRef={this.getInputRef} before={<Icon24Camera />} controlSize="m" onClick={this.onClick}>
          Открыть галерею
        </File>
      </FormItem>
    );
  }
}

const FileFieldFC  = () => {
  const getInputRef = React.useRef();

  const onClick = () => getInputRef.current && getInputRef.current.click();
  
  return (
    <FormItem top="Загрузите ваше фото (ref: useRef)">
      <File getRef={getInputRef} before={<Icon24Camera />} controlSize="m" onClick={onClick}>
        Открыть галерею
      </File>
    </FormItem>
  );
}

  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        File
      </PanelHeader>
      <Group>
        <FormItem top="Загрузите ваше фото (uncontrolled)">
          <File before={<Icon24Camera />} controlSize="m">
            Открыть галерею
          </File>
        </FormItem>
        <FileFieldClass />
        <FileFieldFC />
        <FormItem top="Загрузите документы">
          <File before={<Icon24Document />} controlSize="l" mode="secondary" />
        </FormItem>
      </Group>
    </Panel>
  </View>
```

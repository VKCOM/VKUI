Надстройка над `<input type="text" />`. Компонент принимает все валидные для этого элемента свойства.

```jsx { "props": { "layout": false, "iframe": false } }
const ExampleBase = ({ formItemStatus }) => {
  const [before, setBefore] = useState(undefined);
  const [after, setAfter] = useState(undefined);
  const [align, setAlign] = useState('left');
  const [disabled, setDisabled] = useState(false);

  return (
    <FormLayoutGroup>
      <FormItem top="align">
        <Select
          value={align}
          onChange={(_, newValue) => setAlign(newValue)}
          options={[
            { label: 'left', value: 'left' },
            { label: 'center', value: 'center' },
            { label: 'right', value: 'right' },
          ]}
        />
      </FormItem>
      <Checkbox
        description="Icon24WalletOutline for example"
        checked={!!before}
        onChange={(e) =>
          e.target.checked ? setBefore(<Icon24WalletOutline />) : setBefore(undefined)
        }
      >
        before
      </Checkbox>
      <Checkbox
        description="Icon20User for example"
        checked={!!after}
        onChange={(e) => (e.target.checked ? setAfter(<Icon20User />) : setAfter(undefined))}
      >
        after
      </Checkbox>
      <Checkbox checked={disabled} onChange={(e) => setDisabled(e.target.checked)}>
        disabled
      </Checkbox>
      <FormItem htmlFor="example" top="📝 Пример" status={formItemStatus}>
        <Input
          id="example"
          before={before}
          after={after}
          type="text"
          align={align}
          defaultValue="Lorem ipsum dolor sit amet"
          disabled={disabled}
        />
      </FormItem>
    </FormLayoutGroup>
  );
};

const ExampleWithIcon = ({ formItemStatus }) => {
  const textInput = React.useRef(null);
  const clear = () => {
    if (textInput.current) {
      textInput.current.value = '';
      textInput.current.focus();
    }
  };

  return (
    <FormLayoutGroup>
      <FormItem
        htmlFor="exampleClickable"
        top="📝 Пример с кликабельной иконкой"
        status={formItemStatus}
      >
        <Input
          id="exampleClickable"
          getRef={textInput}
          type="text"
          placeholder="Ну ведь брокколи это вкусно и полезно 😢"
          defaultValue="Брокколи 🥦"
          after={
            <IconButton hoverMode="opacity" label="Очистить поле" onClick={clear}>
              <Icon16Clear />
            </IconButton>
          }
        />
      </FormItem>
    </FormLayoutGroup>
  );
};

const Example = () => {
  const [sizeY, setSizeY] = useState('regular');
  const [formItemStatus, setFormItemStatus] = useState('default');

  return (
    <AdaptivityProvider sizeY={sizeY}>
      <Flex justify="end" reverse>
        <Flex.Item flex="grow">
          <ExampleBase formItemStatus={formItemStatus} />
          <Spacing size={16} />
          <Separator />
          <Spacing size={16} />
          <ExampleWithIcon formItemStatus={formItemStatus} />
        </Flex.Item>

        <Flex.Item flexBasis={200}>
          <FormItem top="AdaptivityProvider[sizeY]">
            <Select
              value={sizeY}
              onChange={(_, newValue) => setSizeY(newValue)}
              options={[
                { label: 'compact', value: 'compact' },
                { label: 'regular', value: 'regular' },
              ]}
            />
          </FormItem>
          <FormItem top="FormItem[status]">
            <Select
              value={formItemStatus}
              onChange={(_, newValue) => setFormItemStatus(newValue)}
              options={[
                { label: 'default', value: 'default' },
                { label: 'error', value: 'error' },
                { label: 'valid', value: 'valid' },
              ]}
            />
          </FormItem>
        </Flex.Item>
      </Flex>
    </AdaptivityProvider>
  );
};

<Example />;
```

Группирует компонент [Button](#!/Button). Позволяет вкладывать внутрь себя же.

## Что следует знать?

1. [ButtonGroup](#!/ButtonGroup) не отвечает за параметры [Button](#!/Button) и вложенных [ButtonGroup](#!/ButtonGroup).
2. Исходя из п. 1, параметр `stretched` растягивает тот [ButtonGroup](#!/ButtonGroup), который имеет это свойство. Для компонента [Button](#!/Button) и вложенных [ButtonGroup](#!/ButtonGroup) его следует определять самостоятельно, где это необходимо.

```jsx { "props": { "layout": false, "iframe": false } }
const ButtonGroupPropsForm = ({ caption, defaultProps, onChange, isNested = false }) => {
  const [{ mode, gap, align }, setProps] = React.useState(() => defaultProps);

  const handleChange = React.useCallback(
    (key, value) => {
      setProps((prevState) => {
        const newState = { ...prevState, [key]: value };
        onChange(newState);
        return newState;
      });
    },
    [onChange],
  );

  return (
    <React.Fragment>
      <div>The change to see on the page</div>
      <FormItem top="mode">
        <Select
          value={mode}
          onChange={(e) => handleChange('mode', e.target.value)}
          options={[
            { label: 'vertical', value: 'vertical' },
            { label: 'horizontal', value: 'horizontal' },
          ]}
        />
      </FormItem>
      <FormItem top="gap">
        <Select
          value={gap}
          onChange={(e) => handleChange('gap', e.target.value)}
          options={[
            { label: 'none', value: 'none' },
            { label: 'space', value: 'space' },
            { label: 's', value: 's' },
            { label: 'm', value: 'm' },
          ]}
        />
      </FormItem>
      {((mode === 'vertical' && isNested) || !isNested) && (
        <FormItem top="align">
          <Select
            value={align}
            onChange={(e) => handleChange('align', e.target.value)}
            options={[
              { label: '', value: undefined },
              { label: 'left', value: 'left' },
              { label: 'center', value: 'center' },
              { label: 'right', value: 'right' },
            ]}
          />
        </FormItem>
      )}
      <Checkbox onChange={(e) => handleChange('stretched', e.target.checked)}>stretched</Checkbox>
      {caption && (
        <FormItem>
          <Footnote>({caption})</Footnote>
        </FormItem>
      )}
    </React.Fragment>
  );
};

const ExampleUseCases = () => {
  return (
    <React.Fragment>
      <Div>
        <Title level="3">Примеры использования</Title>
      </Div>
      <Div>
        <ButtonGroup mode="vertical" gap="m" style={{ minWidth: 328 }}>
          <Button size="l" appearance="accent" stretched>
            Разрешить
          </Button>
          <Button size="l" appearance="accent" stretched>
            Завершить
          </Button>
          <ButtonGroup mode="horizontal" gap="m" stretched>
            <Button size="l" appearance="negative" stretched>
              Не сейчас
            </Button>
            <Button size="l" appearance="positive" stretched>
              Продолжить
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </Div>
      <br />
      <Div>
        <ButtonGroup mode="vertical" gap="m" style={{ minWidth: 328 }}>
          <Button size="l" appearance="accent" stretched>
            Разрешить
          </Button>
          <Button size="l" appearance="accent" mode="secondary" stretched>
            Завершить
          </Button>
          <Button size="l" appearance="accent" mode="tertiary" stretched>
            Не сейчас
          </Button>
        </ButtonGroup>
      </Div>
      <br />
      <Div>
        <ButtonGroup mode="horizontal" gap="space" stretched>
          <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Attach />}>
            Прикрепить файл
          </Button>
          <Button
            size="l"
            appearance="accent"
            mode="tertiary"
            before={<Icon20AddCircle />}
            after={<Icon16ArrowTriangleDown />}
          >
            Создать
          </Button>
          <Button size="l" appearance="accent" mode="tertiary" before={<Icon24Send />}>
            Отправить
          </Button>
        </ButtonGroup>
      </Div>
    </React.Fragment>
  );
};

const buttonText = 'Button';
const stretchedButtonText = 'Button (stretched)';

const ExampleBase = () => {
  const [props, setProps] = useState({
    mode: 'horizontal',
    gap: 's',
    align: 'left',
    stretched: false,
  });

  return (
    <React.Fragment>
      <Div>
        <Title level="3">Пример без вложенного ButtonGroup</Title>
      </Div>
      <ButtonGroupPropsForm defaultProps={props} onChange={setProps} />
      <Div>
        <ButtonGroup {...props}>
          <Button size="l" appearance="accent">
            {buttonText}
          </Button>
          <Button size="l" appearance="accent" stretched>
            {stretchedButtonText}
          </Button>
          <Button size="l" appearance="accent" before={<Icon24Add />} />
          <Button size="l" appearance="accent" before={<Icon24Add />} stretched />
        </ButtonGroup>
      </Div>
      <Div>
        <ButtonGroup {...props}>
          <Button size="l" appearance="accent">
            {buttonText}
          </Button>
          <Button size="l" appearance="accent">
            {buttonText}
          </Button>
        </ButtonGroup>
      </Div>
    </React.Fragment>
  );
};

const buttonGroupHighlightStyles = {
  border: '2px dotted tomato',
  boxSizing: 'border-box',
};

const ExampleNested = () => {
  const [props, setProps] = useState({
    mode: 'vertical',
    gap: 's',
    align: 'undefined',
    stretched: false,
  });

  return (
    <React.Fragment>
      <Div>
        <Title level="3">Пример с вложенным ButtonGroup</Title>
      </Div>
      <ButtonGroupPropsForm
        caption="параметры передаются корневому элементу"
        defaultProps={props}
        onChange={setProps}
        isNested
      />
      <Div>
        <ButtonGroup {...props}>
          <ButtonGroup mode="horizontal" gap="m" stretched style={buttonGroupHighlightStyles}>
            <Button size="l" appearance="accent" stretched>
              {stretchedButtonText}
            </Button>
            <Button size="l" appearance="accent" before={<Icon24Add />} />
          </ButtonGroup>

          <ButtonGroup mode="horizontal" gap="m" stretched style={buttonGroupHighlightStyles}>
            <Button size="l" appearance="accent">
              {buttonText}
            </Button>
            <Button size="l" appearance="accent" before={<Icon24Add />} />
          </ButtonGroup>

          <ButtonGroup
            mode="horizontal"
            gap="m"
            stretched={false}
            style={buttonGroupHighlightStyles}
          >
            <Button size="l" appearance="accent">
              {buttonText}
            </Button>
            <Button size="l" appearance="accent" before={<Icon24Add />} />
          </ButtonGroup>

          <ButtonGroup mode="horizontal" gap="m" stretched style={buttonGroupHighlightStyles}>
            <Button size="l" appearance="accent">
              {buttonText}
            </Button>
            <Button size="l" appearance="accent" stretched>
              {stretchedButtonText}
            </Button>
            <Button size="l" appearance="accent">
              {buttonText}
            </Button>
          </ButtonGroup>
          <ButtonGroup mode="vertical" gap="m" stretched={false} style={buttonGroupHighlightStyles}>
            <Button size="l" appearance="accent" stretched>
              {stretchedButtonText}
            </Button>
            <Button size="l" appearance="accent" before={<Icon24Add />} stretched />
            <ButtonGroup mode="horizontal" stretched style={buttonGroupHighlightStyles}>
              <Button size="l" appearance="accent" before={<Icon24Add />} />
              <Button size="l" appearance="accent" stretched>
                {stretchedButtonText}
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </ButtonGroup>
      </Div>
    </React.Fragment>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
};

const Example = () => {
  const [sizeY, setSizeY] = useState('compact');

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <AdaptivityProvider sizeY={sizeY}>
        <div style={containerStyles}>
          <ExampleUseCases />
          <ExampleBase />
          <ExampleNested />
        </div>
      </AdaptivityProvider>
      <div style={{ minWidth: 200 }}>
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={(e) => setSizeY(e.target.value)}
            options={[
              { label: 'compact', value: 'compact' },
              { label: 'regular', value: 'regular' },
            ]}
          />
        </FormItem>
      </div>
    </div>
  );
};

<Example />;
```

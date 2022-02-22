Группирует компонент [Button](#!/Button).

Позволяет вкладывать внутрь себя же. Если вложенному [ButtonGroup](#!/ButtonGroup) не передать параметры `padding` и `stretched`, то значения для этих параметров будут унаследованы из контекста выше стоящего [ButtonGroup](#!/ButtonGroup).

1. `stretched` из контекста приоритетнее чем переданный `stretched` в компонент [Button](#!/Button).
2. [ButtonGroup](#!/ButtonGroup) не отвечает за все остальные параметры [Button](#!/Button). К примеру, `size` нужно определять самостоятельно в каждом [Button](#!/Button).

```jsx { "props": { "layout": false, "iframe": false } }
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
};

const exampleWrapperStyles = {
  border: "1px dashed tomato",
};

const Example = () => {
  const [sizeY, setSizeY] = useState("compact");

  const [padding, setPadding] = useState("medium");
  const [stretched, setStretched] = useState(false);
  const buttonText = "Button";

  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <AdaptivityProvider sizeY={sizeY}>
        <div style={containerStyles}>
          <Div>
            <Title level="3">Example 1</Title>
          </Div>
          <Div style={exampleWrapperStyles}>
            <ButtonGroup
              mode="vertical"
              padding={padding}
              stretched={stretched}
              style={{ minWidth: 328 }}
            >
              <Button size="l" appearance="accent">
                Разрешить
              </Button>
              <Button size="l" appearance="accent">
                Завершить
              </Button>
              <ButtonGroup mode="horizontal">
                <Button size="l" appearance="negative">
                  Не сейчас
                </Button>
                <Button size="l" appearance="positive">
                  Продолжить
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Div>
          <Div>
            <Title level="3">Example 2</Title>
          </Div>
          <Div style={exampleWrapperStyles}>
            <ButtonGroup
              mode="vertical"
              padding={padding}
              stretched={stretched}
            >
              <ButtonGroup mode="horizontal">
                <Button size="l" appearance="accent">
                  Button
                </Button>
                <Button size="l" appearance="accent" before={<Icon24Add />} />
              </ButtonGroup>
              <ButtonGroup mode="vertical">
                <Button size="l" appearance="accent">
                  Button
                </Button>
                <Button size="l" appearance="accent" before={<Icon24Add />} />
                <ButtonGroup mode="horizontal">
                  <Button size="l" appearance="accent" before={<Icon24Add />} />
                  <Button size="l" appearance="accent">
                    Button
                  </Button>
                </ButtonGroup>
              </ButtonGroup>
              <Button size="l" appearance="accent">
                Button
              </Button>
              <ButtonGroup mode="horizontal">
                <Button size="l" appearance="accent">
                  Button
                </Button>
                <Button size="l" appearance="accent">
                  Button
                </Button>
                <Button size="l" appearance="accent">
                  Button
                </Button>
              </ButtonGroup>
            </ButtonGroup>
          </Div>
        </div>
      </AdaptivityProvider>
      <div style={{ minWidth: 200 }}>
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={(e) => setSizeY(e.target.value)}
            options={[
              { label: "compact", value: "compact" },
              { label: "regular", value: "regular" },
            ]}
          />
        </FormItem>
        <FormItem top="props">
          <Select
            value={padding}
            onChange={(e) => setPadding(e.target.value)}
            options={[
              { label: "medium", value: "medium" },
              { label: "small", value: "small" },
            ]}
          />
          <Checkbox onChange={(e) => setStretched(e.target.checked)}>
            stretched
          </Checkbox>
        </FormItem>
      </div>
    </div>
  );
};

<Example />;
```

Компонент-оболочка для элементов форм ([Input](#/Input), [Select](#/Select), [Textarea](#/Textarea) и другие).

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [sizeY, setSizeY] = useState("regular");
  const [before, setBefore] = useState(<Icon24WalletOutline />);
  const [after, setAfter] = useState(<Icon24ChevronUp />);
  const [disabled, setDisabled] = useState(false);

  return (
    <div style={rootContainerStyles}>
      <div style={demoContainerStyles}>
        <AdaptivityProvider sizeY={sizeY}>
          <FormLayout>
            <FormItem>
              <FormField before={before} after={after} disabled={disabled}>
                <CustomInput />
              </FormField>
            </FormItem>
          </FormLayout>
        </AdaptivityProvider>
      </div>
      <div style={propsContainerStyles}>
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
        <FormItem top="prop[before]">
          <Checkbox
            description="Icon24WalletOutline for example"
            checked={!!before}
            onChange={(e) =>
              e.target.checked
                ? setBefore(<Icon24WalletOutline />)
                : setBefore(undefined)
            }
          >
            before
          </Checkbox>
        </FormItem>
        <FormItem top="prop[after]">
          <Checkbox
            description="Icon24ChevronUp for example"
            checked={!!after}
            onChange={(e) =>
              e.target.checked
                ? setAfter(<Icon24ChevronUp />)
                : setAfter(undefined)
            }
          >
            after
          </Checkbox>
        </FormItem>
        <FormItem top="prop[disabled]">
          <Checkbox
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          >
            disabled
          </Checkbox>
        </FormItem>
      </div>
    </div>
  );
};

const rootContainerStyles = {
  display: "flex",
  flexDirection: "row-reverse",
  flexWrap: "wrap",
  justifyContent: "center",
};

const demoContainerStyles = {
  flexGrow: 2,
  paddingTop: 24,
  paddingBottom: 24,
};

const propsContainerStyles = { minWidth: 200 };

const CustomInput = () => {
  const style = {
    position: "relative",
    display: "block",
    width: "100%",
    margin: 0,
    padding: 11,
    fontSize: 16,
    lineHeight: "19px",
    textOverflow: "ellipsis",
    color: "#000",
    border: "none",
    background: "transparent",
    zIndex: 2,
  };

  return <input type="text" style={style} placeholder="Кастомный инпут" />;
};

<Example />;
```

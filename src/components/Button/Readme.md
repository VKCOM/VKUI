```jsx { "props": { "layout": false, "iframe": false } }
const containerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
};

const Example = () => {
  const [appearance, setAppearance] = useState("accent");
  const [sizeY, setSizeY] = useState("compact");
  const [stretched, setStretched] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("s");
  const [loading, setLoading] = useState(false);
  const [addBefore, setAddBefore] = useState(false);
  const [addAfter, setAddAfter] = useState(false);
  const [addText, setAddText] = useState(true);
  const [hasLink, setHasLink] = useState(false);

  const buttonBefore =
    addBefore &&
    (size === "s" ? (
      <Icon12Add />
    ) : size === "m" ? (
      <Icon16Add />
    ) : (
      <Icon24Add />
    ));
  const buttonAfter =
    addAfter &&
    (size === "s" ? (
      <Icon12Tag />
    ) : size === "m" ? (
      <Icon24ChevronCompactRight />
    ) : (
      <Counter>16</Counter>
    ));
  const buttonLink = hasLink ? "#" : undefined;
  const buttonText = addText ? "Button" : undefined;

  return (
    <div style={{ display: "flex", flexDirection: "row-reverse" }}>
      <AdaptivityProvider sizeY={sizeY}>
        <div
          style={{
            background: appearance === "overlay" ? "#232323" : "unset",
            ...containerStyles,
          }}
        >
          <Div>
            <Button
              href={buttonLink}
              before={buttonBefore}
              after={buttonAfter}
              appearance={appearance}
              stretched={stretched}
              disabled={disabled}
              size={size}
              loading={loading}
            >
              {buttonText}
            </Button>
          </Div>
          <Div>
            <Button
              href={buttonLink}
              before={buttonBefore}
              after={buttonAfter}
              appearance={appearance}
              stretched={stretched}
              mode="secondary"
              disabled={disabled}
              size={size}
              loading={loading}
            >
              {buttonText}
            </Button>
          </Div>
          <Div>
            <Button
              href={buttonLink}
              before={buttonBefore}
              after={buttonAfter}
              appearance={appearance}
              stretched={stretched}
              mode="tertiary"
              disabled={disabled}
              size={size}
              loading={loading}
            >
              {buttonText}
            </Button>
          </Div>
          <Div>
            <Button
              href={buttonLink}
              before={buttonBefore}
              after={buttonAfter}
              appearance={appearance}
              stretched={stretched}
              mode="outline"
              disabled={disabled}
              size={size}
              loading={loading}
            >
              {buttonText}
            </Button>
          </Div>
        </div>
      </AdaptivityProvider>
      <div style={{ minWidth: 200 }}>
        <FormItem top="appearance">
          <Select
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
            options={[
              { label: "accent", value: "accent" },
              { label: "positive", value: "positive" },
              { label: "negative", value: "negative" },
              { label: "neutral", value: "neutral" },
              { label: "overlay", value: "overlay" },
            ]}
          />
        </FormItem>
        <FormItem top="size">
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            options={[
              { label: "s", value: "s" },
              { label: "m", value: "m" },
              { label: "l", value: "l" },
            ]}
          />
        </FormItem>
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
          <Checkbox onChange={(e) => setStretched(e.target.checked)}>
            stretched
          </Checkbox>
          <Checkbox onChange={(e) => setLoading(e.target.checked)}>
            loading
          </Checkbox>
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>
            disabled
          </Checkbox>
          <Checkbox
            disabled={!(addBefore || addAfter)}
            onChange={(e) => setAddText(e.target.checked)}
            checked={addText}
          >
            add text
          </Checkbox>
          <Checkbox
            disabled={!(addText || addAfter)}
            onChange={(e) => setAddBefore(e.target.checked)}
          >
            add before
          </Checkbox>
          <Checkbox
            disabled={!(addText || addBefore)}
            onChange={(e) => setAddAfter(e.target.checked)}
          >
            add after
          </Checkbox>
          <Checkbox onChange={(e) => setHasLink(e.target.checked)}>
            add href
          </Checkbox>
        </FormItem>
      </div>
    </div>
  );
};

<Example />;
```

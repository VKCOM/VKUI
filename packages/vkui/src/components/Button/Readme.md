```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [align, setAlign] = useState('center');
  const [appearance, setAppearance] = useState('accent');
  const [sizeY, setSizeY] = useState('compact');
  const [rounded, setRounded] = useState(false);
  const [stretched, setStretched] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState('s');
  const [loading, setLoading] = useState(false);
  const [addBefore, setAddBefore] = useState(false);
  const [addAfter, setAddAfter] = useState(false);
  const [addText, setAddText] = useState(true);
  const [hasLink, setHasLink] = useState(false);
  const platform = usePlatform();

  React.useEffect(() => {
    if (platform === 'vkcom') {
      setSizeY('compact');
    }
  }, [platform]);

  const buttonBefore =
    addBefore && (size === 's' ? <Icon12Add /> : size === 'm' ? <Icon16Add /> : <Icon24Add />);
  const buttonAfter =
    addAfter &&
    (size === 's' ? (
      <Icon12Tag />
    ) : size === 'm' ? (
      <Icon24ChevronCompactRight />
    ) : (
      <Counter>16</Counter>
    ));
  const buttonLink = hasLink ? '#' : undefined;
  const buttonText = addText ? 'Button' : undefined;

  return (
    <Flex justify="end" reverse>
      <AdaptivityProvider sizeY={sizeY}>
        <Flex
          direction="column"
          justify="center"
          style={{
            // For docs purpose only
            background: appearance === 'overlay' ? '#232323' : 'unset',
          }}
        >
          {['primary', 'secondary', 'tertiary', 'outline', 'link'].map((mode) => (
            <Div key={mode}>
              <Button
                align={align}
                href={buttonLink}
                before={buttonBefore}
                after={buttonAfter}
                appearance={appearance}
                stretched={stretched}
                rounded={rounded}
                mode={mode}
                disabled={disabled}
                size={size}
                loading={loading}
                onClick={() => {}}
              >
                {buttonText}
              </Button>
            </Div>
          ))}
        </Flex>
      </AdaptivityProvider>
      <Flex.Item flexBasis={200}>
        <FormItem top="appearance">
          <Select
            value={appearance}
            onChange={(_, newValue) => setAppearance(newValue)}
            options={[
              { label: 'accent', value: 'accent' },
              { label: 'positive', value: 'positive' },
              { label: 'negative', value: 'negative' },
              { label: 'neutral', value: 'neutral' },
              { label: 'overlay', value: 'overlay' },
              { label: 'accent-invariable', value: 'accent-invariable' },
            ]}
          />
        </FormItem>
        <FormItem top="size">
          <Select
            value={size}
            onChange={(_, newValue) => setSize(newValue)}
            options={[
              { label: 's', value: 's' },
              { label: 'm', value: 'm' },
              { label: 'l', value: 'l' },
            ]}
          />
        </FormItem>
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
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={(_, newValue) => setSizeY(newValue)}
            options={[
              { label: 'compact', value: 'compact' },
              {
                label: 'regular',
                value: 'regular',
                disabled: platform === 'vkcom',
              },
            ]}
          />
        </FormItem>
        <FormItem top="props">
          <Checkbox onChange={(e) => setRounded(e.target.checked)}>rounded</Checkbox>
          <Checkbox onChange={(e) => setStretched(e.target.checked)}>stretched</Checkbox>
          <Checkbox onChange={(e) => setLoading(e.target.checked)}>loading</Checkbox>
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>disabled</Checkbox>
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
            checked={addBefore}
          >
            add before
          </Checkbox>
          <Checkbox
            disabled={!(addText || addBefore)}
            onChange={(e) => setAddAfter(e.target.checked)}
            checked={addAfter}
          >
            add after
          </Checkbox>
          <Checkbox onChange={(e) => setHasLink(e.target.checked)}>add href</Checkbox>
        </FormItem>
      </Flex.Item>
    </Flex>
  );
};

<Example />;
```

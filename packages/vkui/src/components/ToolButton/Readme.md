```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [mode, setMode] = useState('primary');
  const [appearance, setAppearance] = useState('accent');
  const [direction, setDirection] = useState('column');
  const [sizeY, setSizeY] = useState('compact');
  const [rounded, setRounded] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [addText, setAddText] = useState(true);
  const [hasLink, setHasLink] = useState(false);
  const platform = usePlatform();

  React.useEffect(() => {
    if (platform === 'vkcom') {
      setSizeY('compact');
    }
  }, [platform]);

  const buttonLink = hasLink ? '#' : undefined;
  const buttonText = addText ? 'Button' : undefined;

  return (
    <Flex reverse noWrap>
      <AdaptivityProvider sizeY={sizeY}>
        <Flex align="center" justify="center" style={{ width: '100%' }}>
          <Div>
            <ToolButton
              IconCompact={Icon20Add}
              IconRegular={Icon24Add}
              mode={mode}
              direction={direction}
              appearance={appearance}
              rounded={rounded}
              disabled={disabled}
              href={buttonLink}
              onClick={() => {}}
            >
              {buttonText}
            </ToolButton>
          </Div>
        </Flex>
      </AdaptivityProvider>
      <Flex.Item flexBasis={200} flex="fixed">
        <FormItem top="direction">
          <Select
            value={direction}
            onChange={(_, newValue) => setDirection(newValue)}
            options={[
              { label: 'row', value: 'row' },
              { label: 'column', value: 'column' },
            ]}
          />
        </FormItem>
        <FormItem top="mode">
          <Select
            value={mode}
            onChange={(_, newValue) => setMode(newValue)}
            options={[
              { label: 'primary', value: 'primary' },
              { label: 'secondary', value: 'secondary' },
              { label: 'tertiary', value: 'tertiary' },
              { label: 'outline', value: 'outline' },
            ]}
          />
        </FormItem>
        <FormItem top="appearance">
          <Select
            value={appearance}
            onChange={(_, newValue) => setAppearance(newValue)}
            options={[
              { label: 'accent', value: 'accent' },
              { label: 'neutral', value: 'neutral' },
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
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>disabled</Checkbox>
          <Checkbox onChange={(e) => setAddText(e.target.checked)} checked={addText}>
            add text
          </Checkbox>
          <Checkbox onChange={(e) => setHasLink(e.target.checked)}>add href</Checkbox>
        </FormItem>
      </Flex.Item>
    </Flex>
  );
};

<Example />;
```

```jsx { "props": { "layout": false, "iframe": false } }
const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
}

const Example = () => {
  const [appearance, setAppearance] = useState('accent');
  const [stretched, setStretched] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("s");
  const [loading, setLoading] = useState(false);
  const [addBefore, setAddBefore] = useState(false);
  const [addAfter, setAddAfter] = useState(false);
  const [hasLink, setHasLink] = useState(false);

  const buttonBefore = addBefore &&
    (size === 's' ? <Icon12Add/> : size === 'm' ? <Icon16Add/> : <Icon24Add/>);
  const buttonAfter = addAfter &&
    (size === 's' ? <Icon12Tag/> :size === 'm' ? <Icon24ChevronCompactRight/> : <Counter>16</Counter>);
  const buttonLink = hasLink ? '#' : undefined;

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <div style={{
        background: appearance === 'overlay' ? '#232323' : 'unset',
        ...containerStyles,
      }}>
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
            Primary
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
            Secondary
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
            Tertiary
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
            Outline
          </Button>
        </Div>
      </div>
      <div style={{ minWidth: 200 }}>
        <FormItem top="appearance">
          <Select value={appearance} onChange={(e) => setAppearance(e.target.value)} options={[
            {label: "accent", value: "accent"},
            {label: "positive", value: "positive"},
            {label: "negative", value: "negative"},
            {label: "neutral", value: "neutral"},
            {label: "overlay", value: "overlay"},
          ]}/>
        </FormItem>
        <FormItem top="size">
          <Select value={size} onChange={(e) => setSize(e.target.value)} options={[
            {label: "s", value: "s"},
            {label: "m", value: "m"},
            {label: "l", value: "l"},
          ]}/>
        </FormItem>
        <FormItem top="props">
          <Checkbox onChange={(e) => setStretched(e.target.checked)}>stretched</Checkbox>
          <Checkbox onChange={(e) => setLoading(e.target.checked)}>loading</Checkbox>
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>disabled</Checkbox>
          <Checkbox onChange={(e) => setAddBefore(e.target.checked)}>add before</Checkbox>
          <Checkbox onChange={(e) => setAddAfter(e.target.checked)}>add after</Checkbox>
          <Checkbox onChange={(e) => setHasLink(e.target.checked)}>add href</Checkbox>
        </FormItem>
      </div>
    </div>
  )
}

<Example/>
```

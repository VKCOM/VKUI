 ```jsx
const Example = () => {
  const [color, setColor] = useState('accent');
  const [stretched, setStretched] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [size, setSize] = useState("s");
  const [loading, setLoading] = useState(false);

  return (
    <View activePanel="button">
      <Panel id="button">
        <PanelHeader>Button</PanelHeader>
        <Group header={<Header mode="secondary">Типы кнопок</Header>}>
          <Div>
            <Button>Primary</Button>
          </Div>
          <Div>
            <Button mode="secondary">Secondary</Button>
          </Div>
          <Div>
            <Button mode="tertiary">Tertiary</Button>
          </Div>
          <Div>
            <Button mode="outline">Outline</Button>
          </Div>
          <Div>
            <Button mode="commerce">Commerce</Button>
          </Div>
          <Div>
            <Button mode="destructive">Destructive</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button mode="overlay_primary">Overlay Primary</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button mode="overlay_secondary">Overlay Secondary</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button mode="overlay_outline">Overlay Outline</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Типы кнопок с disabled="true"</Header>}>
          <Div>
            <Button disabled>Primary</Button>
          </Div>
          <Div>
            <Button disabled mode="secondary">Secondary</Button>
          </Div>
          <Div>
            <Button disabled mode="tertiary">Tertiary</Button>
          </Div>
          <Div>
            <Button disabled mode="outline">Outline</Button>
          </Div>
          <Div>
            <Button disabled mode="commerce">Commerce</Button>
          </Div>
          <Div>
            <Button disabled mode="destructive">Destructive</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button disabled mode="overlay_primary">Overlay Primary</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button disabled mode="overlay_secondary">Overlay Secondary</Button>
          </Div>
          <Div style={{ background: '#232323' }}>
            <Button disabled mode="overlay_outline">Overlay Outline</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Допустимые размеры</Header>}>
          <Div>
            <Button>Small</Button>
          </Div>
          <Div>
            <Button size="m">Medium</Button>
          </Div>
          <Div>
            <Button size="l" mode="secondary">Large</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Растягивание по ширине</Header>}>
          <Div>
            <Button size="l">No stretch</Button>
          </Div>
          <Div style={{display: 'flex'}}>
            <Button size="l" stretched style={{ marginRight: 8 }}>Stretched</Button>
            <Button size="l" stretched mode="secondary">Stretched</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Кнопки с иконками</Header>}>
          <Div>
            <Button before={<Icon16Add/>}>Add item</Button>
          </Div>
          <Div>
            <Button size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
          </Div>
          <Div>
            <Button mode="secondary" size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
          </Div>
          <Div>
            <Button mode="tertiary" size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
          </Div>
          <Div>
            <Button mode="outline" size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
          </Div>
          <Div>
            <Button mode="commerce" size="l" before={<Icon24Add/>} after={<Counter>16</Counter>}>Add item</Button>
          </Div>
          <Div>
            <Button before={<Icon24Camera/>} size="l">Take a photo</Button>
          </Div>
          <Div>
            <Button size="l" after={<Counter>16</Counter>}>Button</Button>
          </Div>
          <Div>
            <Button size="l" before={<Icon24Camera/>} after={<Counter>16</Counter>}>Button</Button>
          </Div>
          <Div>
            <Button mode="secondary" before={<Icon24Shuffle/>} size="l">Shuffle</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Состояние загрузки</Header>}>
          <Div>
            <Button size="s" loading>Button</Button>
          </Div>
          <Div>
            <Button size="m" loading>Button</Button>
          </Div>
          <Div>
            <Button size="l" loading>Button</Button>
          </Div>
        </Group>
        <Group header={<Header mode="secondary">Ссылки в виде кнопок</Header>}>
          <Div>
            <Button href="#">I am link</Button>
          </Div>
        </Group>
        <Group>
          <FormItem top="Color">
            <Select value={color} onChange={(e) => setColor(e.target.value)} options={[
              {label: "Accent", value: "accent"},
              {label: "Positive", value: "positive"},
              {label: "Negative", value: "negative"},
              {label: "Neutral", value: "neutral"},
              {label: "Overlay", value: "overlay"},
            ]}/>
          </FormItem>
          <FormLayoutGroup mode="horizontal">
            <FormItem top="size">
              <Radio
                checked={size === 's'}
                onChange={(e) => setSize('s')}
                style={{ width: '100%' }}
                name="size"
              >
                s
              </Radio>
            </FormItem>
            <FormItem>
              <div style={{ minHeight: 28 }}/>
              <Radio
                checked={size === 'm'}
                onChange={(e) => setSize('m')}
                style={{ width: '100%' }}
                name="size"
              >
                m
              </Radio>
            </FormItem>
            <FormItem>
              <div style={{ minHeight: 28 }}/>
              <Radio
                checked={size === 'l'}
                onChange={(e) => setSize('l')}
                style={{ width: '100%' }}
                name="size"
              >
                l
              </Radio>
            </FormItem>
          </FormLayoutGroup>
          <Checkbox onChange={(e) => setStretched(e.target.checked)}>Stretched</Checkbox>
          <Checkbox onChange={(e) => setLoading(e.target.checked)}>Loading</Checkbox>
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>Disabled</Checkbox>
        </Group>
        <Group header={<Header mode="secondary">Preview</Header>}>
          <div style={{ background: color === 'overlay' ? '#232323' : 'unset' }}>
            <Div>
              <Button
                color={color}
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
                color={color}
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
                color={color}
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
                color={color}
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
        </Group>
      </Panel>
    </View>
  )
}

<Example />
```

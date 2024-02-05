Компонент, используемый в качестве кнопок в [`SubnavigationBar`](#/SubnavigationBar).

Этот компонент может использоваться:

- В качестве ссылки для создания быстрой и заметной точки входа в важный подраздел.
- В качестве кнопки, для управления контентом на странице. Например, показать модальную страницу с фильтрами или сразу активировать какой-то фильтр.

```jsx { "props": { "layout": false, "iframe": false } }
const SubnavigationButtonExample = () => {
  const [appearance, setAppearance] = useState('accent');
  const [textLevel, setTextLevel] = useState('2');
  const [sizeY, setSizeY] = useState('compact');
  const [size, setSize] = useState('m');
  const [expandable, setExpandable] = useState(false);
  const [selected, setSelected] = useState(false);
  const [addBefore, setAddBefore] = useState(false);
  const [addAfter, setAddAfter] = useState(false);

  const buttonBefore = addBefore && (size === 's' ? <Icon16Stars /> : <Icon24Filter />);
  const buttonAfter = addAfter && <Counter size="s">3</Counter>;

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
      <AdaptivityProvider sizeY={sizeY}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {['primary', 'outline', 'tertiary'].map((mode) => (
            <Div key={mode}>
              <SubnavigationButton
                textLevel={textLevel}
                mode={mode}
                appearance={appearance}
                size={size}
                before={buttonBefore}
                after={buttonAfter}
                expandable={expandable}
                selected={selected}
                onClick={noop}
              >
                {mode} button
              </SubnavigationButton>
            </Div>
          ))}
        </div>
      </AdaptivityProvider>
      <div style={{ minWidth: 200 }}>
        <FormItem top="appearance">
          <Select
            value={appearance}
            onChange={(e) => setAppearance(e.target.value)}
            options={[
              { label: 'accent', value: 'accent' },
              { label: 'neutral', value: 'neutral' },
            ]}
          />
        </FormItem>
        <FormItem top="text level">
          <Select
            value={textLevel}
            onChange={(e) => setTextLevel(e.target.value)}
            options={[
              { label: '1', value: '1' },
              { label: '2', value: '2' },
              { label: '3', value: '3' },
            ]}
          />
        </FormItem>
        <FormItem top="size">
          <Select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            options={[
              { label: 's', value: 's' },
              { label: 'm', value: 'm' },
              { label: 'l', value: 'l' },
            ]}
          />
        </FormItem>
        <FormItem top="sizeY">
          <Select
            value={sizeY}
            onChange={(e) => setSizeY(e.target.value)}
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
          <Checkbox onChange={(e) => setSelected(e.target.checked)}>selected</Checkbox>
          <Checkbox onChange={(e) => setExpandable(e.target.checked)}>expandable</Checkbox>
          <Checkbox onChange={(e) => setAddBefore(e.target.checked)}>add before</Checkbox>
          <Checkbox onChange={(e) => setAddAfter(e.target.checked)}>add after</Checkbox>
        </FormItem>
      </div>
    </div>
  );
};

<SubnavigationButtonExample />;
```

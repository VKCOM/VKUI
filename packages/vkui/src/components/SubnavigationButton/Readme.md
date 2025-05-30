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
  const [chevron, setChevron] = useState(false);
  const [selected, setSelected] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [addBefore, setAddBefore] = useState(false);
  const [addAfter, setAddAfter] = useState(false);

  const buttonBefore = addBefore && (size === 's' ? <Icon16Stars /> : <Icon24Filter />);
  const buttonAfter = addAfter && <Counter size="s">3</Counter>;

  return (
    <Flex reverse justify="end">
      <Flex direction="column" justify="center">
        <AdaptivityProvider sizeY={sizeY}>
          {['primary', 'outline', 'tertiary'].map((mode) => (
            <Div key={mode}>
              <SubnavigationButton
                textLevel={textLevel}
                mode={mode}
                appearance={appearance}
                size={size}
                before={buttonBefore}
                after={buttonAfter}
                chevron={chevron}
                selected={selected}
                disabled={disabled}
                onClick={noop}
              >
                {mode} button
              </SubnavigationButton>
            </Div>
          ))}
        </AdaptivityProvider>
      </Flex>
      <Flex.Item flexBasis={200}>
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
        <FormItem top="text level">
          <Select
            value={textLevel}
            onChange={(_, newValue) => setTextLevel(newValue)}
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
            onChange={(_, newValue) => setSize(newValue)}
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
          <Checkbox onChange={(e) => setSelected(e.target.checked)}>selected</Checkbox>
          <Checkbox onChange={(e) => setDisabled(e.target.checked)}>disabled</Checkbox>
          <Checkbox onChange={(e) => setChevron(e.target.checked)}>chevron</Checkbox>
          <Checkbox onChange={(e) => setAddBefore(e.target.checked)}>add before</Checkbox>
          <Checkbox onChange={(e) => setAddAfter(e.target.checked)}>add after</Checkbox>
        </FormItem>
      </Flex.Item>
    </Flex>
  );
};

<SubnavigationButtonExample />;
```

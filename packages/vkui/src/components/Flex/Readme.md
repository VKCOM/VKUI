Базовый компонент для позиционирования элементов. Построен на базе `flex layout`.

```jsx { "props": { "layout": false, "iframe": false } }
const FlexContainer = ({ itemsCount, ...props }) => {
  return (
    <Flex {...props}>
      {Array.from({ length: itemsCount }, (item, index) => {
        return (
          <Banner
            key={index}
            before={
              <Image
                size={96}
                src="https://sun9-32.userapi.com/uFzLOK55iY7pC0DHjneEdP9G6gXcXi2Mxj9wVA/wnTmzh_blNM.jpg"
              />
            }
            header="Для Вас"
            subheader="Обновлено сегодня"
            actions={
              <Button before={<Icon24Play />} onClick={() => {}}>
                Слушать
              </Button>
            }
          />
        );
      })}
    </Flex>
  );
};

const GapSelectValues = [
  {
    label: '2xs',
    value: '2xs',
  },
  {
    label: 'xs',
    value: 'xs',
  },
  {
    label: 's',
    value: 's',
  },
  {
    label: 'm',
    value: 'm',
  },
  {
    label: 'l',
    value: 'l',
  },
  {
    label: 'xl',
    value: 'xl',
  },
  {
    label: '2xl',
    value: '2xl',
  },
  {
    label: '3xl',
    value: '3xl',
  },
  {
    label: '4xl',
    value: '4xl',
  },
];

const Example = () => {
  const [gap, setGap] = useState('m');
  const [rowGap, setRowGap] = useState('m');
  const [columnGap, setColumnGap] = useState('m');
  const [complexGap, setComplexGap] = useState(false);
  const [itemsCount, setItemsCount] = useState(4);
  const [direction, setDirection] = useState('row');
  const [align, setAlign] = useState(undefined);
  const [justify, setJustify] = useState(undefined);
  const [margin, setMargin] = useState('none');
  const [noWrap, setNoWrap] = useState(false);
  const platform = usePlatform();

  return (
    <Flex reverse justify="end" margin="auto" noWrap>
      <Flex.Item flex="content">
        <FlexContainer
          itemsCount={itemsCount}
          gap={complexGap ? [rowGap, columnGap] : gap}
          direction={direction}
          align={align}
          justify={justify}
          margin={margin}
          noWrap={noWrap}
        />
      </Flex.Item>
      <Flex.Item flex="fixed" flexBasis={200}>
        <FormItem top={`item count: ${itemsCount}`}>
          <Slider
            min={2}
            max={10}
            step={1}
            value={itemsCount}
            onChange={(value) => setItemsCount(value)}
          />
        </FormItem>
        <FormItem top="direction">
          <SegmentedControl
            size="m"
            value={direction}
            onChange={(value) => setDirection(value)}
            options={[
              {
                label: 'Row',
                value: 'row',
              },
              {
                label: 'Column',
                value: 'column',
              },
            ]}
          />
        </FormItem>
        <FormItem top="margin">
          <SegmentedControl
            size="m"
            value={margin}
            onChange={(value) => setMargin(value)}
            options={[
              {
                label: 'none',
                value: 'none',
              },
              {
                label: 'auto',
                value: 'auto',
              },
            ]}
          />
        </FormItem>
        <Checkbox value={complexGap} onChange={(e) => setComplexGap(e.target.checked)}>
          Complex Gap
        </Checkbox>
        {!complexGap && (
          <FormItem top="gap">
            <Select
              value={gap}
              onChange={(e) => setGap(e.target.value)}
              options={GapSelectValues}
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="row gap">
            <Select
              value={rowGap}
              onChange={(e) => setRowGap(e.target.value)}
              options={GapSelectValues}
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="column gap">
            <Select
              value={columnGap}
              onChange={(e) => setColumnGap(e.target.value)}
              options={GapSelectValues}
            />
          </FormItem>
        )}
        <FormItem top="align">
          <Select
            value={align}
            onChange={(e) => setAlign(e.target.value)}
            placeholder="Не выбрано"
            options={[
              { label: 'start', value: 'start' },
              { label: 'end', value: 'end' },
              { label: 'center', value: 'center' },
              { label: 'stretch', value: 'stretch' },
              { label: 'baseline', value: 'baseline' },
            ]}
            allowClearButton
          />
        </FormItem>
        <FormItem top="justify">
          <Select
            value={justify}
            onChange={(e) => setJustify(e.target.value)}
            placeholder="Не выбрано"
            options={[
              { label: 'start', value: 'start' },
              { label: 'end', value: 'end' },
              { label: 'center', value: 'center' },
              { label: 'space-around', value: 'space-around' },
              { label: 'space-between', value: 'space-between' },
              { label: 'space-evenly', value: 'space-evenly' },
            ]}
            allowClearButton
          />
        </FormItem>
        <FormItem top="">
          <Checkbox value={noWrap} onChange={(e) => setNoWrap(e.target.checked)}>
            noWrap
          </Checkbox>
        </FormItem>
      </Flex.Item>
    </Flex>
  );
};

<Example />;
```

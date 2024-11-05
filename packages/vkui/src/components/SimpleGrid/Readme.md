Базовый компонент для позиционирования элементов, каждый из которых занимает равное количество пространства.
Построен на базе `grid layout`. Можно указать либо `columns` (тогда пространство будет поделено на заданное количество колонок), либо `minColWidth` (тогда пространство будет распределено с учетом минимальной ширины колонки)

```jsx { "props": { "layout": false, "iframe": false } }
const halsey = {
  overTitle: 'ALBUM',
  title: 'Halsey – Badlands⁣',
  caption: 'Blue Vinyl · EU · 2015⁣',
  description: 'Badlands is the story about dreams and cruel reality...',
};

const lorde = {
  overTitle: 'ALBUM',
  title: 'Lorde – Melodrama',
  caption: 'Blue Vinyl · EU · 2018⁣',
  description:
    'Lorde captures emotions like none other. Her second album is a masterful study of being a young woman, a sleek and humid pop record full of grief and hedonism, crafted with the utmost care and wisdom.',
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
  const [columns, setColumns] = useState(3);
  const [itemsCount, setItemsCount] = useState(5);
  const [margin, setMargin] = useState('none');
  const [complexGap, setComplexGap] = useState(false);
  const [align, setAlign] = useState('stretch');
  const platform = usePlatform();

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
      <div>
        <SimpleGrid
          align={align}
          columns={columns}
          gap={complexGap ? [rowGap, columnGap] : gap}
          margin={margin}
        >
          {Array.from({ length: itemsCount }, (item, index) => {
            return <ContentCard {...(index % 2 === 0 ? lorde : halsey)} />;
          })}
        </SimpleGrid>
      </div>
      <div style={{ minWidth: 200 }}>
        <FormItem top={`item count: ${itemsCount}`}>
          <Slider
            min={1}
            max={20}
            step={1}
            value={itemsCount}
            onChange={(value) => setItemsCount(value)}
          />
        </FormItem>
        <FormItem top={`columns ${columns}`}>
          <Slider
            min={1}
            max={10}
            step={1}
            value={columns}
            onChange={(value) => setColumns(value)}
          />
        </FormItem>
        <FormItem top="margin">
          <RadioGroup>
            <Radio
              name="margin"
              value="none"
              checked={margin === 'none'}
              onChange={(e) => setMargin(e.target.value)}
            >
              none
            </Radio>
            <Radio
              name="margin"
              value="auto"
              checked={margin === 'auto'}
              onChange={(e) => setMargin(e.target.value)}
            >
              auto
            </Radio>
            <Radio
              name="margin"
              value="auto-inline"
              checked={margin === 'auto-inline'}
              onChange={(e) => setMargin(e.target.value)}
            >
              auto-inline
            </Radio>
            <Radio
              name="margin"
              value="auto-block"
              checked={margin === 'auto-block'}
              onChange={(e) => setMargin(e.target.value)}
            >
              auto-block
            </Radio>
          </RadioGroup>
        </FormItem>
        <FormItem top="align">
          <Select
            value={align}
            onChange={(newValue) => setAlign(newValue || 'stretch')}
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
        <Checkbox value={complexGap} onChange={(e) => setComplexGap(e.target.checked)}>
          Complex Gap
        </Checkbox>
        {!complexGap && (
          <FormItem top="gap">
            <Select value={gap} onChange={setGap} options={GapSelectValues} />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="row gap">
            <Select value={rowGap} onChange={setRowGap} options={GapSelectValues} />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="column gap">
            <Select value={columnGap} onChange={setColumnGap} options={GapSelectValues} />
          </FormItem>
        )}
      </div>
    </div>
  );
};

<Example />;
```

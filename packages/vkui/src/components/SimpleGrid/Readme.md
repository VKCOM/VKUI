Базовый компонент для позиционирования элементов, каждый из которых занимает равное количество пространства.
Построен на базе `grid layout`. Можно указать либо `columns` (тогда пространство будет поделено на заданное количество колонок), либо `minColWidth` (тогда пространство будет распределено с учетом минимальной ширины колонки)

```jsx { "props": { "layout": false, "iframe": false } }
const halsey = {
  subtitle: 'ALBUM',
  header: 'Halsey – Badlands⁣',
  caption: 'Blue Vinyl · EU · 2015⁣',
  text: 'Badlands is the story about dreams and cruel reality...',
};

const lorde = {
  subtitle: 'ALBUM',
  header: 'Lorde – Melodrama',
  caption: 'Blue Vinyl · EU · 2018⁣',
  text: 'Lorde captures emotions like none other. Her second album is a masterful study of being a young woman, a sleek and humid pop record full of grief and hedonism, crafted with the utmost care and wisdom.',
};

const Example = () => {
  const [gap, setGap] = useState(8);
  const [rowGap, setRowGap] = useState(8);
  const [columnGap, setColumnGap] = useState(8);
  const [columns, setColumns] = useState(3);
  const [itemsCount, setItemsCount] = useState(5);
  const [margin, setMargin] = useState('none');
  const [complexGap, setComplexGap] = useState(false);
  const [align, setAlign] = useState(undefined);
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
        {!complexGap && (
          <FormItem top="gap">
            <Select
              value={gap}
              onChange={(e) => setGap(Number(e.target.value))}
              options={[
                { label: '4', value: 4 },
                { label: '8', value: 8 },
                { label: '16', value: 16 },
                { label: '24', value: 24 },
                { label: '32', value: 32 },
              ]}
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="row gap">
            <Select
              value={rowGap}
              onChange={(e) => setRowGap(Number(e.target.value))}
              options={[
                { label: '4', value: 4 },
                { label: '8', value: 8 },
                { label: '16', value: 16 },
                { label: '24', value: 24 },
                { label: '32', value: 32 },
              ]}
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="column gap">
            <Select
              value={columnGap}
              onChange={(e) => setColumnGap(Number(e.target.value))}
              options={[
                { label: '4', value: 4 },
                { label: '8', value: 8 },
                { label: '16', value: 16 },
                { label: '24', value: 24 },
                { label: '32', value: 32 },
              ]}
            />
          </FormItem>
        )}
        <Checkbox value={complexGap} onChange={(e) => setComplexGap(e.target.checked)}>
          Complex Gap
        </Checkbox>
      </div>
    </div>
  );
};

<Example />;
```

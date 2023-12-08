Базовый компонент для позиционирования элементов, каждый из которых занимает равное количество пространства.
Построен на базе `grid layout`. Можно указать либо `columns` (тогда пространство будет поделено на заданное количество колонок), либо `minColWidth` (тогда пространство будет распределено с учетом минимальной ширины колонки)

```jsx { "props": { "layout": false, "iframe": false } }
const Example = () => {
  const [gap, setGap] = useState(8);
  const [rowGap, setRowGap] = useState(8);
  const [columnGap, setColumnGap] = useState(8);
  const [columns, setColumns] = useState(3);
  const [itemsCount, setItemsCount] = useState(5);
  const [margin, setMargin] = useState('none');
  const [complexGap, setComplexGap] = useState(false);
  const platform = usePlatform();

  return (
    <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
      <div>
        <SimpleGrid columns={columns} gap={complexGap ? [rowGap, columnGap] : gap} margin={margin}>
          {Array.from({ length: itemsCount }, (item, index) => {
            return (
              <ContentCard
                subtitle="ALBUM"
                header="Halsey – Badlands⁣"
                caption="Blue Vinyl · EU · 2015⁣"
                text="Badlands is the story about dreams and cruel reality..."
              />
            );
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

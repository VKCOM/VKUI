Базовый компонент для позиционирования элементов. Построен на базе `flex layout`.

⚠️ Важно: в версиях браузеров Chrome >= 87, Edge >= 87, Safari >= 14.1, Firefox >= 66, Opera >= 73 при использовании
> свойства gap используется нативное CSS свойство gap. В версиях браузеров ниже используется fallback логика с использованием свойства margin.
>
> В связи с этим рекомендация по коду, если вы поддерживаете браузеры, которые не поддерживают gap на flex контейнерах:
>
> Избегайте использования React.Fragment в качестве children. Например, следующий кейс будет работать некорректно - у него не сработает gap:
>
> ```jsx static
> <Flex gap="m">
>   <React.Fragment>
>     <div>1</div>
>     <div>2</div>
>   </React.Fragment>
> </Flex>
> ```
>
> Нужно, чтобы у Flex было несколько непосредственных потомков:
>
> ```jsx static
> <Flex gap="m">
>   <div>1</div>
>   <div>2</div>
> </Flex>
> ```

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
            title="Для Вас"
            subtitle="Обновлено сегодня"
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
              placeholder="Не выбрано"
              onChange={(_, newValue) => setGap(newValue)}
              options={GapSelectValues}
              allowClearButton
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="row gap">
            <Select
              value={rowGap}
              placeholder="Не выбрано"
              onChange={(_, newValue) => setRowGap(newValue)}
              options={GapSelectValues}
              allowClearButton
            />
          </FormItem>
        )}
        {complexGap && (
          <FormItem top="column gap">
            <Select
              value={columnGap}
              placeholder="Не выбрано"
              onChange={(_, newValue) => setColumnGap(newValue)}
              options={GapSelectValues}
              allowClearButton
            />
          </FormItem>
        )}
        <FormItem top="align">
          <Select
            value={align}
            onChange={(_, newValue) => setAlign(newValue)}
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
            onChange={(_, newValue) => setJustify(newValue)}
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

```jsx
const options = () => {
  let options = [];
  for (let i = 0; i <= 10; i += 2) {
    options.push({ value: `${i / 10}`, label: `${i / 10}` });
  }
  return options;
};

const Example = () => {
  const [value1, setValue1] = useState(24.4234);
  const [value2, setValue2] = useState(0.2);
  const [value3, setValue3] = useState(20);
  const [value4, setValue4] = useState(15);

  return (
    <View activePanel="slider">
      <Panel id="slider">
        <PanelHeader>Slider</PanelHeader>
        <Group>
          <FormItem top="Simple [10, 30]">
            <Slider min={10} max={30} value={Number(value1)} onChange={setValue1} />
          </FormItem>
          <FormItem>
            <Input
              value={String(value1)}
              onChange={(e) => setValue1(e.target.value)}
              type="number"
            />
          </FormItem>
          <FormItem top="Step [0, 1]">
            <Slider step={0.2} min={0} max={1} value={Number(value2)} onChange={setValue2} />
          </FormItem>
          <FormItem>
            <Select
              onChange={(e) => setValue2(e.target.value)}
              value={String(value2)}
              options={options()}
            />
          </FormItem>
          <FormItem top="Uncontrolled">
            <Slider onChange={setValue3} defaultValue={value3} bottom={String(value3)} />
          </FormItem>
          <FormItem top="Disabled">
            <Slider min={10} max={30} defaultValue={value4} onChange={setValue4} disabled />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

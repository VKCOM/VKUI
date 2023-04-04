Компонент для форматирования и анимирования числового значения.

Принимает в качестве `children` неотформатированное число.

```jsx
const Example = () => {
  const [unformattedValue, setUnformattedValue] = React.useState('1000');
  const [animated, setAnimated] = React.useState(false);

  return (
    <View activePanel="value-demo">
      <Panel id="value-demo">
        <PanelHeader>Value</PanelHeader>
        <Group
          header={
            <Header
              indicator={
                <Counter mode="prominent">
                  <Value
                    animated={animated}
                    formatter={(value) => (value >= 1000 ? '999+' : value)}
                  >
                    {unformattedValue}
                  </Value>
                </Counter>
              }
            >
              Внутри Counter
            </Header>
          }
        >
          <Checkbox onChange={(e) => setAnimated(e.target.checked)}>animated</Checkbox>
          <FormItem top="Значение счетчика">
            <Input
              type="number"
              value={unformattedValue}
              onChange={(e) => setUnformattedValue(e.currentTarget.value)}
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

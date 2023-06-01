Отрисовывает [CustomSelect](#!/CustomSelect), если есть мышка, либо [NativeSelect](#!/NativeSelect)

```jsx
const [value, setValue] = React.useState('');
const options = React.useMemo(
  () => [
    { label: 'Мужской', value: 'm' },
    { label: 'Женский', value: 'f' },
    { label: 'Other', value: 'o' },
  ],
  [],
);

<View activePanel="select">
  <Panel id="select">
    <PanelHeader>Select</PanelHeader>
    <Group>
      <Button onClick={() => setValue('')}>reset</Button>
      <FormItem top="Администратор">
        <CustomSelect
          value={value}
          placeholder="Не задан"
          options={options}
          onChange={(event) => {
            console.log('TEST', event.target.value);
            setValue(event.target.value);
          }}
          renderOption={({ option, ...restProps }) => {
            const shouldBeDisabled = option.value === 'f';
            return (
              <CustomSelectOption
                {...restProps}
                description={`"${option.value}"`}
                disabled={shouldBeDisabled}
              />
            );
          }}
        />
      </FormItem>
    </Group>
  </Panel>
</View>;
```

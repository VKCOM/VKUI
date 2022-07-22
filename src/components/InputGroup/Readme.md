Компонент для объединения нескольких полей ввода в группу.

```jsx
function range(start, end) {
  return new Array(end - start + 1).fill(undefined).map((_, i) => i + start);
}

<View activePanel="panel">
  <Panel id="panel">
    <PanelHeader>InputGroup</PanelHeader>
    <Group>
      <FormLayout>
        <FormItem top="Введите ФИО">
          <InputGroup>
            <Input defaultValue="Иванов" />
            <Input defaultValue="Иван" />
            <Input defaultValue="Иванович" />
          </InputGroup>
        </FormItem>
        <FormItem top="Выберите дату рождения">
          <InputGroup mode="horizontal">
            <Select
              placeholder="День"
              options={range(1, 31).map((i) => ({
                label: i,
                value: i,
              }))}
              defaultValue={30}
            />
            <Select
              placeholder="Месяц"
              options={range(1, 12).map((i) => ({
                label: i,
                value: i,
              }))}
              defaultValue={11}
            />
            <Select
              placeholder="Год"
              options={range(1900, 2022).map((i) => ({
                label: i,
                value: i,
              }))}
              defaultValue={1998}
              style={{ minWidth: "auto" }}
            />
          </InputGroup>
        </FormItem>
      </FormLayout>
    </Group>
  </Panel>
</View>;
```

### Компоненты, которые возможно использовать внутри

- Input
- ChipsInput
- Select
- NativeSelect
- CustomSelect
- ChipsSelect
- DatePicker

Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по вертикали или
по горизонтали.

```jsx
const Example = () => {
  const [showDates, setShowDates] = useState(true);
  const toggleDates = (value) => {
    setShowDates(value);
  };

  const onSubmit = () => {
    console.log('Данные формы сохранены!');
  };

  return (
    <View activePanel="FormLayoutGroup">
      <Panel id="FormLayoutGroup">
        <PanelHeader>FormLayoutGroup</PanelHeader>
        <Group>
          <Form onSubmit={onSubmit}>
            <FormLayoutGroup mode="vertical">
              <FormItem top="Имя">
                <Input />
              </FormItem>
              <FormItem top="Фамилия">
                <Input />
              </FormItem>
            </FormLayoutGroup>

            <FormLayoutGroup mode="horizontal" segmented>
              <FormItem top="Имя ящика">
                <Input />
              </FormItem>
              <FormItem>
                <Select
                  options={['@mail.ru', '@internet.ru', '@bk.ru', '@inbox.ru', '@list.ru'].map(
                    (i) => ({
                      label: i,
                      value: i,
                    }),
                  )}
                  defaultValue={'@mail.ru'}
                />
              </FormItem>
            </FormLayoutGroup>

            {!showDates ? (
              <CellButton onClick={() => toggleDates(true)}>Указать даты поездки</CellButton>
            ) : (
              <FormLayoutGroup mode="horizontal" removable onRemove={() => toggleDates(false)}>
                <FormItem bottom="Дата начала поездки">
                  <Input />
                </FormItem>
                <FormItem bottom="Дата конца поездки">
                  <Input />
                </FormItem>
              </FormLayoutGroup>
            )}
            <FormItem>
              <Button type="submit">Сохранить</Button>
            </FormItem>
          </Form>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

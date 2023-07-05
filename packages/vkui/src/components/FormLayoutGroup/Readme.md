Компонент помогает сгруппировать несколько `FormItem` по какому-то признаку, расположив их по вертикали или
по горизонтали.

```jsx
const Example = () => {
  const [showDates, setShowDates] = useState(true);
  const toggleDates = (value) => {
    setShowDates(value);
  };

  return (
    <View activePanel="FormLayoutGroup">
      <Panel id="FormLayoutGroup">
        <PanelHeader>FormLayoutGroup</PanelHeader>
        <Group>
          <FormLayout>
            <FormLayoutGroup mode="vertical">
              <FormItem htmlFor="name" top="Имя">
                <Input id="name" />
              </FormItem>
              <FormItem htmlFor="lastName" top="Фамилия">
                <Input id="lastName" />
              </FormItem>
            </FormLayoutGroup>

            <FormLayoutGroup mode="horizontal" segmented>
              <FormItem htmlFor="mail" top="Имя ящика">
                <Input id="mail" />
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
                <FormItem htmlFor="begin" bottom="Дата начала поездки">
                  <Input id="begin" />
                </FormItem>
                <FormItem htmlFor="end" bottom="Дата конца поездки">
                  <Input id="end" />
                </FormItem>
              </FormLayoutGroup>
            )}
          </FormLayout>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

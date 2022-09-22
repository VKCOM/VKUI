Визуальная имитация компонента [NativeSelect](#!/NativeSelect). У него нет свойства `value`, а `children`
вместо массива `options` принимает любой `ReactNode`, отображая его без изменений. Используется внутри
[CustomSelect](#!/CustomSelect)

```jsx
const Example = () => {
  const [country, setCountry] = React.useState("");
  const [activeView, setActiveView] = React.useState("profile");

  return (
    <Root activeView={activeView}>
      <View activePanel="profile" id="profile">
        <Panel id="profile">
          <PanelHeader>Профиль</PanelHeader>
          <Group>
            <FormItem top="Выберите страну">
              <SelectMimicry
                placeholder="Не выбрана"
                onClick={() => setActiveView("countries")}
              >
                {country}
              </SelectMimicry>
            </FormItem>
            <FormItem top="Выберите город">
              <SelectMimicry placeholder="Не выбран" disabled />
            </FormItem>
          </Group>
        </Panel>
      </View>
      <View activePanel="countries" id="countries">
        <Panel id="countries">
          <PanelHeader>Выбор страны</PanelHeader>
          <Group>
            <List>
              <Cell
                onClick={() => {
                  setCountry("Россия");
                  setActiveView("profile");
                }}
                after={
                  country === "Россия" ? (
                    <Icon24Done fill="var(--vkui--color_icon_accent)" />
                  ) : null
                }
              >
                Россия
              </Cell>
              <Cell
                onClick={() => {
                  setCountry("Италия");
                  setActiveView("profile");
                }}
                after={
                  country === "Италия" ? (
                    <Icon24Done fill="var(--vkui--color_icon_accent)" />
                  ) : null
                }
              >
                Италия
              </Cell>
              <Cell
                onClick={() => {
                  setCountry("Англия");
                  setActiveView("profile");
                }}
                after={
                  country === "Англия" ? (
                    <Icon24Done fill="var(--vkui--color_icon_accent)" />
                  ) : null
                }
              >
                Англия
              </Cell>
            </List>
          </Group>
        </Panel>
      </View>
    </Root>
  );
};

<Example />;
```

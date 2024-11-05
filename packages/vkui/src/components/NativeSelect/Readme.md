Надстройка над `<select />`. Компонент принимает все валидные для этого элемента свойства.

> Важно: для отображения невыбранного состояния нужно использовать `value=null` вместо `undefined`.
>
> `undefined` ипользуется только для неконтролируемого компонента.
>
> Также, чтобы отобразить невыбранное состояние необходимо задать `placeholder`

```jsx
const ControlledSelect = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Group header={<Header>Controlled</Header>}>
      <FormItem
        top="Выберите пол"
        htmlFor="gender-select-id"
        bottom="Пример селекта с возможностью выбрать пол пользователя"
      >
        <NativeSelect
          id="gender-select-id"
          placeholder="Не выбрано"
          value={selectedOption}
          onChange={setSelectedOption}
        >
          <option value="m">Мужской</option>
          <option value="f">Женский</option>
        </NativeSelect>
      </FormItem>
    </Group>
  );
};

const UncontrolledSelect = () => {
  const cityValueToName = {
    'Moscow': 'Москва',
    'Saint-Petersburg': 'Caнкт-Петербург',
  };
  const cities = ['Moscow', 'Saint-Petersburg'];

  const onChange = (newValue) =>
    newValue
      ? console.log('Выбран город', cityValueToName[newValue])
      : console.log('Выбор сброшен');

  return (
    <Group header={<Header>Uncontrolled</Header>}>
      <FormItem
        top="Выберите город"
        htmlFor="city-select-id"
        bottom="Пример селекта с возможностью выбрать город"
      >
        <NativeSelect id="city-select-id" placeholder="Не выбрано" onChange={onChange}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {cityValueToName[city]}
            </option>
          ))}
        </NativeSelect>
      </FormItem>
    </Group>
  );
};

const Example = () => {
  return (
    <View activePanel="native-select">
      <Panel id="native-select">
        <PanelHeader>Native Select</PanelHeader>
        <ControlledSelect />
        <UncontrolledSelect />
      </Panel>
    </View>
  );
};

<Example />;
```

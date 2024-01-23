Множественное добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.
Изменить визуальное оформление значений можно с помощью `renderChip`.

Поле ввода принимает все валидные для `<input>` значения.

Компонент может быть как контролируемым (`value`, `onChange`), так и неконтролируемым (`defaultValue`).

```jsx
const DEFAULT_VALUE = [
  {
    value: '1',
    label: 'Arctic Monkeys',
    src: getAvatarUrl('audio_arctic_monkeys'),
  },
  {
    value: '2',
    label: 'Звери',
    src: getAvatarUrl('audio_leto_zveri'),
  },
  { value: '4', label: 'FACE', src: getAvatarUrl('audio_face') },
  {
    value: '3',
    label: 'Depeche Mode',
    src: getAvatarUrl('audio_depeche_mode'),
  },
  {
    value: '5',
    label: 'Linkin Park',
    src: getAvatarUrl('audio_linkin_park'),
  },
];

const Example = () => {
  const [colors, setColors] = React.useState([
    {
      value: 'navarin',
      label: 'Наваринского пламени с дымом',
    },
    {
      value: 'red',
      label: 'Красный',
    },
    {
      value: 'blue',
      label: 'Синий',
    },
  ]);

  const onClick = (event) => {
    event.stopPropagation();
    setColors([]);
  };

  const onChange = (event) => {
    setColors(event);
  };

  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>ChipsInput</PanelHeader>
        <Group>
          <FormItem htmlFor="color" top="Цвет (контролируемый компонент)">
            <ChipsInput
              id="color"
              placeholder="Введите цвета"
              after={
                <IconButton hoverMode="opacity" label="Очистить поле" onClick={onClick}>
                  <Icon16Clear />
                </IconButton>
              }
              value={colors}
              onChange={onChange}
            />
          </FormItem>
          <FormItem htmlFor="list" top="Список">
            <ChipsInput id="list" placeholder="Введите название и нажмите Enter" />
          </FormItem>
          <FormItem htmlFor="favoriteGroups" top="Любимые группы (неконтролируемый компонент)">
            <ChipsInput
              id="favoriteGroups"
              readOnly
              defaultValue={DEFAULT_VALUE}
              renderChip={({ value, label, ...rest }, { src }) => (
                <Chip
                  value={value}
                  removable={false}
                  before={<Avatar size={20} src={src} aria-hidden />}
                  {...rest}
                >
                  {label}
                </Chip>
              )}
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

return <Example />;
```

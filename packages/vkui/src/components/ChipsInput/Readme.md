Множественное добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`. Изменить визуальное оформление значений можно с помощью `renderChip`.

Поле ввода принимает все валидные для `<input>` значения.

```jsx
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

  const onClick = (e) => {
    e.stopPropagation();
    setColors([]);
  };

  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>ChipsInput</PanelHeader>
        <Group>
          <FormItem htmlFor="color" top="Цвет">
            <ChipsInput
              id="color"
              value={colors}
              after={
                <IconButton hoverMode="opacity" aria-label="Очистить поле" onClick={onClick}>
                  <Icon16Clear />
                </IconButton>
              }
            />
          </FormItem>
          <FormItem htmlFor="list" top="Список">
            <ChipsInput id="list" placeholder="Введите название и нажмите Enter" />
          </FormItem>
          <FormItem htmlFor="favoriteGroups" top="Любимые группы">
            <ChipsInput
              id="favoriteGroups"
              readOnly
              value={[
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
              ]}
              renderChip={({ value, label, option: { src }, ...rest }) => (
                <Chip
                  value={value}
                  removable={false}
                  before={<Avatar size={20} src={src} role="presentation" />}
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

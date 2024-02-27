Множественный выбор и добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.

Изменить визуальное оформление значений можно с помощью `renderChip` и `renderOption`.

Поле ввода принимает все валидные для `<input>` значения.

Компонент может быть как контролируемым (`value`, `onChange`), так и неконтролируемым (`defaultValue`).

```jsx { "props": { "layout": false, "iframe": false } }
const Uncontrolled = () => {
  const groups = React.useMemo(
    () => [
      { value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> },
      {
        value: '1',
        label: 'Arctic Monkeys',
        src: getAvatarUrl('audio_arctic_monkeys'),
      },
      { value: '2', label: 'Звери', disabled: true, src: getAvatarUrl('audio_leto_zveri') },
      { value: '4', label: 'FACE', src: getAvatarUrl('audio_face') },
      {
        value: '3',
        label: 'Depeche Mode',
        src: getAvatarUrl('audio_depeche_mode'),
      },
      { value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park') },
    ],
    [],
  );

  return (
    <FormItem htmlFor="groups" top="Выберите группы">
      <ChipsSelect
        id="groups"
        options={groups}
        placeholder="Не выбраны"
        emptyText="Совсем ничего не найдено"
        selectedBehavior="hide"
        closeAfterSelect={false}
        onChangeStart={(event, option) => {
          if (option.value === 'download') {
            event.preventDefault();
            alert('download!');
          }
        }}
        renderChip={({ value, label, ...rest }, { src, icon }) => (
          <Chip value={value} before={<Avatar size={20} src={src} aria-hidden />} {...rest}>
            {label}
          </Chip>
        )}
        renderOption={(props, { src, value, icon }) => {
          return (
            <CustomSelectOption
              before={
                <Avatar size={20} aria-hidden src={src}>
                  {icon}
                </Avatar>
              }
              {...props}
            />
          );
        }}
      />
    </FormItem>
  );
};

const ControlledCreatable = () => {
  const colors = React.useMemo(
    () => [
      { value: 'red', label: 'Красный' },
      { value: 'blue', label: 'Синий' },
      { value: 'navarin', label: 'Наваринского пламени с дымом' },
    ],
    [],
  );
  const [selectedColors, setSelectedColors] = React.useState(() => colors.slice(0, 2));

  return (
    <FormItem htmlFor="colors" top="Выберите или добавьте цвета">
      <ChipsSelect
        id="colors"
        value={selectedColors}
        onChange={setSelectedColors}
        options={colors}
        placeholder="Не выбраны"
        creatable="Добавить цвет"
      />
    </FormItem>
  );
};

const ControlledCreatableWithoutCreateButton = () => {
  const colors = React.useMemo(
    () => [
      { value: 'red', label: 'Красный' },
      { value: 'blue', label: 'Синий' },
      { value: 'navarin', label: 'Наваринского пламени с дымом' },
    ],
    [],
  );
  const [selectedColorsCopy, setSelectedColorsCopy] = React.useState([]);

  return (
    <FormItem
      htmlFor="colorsWithoutButton"
      top="Выберите или добавьте цвета (creatable без кнопки создания)"
    >
      <ChipsSelect
        id="colorsWithoutButton"
        value={selectedColorsCopy}
        onChange={setSelectedColorsCopy}
        options={colors}
        creatable={true}
        placeholder="Не выбраны"
      />
    </FormItem>
  );
};

const Example = () => {
  return (
    <Group separator="hide">
      <Uncontrolled />
      <ControlledCreatable />
      <ControlledCreatableWithoutCreateButton />
    </Group>
  );
};

<Example />;
```

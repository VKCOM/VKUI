Множественный выбор и добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.

Изменить визуальное оформление значений можно с помощью `renderChip` и `renderOption`.

Поле ввода принимает все валидные для `<input>` значения.

> **Важно**
>
> Это нестабильный компонент. Его API может меняться в рамках одной мажорной версии. [Подробнее про нестабильные компоненты](https://vkcom.github.io/VKUI/#/Unstable).

```jsx { "props": { "layout": false, "iframe": false } }
const colors = [
  { value: 'red', label: 'Красный' },
  { value: 'blue', label: 'Синий' },
  { value: 'navarin', label: 'Наваринского пламени с дымом' },
];
const groups = [
  { value: 'download', label: 'Скачать все и вся!', icon: <Icon12Download /> },
  {
    value: '1',
    label: 'Arctic Monkeys',
    src: getAvatarUrl('audio_arctic_monkeys'),
  },
  { value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri') },
  { value: '4', label: 'FACE', src: getAvatarUrl('audio_face') },
  {
    value: '3',
    label: 'Depeche Mode',
    src: getAvatarUrl('audio_depeche_mode'),
  },
  { value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park') },
];

const Example = () => {
  const [selectedGroups, setSelectedGroups] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState(colors.slice(0, 2));
  const [selectedColorsCopy, setSelectedColorsCopy] = React.useState([]);

  const groupsChipsProps = {
    value: selectedGroups,
    onChange: setSelectedGroups,
    options: groups,
    placeholder: 'Не выбраны',
    emptyText: 'Совсем ничего не найдено',
  };

  const colorsChipsProps = {
    value: selectedColors,
    onChange: setSelectedColors,
    options: colors,
    placeholder: 'Не выбраны',
    creatable: true,
  };

  const colorsCopyChipsProps = {
    value: selectedColorsCopy,
    onChange: setSelectedColorsCopy,
    options: colors,
    placeholder: 'Не выбраны',
    creatable: true,
    creatableText: '',
  };

  return (
    <Group separator="hide">
      <FormItem htmlFor="groups" top="Выберите группы">
        <ChipsSelect
          id="groups"
          {...groupsChipsProps}
          showSelected={false}
          closeAfterSelect={false}
          onChangeStart={(e, option) => {
            if (option.value === 'download') {
              e.preventDefault();
              alert('download!');
            }
          }}
          renderChip={({ value, label, option: { src, icon }, ...rest }) => (
            <Chip value={value} before={<Avatar size={20} src={src} />} {...rest}>
              {label}
            </Chip>
          )}
          renderOption={({ option: { src, value, icon }, ...otherProps }) => {
            return (
              <CustomSelectOption
                before={icon ? <Avatar size={20}>{icon}</Avatar> : <Avatar size={20} src={src} />}
                {...otherProps}
              />
            );
          }}
        />
      </FormItem>
      <FormItem htmlFor="colors" top="Выберите или добавьте цвета">
        <ChipsSelect id="colors" {...colorsChipsProps} />
      </FormItem>
      <FormItem
        htmlFor="colorsWithoutButton"
        top="Выберите или добавьте цвета (creatable без кнопки создания)"
      >
        <ChipsSelect id="colorsWithoutButton" {...colorsCopyChipsProps} />
      </FormItem>
    </Group>
  );
};

<Example />;
```

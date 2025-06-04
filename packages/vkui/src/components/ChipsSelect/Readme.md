Множественный выбор и добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.

Изменить визуальное оформление значений можно с помощью `renderChip` и `renderOption`.

Поле ввода принимает все валидные для `<input>` значения.

Компонент может быть как контролируемым (`value`, `onChange`), так и неконтролируемым (`defaultValue`).

## Цифровая доступность (a11y)

Для корректной работы со скринридерами компонент `ChipsSelect` должен быть связан с текстовым описанием. Доступно несколько способов:

```jsx static
// Компонент вложен в `<label>`

<label>
  Список исполнителей
  <ChipsSelect options={colors} placeholder="Введите название"/>
</label>

// Связывание через `<label>` с `htmlFor`
<label htmlFor="chips">Список исполнителей</label>
<ChipsSelect options={colors} placeholder="Введите название" id="chips"/>

// Связывание с использование компонента `FormItem`
<FormItem top="Список исполнителей" htmlFor="chips">
  <ChipsSelect options={colors} placeholder="Введите название" id="chips"/>
</FormItem>

// Указание `label` через `aria-label`
<ChipsSelect options={colors} placeholder="Введите название" aria-label="Список исполнителей"/>

// Связывание через `aria-labelledby`
<label htmlFor="chips">Список исполнителей</label>
<ChipsSelect options={colors} placeholder="Введите название" aria-labelledby="chips"/>
```

### Описание списка выбранных опций

Используйте свойство `chipsListLabel` для описания списка выбранных опций, если это необходимо.

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
        allowClearButton={true}
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
        allowClearButton={true}
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

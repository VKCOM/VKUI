Множественное добавление значений. Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.
Изменить визуальное оформление значений можно с помощью `renderChip`.

Поле ввода принимает все валидные для `<input>` значения.

Компонент может быть как контролируемым (`value`, `onChange`), так и неконтролируемым (`defaultValue`).

## Цифровая доступность (a11y)

Для корректной работы со скринридерами компонент `ChipsInput` должен быть связан с текстовым описанием. Доступно несколько способов:

```jsx static
// Компонент вложен в `<label>`
<label>
  Список исполнителей
  <ChipsInput placeholder="Введите название" />
</label>

// Связывание через `<label>` с `htmlFor`
<label htmlFor="chips">Список исполнителей</label>
<ChipsInput placeholder="Введите название" id="chips" />

// Связывание с использование компонента `FormItem`
<FormItem top="Список исполнителей" htmlFor="chips">
  <ChipsInput placeholder="Введите название" id="chips" />
</FormItem>

// Указание `label` через `aria-label`
<ChipsInput placeholder="Введите название" aria-label="Список исполнителей" />

// Связывание через `aria-labelledby`
<label htmlFor="chips">Список исполнителей</label>
<ChipsInput placeholder="Введите название" aria-labelledby="chips" />
```

### Описание списка выбранных опций

Используйте свойство `chipsListLabel` для описания списка выбранных опций, если это необходимо.

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

const ClearButton = ({ onClick, ...restProps }) => {
  return (
    <IconButton hoverMode="opacity" label="Очистить поле" onClick={onClick} {...restProps}>
      <Icon16Clear />
    </IconButton>
  );
};

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
              aria-label="Цвет (контролируемый компонент)"
              placeholder="Введите цвета"
              ClearButton={ClearButton}
              allowClearButton
              value={colors}
              onChange={onChange}
            />
          </FormItem>
          <FormItem htmlFor="list" top="Список">
            <ChipsInput
              id="list"
              aria-label="Список"
              placeholder="Введите название и нажмите Enter"
              allowClearButton={true}
            />
          </FormItem>
          <FormItem htmlFor="favoriteGroups" top="Любимые группы (неконтролируемый компонент)">
            <ChipsInput
              id="favoriteGroups"
              aria-label="Любимые группы"
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

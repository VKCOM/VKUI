Множественный выбор и добавление значений.  
Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.  
Изменить визуальное оформление значений можно с помощью `renderChip` и `renderOption`.  
Поле ввода принимает все валидные для `<input>` значения.

```jsx
const colors = [{value: '1', label: 'Красный'}, {value: '2', label: 'Синий'}];
const groups = [{value: '1', label: 'Arctic Monkeys', src: getAvatarUrl('audio_arctic_monkeys')}, {value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri')}, {value: '4', label: 'FACE', src: getAvatarUrl('audio_face')}, {value: '3', label: 'Depeche Mode', src: getAvatarUrl('audio_depeche_mode')}, {value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park')}]

const Example = () => {
  const [selectedGroups, setSelectedGroups] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([{value: '1', label: 'Красный'}]);
  
  const groupsChipsProps = {
    value: selectedGroups,
    onChange: setSelectedGroups,
    options: groups,
    placeholder:"Не выбраны",
    emptyText: 'Ничего не найдено',
  }

  const colorsChipsProps = {
    value: selectedColors,
    onChange: setSelectedColors,
    options: colors,
    top:"Выберите или добавьте цвета",
    placeholder:"Не выбраны",
    creatable: true,
    creatableText: 'Создать значение'
  } 

  return (
    <View activePanel="profile" id="profile">
      <Panel id="profile">
        <PanelHeader>
          Предпочтения
        </PanelHeader>
        <Group>
          <FormItem top="Выберите группы">
            <ChipsSelect
              {...groupsChipsProps}
              showSelected={false}
              onClick={() => setActiveView('groups')}
              renderChip={({ value, label, option: { src }, ...rest }) => (
                <Chip
                  value={value}
                  before={<Avatar size={20} src={src} />}
                  {...rest}
                >
                  {label}
                </Chip>
              )}
              renderOption={({ label, option: { src }, ...otherProps }) => {
                return (
                  <CustomSelectOption
                    before={<Avatar size={20} src={src} />}
                    {...otherProps}
                  />
                  );
              }}
            />
          </FormItem>
          <FormItem top="Выберите или добавьте цвета">
            <ChipsSelect {...colorsChipsProps}/>
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
}

<Example />
```


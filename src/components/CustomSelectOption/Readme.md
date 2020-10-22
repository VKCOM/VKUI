Унивирсальный компонент для отрисовки option в кастомных селектах. 
Используется внутри [CustomSelect](#!/CustomSelect), [ChipsSelect](#!/ChipsSelect).

```jsx
const groups = [{value: '1', label: 'Arctic Monkeys', src: getAvatarUrl('audio_arctic_monkeys')}, {value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri')}, {value: '4', label: 'FACE', src: getAvatarUrl('audio_face')}, {value: '3', label: 'Depeche Mode', src: getAvatarUrl('audio_depeche_mode')}, {value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park')}]

const Example = () => {
const [selectedGroups, setSelectedGroups] = React.useState([]);
const [selectedGroup, setSelectedGroup] = React.useState(groups[0].value);

  return (
    <View activePanel="сustomSelect">
      <Panel id="сustomSelect">
        <PanelHeader>
          CustomSelectOption
        </PanelHeader>
        <Group>
          <FormItem top="CustomSelect">
            <CustomSelect
              placeholder="Не выбрано"
              options={groups}
              value={selectedGroup}
              onChange={(option) => setSelectedGroup(option.value)}
              renderOption={({ option: { src }, ...otherProps }) => {
                return (
                  <CustomSelectOption
                    before={<Avatar size={20} src={src} />}
                    {...otherProps}
                  />
                );
              }}
            />
          </FormItem>
          <FormItem top="ChipsSelect">
            <ChipsSelect
              value={selectedGroups}
              onChange={setSelectedGroups}
              options={groups}
              placeholder="Не выбраны"
              emptyText="Ничего не найдено"
              renderOption={({ option: { src }, ...otherProps }) => {
                  return (
                    <CustomSelectOption
                      before={<Avatar size={20} src={src} />}
                      {...otherProps}
                    />
                  );
              }}
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />
```

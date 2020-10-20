Унивирсальный комппонент option для кастомных селектов. 
Используется внутри [CustomSelect](https://vkcom.github.io/vkui-styleguide/#!/CustomSelect), [ChipsSelect](https://vkcom.github.io/vkui-styleguide/#!/ChipsSelect).

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
        <FormLayout>
          <FormItem top="CustomSelect">
            <CustomSelect
              placeholder="Не выбрано"
              options={groups}
              value={selectedGroup}
              onChange={(option) => setSelectedGroup(option.value)}
              renderOption={({ index, label, option: { src }, ...otherProps }) => {
                return (
                  <CustomSelectOption
                    key={index}
                    before={<Avatar size={20} src={src} />}
                    label={label}
                    index={index}
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
              renderOption={({ index, label, option: { src }, ...otherProps }) => {
                  return (
                    <CustomSelectOption
                      key={index}
                      before={<Avatar size={20} src={src} />}
                      label={label}
                      index={index}
                      {...otherProps}
                    />
                  );
              }}
            />
          </FormItem>
        </FormLayout>
      </Panel>
    </View>
  );
};

<Example />
```

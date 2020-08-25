Ассинхронная версия компонента [ChipsSelect](https://vkcom.github.io/vkui-styleguide/#!/ChipsSelelct) с возможнотью асинхронной дозагрузки данных на основе введенного значения в input

```jsx
const colors = [{value: '1', label: 'Красный'}, {value: '2', label: 'Синий'}];
const groups = [{value: '1', label: 'Arctic Monkeys', src: getAvatarUrl('audio_arctic_monkeys')}, {value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri')}, {value: '4', label: 'FACE', src: getAvatarUrl('audio_face')}, {value: '3', label: 'Depeche Mode', src: getAvatarUrl('audio_depeche_mode')}, {value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park')}];

const Example = () => {
  const [activeView, setActiveView] = React.useState('profile');
  const [selectedGroups, setSelectedGroups] = React.useState([]);
  const [selectedColors, setSelectedColors] = React.useState([]);
  
  const groupsChipsProps = {
    value: selectedGroups,
    onChange: setSelectedGroups,
    options: groups,
    placeholder:"Не выбраны",
  }

  const colorsChipsProps = {
    value: selectedColors,
    onChange: setSelectedColors,
    options: colors,
    top:"Выберите или добавьте цвета",
    placeholder:"Не выбраны",
    creatable: true
  } 


  return (
      <Root activeView={activeView}>
        <View activePanel="profile" id="profile">
          <Panel id="profile">
            <PanelHeader>
              Предпочтения
            </PanelHeader>
            <FormLayout>
              <FormLayoutGroup top="Выберите группы">
                <AsyncChipsSelect
                  {...groupsChipsProps}
                  dataSource={(str) => {
                    return new window.Promise((resolve) => {
                      resolve(groupsChipsProps.options.filter(({ label }) => (
                        label.toLowerCase().startsWith(str.toLowerCase())
                      )));
                    });
                  }}
                  onClick={() => setActiveView('colors')}
                  renderChip={({ value, option: { src }, ...rest }) => (
                      <Chip
                        key={value}
                        value={value}
                        before={<Avatar size={20} src={src} />}
                        {...rest}
                      />
                  )}
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
              </FormLayoutGroup>
              <FormLayoutGroup top="Выберите или добавьте цвета">
                <AsyncChipsSelect
                  {...colorsChipsProps}
                  cache={true}
                  dataSource={(str) => {
                    return new window.Promise((resolve) => {
                      setTimeout(() => {
                        resolve([{ value: '1', label: 'Розовый' }, { value: '2', label: str }]);
                      }, 1000);
                    });
                  }}
                  onClick={() => setActiveView('colors')}
                />
              </FormLayoutGroup>
            </FormLayout>
          </Panel>
        </View>
      </Root>
  );
}

<Example />
```


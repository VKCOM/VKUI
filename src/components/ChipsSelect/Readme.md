Множественный выбор и добавление значений.  
Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.  
Изменить визуальное оформление значений можно с помощью `renderChip`.  
Поле ввода принимает все валидные для `<input>` значения.

```jsx
const colors = [{value: '1', label: 'Красный'}, {value: '2', label: 'Синий'}];
const groups = [{value: '1', label: 'Arctic Monkeys', src: getAvatarUrl('audio_arctic_monkeys')}, {value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri')}, {value: '4', label: 'FACE', src: getAvatarUrl('audio_face')}, {value: '3', label: 'Depeche Mode', src: getAvatarUrl('audio_depeche_mode')}, {value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park')}]

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
                <ChipsSelect {...groupsChipsProps} onClick={() => setActiveView('groups')}/>
              </FormLayoutGroup>
              <FormLayoutGroup top="Выберите или добавьте цвета">
                <ChipsSelect {...colorsChipsProps} onClick={() => setActiveView('colors')}/>
              </FormLayoutGroup>
            </FormLayout>
          </Panel>
        </View>
        <View activePanel="groups" id="groups">
          <Panel id="groups">
            <PanelHeader>
              Выбор групп
            </PanelHeader>
            <Group>
              <MobileChipsSelect {...groupsChipsProps} onClick={() => setActiveView('profile')} />
            </Group>
          </Panel>
        </View>
        <View activePanel="colors" id="colors">
          <Panel id="colors">
            <PanelHeader>
              Выбор и добавление цветов
            </PanelHeader>
            <Group>
              <MobileChipsSelect {...colorsChipsProps} onClick={() => setActiveView('profile')} />
            </Group>
          </Panel>
        </View>
      </Root>
  );
}

<Example />
```


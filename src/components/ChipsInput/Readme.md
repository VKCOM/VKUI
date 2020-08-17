Множественное добавление значений.  
Поддерживаются любые модели данных с помощью пропсов `getOptionValue`, `getOptionLabel` и `getNewOptionData`.  
Изменить визуальное оформление значений можно с помощью `renderChip`.  
Поле ввода принимает все валидные для `<input>` значения.

```jsx
  <View activePanel="panel">
    <Panel id="panel">
      <PanelHeader>
        ChipsInput
      </PanelHeader>
      <FormLayout>
        <FormLayoutGroup top="Цвет">
          <ChipsInput value={[{value: 'red', label: 'Красный'}, {value: 'blue', label: 'Синий'}]}/>
        </FormLayoutGroup>
        <FormLayoutGroup top="Список">
          <ChipsInput placeholder={"Введите название и нажмите Enter"}/>
        </FormLayoutGroup>      
        <FormLayoutGroup top="Любимые группы">
          <ChipsInput readOnly
            value={[{value: '1', label: 'Arctic Monkeys', src: getAvatarUrl('audio_arctic_monkeys')}, {value: '2', label: 'Звери', src: getAvatarUrl('audio_leto_zveri')}, {value: '4', label: 'FACE', src: getAvatarUrl('audio_face')}, {value: '3', label: 'Depeche Mode', src: getAvatarUrl('audio_depeche_mode')}, {value: '5', label: 'Linkin Park', src: getAvatarUrl('audio_linkin_park')}]}
            renderChip={({ value, option: { src }, ...rest }) => (
                <Chip key={value}
                    value={value}
                    removable={false}
                    before={<Avatar size={20} src={src} />}
                    {...rest}
                />
            )}
          />
        </FormLayoutGroup>
      </FormLayout>
    </Panel>
  </View>
```

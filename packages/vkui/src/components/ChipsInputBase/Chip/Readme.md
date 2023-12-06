Представляет собой маленький кусочек информации. С помощью свойств `removable` и `onRemove` можно
управлять удалением. Используется внутри [ChipsInput](#!/ChipsInput) и [ChipsSelect](#!/ChipsSelect).

```jsx
const Example = () => {
  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>Chip</PanelHeader>
        <Group>
          <FormItem htmlFor="favoriteGroups" top="Любимые группы">
            <ChipsInput
              id="favoriteGroups"
              defaultValue={[
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
              ]}
              renderChip={({ value, label, option: { src }, ...rest }) => (
                <Chip
                  key={value}
                  value={value}
                  removable={false}
                  before={<Avatar size={20} src={src} />}
                  {...rest}
                >
                  {label}
                </Chip>
              )}
            />
          </FormItem>
          <FormItem htmlFor="colors" top="Выберите или добавьте цвета">
            <ChipsSelect
              id="colors"
              defaultValue={[{ value: '1', label: 'Красный' }]}
              option={[
                { value: '1', label: 'Красный' },
                { value: '2', label: 'Синий' },
              ]}
              top="Выберите или добавьте цвета"
              placeholder="Не выбраны"
              creatable="Создать значение"
            />
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

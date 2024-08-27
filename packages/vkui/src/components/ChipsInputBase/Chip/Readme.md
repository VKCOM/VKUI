Представляет собой маленький кусочек информации. С помощью свойств `removable` и `onRemove` можно
управлять удалением. Используется внутри [ChipsInput](#!/ChipsInput) и [ChipsSelect](#!/ChipsSelect).

```jsx
const GROUPS = [
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

const Example = () => {
  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>Chip</PanelHeader>
        <Group>
          <Flex margin="auto" gap="m">
            {GROUPS.map((group) => (
              <Chip
                value={group.value}
                after={<Avatar size={20} src={group.src} aria-hidden />}
                onRemove={(_, value) => alert(`Удаляем ${value}`)}
              >
                {group.label}
              </Chip>
            ))}
          </Flex>
        </Group>
      </Panel>
    </View>
  );
};

<Example />;
```

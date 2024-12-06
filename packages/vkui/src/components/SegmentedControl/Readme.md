Горизонтальный контрол, который позволяет выбрать одну опцию-сегмент из представленного списка.

Для чего может быть нужен:

- для навигации — как аналог `<Tabs/>`;
- в формах — как аналог `<RadioGroup/>`.

Сегменты, как кнопки, могут содержать текст и/или иконки.

Сегментов не должно быть много: чем они больше — тем проще между ними переключаться. [Apple ограничивает количество сегментов на iPhone пятью](https://developer.apple.com/design/human-interface-guidelines/ios/controls/segmented-controls/).

```jsx
const [reportType, changeReportType] = React.useState('idea');
const [selectedSex, changeSelectedSex] = React.useState();

<View activePanel="progress">
  <Panel id="progress">
    <PanelHeader>SegmentedControl</PanelHeader>
    <Group header={<Header subtitle="Режим просмотра">Навигация</Header>}>
      <Div>
        <SegmentedControl
          options={[
            {
              'label': <Icon24List />,
              'value': 'list',
              'aria-label': 'Список',
            },
            {
              'label': <Icon16GridOfFour />,
              'value': 'grid',
              'aria-label': 'Плитки',
            },
          ]}
        />
      </Div>
    </Group>
    <Group header={<Header>Форма</Header>}>
      <FormItem top="Тип репорта" bottom={`Controlled; name="report-type", size="m"`}>
        <SegmentedControl
          size="m"
          name="report-type"
          value={reportType}
          onChange={(value) => changeReportType(value)}
          options={[
            {
              label: 'Баг',
              value: 'bug',
            },
            {
              label: 'Идея',
              value: 'idea',
            },
            {
              label: 'Другое',
              value: 'other',
            },
          ]}
        />
      </FormItem>
      <FormItem
        top={<React.Fragment>Пол{selectedSex && <span>: {selectedSex}</span>}</React.Fragment>}
        bottom={`Uncontrolled; name="sex", defaultValue="none", size="l"`}
      >
        <SegmentedControl
          name="sex"
          defaultValue="none"
          onChange={(value) => changeSelectedSex(value)}
          options={[
            {
              label: 'Женский',
              value: 'female',
            },
            {
              label: 'Мужской',
              value: 'male',
            },
            {
              label: 'Любой',
              value: 'none',
            },
          ]}
        />
      </FormItem>
    </Group>
  </Panel>
</View>;
```

## Использование в качестве навигации по табам

Компонент `SegmentedControl` может использоваться для создания навигации по табам. В этом случае необходимо:

1. Установить `role="tablist"` для контейнера с табами
2. Для каждой опции указать:
   - `id`- уникальный идентификатор таба
   - `aria-controls`- идентификатор панели с контентом, которым управляет таб
3. Для панелей с контентом указать:
   - `role="tabpanel"`- роль панели с контентом
   - `aria-labelledby`- идентификатор таба, который управляет этой панелью
   - `tabIndex={0}`- чтобы сделать панель фокусируемой
   - `id`- идентификатор панели, который соответствует `aria-controls` в табе

Это обеспечит правильную семантику и доступность компонента для пользователей скринридеров.

Пример использования:

```jsx
const Example = () => {
  const [selected, setSelected] = React.useState('news');

  return (
    <View activePanel="panel">
      <Panel id="panel">
        <PanelHeader>SegmentedControl</PanelHeader>

        <SegmentedControl
          role="tablist"
          value={selected}
          onChange={(value) => setSelected(value)}
          options={[
            {
              'label': 'Новости',
              'value': 'news',
              'aria-controls': 'tab-content-news',
              'id': 'tab-news',
            },
            {
              'label': 'Интересное',
              'value': 'recommendations',
              'aria-controls': 'tab-content-recommendations',
              'id': 'tab-recommendations',
            },
          ]}
        />

        {selected === 'news' && (
          <Group id="tab-content-news" aria-labelledby="tab-news" role="tabpanel" tabIndex={0}>
            <Div>Контент новостей</Div>
          </Group>
        )}
        {selected === 'recommendations' && (
          <Group
            id="tab-content-recommendations"
            aria-labelledby="tab-recommendations"
            role="tabpanel"
            tabIndex={0}
          >
            <Div>Контент рекомендаций</Div>
          </Group>
        )}
      </Panel>
    </View>
  );
};

<Example />;
```

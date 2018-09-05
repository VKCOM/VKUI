Информация из этого раздела поможет переехать с 1-й версии библиотеки на 2-ю.

### ScrollView => Panel
Тут все просто, мы решили, что `ScrollView` – не самое подходящее название,
`Panel` гораздо лучше отражает назначение этого компонента

### `PanelHeader`. Свойства `header` у `ScrollView` больше нет
Мы давно хотели избавить пользователей от декларации шапки в виде объекта, да еще и не в коде компонента панели. О чем речь?

Вот так было раньше:

```jsx static
<ScrollView header={{ title: 'Some Panel Title', left: '...', right: '...' }}>
  <SomePanel />
</ScrollView>
```

Проблема в том, что логика отображения панели "размазывается" в двух компонентах: там, где декларируется `ScrollView` и
непосредственно в `SomePanel`.

Как сейчас:

```jsx static
// App.js

<Panel>
  <SomePanel />
</Panel>

// SomePanel.js
...
<PanelHeader left="..." right="...">
  Some Panel Title
</PanelHeader>
...
```

`PanelHeader` можно располагать где угодно внутри `Panel`, он все равно будет отрисовываться сверху
(привет, `React.createPortal`)

### Кнопки в `PanelHeader`
Слегка поменялась логика отрисовки кнопок слева в `PanelHeader`

Как было раньше:

```jsx static
<ScrollView header={{
  left: <HeaderButton>{osname === IOS ? 'Назад' : <Icon24Back />}</HeaderButton>
  icon: osname === IOS && <HeaderButton><Icon28ChevronBack /></HeaderButton>
}} />
```

Как сейчас:

```jsx static
<PanelHeader
  left={<HeaderButton>{osname === IOS ? <Icon28Chevron_back /> : <Icon24Back />}</HeaderButton>}
  addon={<HeaderButton>Назад</HeaderButton>}
>
  Some Panel Title
</PanelHeader>
```

### Новый дизайн
Компоненты `Input, Select, Button, Textarea, Radio, Checkbox, FormLayout` переехали на новый дизайн, который
раньше включался свойством `v="new"`.

### Иконки
Иконки больше не являются частью VKUI. Теперь это самостоятельный пакет `@vkontakte/icons`.
Вся информация об иконках содержится [тут](https://vkcom.github.io/icons/).

### `FormLayout`
Свойство `allowSubmit` больше не используется. Submit формы будет только в том случае, если передан `onSubmit`.
Разработчики должны сами управлять такими сценариями, как `preventDefault` в переданном обработчике.

### `Tappable`
Этот компонент используется почти во всех "кликабельных" компонентах. Раньше, для того
чтобы заставить `Tappable` реагировать на прикосновения, ему обязательно нужно было передавать `onClick`. В некоторых
случаях это приводило к навешиванию пустых обработчиков. Сейчас эффект нажатия будет работать всегда по-умолчанию.
Для отключения эффекта нужно передавать свойство `disabled`, по аналогии с `Input, Button, Radio`.

### Удалены ненужные компоненты
* `Pane` – оказалось, что этот компонент лишний и может запутать разработчиков. Чтобы понять, как жить без него,
достаточно полистать доку. Практически во всех случаях можно обойтись комбинацией `Div` и `Group`.

* `Flex` – не имеет отношения к VKUI.

### View
Свойство `header` теперь по-дефолту `true`

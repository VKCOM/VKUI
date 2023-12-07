> Документацию по миграции с **v4** на **v5** можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v5.0.1).

## Обновление React

- Минимальная поддерживаемая версия **React** увеличена до `v18.2.0`.

## Поддержка браузеров

Библиотека по умолчанию компилируется в [ES2015 (ES6)](https://262.ecma-international.org/6.0/).
Список поддерживаемых браузеров находится в [.browserslistrc](https://github.com/VKCOM/VKUI/blob/v6.0.0/.browserslistrc).

> В VKUI есть [специальная сборка](https://vkcom.github.io/VKUI/#/CSS%20Modules) в ESNext, которая
> позволяет уменьшить размер вашего приложения.

## Перечисления заменены на объекты

Следующие перечисления были заменены на [объекты](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums):

- `Platform`
- `Appearance`
- `SizeType`
- `ViewWidth`
- `ViewHeight`

## Удалили интеграцию с [VK Mini Apps](https://vk.com/miniapps) и [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge)

> **Note**
>
> Этот Breaking Change предназначен для разработчиков мини-приложений ВКонтакте. Если вы таким
> не являетесь, то смело пропускайте эту секцию.

Изначально, **VKUI** создавался как инструмент для создания клиентской части мини-приложений [ВКонтакте](https://vk.com).
Сейчас **VKUI** уже больше чем просто мини-приложения. Разработчики используют библиотеку, чтобы
создавать полноценные независимые приложения, которые никак не связаны с [VK Mini Apps](https://vk.com/miniapps).

В связи с этим мы отказались от завязки на мини-приложения [ВКонтакте](https://vk.com). Для этого мы
удалили интеграцию с библиотекой [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), а
также убрали упоминания о [VK Mini Apps](https://vk.com/miniapps) в документации. Это привнесло в
библиотеку ряд изменений касающихся API.

### Конфигурация VKUI

Из [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge) мы доставали несколько настроек:

1. тему (`light` или `dark`);
2. параметры адаптивности;
3. размеры безопасных зон (в CSS это `--safe-area-insets-*`);
4. открыто веб-вью или нет.

Первые три пункта перенесли в библиотеку [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

Помимо **VK Bridge**, была завязка на мини-приложения в свойстве `webviewType` за счёт свойства
`"vkapps"`. Теперь это свойство `hasCustomPanelHeaderAfter`, который по умолчанию `false`.

Бойлерплейт для **VK Mini Apps** представлен на странице [Интеграция с VK Mini Apps](https://vkcom.github.io/VKUI/#/integrations-vk-mini-apps)
под заголовком **Конфигурация VKUI**.

### ~~`withInsets`~~

- Используйте вместо него хук `useInsets()` из [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

### ~~`HasInsets`~~

- Используйте вместо него `SafeAreaInsets`.
- Если вы используете [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), то
  вы можете объявить тип у себя следующим образом:

```ts static
import type { Insets } form '@vkontakte/vk-brige';

interface HasInsets {
  insets?: Partial<Insets>;
}
```

<br/><br/>

## CSS Logical для [специальной сборки](https://vkcom.github.io/VKUI/#/CSS%20Modules)

> **Note**
>
> Данное изменение не влияет на обычную сборку

- Мы начинаем использовать [логические css свойства](https://www.w3.org/TR/css-logical-1/) вместо
  физических. Если вам требуется [широкая браузерная поддержка](https://caniuse.com/css-logical-props),
  рекомендуем воспользоваться [postcss-logical](https://www.npmjs.com/package/postcss-logical).

<br/><br/>

## [`Accordion`](#/Accordion)

- `Accordion` избавился от нативного элемента `detail`, теперь для компонента стали доступны анимации.

- На замену свойств `open` и `onToggle` пришли свойства `expanded`, `defaultExpanded`, `onChange`.

```diff
<Accordion
- open={openId === id}
+ expanded={openId === id}

- onToggle={(e) => e.target.open && setOpenId(id)}
+ onChange={(open) => open && setOpenId(id)}
>
```

Контент должен быть обернут в `<Accordion.Content>`.

```diff
<Accordion expanded={open}>
  <Accordion.Summary>Title</Accordion.Summary>
+   <Accordion.Content>
      <Div>Content</Div>
+   </Accordion.Content>
</Accordion>
```

<br/><br/>

## [`ActionSheet`](#/ActionSheet)

- Свойство `toggleRef` теперь обязательно.
- Свойство `popupDirection` удалено, используйте `placement`.

```diff
- <ActionSheet popupDirection="top">
+ <ActionSheet toggleRef={getRef} placement="top">
  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
 </ActionSheet>
```

<br/><br/>

## [`ActionSheetItem`](#/ActionSheetItem)

- Свойство `autoClose` удалено, теперь это поведение по умолчанию.

```diff
 <ActionSheet>
-  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
+  <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
-  <ActionSheetItem autoClose={false}>Закрепить запись</ActionSheetItem>
+  <ActionSheetItem autoCloseDisabled>Закрепить запись</ActionSheetItem>
 </ActionSheet>
```

<br/><br/>

## [`Alert`](#/Alert)

- Свойство `autoClose` удалено, теперь это поведение по-умолчанию.

```diff
 <Alert
   actions={[
     {
       title: "Лишить права",
       mode: "destructive",
-      autoClose: false,
+      autoCloseDisabled: true,
     },
     {
       title: "Отмена",
-      autoClose: true,
       mode: "cancel",
     },
   ]}
   header="Подтвердите действие"
   text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
 />
```

<br/><br/>

## [`AppearanceProvider`](#/AppearanceProvider)

- По аналогии с остальными провайдерами свойство `appearance` заменено на `value`.

```diff
- <AppearanceProvider appearance={appearance}>...</AppearanceProvider>
+ <AppearanceProvider value={appearance}>...</AppearanceProvider>
```

<br/><br/>

## [`Banner`](#/Banner)

- Убрали установку внешних отступов. Теперь, при необходимости, следует их добавлять самостоятельно.
  Соответственно, свойство `noPadding` удалёно.

```diff
- <Banner noPadding />
+ <Banner />
```

- Внешний отступ можно задать через layout-компонент [Div](#/Div).

```diff
- <Banner />
+ <Div>
+  <Banner />
+ </Div>
```

<br/><br/>

## [`Calendar`](#/Calendar)

- Изменены a11y-свойства

```diff
<Calendar
- prevMonthAriaLabel=""
+ prevMonthLabel=""

- nextMonthAriaLabel=""
+ nextMonthLabel=""

- changeDayAriaLabel=""
+ changeDayLabel=""

- changeMonthAriaLabel=""
+ changeMonthLabel=""

- changeYearAriaLabel=""
+ changeYearLabel=""

- changeMinutesAriaLabel=""
+ changeMinutesLabel=""

- changeHoursAriaLabel=""
+ changeHoursLabel=""
/>
```

<br/><br/>

## [`CalendarRange`](#/CalendarRange)

- Изменены a11y-свойства

```diff
<CalendarRange
- prevMonthAriaLabel=""
+ prevMonthLabel=""

- nextMonthAriaLabel=""
+ nextMonthLabel=""

- changeDayAriaLabel=""
+ changeDayLabel=""

- changeMonthAriaLabel=""
+ changeMonthLabel=""

- changeYearAriaLabel=""
+ changeYearLabel=""
/>
```

<br/><br/>

## [`ConfigProvider`](#/ConfigProvider)

- `hasCustomPanelHeaderAfter` теперь по умолчанию `false`.
- <!--чтобы сработало перечёркивание-->~~`onDetectAppearanceByBridge`~~ удален, используйте хук `useAppearance()` из библиотеки
  [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react), если вам
  нужно определять, что `appearance` был передан через VK Bridge.
- <!--чтобы сработало перечёркивание-->~~`webviewType`~~ заменён на `hasCustomPanelHeaderAfter`.

  ```diff
  <ConfigProvider
  -  webviewType={WebviewType.INTERNAL}
  +  hasCustomPanelHeaderAfter={false}
  />
  ```

  ```diff
  <ConfigProvider
  -  webviewType={WebviewType.VKAPPS}
  +  hasCustomPanelHeaderAfter
  +  customPanelHeaderAfterMinWidth={<value>} // при необходимости (по умолчанию 90)
  />
  ```

<br/><br/>

## [`Chip`](#/ChipsInput)

- Изменено a11y-свойство

```diff
<Chip
  value="Чип"
  removable={true}
- removeAriaLabel="Удалить"
+ removeLabel="Удалить"
>
  Чип
</Chip>
```

<br/><br/>

## [`ChipsInput`](#/ChipsInput)

- Компонент теперь может быть контролируемым и неконтролируемым.
- `getOptionValue`, `getOptionLabel`, `getNewOptionData` – все аргументы функции теперь обязательны.
- `renderChip` – вторым аргументов приходит `option`.

```diff
<ChipsInput
-  value={[]}
+  defaultValue={[]}

-  value={[]}
+  value={[]}
+  onChange={[]}

-  inputValue=""
+  defaultInputValue=""

-  inputAriaLabel="Введите название цвета"
+  inputLabel="Введите название цвета"
/>
```

<br/><br/>

## [`ContentCard`](#/ContentCard)

- Изменён тeг (с `h4` на `span`), в котором `header` компонента рендерится по умолчанию.
  Переопределить тег по умолчанию можно с помощью свойства `headerComponent`.

```jsx static
<ContentCard headerComponent="h4" />
```

<br/><br/>

## [`CustomScrollView`](#/CustomScrollView)

- Компонент больше не принимает свойства `window`/`document`.

<br/><br/>

## [`CustomSelect`](#/CustomSelect)

- Функция `onInputChange` больше не получает вторым параметром список опций, а также никак
  не обрабатывает результат исполнения. Для фильтрации обновляйте `props.options` самостоятельно или
  используйте свойство `filterFn`.
- Удалено свойство `option` из `CustomSelectOption`.

<br/><br/>

## [`DateInput`](#/DateInput)

- Изменены a11y-свойства

```diff
<DateInput
- prevMonthAriaLabel=""
+ prevMonthLabel=""

- nextMonthAriaLabel=""
+ nextMonthLabel=""

- changeMinutesAriaLabel=""
+ changeMinutesLabel=""

- changeHoursAriaLabel=""
+ changeHoursLabel=""

- changeDayAriaLabel=""
+ changeDayLabel=""

- changeMonthAriaLabel=""
+ changeMonthLabel=""

- changeYearAriaLabel=""
+ changeYearLabel=""

- clearFieldAriaLabel=""
+ clearFieldLabel=""

- showCalendarAriaLabel=""
+ showCalendarLabel=""
/>
```

<br/><br/>

## [`DateRangeInput`](#/DateInputRange)

- Изменены a11y-свойства

```diff
<DateRangeInput
- prevMonthAriaLabel=""
+ prevMonthLabel=""

- nextMonthAriaLabel=""
+ nextMonthLabel=""

- changeDayAriaLabel=""
+ changeDayLabel=""

- changeMonthAriaLabel=""
+ changeMonthLabel=""

- changeYearAriaLabel=""
+ changeYearLabel=""

- changeStartDayAriaLabel=""
+ changeStartDayLabel=""

- changeStartMonthAriaLabel=""
+ changeStartMonthLabel=""

- changeStartYearAriaLabel=""
+ changeStartYearLabel=""

- changeEndDayAriaLabel=""
+ changeEndDayLabel=""

- changeEndMonthAriaLabel=""
+ changeEndMonthLabel=""

- changeEndYearAriaLabel=""
+ changeEndYearLabel=""

- clearFieldAriaLabel=""
+ clearFieldLabel=""

- showCalendarAriaLabel=""
+ showCalendarLabel=""
/>
```

<br/><br/>

## [`FixedLayout`](#/FixedLayout)

```diff
- <FixedLayout getRef={ref}>...</FixedLayout>
+ <FixedLayout getRootRef={ref}>...</FixedLayout>
```

<br/><br/>

## [`Footer`](#/Footer)

- Вертикальный отступ теперь задаётся через `padding`, вместо `margin`, поэтому схлопывание `margin`
  будет исключено.

<br/><br/>

## [`FormItem`](#/FormItem)

- Изменён тeг (с `h5` на `span`), в котором значение `top` рендерится по умолчанию, если не указано
  свойство `htmlFor`. Если свойство `htmlFor` указано, но тег будет `label`.
- Переопределить тeг по умолчанию можно с помощью свойства `topComponent`.

```jsx static
<FormItem top="Имя" topComponent="h5" />
```

<br/><br/>

## [`Gradient`](#/Gradient)

- У свойства `mode` были удалены значения `black` и `white`, используйте `tint` или `default`.
  `default` теперь значение по умолчанию.

<br/><br/>

## [`Header`](#/Header)

- Теперь для подзаголовка `subtitle` можно задать тип тэга с помощью свойства `subtitleComponent`.

```jsx static
<Header subtitle="SOHN — Conrad" subtitleComponent="h3">
  Плейлисты
</Header>
```

<br/><br/>

## [`ModalCard`](#/ModalCard) и [`ModaCardBase`](#/ModaCardBase)

- Тeг, в котором значение `header` рендерится по умолчанию, изменён с `h2` на `span`.
- Тег, в котором значение `subheader` рендерится по умолчанию, изменён с `h5` на `span`.
- Поменять теги по умолчанию можно с помощью свойств `headerComponent` и `subheaderComponent`.

```jsx static
<ModalCard
  header="Баскетбол на выходных"
  headerComponent="h2"
  subheader="Приглашение в беседу"
  subheaderComponent="h3"
/>
```

<br/><br/>

## [`ModalPageHeader`](#/ModalPageHeader)

```diff
- <ModalPageHeader getRef={ref}>...</ModalPageHeader>
+ <ModalPageHeader getRootRef={ref}>...</ModalPageHeader>
```

<br/><br/>

## [`Pagination`](#/Pagination)

- Свойство `getPageAriaLabel` переименовано в `getPageLabel` и обновлено: теперь оно принимает
  только `(isCurrent: boolean)` и не нуждается в номере страницы. Возвращайте текст с учетом того,
  что номер страницы добавится автоматически через пробел **в конце**.

```diff
 <Pagination
- prevButtonAriaLabel="На предыдущую"
+ prevButtonLabel="На предыдущую"

- nextButtonAriaLabel="На следующую"
+ nextButtonLabel="На следующую"

- getPageAriaLabel={(page, isCurrent) => { isCurrent ? `${page} страница` : `Го на ${page} страницу` }}
+ getPageLabel={(isCurrent) => { isCurrent ? "Стр." : "Го на страницу" }}
/>
```

<br/><br/>

## ~~`PanelHeader.Content`~~

- Подкомпонент удален, используйте вместо него `typographyProps` у [`PanelHeader`](#/PanelHeader).

<br/><br/>

## ~~`PromoBanner`~~

- Компонент удален.
- Для своей реализации, используйте событие [`VKWebAppShowBannerAd`](https://dev.vk.com/mini-apps/monetization/ad/banners).

<br/><br/>

## [`PullToRefresh`](#/PullToRefresh)

- До этого `runTapticImpactOccurred()` вызывался внутри компонента после вызова обработчика `onRefresh`.
  Сам `runTapticImpactOccurred()` через `vkBridge.send` вызывает событие `VKWebAppTapticImpactOccurred`.
  В виду отказа от [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), мы удалили вызов
  `runTapticImpactOccurred()` на стороне **VKUI**.
- Пример представлен на странице [Интеграция с VK Mini Apps](https://vkcom.github.io/VKUI/#/integrations-vk-mini-apps)
  под заголовком **Виброотклик (Taptic Engine)**.

<br/><br/>

## ~~`RangeSlider`~~

- Компонент удален, используйте [`Slider`](#/Slider).

```diff
- <RangeSlider />
+ <Slider multiple />
```

<br/><br/>

## [`Search`](#/Search)

- Свойство `iconAriaLabel` переименовано в `iconLabel`.
- Свойство `clearAriaLabel` переименовано в `clearLabel`.

<br/><br/>

## [`SimpleCell`](#/SimpleCell)

- Свойство `expandable` теперь не принимает значения типа `boolean`.

```diff
- <SimpleCell expandable={true}>...</SimpleCell>
+ <SimpleCell expandable="auto">...</SimpleCell>

- <SimpleCell expandable={false}>...</SimpleCell>
+ <SimpleCell>...</SimpleCell>
```

<br/><br/>

## [`Slider`](#/Slider)

- Свойство `step` теперь принимает значение `1` по умолчанию.
- Функция `onChange` вторым параметром теперь дополнительно расширяется типом `React.ChangeEvent`.

<br/><br/>

## [`Spinner`](#/Spinner)

- У свойства `aria-label` теперь отсутствует значение по умолчанию, для доступности воспользуйтесь
  свойством `children`.

<br/><br/>

## [`SplitCol`](#/SplitCol)

```diff
 <ActionSheet>
-  <SplitCol spaced>Сохранить в закладках</SplitCol>
+  <SplitCol autoSpaced>Сохранить в закладках</SplitCol>
 </ActionSheet>
```

<br/><br/>

## [`Tappable`](#/Tappable)

Свойства `onEnter`, `onLeave`, `onStart`, `onEnd`, `onMove` и `stopPropagation` удалены.
Используйте вместо них [нативные свойства](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events#event_types_and_global_event_handlers).

```diff
<Tappable
- stopPropagation

- onEnter
+ onPointerEnter

- onLeave
+ onPointerLeave

- onStart
+ onPointerDown

- onEnd
+ onPointerUp

- onMove
+ onPointerMove
/>
```

### Улучшение доступности

Теперь если в кликабельный компонент не был передано свойство `onClick` или `href`, то у такого
компонента будут отключены состояния наведения, активирования и ripple-эффекты. Если вы использовали
`disabled` для отключения состояний, рекомендуем удалить это свойство.

```diff
<SimpleCell
- disabled
 >
  Информационный текст
</SimpleCell>
```

<br/><br/>

### ~~`Tooltip`~~ -> [`OnboardingTooltip`](#/OnboardingTooltip)

- Стал доступнее за счёт `role="tooltip"` и `aria-describedby`.

```diff
- <Tooltip>
+ <OnboardingTooltip
- isShown
+ shown

- alignX="bottom"
- alignY="left"
+ placement="bottom-start"

- offsetX={0}
+ offsetByCrossAxis={0}

- offsetY={0}
+ offsetByMainAxis={0}

- cornerOffset={0}
+ arrowOffset={0}

- cornerAbsoluteOffset={0}
+ arrowOffset={0}
+ isStaticArrowOffset
>
  <div>Target</div>
- </Tooltip>
+ </OnboardingTooltip>
```

## Typography

### [`Title`](#/Title)

- По умолчанию тeг в котором рендерится компонент теперь `span` и он больше не привязан к значению
  свойства `level`.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Title Component="h1" />
```

### [`Headline`](#/Headline)

- Изменён тeг (с `h4` на `span`), в котором компонент рендерится по умолчанию.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Headline Component="h4" />
```

### [`Subhead`](#/Subhead)

- Изменён тeг (с `h5` на `span`), в котором компонент рендерится по умолчанию.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Subhead Component="h5" />
```

<br/><br/>

## [`UsersStack`](#/UsersStack)

```diff
- <UsersStack layout="vertical">...</UsersStack>
+ <UsersStack direction="column">...</UsersStack>

- <UsersStack layout="horizontal">...</UsersStack>
+ <UsersStack direction="row">...</UsersStack>
```

<br/><br/>

## ~~`VisuallyHiddenInput`~~

- Компонент удален, используйте [`VisuallyHidden`](#/VisuallyHidden).

```diff
- <VisuallyHiddenInput />
+ <VisuallyHidden Component="input" />
```

<br/><br/>

## Unstable

### 🎉 ~~`unstable_ChipsSelect`~~ -> [`ChipsSelect`](#/ChipsSelect)

- Теперь экспортируется как стабильный.
- Компонент теперь может быть контролируемым и неконтролируемым.
- `creatable` – может быть всё ещё `boolean`, при этом теперь можно передать и текст, чтобы
  переопределить текст по умолчанию.
- `getOptionValue`, `getOptionLabel`, `getNewOptionData` – все аргументы функции теперь обязательны.
- `renderChip` – вторым аргументов приходит `option`.

```diff
<ChipsSelect
-  value={[]}
+  defaultValue={[]}

-  value={[]}
+  value={[]}
+  onChange={[]}

-  inputValue=""
+  defaultInputValue=""

-  popupDirection="bottom"
+  placement="bottom"

-  showSelected={true}
+  selectedBehavior="highlight"

-  showSelected={false}
+  selectedBehavior="hide"

-  creatableText="Lorem Ipsum"
+  creatable="Lorem Ipsum"
/>
```

### 🎉 ~~`unstable_Popover`~~ -> [`Popover`](#/Popover)

- Теперь экспортируется как стабильный.
- <!--чтобы сработало перечёркивание-->~~`action`~~ -> `trigger` – помимо `"click"` и `"hover"`, теперь принимает `"focus"` или комбинацию этих событий.
  Также можно передать `"manual"`, что сделает компонент полностью контролируемым, в `onShownChange`
  будет вызываться при нажатии за пределы целевого и всплывающего элементов, по кнопке ESC или при
  вызове `onClose` из свойства `content`.
- `content` теперь принимает [render prop](https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop).
  В аргументе функции можно получить метод `onClose`, с помощью которого можно программно закрывать
  всплывающий элемента.
- `onShownChange` – вторым аргументом теперь приходит `reason`, который даёт понять по какой причине
  показался/скрылся всплывающий элемент.
- `hoverDelay` – принимает либо общее число задержки для `trigger="hover"`, либо массив чисел типа
  `[<показ>, <скрытие>]`.
- `autoFocus` – включать ли авто-фокусирование на всплывающий элемент (работает при навигации с клавиатуры).
- `noStyling` – убирает стилизацию по умолчанию.
- `usePortal` – рендерить ли всплывающий элемент в портале. Вместо `boolean`, можно передать
  контейнер, куда должен отрендериться всплывающий элемент.

```diff
<Popover
- action="hover"
+ trigger="hover"

- offsetDistance={0}
+ offsetByMainAxis={0}

- offsetSkidding={0}
+ offsetByCrossAxis={0}

- shownDelay={2}
+ hoverDelay={2}

- hideDelay={10}
+ hoverDelay={[0, 10]}

- shownDelay={5}
- hideDelay={10}
+ hoverDelay={[5 10]}
>
  <div>Target</div>
</Popover>
```

### 🎉 ~~`unstable_Popper`~~ -> [`Popper`](#/Popper)

- Теперь экспортируется как стабильный.
- `targetRef` теперь умеет принимать `VirtualElement`.
- `renderContent` удалён в пользу `children`. Раньше из `renderContent` можно было получить
  `className`, который задаёт `Popper`, сейчас этот `className` пустой.
- `arrowProps` принимает атрибуты `HTMLDivElement`, а также `iconStyle` и `iconClassName`.
- `onPlacementChange` теперь вызывается только в случае, если `Popper` подобрал оптимальный
  `placement` вместо пользовательского.

```diff
<Popper
- renderContent

- arrowClassName=""
+ arrowProps={{ iconClassName: "" }}

- offsetDistance={0}
+ offsetByMainAxis={0}

- offsetSkidding={0}
+ offsetByCrossAxis={0}

- onPlacementChange={({ placement }) => {}}
+ onPlacementChange={(placement) => {}}

- forcePortal
+ usePortal

- portalRoot={someHTMLElement}
+ usePortal={someHTMLElement}
/>
  Content
</Popper>
```

### 🎉 ~~`unstable_TextTooltip`~~ -> [`Tooltip`](#/Tooltip)

- Теперь экспортируется как стабильный.
- Компонент теперь может быть контролируемым и неконтролируемым.
- Помимо `hover`, теперь реагирует и на `focus`.
- Стал доступнее за счёт `role="tooltip"` и `aria-describedby`.
- Может закрываться по кнопке **ESC**.
- ⚠️ Наведение на сам тултип теперь по умолчанию отключено. Используйте `enableInteractive`, чтобы
  включить эту возможность.

```diff
- <TextTooltip
+ <Tooltip
- autoUpdateOnTargetResize
- customMiddlewares
- renderContent

- getRef
+ getRootRef

- offsetSkidding={0}
+ offsetByCrossAxis={0}

- offsetDistance={0}
+ offsetByMainAxis={0}

- shownDelay={2}
+ hoverDelay={2}

- hideDelay={10}
+ hoverDelay={[0, 10]}

- shownDelay={5}
- hideDelay={10}
+ hoverDelay={[5 10]}

- forcePortal
+ usePortal

- portalRoot={someHTMLElement}
+ usePortal={someHTMLElement}
>
  <div>Target</div>
- </TextTooltip>
+ </Tooltip>
```

### 🎉 ~~`unstable_HorizontalCellShowMore`~~ -> [`HorizontalCellShowMore`](#/HorizontalCellShowMore)

- Теперь экспортируется как стабильный.

### ~~`RichTooltip`~~ -> 🗑️

- Компонент удален, используйте [`Tooltip`](#/Tooltip).

```diff
- <RichTooltip style={{maxWidth: 320}} content={
+ <Tooltip maxWidth={320} placement="bottom-start" enableInteractive text={
  <RichCell>
    Lorem
  </RichCell>
}>
  <Link style={{display: 'inline-block', margin: 20, userSelect: 'none'}}>Илья Гришин</Link>
- </RichTooltip>
+ </Tooltip>
```

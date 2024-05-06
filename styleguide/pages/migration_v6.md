> Документацию по миграции с **v4** на **v5** можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v5.0.1).

## Содержание

- <a href="{{anchor}}">Автоматизация обновления до v6</a>
- <a href="{{anchor}}">Зависимости</a>
- <a href="{{anchor}}">Сборка</a>
- <a href="{{anchor}}">Константы</a>
- <a href="{{anchor}}">Компоненты</a>
  - <a href="{{anchor}}">`Accordion`</a>
  - <a href="{{anchor}}">`ActionSheet`</a>
  - <a href="{{anchor}}">`ActionSheetItem`</a>
  - <a href="{{anchor}}">`Alert`</a>
  - <a href="{{anchor}}">`AppearanceProvider`</a>
  - <a href="{{anchor}}">`Avatar`</a>
  - <a href="{{anchor}}">`Banner`</a>
  - <a href="{{anchor}}">`Calendar`</a>
  - <a href="{{anchor}}">`CalendarRange`</a>
  - <a href="{{anchor}}">`CardScroll`</a>
  - <a href="{{anchor}}">`ConfigProvider`</a>
  - <a href="{{anchor}}">`Chip`</a>
  - <a href="{{anchor}}">`ChipsInput`</a>
  - <a href="{{anchor}}">`ContentCard`</a>
  - <a href="{{anchor}}">`CustomScrollView`</a>
  - <a href="{{anchor}}">`CustomSelect`</a>
  - <a href="{{anchor}}">`DateInput`</a>
  - <a href="{{anchor}}">`DateRangeInput`</a>
  - <a href="{{anchor}}">`Image`</a>
  - <a href="{{anchor}}">`ImageBase`</a>
  - <a href="{{anchor}}">`FixedLayout`</a>
  - <a href="{{anchor}}">`Footer`</a>
  - <a href="{{anchor}}">`FormItem`</a>
  - <a href="{{anchor}}">🗑️ ~~`FormLayout`~~</a>
  - <a href="{{anchor}}">`Gallery`</a>
  - <a href="{{anchor}}">`Gradient`</a>
  - <a href="{{anchor}}">`GridAvatar`</a>
  - <a href="{{anchor}}">`Header`</a>
  - <a href="{{anchor}}">`ModalCard` и `ModaCardBase`</a>
  - <a href="{{anchor}}">`ModalPageHeader`</a>
  - <a href="{{anchor}}">`Pagination`</a>
  - <a href="{{anchor}}">`PanelHeader`</a>
  - <a href="{{anchor}}">🗑️ ~~`PanelHeader.Content`~~</a>
  - <a href="{{anchor}}">`Placeholder`</a>
  - <a href="{{anchor}}">🗑️ ~~`PromoBanner`~~</a>
  - <a href="{{anchor}}">`PopoutWrapper`</a>
  - <a href="{{anchor}}">`PullToRefresh`</a>
  - <a href="{{anchor}}">🗑️ ~~`RangeSlider`~~</a>
  - <a href="{{anchor}}">`Search`</a>
  - <a href="{{anchor}}">`Select`</a>
  - <a href="{{anchor}}">`SimpleCell`</a>
  - <a href="{{anchor}}">`Slider`</a>
  - <a href="{{anchor}}">`Spinner`</a>
  - <a href="{{anchor}}">`SplitCol`</a>
  - <a href="{{anchor}}">`Tabbar`</a>
  - <a href="{{anchor}}">`Tappable`</a>
  - <a href="{{anchor}}">~~`Tooltip`~~ -> `OnboardingTooltip`</a>
  - <a href="{{anchor}}">~~`TooltipContainer`~~ -> `OnboardingTooltipContainer`</a>
  - <a href="{{anchor}}">`Typography/Title`</a>
  - <a href="{{anchor}}">`Typography/Headline`</a>
  - <a href="{{anchor}}">`Typography/Subhead`</a>
  - <a href="{{anchor}}">`UsersStack`</a>
  - <a href="{{anchor}}">🗑️ ~~`VisuallyHiddenInput`~~</a>
- <a href="{{anchor}}">`unstable_` компоненты</a>
  - <a href="{{anchor}}">🎉 ~~`unstable_ChipsSelect`~~ -> `ChipsSelect`</a>
  - <a href="{{anchor}}">🎉 ~~`unstable_Popover`~~ -> `Popover`</a>
  - <a href="{{anchor}}">🎉 ~~`unstable_Popper`~~ -> `Popper`</a>
  - <a href="{{anchor}}">🎉 ~~`unstable_TextTooltip`~~ -> `Tooltip`</a>
  - <a href="{{anchor}}">🎉 ~~`unstable_HorizontalCellShowMore`~~ -> `HorizontalCellShowMore`</a>
  - <a href="{{anchor}}">🗑️ ~~`RichTooltip`~~</a>
- <a href="{{anchor}}">Интеграция с VK Mini Apps</a>

<br/>
<hr/>
<br/>

## Автоматизация обновления до v6

> Пока для перевода доступны только `Typescript`-файлы (`*.ts`, `*.tsx`).

Чтобы упростить переход на новую мажорную версию, можно воспользоваться инструментом по
автоматической миграции ваших компонентов.

1. Для начала обновите ваше приложение до новой мажорной версии (**v6**) в соответствии с требованиями
   вашего пакетного менеджера и среды.

2. Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите команду `npx @vkontakte/vkui-codemods`.

3. То, что можно изменить на месте, подвергнется миграции, о более сложных кейсах вы будете
   оповещены в консоли по ходу выполнения команды из **п.2**.

<br/>

Информацию по доступным параметрам можно узнать через опцию `--help`

```shell
npx @vkontakte/vkui-codemods --help
```

Более подробная инструкция расположена на странице пакета [@vkontakte/vkui-codemods](https://www.npmjs.com/package/@vkontakte/vkui-codemods).

<br/><br/><hr/><br/>

## Зависимости

<br/>

- Обновили минимально поддерживаемую версию [React](https://react.dev/)
  до [v18.2.0](https://github.com/facebook/react/blob/main/CHANGELOG.md#1820-june-14-2022).
- Удалили зависимость [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge)
  в рамках задачи по уменьшению сцепления с [VK Mini Apps](https://vk.com/miniapps) (см. подробнее в разделе <a href="{{anchor}}">Интеграция с VK Mini Apps</a>).

<br/><br/><hr/><br/>

## Сборка

<br/>

- Обновили конфигурацию [`.browserlistrc`](https://github.com/VKCOM/VKUI/blob/master/.browserslistrc):

  ```diff
  - android >= 5
  + ChromeAndroid >= 57
  - iOS >= 10
  + iOS >= 10.3
  - Chrome >= 51
  + Chrome >= 57
  Firefox >= 54
  Edge >= 18
  - Opera >= 38
  + Opera >= 44
  - Safari >= 10
  + Safari >= 10.1

  + Samsung >= 7.2
  ```

- В [специальной сборке](#/CSS%20Modules) теперь используется [CSS Logical](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).

  > Если вы используете [специальную сборку](#/CSS%20Modules) и вам требуется [широкая браузерная поддержка](https://caniuse.com/css-logical-props), рекомендуем воспользоваться [postcss-logical](https://www.npmjs.com/package/postcss-logical).

<br/><br/><hr/><br/>

## Константы

<br/>

Следующие перечисления были заменены на [объекты](https://www.typescriptlang.org/docs/handbook/enums.html#objects-vs-enums):

- `Platform`
- `Appearance`
- `SizeType`
- `ViewWidth`
- `ViewHeight`

<br/><br/><hr/><br/>

## Компоненты

<br/>

### [`Accordion`](#/Accordion)

- Отказались от нативного элемента `detail`, т.к. из-за него некорректно работала анимация.

- На замену свойств `open` и `onToggle` пришли свойства `expanded`, `defaultExpanded`, `onChange`.

```diff
<Accordion
- open={openId === id}
+ expanded={openId === id}

- onToggle={(e) => e.target.open && setOpenId(id)}
+ onChange={(open) => (open ? setOpenId(id) : setOpenId(null)}
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

<br/>

### [`ActionSheet`](#/ActionSheet)

- Свойство `toggleRef` теперь обязательно.
- Свойство `popupDirection` удалено, используйте `placement`.

```diff
- <ActionSheet popupDirection="top">
+ <ActionSheet toggleRef={getRef} placement="top">
  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
 </ActionSheet>
```

<br/>

### [`ActionSheetItem`](#/ActionSheetItem)

- Свойство `autoClose` удалено, теперь это поведение по умолчанию.

```diff
 <ActionSheet>
-  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
+  <ActionSheetItem>Сохранить в закладках</ActionSheetItem>
-  <ActionSheetItem autoClose={false}>Закрепить запись</ActionSheetItem>
+  <ActionSheetItem autoCloseDisabled>Закрепить запись</ActionSheetItem>
-  <ActionSheetItem>Закрепить запись</ActionSheetItem>
+  <ActionSheetItem autoCloseDisabled>Закрепить запись</ActionSheetItem>
 </ActionSheet>
```

<br/>

### [`Alert`](#/Alert)

- Свойство `autoClose` удалено, теперь это поведение по умолчанию.

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

<br/>

### [`AppearanceProvider`](#/AppearanceProvider)

- По аналогии с остальными провайдерами свойство `appearance` заменено на `value`.

```diff
- <AppearanceProvider appearance={appearance}>...</AppearanceProvider>
+ <AppearanceProvider value={appearance}>...</AppearanceProvider>
```

<br/>

## [`Avatar`](#/Avatar)

- Свойство `withBorder` удалено, используйте свойство `noBorder`.

```diff
-  <Avatar withBorder>...</Avatar>
+  <Avatar>...</Avatar>
-  <Avatar withBorder={false}>...</Avatar>
+  <Avatar noBorder>...</Avatar>
```

<br/>

### [`Banner`](#/Banner)

- Убрали установку внешних отступов. Теперь, при необходимости, следует их добавлять самостоятельно.
  Соответственно, свойство `noPadding` удалено.

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

<br/>

### [`Calendar`](#/Calendar)

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

<br/>

### [`CalendarRange`](#/CalendarRange)

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

<br/>

## [`CardScroll`](#/CardScroll)

- Свойство `withSpaces` удалено, используйте свойство `noSpaces`.

```diff
-  <CardScroll withSpaces />
+  <CardScroll />
-  <CardScroll withSpaces={false} />
+  <CardScroll noSpaces />
```

<br/>

### [`ConfigProvider`](#/ConfigProvider)

- `hasCustomPanelHeaderAfter` теперь по умолчанию `false`.
- <!--чтобы сработало перечёркивание-->~~`onDetectAppearanceByBridge`~~ удалён, используйте хук `useAppearance()` из библиотеки
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

- `platform` теперь принимает только **union** `'android' | 'ios' | 'vkcom'`. Раньше можно было
  передать любое значение, чтобы можно было перебить токены по умолчанию. Если вам это необходимо,
  то используйте свойство `tokensClassNames`. Подробнее читайте на странице [Кастомизация](#/Customize).
  Ниже представлен код на примере `paradigmBase` из [@vkontakte/vkui-tokens](https://github.com/VKCOM/vkui-tokens).

  ```diff
  <ConfigProvider
  -  platform="paradigmBase"
  +  tokensClassNames={{
  +   light: 'vkui--paradigmBase--light',
  +   dark: 'vkui--paradigmBase--dark',
  +  }}
  />
  ```

<br/>

### [`Chip`](#/Chip)

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

<br/>

### [`ChipsInput`](#/ChipsInput)

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

-  inputAriaLabel="Введите название цвета" // используйте компонент FormItem
/>
```

<br/>

### [`ContentCard`](#/ContentCard)

- Изменён тeг (с `h4` на `span`), в котором `header` компонента рендерится по умолчанию.
  Переопределить тег по умолчанию можно с помощью свойства `headerComponent`.

```jsx static
<ContentCard headerComponent="h4" />
```

<br/>

### [`CustomScrollView`](#/CustomScrollView)

- Компонент больше не принимает свойства `window`/`document`.

<br/>

### [`CustomSelect`](#/CustomSelect)

- Функция `onInputChange` больше не получает вторым параметром список опций, а также никак
  не обрабатывает результат исполнения. Для фильтрации обновляйте `props.options` самостоятельно или
  используйте свойство `filterFn`.
- Удалено свойство `option` из `CustomSelectOption`.
- Свойство `fixDropdownWidth` удалено, используйте свойство `dropdownAutoWidth`.

```diff
-  <CustomSelect fixDropdownWidth>...</CustomSelect>
+  <CustomSelect>...</CustomSelect>
-  <CustomSelect fixDropdownWidth={false}>...</CustomSelect>
+  <CustomSelect dropdownAutoWidth>...</CustomSelect>
```

<br/>

### [`DateInput`](#/DateInput)

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

<br/>

### [`DateRangeInput`](#/DateInputRange)

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

<br/>

## [`Image`](#/Image)

- Свойство `withBorder` удалено, используйте свойство `noBorder`.

```diff
-  <Image withBorder>...</Image>
+  <Image>...</Image>
-  <Image withBorder={false}>...</Image>
+  <Image noBorder>...</Image>
```

<br/>

## [`ImageBase`](#/ImageBase)

- Свойство `withBorder` удалено, используйте свойство `noBorder`.

```diff
-  <ImageBase withBorder>...</ImageBase>
+  <ImageBase>...</ImageBase>
-  <ImageBase withBorder={false}>...</ImageBase>
+  <ImageBase noBorder>...</ImageBase>
```

<br/>

### [`FixedLayout`](#/FixedLayout)

```diff
- <FixedLayout getRef={ref}>...</FixedLayout>
+ <FixedLayout getRootRef={ref}>...</FixedLayout>
```

<br/>

### [`Footer`](#/Footer)

- Вертикальный отступ теперь задаётся через `padding`, вместо `margin`, поэтому схлопывание `margin`
  будет исключено.

<br/>

### [`FormItem`](#/FormItem)

- Изменён тeг (с `h5` на `span`), в котором значение `top` рендерится по умолчанию, если не указано
  свойство `htmlFor`. Если свойство `htmlFor` указано, но тег будет `label`.
- Переопределить тeг по умолчанию можно с помощью свойства `topComponent`.

```jsx static
<FormItem top="Имя" topComponent="h5" />
```

<br/>

### 🗑️ ~~`FormLayout`~~

- Компонент удалён.
- Используйте нативный тег `form`

<br />

## [`Gallery`](#/Gallery)

- Свойство `isDraggable` удалено, используйте свойство `dragDisabled`.

```diff
-  <Gallery isDraggable />
+  <Gallery />
-  <Gallery isDraggable={false} />
+  <Gallery dragDisabled />
```

<br/>

### [`Gradient`](#/Gradient)

- У свойства `mode` были удалены значения `black` и `white`, используйте `tint` или `default`.
  `default` теперь значение по умолчанию.

<br/>

## [`GridAvatar`](#/GridAvatar)

- Свойство `withBorder` удалено, используйте свойство `noBorder`.

```diff
-  <GridAvatar withBorder>...</GridAvatar>
+  <GridAvatar>...</GridAvatar>
-  <GridAvatar withBorder={false}>...</GridAvatar>
+  <GridAvatar noBorder>...</GridAvatar>
```

<br />

### [`Header`](#/Header)

- Теперь для подзаголовка `subtitle` можно задать тип тэга с помощью свойства `subtitleComponent`.

```jsx static
<Header subtitle="SOHN — Conrad" subtitleComponent="h3">
  Плейлисты
</Header>
```

<br/>

### [`ModalCard`](#/ModalCard) и [`ModaCardBase`](#/ModaCardBase)

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

<br />

Отступ перед кнопками действий (`actions`) больше автоматически не меняется в зависимости от контента.
Отступ теперь всегда равен `16px`.
Также автоматически больше не проставляются отступы, если внутрь переданы следующие компоненты: [UserStack](#/UserStack), [FormField](#/FormField).
Согласно дизайн-системе отступ может быть и больше в зависимости от свойств и контента компонента.
Для того, чтобы увеличить отступ используйте компонент [Spacing](#/Spacing).
Ниже приведёны ситуации в которых точно нужно использовать [Spacing](#/Spacing), чтобы продолжать следовать дизайн-системе.

- `ModalCard` или `ModalCardBase` содержит `actions` и `header` или `subheader`, но не содержит `children`. Отступ в сумме с тем что идёт по умолчанию должен быть `32px`.

```diff
    <ModalCard header="Добавить игру «Загадки детства» в меню?"
      actions={
-       <ButtonGroup mode="horizontal" gap="s" stretched>
-         <Button size="l" mode="primary" stretched>
-           Да
-         </Button>
-         <Button size="l" mode="secondary" stretched>
-           Позже
-         </Button>
-       </ButtonGroup>
+       <React.Fragment>
+         <Spacing size={16} />
+         <ButtonGroup mode="horizontal" gap="s" stretched>
+           <Button size="l" mode="primary" stretched>
+             Да
+           </Button>
+           <Button size="l" mode="secondary" stretched>
+             Позже
+           </Button>
+         </ButtonGroup>
+       </React.Fragment>
    />
```

- `ModalCard` или `ModalCardBase` содержит `actions`, а внутрь `children` передан [UsersStack](#/UsersStack). Перед `UserStack` должен быть отступ в `20px`, а между `UserStack` и `actions` отступ должен быть в сумме `24px` (включая отступ по умолчанию `16px`).

```diff
    <ModalCard header="Добавить игру «Загадки детства» в меню?"
      actions={
-       <ButtonGroup mode="horizontal" gap="s" stretched>
-         <Button size="l" mode="primary" stretched>
-           Да
-         </Button>
-         <Button size="l" mode="secondary" stretched>
-           Позже
-         </Button>
-       </ButtonGroup>
+       <React.Fragment>
+         <Spacing size={8} />
+         <ButtonGroup mode="horizontal" gap="s" stretched>
+           <Button size="l" mode="primary" stretched>
+             Да
+           </Button>
+           <Button size="l" mode="secondary" stretched>
+             Позже
+           </Button>
+         </ButtonGroup>
+       </React.Fragment>
      }
    >
+     <Spacing size={20} />
      <UsersStack photos={[getAvatarUrl('user_lihachyov')]}>
        Понравилось Муртолу Левзачеву
      </UsersStack>
    </ModalCard>
```

- `ModalCard` или `ModalCardBase` содержит `header` или `subheader`, а внутрь `children` передан [FormField](#/FormField). Отступ между `header` или `subheader` и `FormField` должен быть `16px`.

```diff
    <ModalCard header="Добавить игру «Загадки детства» в меню?"
      actions={
        <ButtonGroup mode="horizontal" gap="s" stretched>
          <Button size="l" mode="primary" stretched>
            Да
          </Button>
          <Button size="l" mode="secondary" stretched>
            Позже
          </Button>
        </ButtonGroup>
      }
    >
+    <Spacing size={16} />
      <FormField>
        <CustomInput />
      </FormField>
    </ModalCar>
```

<br/>

### [`ModalPageHeader`](#/ModalPageHeader)

```diff
- <ModalPageHeader getRef={ref}>...</ModalPageHeader>
+ <ModalPageHeader getRootRef={ref}>...</ModalPageHeader>
```

```diff
- <ModalPageHeader separator>...</ModalPageHeader>
+ <ModalPageHeader>...</ModalPageHeader>
- <ModalPageHeader separator={false}>...</ModalPageHeader>
+ <ModalPageHeader noSeparator>...</ModalPageHeader>
```

<br/>

### [`Pagination`](#/Pagination)

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

<br/>

## [`PanelHeader`](#/PanelHeader)

- Свойство `visor` удалено, используйте свойство `float`.

```diff
-  <PanelHeader visor />
+  <PanelHeader />
-  <PanelHeader visor={false} />
+  <PanelHeader float />
```

- Свойство `separator` удалено, используйте свойство `delimiter`.

```diff
-  <PanelHeader separator />
+  <PanelHeader />
-  <PanelHeader separator={false} />
+  <PanelHeader delimiter="none" />
```

<br/>

### 🗑️ ~~`PanelHeader.Content`~~

- Подкомпонент удалён, используйте вместо него `typographyProps` у [`PanelHeader`](#/PanelHeader).

<br/>

## [`Placeholder`](#/Placeholder)

- Свойство `withPadding` удалено, используйте свойство `noPadding`.

```diff
-  <Placeholder withPadding>...</Placeholder>
+  <Placeholder>...</Placeholder>
-  <Placeholder withPadding={false}>...</Placeholder>
+  <Placeholder noPadding>...</Placeholder>
```

<br/>

### 🗑️ ~~`PromoBanner`~~

- Компонент удалён.
- Для своей реализации, используйте событие [`VKWebAppShowBannerAd`](https://dev.vk.com/mini-apps/monetization/ad/banners).

<br/>

### [`PopoutWrapper`](#/PopoutWrapper)

- Теперь, при использовании компонента напрямую, необходимо самостоятельно импортировать и вызывать `useScrollLock()` (см. [issue #4314](https://github.com/VKCOM/VKUI/issues/4314)).

- Свойство `hasMask` удалено, используйте свойство `noBackground`.

```diff
-  <PopoutWrapper hasMask>...</PopoutWrapper>
+  <PopoutWrapper>...</Tabbar>
-  <PopoutWrapper hasMask={false}>...</PopoutWrapper>
+  <PopoutWrapper noBackground>...</PopoutWrapper>
```

<br/>

### [`PullToRefresh`](#/PullToRefresh)

- До этого `runTapticImpactOccurred()` вызывался внутри компонента после вызова обработчика `onRefresh`.
  Сам `runTapticImpactOccurred()` через `vkBridge.send` вызывает событие `VKWebAppTapticImpactOccurred`.
  В виду отказа от [VK Bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), мы удалили вызов
  `runTapticImpactOccurred()` на стороне **VKUI**.
- Пример представлен на странице [Интеграция с VK Mini Apps](#/integrations-vk-mini-apps)
  под заголовком **Виброотклик (Taptic Engine)**.

<br/>

### 🗑️ ~~`RangeSlider`~~

- Компонент удалён, используйте [`Slider`](#/Slider).

```diff
- <RangeSlider />
+ <Slider multiple />
```

<br/>

### [`Search`](#/Search)

- Свойство `iconAriaLabel` переименовано в `iconLabel`.
- Свойство `clearAriaLabel` переименовано в `clearLabel`.

<br/>

## [`Select`](#/Select)

- Свойство `fixDropdownWidth` удалено, используйте свойство `dropdownAutoWidth`.

```diff
-  <Select fixDropdownWidth>...</Select>
+  <Select>...</Select>
-  <Select fixDropdownWidth={false}>...</Select>
+  <Select dropdownAutoWidth>...</Select>
```

<br/>

### [`SimpleCell`](#/SimpleCell)

- Свойство `expandable` теперь не принимает значения типа `boolean`.

```diff
- <SimpleCell expandable={true}>...</SimpleCell>
+ <SimpleCell expandable="auto">...</SimpleCell>

- <SimpleCell expandable={false}>...</SimpleCell>
+ <SimpleCell>...</SimpleCell>
```

<br/>

### [`Slider`](#/Slider)

- Свойство `step` теперь принимает значение `1` по умолчанию.
- Функция `onChange` вторым параметром теперь дополнительно расширяется типом `React.ChangeEvent`.

<br/>

### [`Spinner`](#/Spinner)

- У свойства `aria-label` теперь отсутствует значение по умолчанию, для доступности воспользуйтесь
  свойством `children`.

<br/>

### [`SplitCol`](#/SplitCol)

```diff
 <ActionSheet>
-  <SplitCol spaced>Сохранить в закладках</SplitCol>
+  <SplitCol autoSpaced>Сохранить в закладках</SplitCol>
 </ActionSheet>
```

<br/>

## [`Tabbar`](#/Tabbar)

- Свойство `shadow` удалено, используйте свойство `plain`.

```diff
-  <Tabbar shadow>...</Tabbar>
+  <Tabbar>...</Tabbar>
-  <Tabbar shadow={false}>...</Tabbar>
+  <Tabbar plain>...</Tabbar>
```

<br/>

### [`Tappable`](#/Tappable)

- Свойства `onEnter`, `onLeave`, `onStart`, `onEnd`, `onMove` и `stopPropagation` удалены.
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

- Улучшение доступности. Теперь если в кликабельный компонент не был передано свойство `onClick` или
  `href`, то у такого компонента будут отключены состояния наведения, активирования и ripple-эффекты.
  Если вы использовали `disabled` для отключения состояний, рекомендуем удалить это свойство.

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

- arrow={false}
+ disableArrow

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

<br/>

### ~~`TooltipContainer`~~ -> [`OnboardingTooltipContainer`](#/OnboardingTooltip)

- Компонент переименован.

```diff
- <TooltipContainer />
+ <OnboardingTooltipContainer />
```

<br/>

### [`Typography/Title`](#/Title)

- По умолчанию тeг в котором рендерится компонент теперь `span` и он больше не привязан к значению
  свойства `level`.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Title Component="h1" />
```

<br/>

### [`Typography/Headline`](#/Headline)

- Изменён тeг (с `h4` на `span`), в котором компонент рендерится по умолчанию.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Headline Component="h4" />
```

<br/>

### [`Typography/Subhead`](#/Subhead)

- Изменён тeг (с `h5` на `span`), в котором компонент рендерится по умолчанию.
- Переопределить тeг по умолчанию можно с помощью свойства `Component`.

```jsx static
<Subhead Component="h5" />
```

<br/>

### [`UsersStack`](#/UsersStack)

```diff
- <UsersStack layout="vertical">...</UsersStack>
+ <UsersStack direction="column">...</UsersStack>

- <UsersStack layout="horizontal">...</UsersStack>
+ <UsersStack direction="row">...</UsersStack>
```

<br/>

### 🗑️ ~~`VisuallyHiddenInput`~~

- Компонент удалён, используйте [`VisuallyHidden`](#/VisuallyHidden).

```diff
- <VisuallyHiddenInput />
+ <VisuallyHidden Component="input" />
```

<br/><br/><hr/><br/>

## `unstable_` компоненты

<br/>

### 🎉 ~~`unstable_ChipsSelect`~~ -> [`ChipsSelect`](#/ChipsSelect)

- Теперь экспортируется как стабильный.
- Компонент теперь может быть контролируемым и неконтролируемым.
- `creatable` – может быть всё ещё `boolean`, при этом теперь можно передать и текст, чтобы
  переопределить текст по умолчанию.
- `getOptionValue`, `getOptionLabel`, `getNewOptionData` – все аргументы функции теперь обязательны.
- `renderChip` – вторым аргументов приходит `option`.
- Свойство `fixDropdownWidth` удалено, используйте свойство `dropdownAutoWidth`.

```diff
-  <ChipsSelect fixDropdownWidth>...</ChipsSelect>
+  <ChipsSelect>...</ChipsSelect>
-  <ChipsSelect fixDropdownWidth={false}>...</ChipsSelect>
+  <ChipsSelect dropdownAutoWidth>...</ChipsSelect>
```

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

-  getIconLabel // шеврон теперь имеет чисто декоративный характер и больше не интерактивна
/>
```

<br/>

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

<br/>

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

<br/>

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

<br/>

### 🎉 ~~`unstable_HorizontalCellShowMore`~~ -> [`HorizontalCellShowMore`](#/HorizontalCellShowMore)

- Теперь экспортируется как стабильный.

<br/>

### 🗑️ ~~`RichTooltip`~~

- Компонент удалён, используйте [`Tooltip`](#/Tooltip).

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

<br/><br/><hr/><br/>

## Интеграция с [VK Mini Apps](https://vk.com/miniapps)

> Этот **Breaking Change** предназначен для разработчиков мини-приложений ВКонтакте. Если вы таким
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

Бойлерплейт для **VK Mini Apps** представлен на странице [Интеграция с VK Mini Apps](#/integrations-vk-mini-apps)
под заголовком **Конфигурация VKUI**.

### 🗑️ ~~`withInsets`~~

- Используйте вместо него хук `useInsets()` из [@vkontakte/vk-bridge-react](https://www.npmjs.com/package/@vkontakte/vk-bridge-react).

### 🗑️ ~~`HasInsets`~~

- Используйте вместо него `SafeAreaInsets`.
- Если вы используете [@vkontakte/vk-bridge](https://www.npmjs.com/package/@vkontakte/vk-bridge), то
  вы можете объявить тип у себя следующим образом:

```ts static
import type { Insets } form '@vkontakte/vk-brige';

interface HasInsets {
  insets?: Partial<Insets>;
}
```

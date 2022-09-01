Документацию по миграции с v3 на v4 можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v4.0.0).

<br/><br/>

## Добавлена поддержка SSR

<br/><br/>

## Адаптивность

- Удалены `withAdaptivity` и `useAdaptivity`
- Для адаптивности рекомендуется использовать `CSS Media queries` либо компоненты `ViewWidthConditionalRender`, `SizeXConditionalRender` или `SizeYConditionalRender`

<br/><br/>

## Обновление React и Typescript

- Минимальная поддерживаемая версия **React** увеличена до v17.0.0
- Минимальная поддерживаемая версия **Typescript** увеличена до v4.7.4

<br/><br/>

## Типографика

- Для компонентов типографики применяются токены `font-family` из [`vkui-tokens`](https://github.com/VKCOM/vkui-tokens)

<br/><br/>

## Убрана поддержка **Android < 5**

- Минимальная поддерживаемая версия **Android** увеличена до 5

<br/><br/>

## Убрана поддержка **Appearance** токенов

- Для кастомизации необходимо использовать [`vkui-tokens`](https://github.com/VKCOM/vkui-tokens)

<br/><br/>

## [`ConfigProvider`](#/ConfigProvider)

- По умолчанию `appearance` определяется автоматически — в зависимости от темы, указанной в VK, или настроек ОС
- Удалено устаревшее свойство `scheme`. Для определения темы используйте свойство `appearance`

```diff
- <ConfigProvider scheme={scheme}>...</ConfigProvider>
+ <ConfigProvider appearance={appearance}>...</ConfigProvider>
```

<br/><br/>

## [`Root`](#/Root) и [`View`](#/View)

- Удалены устаревшие свойства `popout` и `modal`. Используйте эти свойства в компоненте [`SplitLayout`](#/SplitLayout)

```diff
- <SplitLayout>
-   <View popout={popout} modal={modal}>
+ <SplitLayout popout={popout} modal={modal}>
+   <View>
     ...
   </View>
 </SplitLayout>
```

<br/><br/>

## [`Alert`](#/Alert)

- Свойство `autoclose` типа `AlertAction` переименовано в `autoClose`

```diff
 <Alert
   actions={[
     {
       title: "Лишить права",
       mode: "destructive",
-      autoclose: true,
+      autoClose: true,
     },
     {
       title: "Отмена",
-      autoclose: true,
+      autoClose: true,
       mode: "cancel",
     },
   ]}
   header="Подтвердите действие"
   text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
 />
```

<br/><br/>

## [`ActionSheet`](#/ActionSheet)

- Свойства `onClose`, `toggleRef` и `iosCloseItem` теперь обязательные

<br/><br/>

## [`ActionSheetItem`](#/ActionSheetItem)

- Свойство `autoclose` типа `ItemClickHandler` переименовано в `autoClose`

```diff
<ActionSheet>
-  <ActionSheetItem autoclose>Сохранить в закладках</ActionSheetItem>
+  <ActionSheetItem autoClose>Сохранить в закладках</ActionSheetItem>
</ActionSheet>
```

<br/><br/>

## [`PromoBanner`](#/PromoBanner)

- Удалено свойство `ageRestriction` в типе `BannerData`, добавленное по ошибке. Используйте свойство `ageRestrictions`

<br/><br/>

## [`ContentCard`](#/ContentCard)

- Удалено устаревшее свойство `image`. Используйте свойство `src`

<br/><br/>

## [`IconButton`](#/IconButton)

- Удалено устаревшее свойство `icon`. Передавайте иконки как `children`

```diff
- <IconButton icon={<Icon16Clear />}/>
+ <IconButton>
+   <Icon16Clear />
+ </IconButton>
```

<br/><br/>

## [`TabbarItem`](#/TabbarItem)

- Удалено устаревшее свойство `label`. Используйте свойство `indicator`

```diff
 <TabbarItem
-   label="3"
+   indicator={
+     <Counter size="s" mode="prominent">
+       3
+     </Counter>
+   }
 >
   <Icon28MessageOutline />
 </TabbarItem>
```

<br/><br/>

## [`Cell`](#/Cell)

- Удалены устаревшие свойства `removable` и `selectable`. Используйте свойства `mode="removable"` и `mode="selectable"`

```diff
- <Cell removable>
- <Cell selectable>
+ <Cell mode="removable">
+ <Cell mode="selectable">
```

<br/><br/>

## [`AppRoot`](#/AppRoot)

- Удалено устаревшее свойство `embedded`. Используйте свойство `mode="embedded"`

```diff
- <AppRoot embedded>...</AppRoot>
+ <AppRoot mode="embedded">...</AppRoot>
```

<br/><br/>

## [`Caption`](#/Caption)

- `<Caption level="1" />` заменен на [`Footnote`](#/Footnote)

```diff
- <Caption level="1" >...</Caption>
+ <Footnote>...</Footnote>
```

- Свойство `level` сдвинуто на 1 уровень вниз

```diff
- <Caption level="2" >...</Caption>
+ <Caption level="1" >...</Caption>

- <Caption level="3" >...</Caption>
+ <Caption level="2" >...</Caption>

- <Caption level="4" >...</Caption>
+ <Caption level="3" >...</Caption>
```

<br/><br/>

## [`CustomSelect`](#/CustomSelect)

- Обновлено свойство `onInputChange`. Для фильтрации обновляйте `props.options` самостоятельно или используйте свойство `filterFn`
- Удалено свойство `option` из `CustomSelectOption`

<br/><br/>

## [`PanelHeader`](#/PanelHeader)

- Свойства `left` и `right` переименованы в `before` и `after`

```diff
 <PanelHeader
-  left={<PanelHeaderClose />}
+  before={<PanelHeaderClose />}
-  right={<Avatar size={36} />}
+  after={<Avatar size={36} />}
 >
   Стартовый экран
 </PanelHeader>
```

<br/><br/>

## [`Button`](#/Button)

- Удалены устаревшие значения свойства `mode` (`commerce`, `destructive`, `overlay_...`). Используйте свойства `mode` и `appearance`

```diff
- <Button mode="commerce">
+ <Button mode="primary" appearance="positive">

- <Button mode="destructive">
+ <Button mode="primary" appearance="negative">

- <Button mode="overlay_primary">
+ <Button mode="primary" appearance="overlay">

- <Button mode="overlay_secondary">
+ <Button mode="secondary" appearance="overlay">

- <Button mode="overlay_outline">
+ <Button mode="outline" appearance="overlay">
```

<br/><br/>

## [`Banner`](#/Banner)

- В параметр `actions` для группировки кнопок теперь передается `ButtonGroup` вместо `React.Fragment`

```diff
<Banner
  actions={{
-  <React.Fragment>
+  <ButtonGroup mode="horizontal" gap="m">
    <Button>Подробнее</Button>
    <Button mode="secondary">Напомнить позже</Button>
-  </React.Fragment>
+  </ButtonGroup>
  }}
/>
```

<br/><br/>

## [`ModalCardBase`](#/ModalCardBase)

- Устаревшее свойство `actionsLayout` удалено
- В параметр `actions` для группировки кнопок теперь передается `ButtonGroup` вместо `React.Fragment`

```diff
<ModalCardBase
-  actionsLayout="vertical"
  actions={{
-    <React.Fragment key="buttons">
+    <ButtonGroup mode="vertical" gap="m" stretched>
      <Button size="l" mode="primary">Присоединиться</Button>
      <Button size="l" mode="secondary">Скопировать приглашение</Button>
-    </React.Fragment>
+    </ButtonGroup>
  }}
/>
```

<br/><br/>

## [`SliderSwitch`](#/SliderSwitch)

Устаревший компонент удален. Используйте [`SegmentedControl`](#/SegmentedControl)

```diff
- <SliderSwitch
+ <SegmentedControl
   options={[
     {
-      name: "Мужской",
+      label: "Мужской",
       value: "male",
     },
     {
-      name: "Женский",
+      label: "Женский",
       value: "female",
     },
   ]}
 />
```

## [`SubnavigationButton`](#/SubnavigationButton)

- Свойство `textLevel` теперь имеет тип `string`

```diff
  <SubnavigationButton
-   textLevel={1}
+   textLevel="1"
  >
    Сканировать QR
  </SubnavigationButton>

  <SubnavigationButton
-   textLevel={2}
+   textLevel="2"
  >
    Сканировать QR
  </SubnavigationButton>

  <SubnavigationButton
-   textLevel={3}
+   textLevel="3"
  >
    Сканировать QR
  </SubnavigationButton>
```

## [`Search`](#/Search)

- Внешний вид для `VKCOM` теперь соответствует `ANDROID`

<br/><br/>

## [`Gallery`](#/Gallery)

- Вызов функции `onDragStart` теперь происходит только в начале drag event
- Удалено свойство `onEnd`. Используйте свойство `onDragEnd`, которое теперь принимает индекс слайда вторым параметром

<br/><br/>

## [`Tabs`](#/Tabs)

- `mode="buttons"` удалён. Используйте `mode="secondary"`.
- `mode="segmented"` удалён. Используйте [`SegmentedControl`](#/SegmentedControl).

<br/><br/>

## [`MiniInfoCell`](#/MiniInfoCell)

- Свойство `text-level` удалено. Используйте `mode="accent"` для визуального выделения текста.

<br/><br/>

## Типы и импорты

- Удалены константы `IS_PLATFORM_ANDROID` и `IS_PLATFORM_IOS`
- Удален тип `Scheme`
- Удалена css переменная `--font-tt`, используйте `--font-display`
- Тип `VKUITouchEventHander` переименован в `VKUITouchEventHandler`
- Удалены константы `ANDROID`, `IOS` и `VKCOM`, используйте `enum` `Platform.ANDROID / Platform.IOS, Platform.VKCOM`

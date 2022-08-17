Документацию по миграции c v3 на v4, можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v4.0.0).

## Обновление React и Typescript

- Минимальная поддерживаемая версия **React** была увеличена до v17.0.0
- Минимальная поддерживаемая версия **Typescript** была увеличена до v4.4.4

## Обратно несовместимые изменения

### ConfigProvider

- По умолчанию `appearance` определяется автоматически, в зависимости от темы указанной в VK или настроек ОС.
- Удалено устаревшее свойство `scheme`. Для определения темы используйте свойство `appearance`.

```diff
- <ConfigProvider scheme={scheme}>...</ConfigProvider>
+ <ConfigProvider appearance={appearance}>...</ConfigProvider>
```

### Root и View

- Удалено устаревшее свойство `popout` и `modal`. Используйте эти свойства в компоненте [`SplitLayout`](#/SplitLayout)

```diff
- <SplitLayout>
-   <View popout={popout} modal={modal}>
-      ...
-   </View>
- </SplitLayout>
+ <SplitLayout popout={popout} modal={modal}>
+   <View>
+      ...
+   </View>
+ </SplitLayout>
```

# Alert

- Свойство `autoclose` типа AlertAction было переименовано в `autoClose`

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

### BannerData

- Удалено свойство `ageRestriction` добавленное по ошибке. Используйте свойство `ageRestrictions`

### ContentCard

- Удалено устаревшее свойство `image`. Используйте свойство `src`

### IconButton

- Удалено устаревшее свойство `icon`. Необходимо сделать иконки дочерним элементом

```diff
- <IconButton icon={<Icon16Clear />}/>
+ <IconButton>
+   <Icon16Clear />
+ </IconButton>
```

### TabbarItem

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

### Cell

- Удалено устаревшие свойства `removable` и `selectable`. Используйте свойства `mode="removable"` и `mode="selectable"`

```diff
- <Cell removable>
- <Cell selectable>
+ <Cell mode="removable">
+ <Cell mode="selectable">
```

### AppRoot

- Удалено устаревшее свойство `embedded`. Используйте свойство `mode="embedded"`

```diff
- <AppRoot embedded>...</AppRoot>
+ <AppRoot mode="embedded">...</AppRoot>
```

### CustomSelect

- Обновлено свойство onInputChange. Для фильтрации обновляйте props.options самостоятельно или используйте свойство filterFn.

### Button

- Удалены устаревшие значения свойства `mode` (`commerce`, `destructive`, `overlay_...`). Используйте свойства `mode` и `appearance`.

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

### ButtonGroup

- В параметр `actions` компонентов `Banner` и `ModalCardBase` для группировки кнопок теперь нужно передавать `ButtonGroup` вместо `React.Fragment`.

  ```diff
  - <Banner
  -   actions={{
  -     <React.Fragment>
  -       <Button mode="primary">Подробнее</Button>
  -       <Button mode="tertiary" hasHover={false}>Напомнить позже</Button>
  -     </React.Fragment>
  -   }}
  - />
  + <Banner
  +   actions={{
  +     <ButtonGroup mode="horizontal" gap="m">
  +       <Button>Подробнее</Button>
  +       <Button mode="secondary">Напомнить позже</Button>
  +     </ButtonGroup>
  +   }}
  + />
  ```

  ```diff
  - <ModalCardBase
  -   actionsLayout="vertical"
  -   actions={{
  -     <React.Fragment key="buttons">
  -       <Button size="l" mode="primary">Присоединиться</Button>
  -       <Button size="l" mode="secondary">Скопировать приглашение</Button>
  -     </React.Fragment>
  -   }}
  - />
  + <ModalCardBase
  +   actions={{
  +     <ButtonGroup mode="vertical" gap="m" stretched>
  +       <Button size="l" mode="primary" stretched>
  +         Присоединиться
  +       </Button>
  +       <Button size="l" mode="secondary" stretched>
  +         Скопировать приглашение
  +       </Button>
  +     </ButtonGroup>
  +   }}
  + />
  ```

### SliderSwitch

Компонент устарел и был удален. Используйте [`SegmentedControl`](#/SegmentedControl).

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

### Gallery

- Вызов функции `onDragStart` теперь происходит только в начале drag event.
- Удалено свойство `onEnd`. Используйте свойство `onDragEnd`, которое теперь принимает индекс слайда вторым параметром.

### Импорты

- Удалены константы `IS_PLATFORM_ANDROID` и `IS_PLATFORM_IOS`
- Удален тип `Scheme`
- Удалена css переменная `--font-tt`, используйте `--font-display`
- Удалены константы `ANDROID`, `IOS` и `VKCOM`, используйте `enum` `Platform.ANDROID / Platform.IOS, Platform.VKCOM`

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

## Отказ от Appearance

Мы отказываемся от Appearance в пользу [`vkui-tokens`](https://github.com/VKCOM/vkui-tokens).
Чтобы упростить переход, можно воспользоваться транслятором токенов.
Обрабатывает `css`, `less`, `ts`, `tsx`, `js`, `jsx`, `svg`, `html` файлы.

Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите следующую команду:

```shell
npx @vkontakte/vkui-token-translator
```

Транслятор переводит не все токены. Замена на новые токены может быть не совсем семантически корректной.

<br/><br/>

## Типографика

- Для компонентов типографики применяются токены `font-family` из [`vkui-tokens`](https://github.com/VKCOM/vkui-tokens)
- Начертания `"heavy"`, `"bold"`, `"semibold"`, `medium` и `"regular"` были удалены. Используйте значения `"1"`, `"2"` и `"3"`.

```diff
- <Headline weight="semibold">Text</Headline>
+ <Headline weight="1">Text</Headline>

- <Headline weight="medium">Text</Headline>
+ <Headline weight="2">Text</Headline>

- <Headline weight="regular">Text</Headline>
+ <Headline weight="3">Text</Headline>
```

<br/><br/>

## Убрана поддержка **Android < 5**

- Минимальная поддерживаемая версия **Android** увеличена до 5

<br/><br/>

## Убрана поддержка **Appearance** токенов

- Для кастомизации необходимо использовать [`vkui-tokens`](https://github.com/VKCOM/vkui-tokens)

<br/><br/>

## Unstable

Импорт нестабильных компонентов использует подход как в React (смотри [#3581](https://github.com/VKCOM/VKUI/issues/3581))

```diff
- import { ChipsSelect } from "@vkontakte/vkui/dist/unstable";
+ import { unstable_ChipsSelect as ChipsSelect } from "@vkontakte/vkui";
```

Нестабильные стили теперь находятся в `vkui.css`

```diff
import "@vkontakte/vkui/dist/vkui.css";
- import "@vkontakte/vkui/dist/unstable.css";
```

<br/><br/>

## [`ConfigProvider`](#/ConfigProvider)

- По умолчанию `appearance` определяется автоматически — в зависимости от темы, указанной в VK, или настроек ОС
- Удалено устаревшее свойство `scheme`. Для определения темы используйте свойство `appearance`
- Удалено свойство `hasNewTokens`

```diff
- <ConfigProvider scheme={scheme}>...</ConfigProvider>
+ <ConfigProvider appearance={appearance}>...</ConfigProvider>
```

<br/><br/>

## [`AppRoot`](#/AppRoot)

- Удалено свойство `noLegacyClasses`. Теперь к классам на компонентах VKUI всегда добавляется префикс `vkui` (например, `class="vkuiButton vkuiButton--primary"`).

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

## [`SimpleCell`](#/SimpleCell)

- Свойство `description` переименовано в `subtitle`
- Свойство `badge` переименовано в `badgeAfterTitle`

```diff
 <SimpleCell
-  badge={<Icon12Verified />}
+  badgeAfterTitle={<Icon12Verified />}
-  description="Команда ВКонтакте"
+  subtitle="Команда ВКонтакте"
 />
   Игорь Фёдоров
 </SimpleCell>
```

<br/><br/>

## [`Alert`](#/Alert)

- Свойство `onClose` стало обязательным
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

## [`Avatar`](#/Avatar)

- Изменены типы св-ва `badge`. Вместо `JSX.Element` теперь надо передавать `React.ComponentType<ImageBaseExpectedIconProps>` или [`ImageBaseBadgeProps`](https://github.com/VKCOM/VKUI/blob/2e72d08bcfd955a8a5c658dd189cdb5b741b12c0/src/components/ImageBase/ImageBase.tsx#L32).

  > Размер иконки теперь выставляется внутри компонента.
  >
  > ⚠ ️Поэтому переданная иконка должна принимать `width` и `height` (см. [`ImageBaseExpectedIconProps`](https://github.com/VKCOM/VKUI/blob/2e72d08bcfd955a8a5c658dd189cdb5b741b12c0/src/components/ImageBase/types.ts#L20)).

  ```diff
  import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <Avatar size={24} badge={<Icon20GiftCircleFillRed width={12} height={12} />} />
  + <Avatar size={24} badge={Icon20GiftCircleFillRed} />
  ```

  ```diff
  // Кейс, когда мы внесли изменения в иконку

  - import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <Avatar size={24} badge={<Icon20GiftCircleFillRed style={{ opacity: 0.5 }} width={12} height={12} />} />
  + import { Icon20GiftCircleFillRed as Icon20GiftCircleFillRedLib } from '@vkontakte/icons';
  + const Icon20GiftCircleFillRed = (props: React.ComponentProps<typeof Icon20GiftCircleFillRedLib>) => <Icon20GiftCircleFillRed {...props} style={{ opacity: 0.5 }} />;
  + <Avatar size={24} badge={Icon20GiftCircleFillRed} />
  ```

- Св-ва `overlayMode`, `overlayAction` и `overlayIcon` объедены в одно св-во `overlay`.

  ### Как мигрировать с `overlayMode`?

  > При передаче `overlay={true}` тема берётся из параметра `appearance`, который определяется в `ConfigProvider`.

  ```diff
  - <Avatar overlayMode="light" />
  + <Avatar overlay />
  ```

  ```diff
  - <Avatar overlayMode="dark" />
  + <Avatar overlay={{ theme: "dark" }} />
  ```

  ### Как мигрировать с `overlayAction`?

  ```diff
  - <Avatar overlayAction="hover" />
  + <Avatar overlay={{ visibility: "on-hover" }} />
  ```

  ```diff
  - <Avatar overlayAction="always" />
  + <Avatar overlay={{ visibility: "always" }} />
  ```

  ### Как мигрировать с `overlayIcon`?

  > Размер иконки теперь выставляется внутри компонента.
  >
  > ⚠ ️Поэтому переданная иконка должна принимать `width` и `height` (см. [`ImageBaseExpectedIconProps`](https://github.com/VKCOM/VKUI/blob/2e72d08bcfd955a8a5c658dd189cdb5b741b12c0/src/components/ImageBase/types.ts#L20)).

  ```diff
  import { Icon24Camera } from '@vkontakte/icons';
  - <Avatar size={24} overlayIcon={<Icon24Camera width={16} height={16} />} />
  + <Avatar size={24} overlay={{ Icon: Icon24Camera }} />
  ```

  ```diff
  // Кейс, когда мы внесли изменения в иконку

  - import { Icon24Camera } from '@vkontakte/icons';
  - <Avatar size={24} overlayIcon={<Icon24Camera style={{ color: "tomato" }} width={16} height={16} />} />
  + import { Icon24Camera as Icon24CameraLib } from '@vkontakte/icons';
  + const Icon24Camera = (props: React.ComponentProps<typeof Icon24CameraLib>) => <Icon24Camera {...props} style={{ color: "tomato" }} />;
  + <Avatar size={24} overlay={{ Icon: Icon24Camera }} />
  ```

- Удалено св-во `mode`. Используйте отдельный компонент [`Image`](#/Image).

  ```diff
  - <Avatar mode="image" />
  + <Image />
  ```

  ```diff
  - <Avatar mode="app" />
  + <Image borderRadius="l" />
  ```

- Св-во `shadow` переименовано в `withBorder`.

<br/><br/>

## [`GridAvatar`](#/GridAvatar)

- Изменены типы св-ва `badge`. Вместо `JSX.Element` теперь надо передавать `React.ComponentType<ImageBaseExpectedIconProps>` или [`ImageBaseBadgeProps`](https://github.com/VKCOM/VKUI/blob/2e72d08bcfd955a8a5c658dd189cdb5b741b12c0/src/components/ImageBase/ImageBase.tsx#L32).

  > Размер иконки теперь выставляется внутри компонента.
  >
  > ⚠ ️Поэтому переданная иконка должна принимать `width` и `height` (см. [`ImageBaseExpectedIconProps`](https://github.com/VKCOM/VKUI/blob/2e72d08bcfd955a8a5c658dd189cdb5b741b12c0/src/components/ImageBase/types.ts#L20)).

  ```diff
  import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <GridAvatar size={24} badge={<Icon20GiftCircleFillRed width={12} height={12} />} />
  + <GridAvatar size={24} badge={Icon20GiftCircleFillRed} />
  ```

  ```diff
  // Кейс, когда мы внесли изменения в иконку

  - import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <GridAvatar size={24} badge={<Icon20GiftCircleFillRed style={{ opacity: 0.5 }} width={12} height={12} />} />
  + import { Icon20GiftCircleFillRed as Icon20GiftCircleFillRedLib } from '@vkontakte/icons';
  + const Icon20GiftCircleFillRed = (props: React.ComponentProps<typeof Icon20GiftCircleFillRedLib>) => <Icon20GiftCircleFillRed {...props} style={{ opacity: 0.5 }} />;
  + <GridAvatar size={24} badge={Icon20GiftCircleFillRed} />
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

## [`File`](#/File)

- Удалено устаревшее свойство `controlSize`. Используйте свойство `size`

```diff
<File
-  controlSize="s"
+  size="s"
>
  Загрузить
</File>
```

<br/><br/>

## [`Tooltip`](#/Tooltip)

- Удалено устаревшее свойство `mode`. Используйте свойство `appearance`

```diff
<Tooltip
-  mode="light"
+  appearance="white"
>
  ...
</Tooltip>

<Tooltip
-  mode="accent"
+  appearance="accent"
>
  ...
</Tooltip>
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

## [`UsersStack`](#/UsersStack)

- Свойство `size` теперь имеет тип `"s" | "m" | "l"`

```diff
  <UsersStack
-   size="xs"
+   size="s"
  />

  <UsersStack
-   size="s"
+   size="m"
  />

  <UsersStack
-   size="m"
+   size="l"
  />
```

## [`Spacing`](#/Spacing)

- Свойство `separator` удалено. Используйте компонент [`Separator`](#/Separator)

<br/><br/>

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

## [`Counter`](#/Counter)

- Свойство `mode` теперь не игнорируется в кнопке.

<br/><br/>

## `FormStatus` -> [`Banner`](#/Banner)

- `FormStatus` удален, вместо него используйте [`Banner`](#/Banner).

<br/><br/>

## `Dropdown` -> [`Popover`](#/Popover)

> ⚠️Компонент остаётся нестабильным (см. [Unstable](#//Unstable)).

- `Dropdown` переименован в `Popover`.

<br/><br/>

## `SimpleCheckbox` -> [`Checkbox`](#/Checkbox)

- `SimpleCheckbox` был удален. Используйте [`Checkbox`](#/Checkbox)

<br/><br/>

## `LocaleProviderContext` -> `ConfigProviderContext`

- `LocaleProviderContext` был удален. Используйте [`LocaleProvider`](https://vkcom.github.io/VKUI/#/LocaleProvider) и `useConfigProvider`

<br/><br/>

## `getClassName`

- `getClassName` был удален. Используйте `getPlatformClassName`

<br/><br/>

## Типы и импорты

- Удалены константы `IS_PLATFORM_ANDROID` и `IS_PLATFORM_IOS`
- Удален тип `Scheme`
- Тип `VKUITouchEventHander` переименован в `VKUITouchEventHandler`
- Удалены константы `ANDROID`, `IOS` и `VKCOM`, используйте `enum` `Platform.ANDROID / Platform.IOS, Platform.VKCOM`

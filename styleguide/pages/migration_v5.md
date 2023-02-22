Документацию по миграции с v3 на v4 можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v4.0.0).

<br/><br/>

## Адаптивность

**Добавлена поддержка SSR** 🎉

В **v4** были проблемы с SSR, т.к. для адаптивности мы использовали браузерный API для получения размеров экрана и
дальнейшего высчитывания параметров адаптивности. А на сервере нет ни браузерного API, ни знаний о размерах экрана.
Из-за этого на сервере и на клиенте могли рендерится разные HTML, следовательно, это вызывало ошибки при гидратации.

В **v5** компоненты, которые гарантировано могут отрендерится на сервере, мы перевели на адаптивность через
`CSS Media Queries`. Для всплывающих окон адаптивность осталась через браузерное API, т.к. такие окна появляется после
первого рендера: либо пользователем, либо программно.

Вследствие этих изменений возникло **BREAKING CHANGE** изменение – `AdaptivityProvider` больше не слушает
изменение экрана, поэтому `useAdaptivity` перестал динамически возвращать значения параметров адаптивности.

```jsx static
const App = () => (
  <React.Fragment>
    <AdaptivityProvider>
      <WithoutSizeXOverride />
    </AdaptivityProvider>

    <AdaptivityProvider sizeX={SizeType.REGULAR}>
      <WithSizeXOverride />
    </AdaptivityProvider>
  </React.Fragment>
);

const WithoutSizeXOverride = () => {
  const { sizeX } = useAdaptivity();
  console.log(sizeX); // undefined
  return null;
};

const WithSizeXOverride = () => {
  const { sizeX } = useAdaptivity();
  console.log(sizeX); // "regular"
  return null;
};
```

В **v4** вы могли использовать `useAdaptivity()` для переключения видимости элементов. На замену ему мы создали хук
`useAdaptivityConditionalRender`. Далее будет быстрый пример, но обязательно ознакомьтесь с обновленным разделом
[Адаптивность](#/Adaptivity).

```diff
- const { sizeX } = useAdaptivity();
- const icon = sizeX === SizeType.REGULAR ? <Icon24 /> : <Icon16 />;
- return icon;

+ const { sizeX } = useAdaptivityConditionalRender();
+ const icon = (
+   <React.Fragment>
+     {sizeX.compact && <Icon16 className={sizeX.compact.className} />}
+     {sizeX.regular && <Icon24 className={sizeX.regular.className} />}
+   </React.Fragment>
+ );
+ return icon;
```

### Другие изменения касаемые адаптивности

- Удалён HOC `withAdaptivity` – используйте хук `useAdaptivity()`
- `deviceHasHover` переименован в `hasHover`

  ```diff
  - <AdaptivityProvider deviceHasHover>
  + <AdaptivityProvider hasHover>
  ```

- `hasMouse` переименован в `hasPointer`

  ```diff
  - <AdaptivityProvider hasMouse>
  + <AdaptivityProvider hasPointer>
  ```

<br/><br/>

## Обновление React и Typescript

- Минимальная поддерживаемая версия **React** увеличена до v17.0.0
- Минимальная поддерживаемая версия **Typescript** увеличена до v4.7.4

<br/><br/>

## Обновление [`@vkontakte/icons`](https://github.com/VKCOM/icons) до v2.0.1

Установите через

```sh
npm install @vkontakte/icons@2.0.1
# или
yarn add @vkontakte/icons@2.0.1
# или
pnpm add @vkontakte/icons@2.0.1
```

По изменениям в версии смотрите [release note](https://github.com/VKCOM/icons/releases/tag/v2.0.1). Вряд ли они вас
коснутся. Главное — это удаление лишней `div`-обёртки вокруг `svg`.

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

  > ⚠️ **VK Sans Display** больше недоступен начиная с v5 (подробнее ответили здесь https://github.com/VKCOM/VKUI/discussions/4201)

- Начертания `"heavy"`, `"bold"`, `"semibold"`, `medium` и `"regular"` были удалены. Используйте значения `"1"`, `"2"` и `"3"`. <br /><br />

  [Headline](#/Headline)

  ```diff
  - <Headline weight="semibold">Text</Headline>
  + <Headline weight="1">Text</Headline>

  - <Headline weight="medium">Text</Headline>
  + <Headline weight="2">Text</Headline>

  - <Headline weight="regular">Text</Headline>
  + <Headline weight="3">Text</Headline>
  ```

  [Subhead](#/Subhead)

  ```diff
  - <Subhead weight="semibold">Text</Subhead>
  + <Subhead weight="1">Text</Subhead>

  - <Subhead weight="medium">Text</Subhead>
  + <Subhead weight="2">Text</Subhead>

  - <Subhead weight="regular">Text</Subhead>
  + <Subhead weight="3">Text</Subhead>
  ```

  [Title](#/Title)

  ```diff
  - <Title weight="semibold">Text</Title>
  + <Title weight="1">Text</Title>

  - <Title weight="medium">Text</Title>
  + <Title weight="2">Text</Title>

  - <Title weight="regular">Text</Title>
  + <Title weight="3">Text</Title>
  ```

  [Text](#/Text)

  ```diff
  - <Text weight="semibold">Text</Text>
  + <Text weight="1">Text</Text>

  - <Text weight="medium">Text</Text>
  + <Text weight="2">Text</Text>

  - <Text weight="regular">Text</Text>
  + <Text weight="3">Text</Text>
  ```

  [Caption](#/Caption)

  ```diff
  - <Caption weight="semibold">Text</Caption>
  + <Caption weight="1">Text</Caption>

  - <Caption weight="medium">Text</Caption>
  + <Caption weight="2">Text</Caption>

  - <Caption weight="regular">Text</Caption>
  + <Caption weight="3">Text</Caption>
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

## Отказ от CSS селекторов `vkui__root` и `vkui__portal-root`

Раньше [`AppRoot`](#/AppRoot) автоматически устанавливал в **root-элемент** классы `vkui__root` и `vkui__portal-root`,
а в случае `<AppRoot mode="partial">` надо было добавить `vkui__root` вручную. В CSS этим классам задавались правила для
`font-family` и `color`. Глобальное перебивание этих свойств создавало проблемы (cм. [#3593](https://github.com/VKCOM/VKUI/issues/3593)),
поэтому мы избавились от необходимости в этих классах.

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

- Свойство `badge` выделено в саб-компонент. Используйте `Avatar.Badge` или `Avatar.BadgeWidthPreset` (для `"online"` и `"online-mobile"`).

  ```diff
  import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <Avatar size={24} src="#" badge={<Icon20GiftCircleFillRed width={24} height={24} />}  />
  + <Avatar size={24} src="#">
  +   <Avatar.Badge>
  +     <Icon20GiftCircleFillRed width={24} height={24} />
  +   </Avatar.Badge>
  + </Avatar>
  ```

  > `Avatar.Badge` принимает параметр `background` со значениями `"stroke"` или `"shadow"` (по умолчанию).

  ```diff
  import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <Avatar size={24} src="#" badge="online"  />
  + <Avatar size={24} src="#">
  +   <Avatar.BadgeBadgeWidthPreset preset="online" />
  + </Avatar>
  ```

  Аналогично для `badge="online-mobile"`.

- Свойства `overlayMode`, `overlayAction` и `overlayIcon` вынесены и объединены в саб-компонент. Используйте `Avatar.Overlay`.

  ### Как мигрировать с `overlayIcon`?

  ```diff
  import { Icon24AddOutline } from '@vkontakte/icons';
  - <Avatar size={24} overlayIcon={<Icon24Camera width={16} height={16} />} />
  + <Avatar size={24}>
  +   <Avatar.Overlay>
  +     <Icon24AddOutline />
  +   </Avatar.Overlay>
  + </Avatar>
  ```

  ### Как мигрировать с `overlayMode`?

  ```diff
  - <Avatar size={24} overlayMode="light" />
  + <Avatar size={24}>
  +   <Avatar.Overlay theme="light">
  +     <Icon24AddOutline />
  +   </Avatar.Overlay>
  + </Avatar>
  ```

  ```diff
  - <Avatar size={24} overlayMode="dark" />
  + <Avatar size={24}>
  +   <Avatar.Overlay theme="dark">
  +     <Icon24AddOutline />
  +   </Avatar.Overlay>
  + </Avatar>
  ```

  > Если не передавать `theme`, то тема будет браться из параметра `appearance`, который определяется в `ConfigProvider`.

  ### Как мигрировать с `overlayAction`?

  ```diff
  - <Avatar size={24} overlayAction="hover" />
  + <Avatar size={24}>
  +   <Avatar.Overlay visibility="on-hover">
  +     <Icon24AddOutline />
  +   </Avatar.Overlay>
  + </Avatar>
  ```

  ```diff
  - <Avatar size={24} overlayAction="always" />
  + <Avatar size={24}>
  +   <Avatar.Overlay visibility="always">
  +     <Icon24AddOutline />
  +   </Avatar.Overlay>
  + </Avatar>
  ```

- Удалено свойство `mode`. Используйте отдельный компонент [`Image`](#/Image).

  ```diff
  - <Avatar mode="image" />
  + <Image />
  ```

  ```diff
  - <Avatar mode="app" />
  + <Image borderRadius="l" />
  ```

- Свойство `shadow` переименовано в `withBorder`.

<br/><br/>

## [`InitialsAvatar`](#/InitialsAvatar)

- Компонент удалён. Используйте [`Avatar`](#/Avatar)

  ```diff
  - <InitialsAvatar gradientColor="blue">ИМ</InitialsAvatar>
  + <Avatar gradientColor="blue" initials="ИМ" />
  ```

<br/><br/>

## [`GridAvatar`](#/GridAvatar)

- Свойство `badge` выделено в саб-компонент. Используйте `GridAvatar.Badge`.

  ```diff
  import { Icon20GiftCircleFillRed } from '@vkontakte/icons';
  - <GridAvatar size={24} src="#" badge={<Icon20GiftCircleFillRed width={24} height={24} />}  />
  + <GridAvatar size={24} src="#">
  +   <GridAvatar.Badge>
  +     <Icon20GiftCircleFillRed width={24} height={24} />
  +   </GridAvatar.Badge>
  + </GridAvatar>
  ```

  > `GridAvatar.Badge` принимает параметр `background` со значениями `"stroke"` или `"shadow"` (по умолчанию).

  Раньше можно было передать `badge="online"` или `badge="online-mobile"`. Эта возможность удалена, т.к. эти статусы не соответствуют сущности `GridAvatar`.

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

## [`FormStatus`](#/FormStatus)

Компонент получил боковые отступы, поэтому оборачивать его в `FormItem` больше не нужно.

```diff
- <FormItem>
    <FormStatus header="Некорректный мобильный номер" mode="error">
      Необходимо корректно ввести номер в международном формате
    </FormStatus>
- </FormItem>
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

## `Dropdown` -> [`Popover`](#/Popover)

> ⚠️ Компонент остаётся нестабильным (см. [Unstable](#/Unstable)).

- `Dropdown` переименован в `Popover`.

<br/><br/>

## `SimpleCheckbox` -> [`Checkbox`](#/Checkbox)

- `SimpleCheckbox` был удален. Используйте [`Checkbox`](#/Checkbox)

<br/><br/>

## `LocaleProviderContext` -> `ConfigProviderContext`

- `LocaleProviderContext` был удален. Используйте [`LocaleProvider`](https://vkcom.github.io/VKUI/#/LocaleProvider) и `useConfigProvider`

<br/><br/>

## `getClassName`

- `getClassName` был удален. Устанавливайте соответствующий селектор для платформы самостоятельно, используя `usePlatform()`.

<br/><br/>

## Типы и импорты

- Удалены константы `IS_PLATFORM_ANDROID` и `IS_PLATFORM_IOS`
- Удален тип `Scheme`
- Тип `VKUITouchEventHander` переименован в `VKUITouchEventHandler`
- Удалены константы `ANDROID`, `IOS` и `VKCOM`, используйте `enum` `Platform.ANDROID / Platform.IOS, Platform.VKCOM`

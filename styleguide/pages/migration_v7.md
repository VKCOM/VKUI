> Документацию по миграции с **v5** на **v6** можно найти [здесь](https://github.com/VKCOM/VKUI/releases/tag/v6.0.0).

> **Автоматизация обновления до v7**
>
> Для `Typescript`-файлов можно воспользоваться инструментом по автоматической миграции ваших компонентов.
>
> 1. Для начала обновите ваше приложение до новой мажорной версии (**v7**) в соответствии с требованиями
>    вашего пакетного менеджера и среды.
> 2. Перейдите в директорию с исходниками вашего проекта (обычно это `src/`) и запустите команду `npx @vkontakte/vkui-codemods`.
> 3. То, что можно изменить на месте, подвергнется миграции, о более сложных кейсах вы будете
>    оповещены в консоли по ходу выполнения команды из **п.2**.
>
> Информацию по доступным параметрам можно узнать через опцию `--help`
>
> ```shell
> npx @vkontakte/vkui-codemods --help
> ```
>
> Более подробная инструкция расположена на странице пакета [@vkontakte/vkui-codemods](https://www.npmjs.com/package/@vkontakte/vkui-codemods).

## Содержание

- <a href="{{anchor}}">⚙️ Сборка</a>
- <a href="{{anchor}}">🌗 `Appearance` → `ColorScheme`</a>
- <a href="{{anchor}}">🧩 Компоненты</a>
  - <a href="{{anchor}}">ActionSheet</a>
  - <a href="{{anchor}}">Alert</a>
  - <a href="{{anchor}}">Banner</a>
  - <a href="{{anchor}}">Button</a>
  - <a href="{{anchor}}">Calendar</a>
  - <a href="{{anchor}}">CardGrid</a>
  - <a href="{{anchor}}">CardScroll</a>
  - <a href="{{anchor}}">Cell</a>
  - <a href="{{anchor}}">CellButton</a>
  - <a href="{{anchor}}">ContentCard</a>
  - <a href="{{anchor}}">Counter</a>
  - <a href="{{anchor}}">CustomScrollView</a>
  - <a href="{{anchor}}">🗑️ DatePicker</a>
  - <a href="{{anchor}}">FormItem</a>
  - <a href="{{anchor}}">FormStatus</a>
  - <a href="{{anchor}}">Header</a>
  - <a href="{{anchor}}">HorizontalCell</a>
  - <a href="{{anchor}}">HorizontalCellShowMore</a>
  - <a href="{{anchor}}">Link</a>
  - <a href="{{anchor}}">MiniInfoCell</a>
  - <a href="{{anchor}}">ModalCard</a>
  - <a href="{{anchor}}">OnboardingTooltip</a>
  - <a href="{{anchor}}">PanelHeader</a>
  - <a href="{{anchor}}">PanelHeaderButton</a>
  - <a href="{{anchor}}">PanelHeaderContent</a>
  - <a href="{{anchor}}">RichCell</a>
  - <a href="{{anchor}}">ScreenSpinner</a>
  - <a href="{{anchor}}">ScrollArrow</a>
  - <a href="{{anchor}}">Select</a>
  - <a href="{{anchor}}">Separator</a>
  - <a href="{{anchor}}">SimpleCell</a>
  - <a href="{{anchor}}">Spinner</a>
  - <a href="{{anchor}}">SplitLayout</a>
  - <a href="{{anchor}}">SubnavigationBar</a>
  - <a href="{{anchor}}">SubnavigationButton</a>
  - <a href="{{anchor}}">TabbarItem</a>
  - <a href="{{anchor}}">Tooltip</a>
  - <a href="{{anchor}}">UsersStack</a>

<br/><hr/><br/>

## ⚙️ Сборка

<br/>

- Если вы завязывались на CSS-классы компонентов, то необходимо пройтись по таким местам и проверить классы на соответствие, т.к.
  теперь за их формирование отвечает **CSS Modules**.

  > ⚠️ Мы всё ещё не рекомендуем завязываться на CSS-классы компонентов – в любой момент они могут измениться.

- Импортирование теперь ограничено свойством `"exports"` в `package.json`. Если вам нужен какой-то внутренний функционал, то следует
  создать [issues](https://github.com/VKCOM/VKUI/issues/new/choose) на его экспорт, чтобы мы рассмотрели такую возможность.
- Поднята целевая версия `ECMAScript` для компиляции до `es2017`.
- Удалена **CommonJS** сборка – теперь библиотека поставляется только как **ESM**. В зависимости от вашего инструмента для сборки,
  потребуется настроить трансформацию для пакета `@vkontakte/vkui`.
  <details>
  <summary>Возможные проблемы в **Jest <= 29**</summary>

  **Jest** пока не умеет в поле `"exports"` и ориентируется на поле `"main"`, которого уже нет в **VKUI**.

  Как **Workaround**, можно написать свой `jest-resolver.js` (см. https://github.com/jestjs/jest/issues/9771#issuecomment-776681032).

  ```js static
  const DEPENDENCIES_WITH_NO_MAIN_FIELD = ['@vkontakte/vkui'];

  module.exports = (path, options) =>
    options.defaultResolver(path, {
      ...options,
      packageFilter: (pkg) =>
        DEPENDENCIES_WITH_NO_MAIN_FIELD.includes(pkg.name) ? { ...pkg, main: pkg.module } : pkg,
    });
  ```

  </details>

  <details>
  <summary>Возможные проблемы в **Vitets**</summary>

  Может падать с ошибкой `SyntaxError: Named export 'IconAppearanceProvider' not found. The requested module '@vkontakte/icons' is a CommonJS module, which may not support all module.exports as named exports.`.

  Чтобы исправить это, нужно добавить `@vkontakte/vkui` в параметр `test.server.deps.inline` в конфиге `vitest.config.*`.

  ```js static
  import { defineConfig } from 'vite';

  export default defineConfig(({ mode }) => {
    return {
      resolve: {},
      test: { server: { deps: { inline: [/@vkontakte\/vkui/] } } },
    };
  });
  ```

  </details>

<br/><hr/><br/>

## 🌗 `Appearance` → `ColorScheme`

<br/>

Название `Appearance` для указания светлой или тёмной темы совпадало с названием параметров некоторых компонентов, что могло путать,
поэтому пришли к названию `ColorScheme`, также как свойство в CSS.

Это привело к следующим изменениям:

- Константа `Appearance` переименована в `ColorScheme`.
  <details>
  <summary>Миграция</summary>

  ```diff
  - export const Appearance = {
  + export const ColorScheme = {
    DARK: 'dark',
    LIGHT: 'light',
  } as const;

  - const apperance = Appearance.DARK
  + const colorScheme = ColorScheme.DARK
  ```

  </details>

- Тип `AppearanceType` переименован в `ColorSchemeType`.
  <details>
  <summary>Миграция</summary>

  ```diff
  - const appearance: ApperanceType = Appearance.DARK;
  + const colorScheme: ColorSchemeType = ColorScheme.DARK;
  ```

  </details>

- `AppearanceProvider` переименован в `ColorSchemeProvider`, `AppearanceProviderProps` переименован в `ColorSchemeProviderProps`.
  <details>
  <summary>Миграция</summary>

  ```diff
  - const props: AppearanceProviderProps = {
  + const props: ColorSchemeProviderProps = {
    value: 'dark'
  }
  ```

  ```diff
  - <AppearanceProvider value={colorScheme}>
  + <ColorSchemeProvider value={colorScheme}>
    <AdaptivityProvider sizeY="regular">
      <Div style={{ padding: 10 }}>
        <Textarea id="textarea" />
      </Div>
    </AdaptivityProvider>
  - </AppearanceProvider>
  + </ColorSchemeProvider>
  ```

  </details>

- Хук `useAppearance` переименован в `useColorScheme`.
  <details>
  <summary>Миграция</summary>

  ```diff
  - const appearance = useAppearance();
  + const colorScheme = useColorScheme();
  ```

  </details>

- В `ConfigProvider` и `ConfigProviderProps` свойство `appearance` переименовано в `colorScheme`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ConfigProvider
    platform="vkcom"
  - appearance="light"
  + colorScheme="light"
  >
    <AdaptivityProvider viewWidth={ViewWidth.DESKTOP} hasPointer>
      <Div>Content</Div>
    </AdaptivityProvider>
  </ConfigProvider>
  ```

  </details>

- В `ConfigProviderContext` свойство `appearance` переименовано в `colorScheme`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ConfigProviderContext.Provider value={{
    ...configContext,
    - appearance: 'light',
    + colorScheme: 'light'
  }}>
    {children}
  </ConfigProviderContext.Provider>
  ```

  ```diff
  const {
    ...args,
  - appearance,
  + colorScheme
  } = useConfigProvider();
  ```

  </details>

<br/><hr/><br/>

## 🧩 Компоненты

<br/>

### [ActionSheet](https://vkcom.github.io/VKUI/7.0.0/#/ActionSheet)

- Свойство `header` переименовано в `title`.
- Свойство `text` переименовано в `description`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ActionSheet
    onClose={() => {}}
  - header="Вы действительно хотите удалить это видео из Ваших видео?"
  + title="Вы действительно хотите удалить это видео из Ваших видео?"
  - text="Данное действие реально удалит видео, подумайте!"
  + description="Данное действие реально удалит видео, подумайте!"
  >
    <ActionSheetItem mode="destructive">Удалить видео</ActionSheetItem>
  </ActionSheet>
  ```

  </details>

<hr/>

### [Alert](https://vkcom.github.io/VKUI/7.0.0/#/Alert)

- Свойство `header` переименовано в`title`.
- Свойство `text` переименовано в `description`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Alert
  - header="Подтвердите действие"
  + title="Подтвердите действие"
  - text="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
  + description="Вы уверены, что хотите лишить пользователя права на модерацию контента?"
    actionsAlign="left"
    actionsLayout="horizontal"
  />
  ```

  </details>

<hr/>

### [Banner](https://vkcom.github.io/VKUI/7.0.0/#/Banner)

- Свойство `subheader` переименовано в `subtitle`.
- Свойство `text` переименовано в `extraSubtitle`.
- Свойство `header` переименовано в `title`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Banner
    before={<Avatar size={48} src={'user_lihachyov'} />}
  - header="Сегодня день рождения Михаила Лихачёва"
  + title="Сегодня день рождения Михаила Лихачёва"
  - subheader="Подарите подарок"
  + subtitle="Подарите подарок"
  - text="Дополнительный текст"
  + extraSubtitle="Дополнительный текст"
    asideMode="dismiss"
  />
  ```

  </details>

- Свойство `asideMode` переименовано в `after`.
  <details>
  <summary>Миграция </summary>

  ```diff
  <Banner
    before={<Avatar size={48} src={'user_lihachyov'} />}
    title="Сегодня день рождения Михаила Лихачёва"
    subtitle={"Подарите подарок"}
    extraSubtitle={"Дополнительный текст"}
  - asideMode="dismiss"
  + after="dismiss"
  />
  ```

  </details>

<hr/>

### [Button](https://vkcom.github.io/VKUI/7.0.0/#/Button)

Изменен цвет компонента в состоянии `mode="primary"`

и `appearance="neutral"`, при миграции рекомендуется выставлять `mode="secondary"` при `appearance="neutral"`.

<details>
<summary>Миграция</summary>

```diff
<Button
  appearance="neutral"
+ mode="secondary"
/>
```

</details>

<hr/>

### [Calendar](https://vkcom.github.io/VKUI/7.0.0/#/Calendar)

Свойство `onClose` переименовано в `onDoneButtonClick`.

<details>
<summary>Миграция</summary>

```diff
<Calendar
- onClose={() => void 0}
+ onDoneButtonClick={() => void 0}
/>
```

</details>

<hr/>

### [CardGrid](https://vkcom.github.io/VKUI/7.0.0/#/CardGrid)

Свойство `spaced` переименовано в `padding`.

<details>
<summary>Миграция</summary>

```diff
<CardGrid
  size="s"
- spaced
+ padding
>
  <Card>
    <div style={{ paddingBottom: '66%' }} />
  </Card>
</CardGrid>
```

</details>

<hr/>

### [CardScroll](https://vkcom.github.io/VKUI/7.0.0/#/CardScroll)

Свойство `noSpaces` заменено на `padding`.

<details>
<summary>Миграция</summary>

```diff
<CardScroll
  size="s"
- noSpaces
+ padding={false}
>
  <Card>
    <div style={{ paddingBottom: '66%' }} />
  </Card>
</CardScroll>
```

</details>

<hr/>

### [Cell](https://vkcom.github.io/VKUI/7.0.0/#/Cell)

- Свойство `subhead` переименовано в `overTitle`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Cell
    onClick={() => {}}
  - subhead={"Subhead"}
  + overTitle={"Subhead"}
    indicator="При использовании"
  >
    Геолокация
  </Cell>
  ```

  </details>

- Свойство `expandable` переименовано в `chevron`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Cell
    onClick={() => {}}
  - expandable="auto"
  + chevron="auto"
    indicator="При использовании"
  >
    Геолокация
  </Cell>
  ```

  </details>

<hr/>

### [CellButton](https://vkcom.github.io/VKUI/7.0.0/#/CellButton)

Свойство `subhead` переименовано в `overTitle`.

<details>
<summary>Миграция</summary>

```diff
<CellButton
  onClick={() => {}}
- subhead={"Subhead"}
+ overTitle={"Subhead"}
  indicator="При использовании"
>
  Геолокация
</CellButton>
```

</details>

<hr/>

### [ContentCard](https://vkcom.github.io/VKUI/7.0.0/#/ContentCard)

- Свойство `header` переименовано в `title`.
- Свойство `subtitle` переименовано в `overTitle`.
- Свойство `text` переименовано в `description`.
- Свойство `headerComponent` переименовано в `titleComponent`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ContentCard
  - subtitle="VKUI"
  + overTitle="VKUI"
  - header="ContentCard example"
  + title="ContentCard example"
  - headerComponent="h4"
  + titleComponent="h4"
    caption="VKUI Styleguide > Blocks > ContentCard"
  - text="Badlands is the story about dreams and cruel reality..."
  + description="Badlands is the story about dreams and cruel reality..."
  />
  ```

  </details>

<hr/>

### [Counter](https://vkcom.github.io/VKUI/7.0.0/#/Counter)

Изменены значения свойства `mode`.

<details>
<summary>Таблица миграции значений</summary>

| **v6**             | **v7**                                   |
| ------------------ | ---------------------------------------- |
| `mode="inherit"`   | _без изменений_                          |
| `mode="primary"`   | `mode="primary" appearance="accent"`     |
| `mode="secondary"` | `mode="primary" appearance="neutral"`    |
| `mode="prominent"` | `mode="primary" appearance="accent-red"` |
| `mode="contrast"`  | `mode="contrast" appearance="accent"`    |

</details>

<hr/>

### [CustomScrollView](https://vkcom.github.io/VKUI/7.0.0/#/CustomScrollView)

Так как дизайн не документирует поведение ползунка и полосы прокрутки, было решено перейти на использование системного поведения
и тем самым облегчить компонент за счёт стилизации прокрутки полностью через CSS (**Firefox < 64** стилизация останется браузерной).

> Если по какой-то причине вам всё же нужна JS-реализация, то советуем присмотреться к готовой библиотеке [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) или к другим альтернативам.

В связи с этим:

- удалено свойство `boxRef`, вместо него можно использовать свойство `getRootRef`;
  <details>
  <summary>Миграция</summary>

  ```diff
  <CustomScrollView
    className={"className"}
  - boxRef={ref}
  + getRootRef={ref}
    enableHorizontalScroll
  >
  ...
  </CustomScrollView>
  ```

  </details>

- удалены свойства `windowResize`, `autoHideScrollbar`, `autoHideScrollbar`, это изменение также коснулось
  [CustomSelect](https://vkcom.github.io/VKUI/7.0.0/#/CustomSelect), [ChipsSelect](https://vkcom.github.io/VKUI/7.0.0/#/ChipsSelect)
  и [Select](https://vkcom.github.io/VKUI/7.0.0/#/Select);
  <details>
  <summary>Миграция</summary>

  ```diff
  <CustomScrollView
    className={"className"}
  - windowResize
  - autoHideScrollbar
  - autoHideScrollbarDelay={1000}
    enableHorizontalScroll
  >
  ...
  </CustomScrollView>
  ```

  </details>

  <details>
  <summary>Миграция `CustomSelect`</summary>

  ```diff
  <CustomSelect
    id="select-type-select-id"
    value={selectType}
    placeholder="Не задан"
    options={selectTypes}
  - autoHideScrollbar
  - autoHideScrollbarDelay={1500}
    onChange={(e) => setSelectType(e.target.value)}
  />
  ```

  </details>

  <details>
  <summary>Миграция `ChipsSelect`</summary>

  ```diff
  <ChipsSelect
    id="colors"
    value={selectedColors}
    onChange={setSelectedColors}
    options={colors}
  - autoHideScrollbar
  - autoHideScrollbarDelay={1500}
    placeholder="Не выбраны"
    creatable="Добавить цвет"
    allowClearButton={true}
  />
  ```

  </details>

  <details>
  <summary>Миграция `Select`</summary>

  ```diff
  <Select
    id="select-type-select-id"
    value={selectType}
    placeholder="Не задан"
    options={selectTypes}
  - autoHideScrollbar
  - autoHideScrollbarDelay={1500}
    onChange={(e) => setSelectType(e.target.value)}
  />
  ```

  </details>

<hr/>

### 🗑️ [DatePicker](https://vkcom.github.io/VKUI/7.0.0/#/DatePicker)

Компонент был удален, так как являлся устаревшим. На замену
ему можно использовать [Input](https://vkcom.github.io/VKUI/#/Input), [Select](https://vkcom.github.io/VKUI/#/Select)
и [DateInput](https://vkcom.github.io/VKUI/#/DateInput). О том что лучше использовать, можно прочитать
в обсуждении [#7070](https://github.com/VKCOM/VKUI/discussions/7070).

<hr/>

### [FormItem](https://vkcom.github.io/VKUI/7.0.0/#/FormItem)

Удалено свойство `topNode`, вместо него можно использовать свойство `top`.

<details>
<summary>Миграция</summary>

```diff
<FormItem
- topNode={
+ top={
  <FormItem.Top>
    <FormItem.TopLabel htmlFor="about">Дополнительная информация</FormItem.TopLabel>
    <FormItem.TopAside>0/100</FormItem.TopAside>
  </FormItem.Top>
}
>
<Textarea id="about" name="about" />
</FormItem>
```

</details>

<hr/>

### [FormStatus](https://vkcom.github.io/VKUI/7.0.0/#/FormStatus)

Свойство `header` переименовано в `title`.

<details>
<summary>Миграция</summary>

```diff
<FormStatus
- header="Некорректный мобильный номер"
+ title="Некорректный мобильный номер"
  mode="error"
>
  Необходимо корректно ввести номер в международном формате
</FormStatus>
```

</details>

<hr/>

### [Header](https://vkcom.github.io/VKUI/7.0.0/#/Header):

- Изменен формат `size` с `'regular' | 'large'` на `'m' | 'l'`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Header
    mode="primary"
  - size="large"
  + size="l"
  >
    Большой заголовок
  </Header>
  ```

  </details>

- Свойство `mode` было удалено. Логика удаления свойства `mode`.
  <details>
  <summary>Таблица миграции значений</summary>

  | **v6**                    | **v7**      |
  | ------------------------- | ----------- |
  | `size="l" mode="primary"` | `size="xl"` |
  | `size="m" mode="primary"` | `size="m"`  |
  | `mode="tertiary"`         | `size="m"`  |
  | `mode="secondary"`        | `size="s"`  |

  </details>

- Свойство `aside` переименовано в `after`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Header
    mode="primary"
    subtitle="SOHN — Conrad"
    subtitleComponent="h3"
  - aside={
  + after={<Link>Показать все</Link>}
  />
  ```

  </details>

- Свойство `aside` переименовано в `after`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Header
    mode="primary"
    subtitle="SOHN — Conrad"
    subtitleComponent="h3"
  - aside={
  + after={
      <Link>
        Показать все
        {<Icon12ChevronOutline />}
      </Link>
    }
  />
  ```

  </details>

<hr/>

### [HorizontalCell](https://vkcom.github.io/VKUI/7.0.0/#/HorizontalCell)

- Свойство `header` переименовано в `title`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <HorizontalCell
  - header="Header"
  + title="Header"
  />
  ```

  </details>

- Значение `size="l"` теперь имеет ограничение по максимальной ширине, воспользуйтесь `size="auto"` там, где это необходимо.

<hr/>

### [HorizontalCellShowMore](https://vkcom.github.io/VKUI/7.0.0/#/HorizontalCellShowMore)

Значение `size="l"` удалено, используйте `size="m"`.

<details>
<summary>Миграция</summary>

```diff
- <HorizontalCellShowMore size="l">
+ <HorizontalCellShowMore size="m">
```

</details>

<hr/>

### [Link](https://vkcom.github.io/VKUI/7.0.0/#/Link)

Теперь для передачи иконок следует использовать параметры `before` и `after`,

CSS свойства, которые через каскад задавались переданным иконкам в `children`, удалены.

<details>
<summary>Миграция</summary>

```diff
<Link
  href="#"
+ after={<Icon12Example />}
>
  Текст ссылки
- <Icon12Example />
</Link>
```

</details>

<hr/>

### [MiniInfoCell](https://vkcom.github.io/VKUI/7.0.0/#/MiniInfoCell)

Свойство `expandable` переименовано в `chevron`.

<details>
<summary>Миграция</summary>

```diff
<MiniInfoCell
  before={<Icon20WorkOutline />}
  mode="add"
  onClick={() => console.log('Указать место учёбы')}
  textWrap="short"
- expandable
+ chevron
>
  Укажите место учёбы
</MiniInfoCell>
```

</details>

<hr/>

### [ModalCard](https://vkcom.github.io/VKUI/7.0.0/#/ModalCard)

- Свойство `header` переименовано в `title`.
- Свойство `subheader` переименовано в `description`.
- Свойство `headerComponent` переименовано в `titleComponent`.
- Свойство `subheaderComponent` переименовано в `descriptionComponent`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ModalCard
    dismissButtonMode="inside"
    dismissLabel="Закрыть"
  - header="Десктопная и планшетная версии с крестиком внутри"
  + title="Десктопная и планшетная версии с крестиком внутри"
  - headerComponent="h1"
  + titleComponent="h1"
  - subheader="Сверху будет безопасный отступ до иконки"
  + description="Сверху будет безопасный отступ до иконки"
  - subheaderComponent="span"
  + descriptionComponent="span"
    actions={
      <React.Fragment>
        <Button size="l" mode="primary" stretched>
          Некая кнопка
        </Button>
      </React.Fragment>
    }
  />
  ```

  </details>

<hr/>

### [OnboardingTooltip](https://vkcom.github.io/VKUI/7.0.0/#/OnboardingTooltip)

Переименованы свойства `text` на `description`, `header` на `title`.

<details>
<summary>Миграция</summary>

```diff
<OnboardingTooltip
  placement="right"
- header="Header"
+ title="Header"
- text="Привет"
+ description="Привет"
>
  <Button style={{ margin: 20 }}>Наведи</Button>
</OnboardingTooltip>
```

</details>

<hr/>

### [PanelHeader](https://vkcom.github.io/VKUI/7.0.0/#/PanelHeader)

Теперь не переопределяет цвет компонента `Spinner`, поэтому, если вы использовали компонент `Spinner` внутри `PanelHeader`,
передавайте `<Spinner noColor />`.

<hr/>

### [PanelHeaderButton](https://vkcom.github.io/VKUI/7.0.0/#/PanelHeaderButton):

- У пресета `PanelHeaderClose` удалено свойство `children`. Теперь для прокидывания текста для `a11y` нужно прокидывать его
  в свойство`label`.
- У пресета `PanelHeaderSubmit` удалено свойство `children`. Теперь для прокидывания текста для `a11y` нужно прокидывать его
  в свойство`label`.
- У пресета `PanelHeaderEdit` удалены свойства `children` и `label`. Вместо `label` можно использовать свойства `doneLabel`
  и `editLabel`. Свойство `children` не использовалось.
- У пресета `PanelHeaderBack` удалено свойство `children`. Теперь для прокидывания текста для `a11y` нужно прокидывать его
  в свойство `label`. Логика отображения `label` осталась как была, в отличие от других пресетов. Также для более точно настройки
  `label` были добавлены свойства `hideLabelOnVKCom` и `hideLabelOnIOS`, чтобы можно было скрывать `label` на соответствующей
  платформе.

<hr/>

### [PanelHeaderContent](https://vkcom.github.io/VKUI/7.0.0/#/PanelHeaderContent)

Свойство `status` переименовано в `subtitle`.

<details>
<summary>Миграция</summary>

```diff
<PanelHeaderContent
- status="был в сети сегодня, в 18:46"
+ subtitle="был в сети сегодня, в 18:46"
  before={<Avatar size={36} src={'user_va'} />}
>
  Влад Анесов
</PanelHeaderContent>
```

</details>

<hr/>

### [PanelSpinner](https://vkcom.github.io/VKUI/7.0.0/#/PanelSpinner)

Изменен формат `size` с `'small' | 'regular' | 'medium' | 'large'` на `'s' | 'm' | 'l' | 'xl'`.

<details>
<summary>Миграция</summary>

```diff
- <PanelSpinner size="large" />
+ <PanelSpinner size="xl" />
- <PanelSpinner size="medium" />
+ <PanelSpinner size="l" />
- <PanelSpinner size="regular" />
+ <PanelSpinner size="m" />
- <PanelSpinner size="small" />
+ <PanelSpinner size="s" />
```

<hr/>

### [RichCell](https://vkcom.github.io/VKUI/7.0.0/#/RichCell)

- Свойство `text` переименовано в `subtitle`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <RichCell
  - text="Санкт-Петербург"
  + subtitle="Санкт-Петербург"
  />
  ```

  </details>

- Свойство `caption` переименовано в `extraSubtitle`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <RichCell
  - caption="сегодня в 18:00"
  + extraSubtitle="сегодня в 18:00"
  />
  ```

  </details>

- Свойство `subhead` переименовано в `overTitle`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <RichCell
  - subhead="онлайн"
  + overTitle="онлайн"
  />
  ```

  </details>

<hr/>

### [ScreenSpinner](https://vkcom.github.io/VKUI/7.0.0/#/ScreenSpinner)

- Удалён `a11y`-текст по умолчанию, передавайте нужный текст в `children` или `label` свойства.
- Свойство `caption` переименовано в `label`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <ScreenSpinner
    state="loading"
  - caption="Caption"
  + label="Caption"
  />

  <ScreenSpinner.Container
  - caption="Caption"
  + label="Caption"
  >
    <ScreenSpinner.Loader />
    <ScreenSpinner.SwapIcon />
  </ScreenSpinner.Container>
  ```

  </details>

<hr/>

### [ScrollArrow](https://vkcom.github.io/VKUI/7.0.0/#/ScrollArrow)

Значение `size="l"` удалено, используйте `size="m"`, а вместо `size="m"` используйте `size="s"`.

<details>
<summary>Миграция</summary>

```diff
- <ScrollArrow size="m">
+ <ScrollArrow size="s">
- <ScrollArrow size="l">
+ <ScrollArrow size="m">
```

</details>

<hr/>

### [Select](https://vkcom.github.io/VKUI/7.0.0/#/Select):

- В колбэк `onChange` помимо ChangeEvent теперь прокидывается новое
  значение вторым аргументом. Рекомендуется использовать именно второй аргумент. То же самое относится
  и к [CustomSelect](https://vkcom.github.io/VKUI/7.0.0/#/CustomSelect)
  и [NativeSelect](https://vkcom.github.io/VKUI/#/7.0.0/NativeSelect).
  <details>
  <summary>Миграция</summary>

  ```diff
  <Select
    id="select-type-select-id"
    value={selectType}
    placeholder="Не задан"
    options={selectTypes}
  - onChange={e => setSelectType(e.target.value)}
  + onChange={(_, newType) => setSelectType(newType)}
  />
  ```

  </details>

- Для указания невыбранного состояния теперь необходимо использовать `null` вместо `undefined` или пустой строки. То же самое
  относится и к [CustomSelect](https://vkcom.github.io/VKUI/7.0.0/#/CustomSelect)
  и [NativeSelect](https://vkcom.github.io/VKUI/7.0.0/#/NativeSelect).

<hr/>

### [Separator](https://vkcom.github.io/VKUI/7.0.0/#/Separator)

- Свойство `mode` переименовано в `appearance`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Separator
  - mode="primary"
  + appearance="primary"
  />
  ```

  </details>

- Свойство `wide` заменено свойством `padding`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <Separator
  -  wide={false}
  +  padding
  />
  <Separator
  -  wide
  />
  <Separator
  -  wide={true}
  />
  ```

  </details>

<hr/>

### [SimpleCell](https://vkcom.github.io/VKUI/7.0.0/#/SimpleCell)

- Свойство `subhead` переименовано в `overTitle`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <SimpleCell
    onClick={() => {}}
  - subhead={"Subhead"}
  + overTitle={"Subhead"}
    indicator="При использовании"
  >
    Геолокация
  </SimpleCell>
  ```

  </details>

- Свойство `expandable` переименовано в `chevron`.
  <details>
  <summary>Миграция</summary>

  ```diff
  <SimpleCell
    onClick={() => {}}
  - expandable="auto"
  + chevron="auto"
    indicator="При использовании"
  >
    Геолокация
  </SimpleCell>
  ```

  </details>

<hr/>

### [Spinner](https://vkcom.github.io/VKUI/7.0.0/#/Spinner)

Изменен формат `size` с `'small' | 'regular' | 'medium' | 'large'` на `'s' | 'm' | 'l' | 'xl'`.

<details>
<summary>Миграция</summary>

```diff
- <Spinner size="large" />
+ <Spinner size="xl" />
- <Spinner size="medium" />
+ <Spinner size="l" />
- <Spinner size="regular" />
+ <Spinner size="m" />
- <Spinner size="small" />
+ <Spinner size="s" />
```

</details>

<hr/>

### [SplitLayout](https://vkcom.github.io/VKUI/7.0.0/#/SplitLayout)

Свойства `popout` и `modal` отмечены как `@deprecated`. Теперь что `ModalRoot`, что элементы `Alert`, `ScreenSpinner`
и `ActionSheet` больше нет необходимости объявлять на верхнем уровне и передавать в `SplitLayout`.

Такие элементы будут по умолчанию рендерится в `document.body`. Если хочется вернуть старое поведение, то нужно точечно отключить
функцию портала, передав, например, в `ModalRoot` передать `usePortal={false}`.

<details>
<summary>Пример</summary>

```diff
<SplitLayout
- modal={<ModalRoot>...</ModalRoot>}
>
  <SplitCol>...</SplitCol>
+ <ModalRoot usePortal={false}>...</ModalRoot>
</SplitLayout>
```

</details>

<hr/>

### [SubnavigationBar](https://vkcom.github.io/VKUI/7.0.0/#/SubnavigationBar)

Свойство `mode` заменено на флаг `fixed`.

<details>
<summary>Миграция</summary>

```diff
<SubnavigationBar
- mode={"fixed"}
+ fixed
/>

<SubnavigationBar
- mode={"overflow"}
/>
```

</details>

<hr/>

### [SubnavigationButton](https://vkcom.github.io/VKUI/7.0.0/#/SubnavigationButton)

Свойство `expandable` переименовано в `chevron`.

<details>
<summary>Миграция</summary>

```diff
<SubnavigationButton
- expandable={true}
+ chevron={true}
  selected={true}
  onClick={() => {}}
>
  Button
</SubnavigationButton>
```

</details>

<hr/>

### [TabbarItem](https://vkcom.github.io/VKUI/7.0.0/#/TabbarItem)

Свойство `text` переименовано в `label`.

<details>
<summary>Миграция</summary>

```diff
<Tabbar style={{ position: 'static', margin: '10px 0' }}>
  <TabbarItem
    selected={true}
-   text="Новости"
+   label="Новости"
  >
    <Icon28NewsfeedOutline />
  </TabbarItem>
</Tabbar>
```

</details>

<hr/>

### [Tooltip](https://vkcom.github.io/VKUI/7.0.0/#/Tooltip)

Переименованы свойства `text` на `description`, `header` на `title`.

<details>
<summary>Миграция</summary>

```diff
<Tooltip
  placement="right"
- header="Header"
+ title="Header"
- text="Привет"
+ description="Привет"
>
  <Button style={{ margin: 20 }}>Наведи</Button>
</Tooltip>
```

</details>

<hr/>

### [UsersStack](https://vkcom.github.io/VKUI/7.0.0/#/UsersStack)

Свойство `direction` заменено на `avatarsPosition` со значениями `'inline-start' | 'inline-end' | 'block-start'`.

<details>
<summary>Миграция</summary>

```diff
<UsersStack
  photos={['photo1', 'photo2', 'photo3']}
- direction="row-reverse"
+ avatarsPosition="inline-end"
  size="s"
>
  Иван и ещё 2 ваших друга подписаны
</UsersStack>
```

</details>

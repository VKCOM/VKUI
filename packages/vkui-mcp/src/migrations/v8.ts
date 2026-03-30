import type { MigrationComponentMap } from '../types.js';

const SLOT_PROPS_BASE_DESCRIPTION =
  'В v8 часть внутренних элементов получила API slotProps. Чтобы сохранить поведение v7, переносите в slotProps только те пропсы, которые относятся к внутреннему элементу.';

const createSlotPropsDescription = ({
  slotName,
  rootProps,
  slotPropsProps,
}: {
  slotName: string;
  rootProps: string[];
  slotPropsProps: string[];
}) =>
  `${SLOT_PROPS_BASE_DESCRIPTION}\n\nПропсы, которые оставляем в корне компонента: ${rootProps.join(', ')}.\nПропсы, которые переносим в slotProps.${slotName}: ${slotPropsProps.join(', ')}.`;

export const migrationV8: MigrationComponentMap = {
  'withModalRootContext': {
    'description':
      '`withModalRootContext` больше не используется. Обёртку можно удалить и использовать `ModalRoot` напрямую.',
  },
  'VisuallyHidden: baseClassName': {
    'description': 'Свойство `baseClassName` удалено. Используйте стандартный `className`.',
    'before': '<VisuallyHidden baseClassName="visually-hidden" />',
    'after': '<VisuallyHidden className="visually-hidden" />',
  },
  'ActionSheet': {
    'description': 'Обработчик завершения закрытия переименован: `onClose` -> `onClosed`.',
    'before':
      '<ActionSheet\n onClose={() => {}}\n title="Заголовок"\n>\n <ActionSheetItem>Действие</ActionSheetItem>\n</ActionSheet>',
    'after':
      '<ActionSheet\n onClosed={() => {}}\n title="Заголовок"\n>\n <ActionSheetItem>Действие</ActionSheetItem>\n</ActionSheet>',
  },
  'Alert': {
    'description': 'Обработчик завершения закрытия переименован: `onClose` -> `onClosed`.',
    'before':
      '<Alert\n title="Подтвердите действие"\n description="Вы уверены?"\n onClose={() => setPopout(null)}\n/>',
    'after':
      '<Alert\n title="Подтвердите действие"\n description="Вы уверены?"\n onClosed={() => setPopout(null)}\n/>',
  },
  'Snackbar': {
    'description': 'Обработчик завершения закрытия переименован: `onClose` -> `onClosed`.',
    'before': '<Snackbar\n onClose={() => setSnackbar(null)}\n>\n Сообщение\n</Snackbar>',
    'after': '<Snackbar\n onClosed={() => setSnackbar(null)}\n>\n Сообщение\n</Snackbar>',
  },
  'PopoutWrapper': {
    'description':
      'Свойство `fixed` заменено на `strategy`. Для `fixed={false}` используйте `strategy="none"`.',
    'before':
      '<PopoutWrapper\n fixed\n/>\n\n<PopoutWrapper\n fixed={true}\n/>\n\n<PopoutWrapper\n fixed={false}\n/>',
    'after': '<PopoutWrapper\n/>\n\n<PopoutWrapper\n/>\n\n<PopoutWrapper\n strategy="none"\n/>',
  },
  'Textarea': {
    'description':
      'В v8 отступы `Textarea` синхронизированы с другими полями ввода. Проверьте визуальные регрессии, если верстка была завязана на старую плотность.',
    'before': '// v7: более крупные внутренние отступы\n<Textarea />',
    'after': '// v8: отступы синхронизированы, компонент компактнее\n<Textarea />',
  },
  'RichCell': {
    'description':
      'Свойства `after`/`afterCaption` для текстовой мета-информации заменены на `meta`/`submeta`.',
    'before':
      '<RichCell\n before={<Avatar size={48} />}\n overTitle="онлайн"\n subtitle="Санкт-Петербург"\n after="Текст"\n afterCaption="Подтекст"\n afterAlign="start"\n>\n Имя пользователя\n</RichCell>\n\n<RichCell\n before={<Avatar size={48} />}\n subtitle="Санкт-Петербург"\n after={<Icon28Like />}\n afterAlign="center"\n>\n Имя пользователя\n</RichCell>',
    'after':
      '<RichCell\n before={<Avatar size={48} />}\n overTitle="онлайн"\n subtitle="Санкт-Петербург"\n meta="Текст"\n submeta="Подтекст"\n>\n Имя пользователя\n</RichCell>\n\n<RichCell\n before={<Avatar size={48} />}\n subtitle="Санкт-Петербург"\n after={<Icon28Like />}\n afterAlign="center"\n>\n Имя пользователя\n</RichCell>',
  },
  'Banner': {
    'description': 'Для режима `image` теперь рекомендуется явно задавать `imageTheme`.',
    'before':
      '<Banner\n mode="image"\n background={<div style={{ backgroundImage: \'url(...)\' }} />}\n>\n Контент\n</Banner>',
    'after':
      '<Banner\n mode="image"\n imageTheme="dark"\n background={<div style={{ backgroundImage: \'url(...)\' }} />}\n>\n Контент\n</Banner>',
  },
  'ContentBadge': {
    'description':
      'Обновлены токены цветов для `appearance="neutral"` в режимах `primary/secondary`.',
    'before':
      '// appearance="neutral", mode="primary"\ncolor: var(--color_text_primary);\nbackground: var(--color_background_secondary);\n\n// appearance="neutral", mode="secondary"\ncolor: var(--color_text_subhead);\nbackground: var(--color_background_secondary);',
    'after':
      '// appearance="neutral", mode="primary"\ncolor: var(--color_text_contrast);\nbackground: var(--color_icon_secondary);\n\n// appearance="neutral", mode="secondary"\ncolor: var(--color_text_primary);\nbackground: var(--color_background_secondary_alpha);',
  },
  'DateInput': {
    'description':
      'Если нужно сохранить старое поведение доступности из v7, явно задайте `accessible={false}`.',
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'DateRangeInput': {
    'description':
      'Если нужно сохранить старое поведение доступности из v7, явно задайте `accessible={false}`.',
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'CustomSelect': {
    'description':
      'Если нужно сохранить старое поведение доступности из v7, явно задайте `accessible={false}`.',
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'Calendar': {
    'description':
      'Сигнатура `onChange` стала строже: вместо `Date | undefined` используйте `Date`.',
    'before':
      'onChange?: (value?: Date) => void\n\n<Calendar\n onChange={(value: Date | undefined) => {\n   if (value) {\n     setValue(value);\n   }\n }}\n/>',
    'after':
      'onChange?: (value: Date) => void\n\n<Calendar\n onChange={(value: Date) => setValue(value)}\n/>',
  },
  'CalendarRange': {
    'description':
      'Сигнатура `onChange` стала строже: вместо `Date | undefined` используйте `Date`.',
    'before':
      'onChange?: (value?: Date) => void\n\n<Calendar\n onChange={(value: Date | undefined) => {\n   if (value) {\n     setValue(value);\n   }\n }}\n/>',
    'after':
      'onChange?: (value: Date) => void\n\n<Calendar\n onChange={(value: Date) => setValue(value)}\n/>',
  },
  'DateInput: onChange': {
    'description': 'Сигнатура `onChange` обновлена: теперь `Date | null`.',
    'before': 'onChange?: (value?: Date) => void',
    'after': 'onChange?: (value: Date | null) => void',
  },
  'DateRangeInput: onChange': {
    'description': 'Сигнатура `onChange` обновлена: теперь `Date | null`.',
    'before': 'onChange?: (value?: Date) => void',
    'after': 'onChange?: (value: Date | null) => void',
  },
  'Input': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<Input\n getRef={inputRef}\n data-testid="my-input"\n aria-label="Введите текст"\n/>',
    'after':
      '<Input\n data-testid="my-input"\n aria-label="Введите текст"\n slotProps={{\n   input: {\n     getRootRef: inputRef\n   }\n }}\n/>',
  },
  'Search': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before': '<Search\n getRef={inputRef}\n data-testid="my-search"\n aria-label="Поиск"\n/>',
    'after':
      '<Search\n data-testid="my-search"\n aria-label="Поиск"\n slotProps={{\n   input: {\n     getRootRef: inputRef\n   }\n }}\n/>',
  },
  'Textarea: slotProps': {
    'description': createSlotPropsDescription({
      slotName: 'textArea',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'textarea-атрибуты'],
    }),
    'before':
      '<Textarea\n getRef={textareaRef}\n data-testid="my-textarea"\n aria-label="Комментарий"\n/>',
    'after':
      '<Textarea\n data-testid="my-textarea"\n aria-label="Комментарий"\n slotProps={{\n   textArea: {\n     getRootRef: textareaRef\n   }\n }}\n/>',
  },
  'WriteBar': {
    'description': createSlotPropsDescription({
      slotName: 'textArea',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'textarea-атрибуты'],
    }),
    'before': '<WriteBar\n getRef={textareaRef}\n data-testid="my-writebar"\n/>',
    'after':
      '<WriteBar\n data-testid="my-writebar"\n slotProps={{\n   textArea: {\n     getRootRef: textareaRef\n   }\n }}\n/>',
  },
  'Switch': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n data-testid="my-checkbox"\n aria-describedby="hint"\n slotProps={{\n   input: {\n     getRootRef: checkboxRef\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n data-testid="my-switch"\n slotProps={{\n   input: {\n     getRootRef: switchRef\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'Checkbox': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n data-testid="my-checkbox"\n aria-describedby="hint"\n slotProps={{\n   input: {\n     getRootRef: checkboxRef\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n data-testid="my-switch"\n slotProps={{\n   input: {\n     getRootRef: switchRef\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'Radio': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n data-testid="my-checkbox"\n aria-describedby="hint"\n slotProps={{\n   input: {\n     getRootRef: checkboxRef\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n data-testid="my-switch"\n slotProps={{\n   input: {\n     getRootRef: switchRef\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'File': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*', 'Button-пропсы'],
      slotPropsProps: ['getRef -> getRootRef', 'input[type=file]-атрибуты'],
    }),
    'before': '<File\n getRef={fileRef}\n data-testid="file-input"\n>\n Выбрать файл\n</File>',
    'after':
      '<File\n data-testid="file-input"\n slotProps={{\n   input: {\n     getRootRef: fileRef\n   }\n }}\n>\n Выбрать файл\n</File>',
  },
  'CustomSelect: slotProps': {
    'description': createSlotPropsDescription({
      slotName: 'select / input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: [
        'getRef -> slotProps.select.getRootRef',
        'getSelectInputRef -> slotProps.input.getRootRef',
        "nativeSelectTestId -> slotProps.select['data-testid']",
      ],
    }),
    'before':
      '<CustomSelect\n getRef={selectRef}\n getSelectInputRef={inputRef}\n nativeSelectTestId="native-select"\n data-testid="custom-select-root"\n options={options}\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<CustomSelect\n data-testid="custom-select-root"\n slotProps={{\n   select: {\n     getRootRef: selectRef,\n     "data-testid": "native-select"\n   },\n   input: {\n     getRootRef: inputRef\n   }\n }}\n options={options}\n value={value}\n onChange={onChange}\n/>',
  },
  'NativeSelect': {
    'description': createSlotPropsDescription({
      slotName: 'select',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'нативные select-атрибуты'],
    }),
    'before':
      '<NativeSelect\n getRef={selectRef}\n data-testid="native-select-root"\n aria-label="Выберите значение"\n/>',
    'after':
      '<NativeSelect\n data-testid="native-select-root"\n aria-label="Выберите значение"\n slotProps={{\n   select: {\n     getRootRef: selectRef\n   }\n }}\n/>',
  },
  'ChipsSelect': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<ChipsSelect\n getRef={inputRef}\n data-testid="chips-select"\n aria-describedby="hint"\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<ChipsSelect\n data-testid="chips-select"\n aria-describedby="hint"\n slotProps={{\n   input: {\n     getRootRef: inputRef\n   }\n }}\n value={value}\n onChange={onChange}\n/>',
  },
  'ChipsInput': {
    'description': createSlotPropsDescription({
      slotName: 'input',
      rootProps: ['className', 'style', 'data-*', 'aria-*'],
      slotPropsProps: ['getRef -> getRootRef', 'input-атрибуты'],
    }),
    'before':
      '<ChipsInput\n getRef={inputRef}\n data-testid="chips-input"\n aria-describedby="hint"\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<ChipsInput\n data-testid="chips-input"\n aria-describedby="hint"\n slotProps={{\n   input: {\n     getRootRef: inputRef\n   }\n }}\n value={value}\n onChange={onChange}\n/>',
  },
  'SplitLayout': {
    'description': createSlotPropsDescription({
      slotName: 'content',
      rootProps: ['className', 'style', 'data-*', 'aria-*', 'header', 'center'],
      slotPropsProps: ['getRef -> getRootRef (внутренний content-контейнер)'],
    }),
    'before':
      '<SplitLayout\n getRef={layoutContentRef}\n className="my-layout"\n data-testid="layout"\n header={<PanelHeader />}\n>\n <SplitCol>Контент</SplitCol>\n</SplitLayout>',
    'after':
      '<SplitLayout\n className="my-layout"\n data-testid="layout"\n slotProps={{\n   content: {\n     getRootRef: layoutContentRef\n   }\n }}\n header={<PanelHeader />}\n>\n <SplitCol>Контент</SplitCol>\n</SplitLayout>',
  },
  'AdaptivityProvider': {
    'description':
      'Старые пары `sizeX/sizeY` заменены на `viewWidth` и `density`. Обновите соответствия значений.',
    'before':
      '<AdaptivityProvider sizeX="compact">\n\n <AdaptivityProvider sizeX="regular">\n\n <AdaptivityProvider sizeY="compact">\n\n <AdaptivityProvider sizeY="regular">\n\n <AdaptivityProvider sizeX="compact" sizeY="compact">\n\n <AdaptivityProvider sizeX="regular" sizeY="regular">\n\n <AppRootProvider sizeX="regular" sizeY="compact">\n\n <AppRootProvider sizeX="compact" sizeY="regular">',
    'after':
      '<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>\n\n <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>\n\n <AdaptivityProvider density="compact">\n\n <AdaptivityProvider density="regular">\n\n <AdaptivityProvider viewWidth={ViewWidth.MOBILE} density="compact">\n\n <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} density="regular">\n\n <AppRootProvider viewWidth={ViewWidth.SMALL_TABLET} density="compact">\n\n <AppRootProvider viewWidth={ViewWidth.MOBILE} density="regular">',
  },
  'ModalRoot': {
    'description':
      'Вместо `ModalRoot` с ручным `activeModal` используйте `useModalManager` и рендер `modalHolder`.',
    'before':
      'const [activeModal, setActiveModal] = useState(null);\n\n <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>\n   <ModalPage id="modal" onClose={() => setActiveModal(null)}>\n     Контент\n   </ModalPage>\n </ModalRoot>',
    'after':
      'const [modalApi, modalHolder] = useModalManager();\n\n // Открытие модального окна\n modalApi.openModalPage({\n   children: <div>Контент</div>,\n });\n\n // В JSX\n {modalHolder}',
  },
  'useModalManager': {
    'description': 'Новый рекомендуемый подход для модалок в v8 — `useModalManager`.',
    'before':
      'const [activeModal, setActiveModal] = useState(null);\n\n <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>\n   <ModalPage id="modal" onClose={() => setActiveModal(null)}>\n     Контент\n   </ModalPage>\n </ModalRoot>',
    'after':
      'const [modalApi, modalHolder] = useModalManager();\n\n // Открытие модального окна\n modalApi.openModalPage({\n   children: <div>Контент</div>,\n });\n\n // В JSX\n {modalHolder}',
  },
  'FixedLayout': {
    'description':
      '`FixedLayout` заменяется на `Box` со `sticky`-позиционированием и логическими inset-свойствами.',
    'before':
      '<FixedLayout vertical="top">\n   Content\n </FixedLayout>\n\n <FixedLayout vertical="bottom">\n   Content\n </FixedLayout>',
    'after':
      '<Box position="sticky" insetBlockStart={0}>\n   Content\n </Box>\n\n <Box position="sticky" insetBlockEnd={0}>\n   Content\n </Box>',
  },
  'Flex.Item': {
    'description':
      '`Flex.Item` убран. Используйте обычный `Box` (или другой элемент) с нужными flex-свойствами.',
    'before': '<Flex>\n  <Flex.Item grow={1}>Контент</Flex.Item>\n</Flex>',
    'after': '<Flex>\n  <Box flex="1">Контент</Box>\n</Flex>',
  },
  'RichCell: afterCaption': {
    'description': 'Свойство `afterCaption` заменено на `submeta`.',
    'before': '<RichCell\n afterCaption="Подтекст"\n>\n Контент\n</RichCell>',
    'after': '<RichCell\n submeta="Подтекст"\n>\n Контент\n</RichCell>',
  },
  'ActionSheetItem: mode="cancel" и isCancelItem': {
    'description': createSlotPropsDescription({
      slotName: 'iosCloseItem',
      rootProps: ['все обычные ActionSheetItem в children'],
      slotPropsProps: [
        'пропсы iOS-кнопки отмены через ActionSheet.slotProps.iosCloseItem',
        'или ActionSheetDefaultIosCloseItem',
      ],
    }),
    'before':
      '<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetItem mode="cancel" onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetItem>\n }\n</ActionSheet>\n\n<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetItem mode="cancel" onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetItem>\n }\n>\n <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>',
    'after':
      '<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n slotProps={{\n    iosCloseItem: {\n      children: "Отмена",\n      onClick: () => setPopout(null)\n    }\n  }}\n>\n  <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>\n\n<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetDefaultIosCloseItem onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetDefaultIosCloseItem>\n }\n>\n <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>',
  },
  'DateInput: accessible': {
    'description':
      'В v8 `accessible` по умолчанию включён. Удалите `accessible={false}`, если поведение v8 подходит.',
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
  'DateRangeInput: accessible': {
    'description':
      'В v8 `accessible` по умолчанию включён. Удалите `accessible={false}`, если поведение v8 подходит.',
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
  'CustomSelect: accessible': {
    'description':
      'В v8 `accessible` по умолчанию включён. Удалите `accessible={false}`, если поведение v8 подходит.',
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
};

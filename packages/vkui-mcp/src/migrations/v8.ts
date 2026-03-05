import type { MigrationComponentMap } from '../types.js';

export const migrationV8: MigrationComponentMap = {
  'withModalRootContext': {
    'before':
      "import { withModalRootContext } from '@vkontakte/vkui';\n\nconst ModalRootWithContext = withModalRootContext(ModalRoot);",
    'after': 'const ModalRootWithContext = ModalRoot;',
  },
  'VisuallyHidden: baseClassName': {
    'before': '<VisuallyHidden baseClassName="visually-hidden" />',
    'after': '<VisuallyHidden className="visually-hidden" />',
  },
  'ActionSheet': {
    'before':
      '<ActionSheet\n onClose={() => {}}\n title="Заголовок"\n>\n <ActionSheetItem>Действие</ActionSheetItem>\n</ActionSheet>',
    'after':
      '<ActionSheet\n onClosed={() => {}}\n title="Заголовок"\n>\n <ActionSheetItem>Действие</ActionSheetItem>\n</ActionSheet>',
  },
  'Alert': {
    'before':
      '<Alert\n title="Подтвердите действие"\n description="Вы уверены?"\n onClose={() => setPopout(null)}\n/>',
    'after':
      '<Alert\n title="Подтвердите действие"\n description="Вы уверены?"\n onClosed={() => setPopout(null)}\n/>',
  },
  'Snackbar': {
    'before': '<Snackbar\n onClose={() => setSnackbar(null)}\n>\n Сообщение\n</Snackbar>',
    'after': '<Snackbar\n onClosed={() => setSnackbar(null)}\n>\n Сообщение\n</Snackbar>',
  },
  'PopoutWrapper': {
    'before':
      '<PopoutWrapper\n fixed\n/>\n\n<PopoutWrapper\n fixed={true}\n/>\n\n<PopoutWrapper\n fixed={false}\n/>',
    'after': '<PopoutWrapper\n/>\n\n<PopoutWrapper\n/>\n\n<PopoutWrapper\n strategy="none"\n/>',
  },
  'PanelHeader': {
    'before':
      'const height = document.body.clientHeight;\n\n.page {\n  height: 100%;\n}\n\n<SplitCol fixed>...</SplitCol>',
    'after':
      'const height = document.documentElement.clientHeight;\n// или\nconst heightAlt = window.innerHeight;\n\n.page {\n  height: 100dvh;\n}\n\n<SplitCol fixed>\n  <div style={{ flexGrow: 1 }} />\n</SplitCol>',
  },
  'SplitCol': {
    'before':
      'const height = document.body.clientHeight;\n\n.page {\n  height: 100%;\n}\n\n<SplitCol fixed>...</SplitCol>',
    'after':
      'const height = document.documentElement.clientHeight;\n// или\nconst heightAlt = window.innerHeight;\n\n.page {\n  height: 100dvh;\n}\n\n<SplitCol fixed>\n  <div style={{ flexGrow: 1 }} />\n</SplitCol>',
  },
  'Textarea': {
    'before': '// v7: более крупные внутренние отступы\n<Textarea />',
    'after': '// v8: отступы синхронизированы, компонент компактнее\n<Textarea />',
  },
  'RichCell': {
    'before':
      '<RichCell\n before={<Avatar size={48} />}\n overTitle="онлайн"\n subtitle="Санкт-Петербург"\n after="Текст"\n afterCaption="Подтекст"\n afterAlign="start"\n>\n Имя пользователя\n</RichCell>\n\n<RichCell\n before={<Avatar size={48} />}\n subtitle="Санкт-Петербург"\n after={<Icon28Like />}\n afterAlign="center"\n>\n Имя пользователя\n</RichCell>',
    'after':
      '<RichCell\n before={<Avatar size={48} />}\n overTitle="онлайн"\n subtitle="Санкт-Петербург"\n meta="Текст"\n submeta="Подтекст"\n>\n Имя пользователя\n</RichCell>\n\n<RichCell\n before={<Avatar size={48} />}\n subtitle="Санкт-Петербург"\n after={<Icon28Like />}\n afterAlign="center"\n>\n Имя пользователя\n</RichCell>',
  },
  'Banner': {
    'before':
      '<Banner\n mode="image"\n background={<div style={{ backgroundImage: \'url(...)\' }} />}\n>\n Контент\n</Banner>',
    'after':
      '<Banner\n mode="image"\n imageTheme="dark"\n background={<div style={{ backgroundImage: \'url(...)\' }} />}\n>\n Контент\n</Banner>',
  },
  'ContentBadge': {
    'before':
      '// appearance="neutral", mode="primary"\ncolor: var(--color_text_primary);\nbackground: var(--color_background_secondary);\n\n// appearance="neutral", mode="secondary"\ncolor: var(--color_text_subhead);\nbackground: var(--color_background_secondary);',
    'after':
      '// appearance="neutral", mode="primary"\ncolor: var(--color_text_contrast);\nbackground: var(--color_icon_secondary);\n\n// appearance="neutral", mode="secondary"\ncolor: var(--color_text_primary);\nbackground: var(--color_background_secondary_alpha);',
  },
  'DateInput': {
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'DateRangeInput': {
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'CustomSelect': {
    'before': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
    'after':
      '// чтобы сохранить поведение v7, явно отключите accessible\n<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
  },
  'Calendar': {
    'before':
      'onChange?: (value?: Date) => void\n\n<Calendar\n onChange={(value: Date | undefined) => {\n   if (value) {\n     setValue(value);\n   }\n }}\n/>',
    'after':
      'onChange?: (value: Date) => void\n\n<Calendar\n onChange={(value: Date) => setValue(value)}\n/>',
  },
  'CalendarRange': {
    'before':
      'onChange?: (value?: Date) => void\n\n<Calendar\n onChange={(value: Date | undefined) => {\n   if (value) {\n     setValue(value);\n   }\n }}\n/>',
    'after':
      'onChange?: (value: Date) => void\n\n<Calendar\n onChange={(value: Date) => setValue(value)}\n/>',
  },
  'DateInput: onChange': {
    'before': 'onChange?: (value?: Date) => void',
    'after': 'onChange?: (value: Date | null) => void',
  },
  'DateRangeInput: onChange': {
    'before': 'onChange?: (value?: Date) => void',
    'after': 'onChange?: (value: Date | null) => void',
  },
  'Input': {
    'before':
      '<Input\n getRef={inputRef}\n data-testid="my-input"\n aria-label="Введите текст"\n/>',
    'after':
      '<Input\n slotProps={{\n   input: {\n     getRootRef: inputRef,\n     "data-testid": "my-input",\n     "aria-label": "Введите текст"\n   }\n }}\n/>',
  },
  'Search': {
    'before':
      '<Input\n getRef={inputRef}\n data-testid="my-input"\n aria-label="Введите текст"\n/>',
    'after':
      '<Input\n slotProps={{\n   input: {\n     getRootRef: inputRef,\n     "data-testid": "my-input",\n     "aria-label": "Введите текст"\n   }\n }}\n/>',
  },
  'Textarea: slotProps': {
    'before': '<Textarea\n getRef={textareaRef}\n data-testid="my-textarea"\n/>',
    'after':
      '<Textarea\n slotProps={{\n   textarea: {\n     getRootRef: textareaRef,\n     "data-testid": "my-textarea"\n   }\n }}\n/>',
  },
  'WriteBar': {
    'before': '<Textarea\n getRef={textareaRef}\n data-testid="my-textarea"\n/>',
    'after':
      '<Textarea\n slotProps={{\n   textarea: {\n     getRootRef: textareaRef,\n     "data-testid": "my-textarea"\n   }\n }}\n/>',
  },
  'Switch': {
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n slotProps={{\n   input: {\n     getRootRef: checkboxRef,\n     "data-testid": "my-checkbox",\n     "aria-describedby": "hint"\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n slotProps={{\n   input: {\n     getRootRef: switchRef,\n     "data-testid": "my-switch"\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'Checkbox': {
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n slotProps={{\n   input: {\n     getRootRef: checkboxRef,\n     "data-testid": "my-checkbox",\n     "aria-describedby": "hint"\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n slotProps={{\n   input: {\n     getRootRef: switchRef,\n     "data-testid": "my-switch"\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'Radio': {
    'before':
      '<Checkbox\n getRef={checkboxRef}\n data-testid="my-checkbox"\n aria-describedby="hint"\n>\n Согласен\n</Checkbox>\n\n<Switch\n getRef={switchRef}\n data-testid="my-switch"\n/>\n\n<Radio\n getRef={radioRef}\n>\n Вариант\n</Radio>',
    'after':
      '<Checkbox\n slotProps={{\n   input: {\n     getRootRef: checkboxRef,\n     "data-testid": "my-checkbox",\n     "aria-describedby": "hint"\n   }\n }}\n>\n Согласен\n</Checkbox>\n\n<Switch\n slotProps={{\n   input: {\n     getRootRef: switchRef,\n     "data-testid": "my-switch"\n   }\n }}\n/>\n\n<Radio\n slotProps={{\n   input: {\n     getRootRef: radioRef\n   }\n }}\n>\n Вариант\n</Radio>',
  },
  'File': {
    'before': '<File\n getRef={fileRef}\n data-testid="file-input"\n>\n Выбрать файл\n</File>',
    'after':
      '<File\n slotProps={{\n   input: {\n     getRootRef: fileRef,\n     "data-testid": "file-input"\n   }\n }}\n>\n Выбрать файл\n</File>',
  },
  'CustomSelect: slotProps': {
    'before':
      '<CustomSelect\n data-testid="select"\n aria-label="Выберите значение"\n options={options}\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<CustomSelect\n slotProps={{\n   input: {\n     "data-testid": "select",\n     "aria-label": "Выберите значение"\n   }\n }}\n options={options}\n value={value}\n onChange={onChange}\n/>',
  },
  'NativeSelect': {
    'before':
      '<CustomSelect\n data-testid="select"\n aria-label="Выберите значение"\n options={options}\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<CustomSelect\n slotProps={{\n   input: {\n     "data-testid": "select",\n     "aria-label": "Выберите значение"\n   }\n }}\n options={options}\n value={value}\n onChange={onChange}\n/>',
  },
  'ChipsSelect': {
    'before':
      '<ChipsSelect\n getRef={inputRef}\n data-testid="chips-select"\n aria-describedby="hint"\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<ChipsSelect\n slotProps={{\n   input: {\n     getRootRef: inputRef,\n     "data-testid": "chips-select",\n     "aria-describedby": "hint"\n   }\n }}\n value={value}\n onChange={onChange}\n/>',
  },
  'ChipsInput': {
    'before':
      '<ChipsSelect\n getRef={inputRef}\n data-testid="chips-select"\n aria-describedby="hint"\n value={value}\n onChange={onChange}\n/>',
    'after':
      '<ChipsSelect\n slotProps={{\n   input: {\n     getRootRef: inputRef,\n     "data-testid": "chips-select",\n     "aria-describedby": "hint"\n   }\n }}\n value={value}\n onChange={onChange}\n/>',
  },
  'SplitLayout': {
    'before':
      '<SplitLayout\n className="my-layout"\n data-testid="layout"\n header={<PanelHeader />}\n>\n <SplitCol>Контент</SplitCol>\n</SplitLayout>',
    'after':
      '<SplitLayout\n slotProps={{\n   content: {\n     className: "my-layout",\n     "data-testid": "layout"\n   }\n }}\n header={<PanelHeader />}\n>\n <SplitCol>Контент</SplitCol>\n</SplitLayout>',
  },
  'AdaptivityProvider': {
    'before':
      '<AdaptivityProvider sizeX="compact">\n\n <AdaptivityProvider sizeX="regular">\n\n <AdaptivityProvider sizeY="compact">\n\n <AdaptivityProvider sizeY="regular">\n\n <AdaptivityProvider sizeX="compact" sizeY="compact">\n\n <AdaptivityProvider sizeX="regular" sizeY="regular">\n\n <AppRootProvider sizeX="regular" sizeY="compact">\n\n <AppRootProvider sizeX="compact" sizeY="regular">',
    'after':
      '<AdaptivityProvider viewWidth={ViewWidth.MOBILE}>\n\n <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET}>\n\n <AdaptivityProvider density="compact">\n\n <AdaptivityProvider density="regular">\n\n <AdaptivityProvider viewWidth={ViewWidth.MOBILE} density="compact">\n\n <AdaptivityProvider viewWidth={ViewWidth.SMALL_TABLET} density="regular">\n\n <AppRootProvider viewWidth={ViewWidth.SMALL_TABLET} density="compact">\n\n <AppRootProvider viewWidth={ViewWidth.MOBILE} density="regular">',
  },
  'ModalRoot': {
    'before':
      'const [activeModal, setActiveModal] = useState(null);\n\n <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>\n   <ModalPage id="modal" onClose={() => setActiveModal(null)}>\n     Контент\n   </ModalPage>\n </ModalRoot>',
    'after':
      'const [modalApi, modalHolder] = useModalManager();\n\n // Открытие модального окна\n modalApi.openModalPage({\n   children: <div>Контент</div>,\n });\n\n // В JSX\n {modalHolder}',
  },
  'useModalManager': {
    'before':
      'const [activeModal, setActiveModal] = useState(null);\n\n <ModalRoot activeModal={activeModal} onClose={() => setActiveModal(null)}>\n   <ModalPage id="modal" onClose={() => setActiveModal(null)}>\n     Контент\n   </ModalPage>\n </ModalRoot>',
    'after':
      'const [modalApi, modalHolder] = useModalManager();\n\n // Открытие модального окна\n modalApi.openModalPage({\n   children: <div>Контент</div>,\n });\n\n // В JSX\n {modalHolder}',
  },
  'FixedLayout': {
    'before':
      '<FixedLayout vertical="top">\n   Content\n </FixedLayout>\n\n <FixedLayout vertical="bottom">\n   Content\n </FixedLayout>',
    'after':
      '<Box position="sticky" insetBlockStart={0}>\n   Content\n </Box>\n\n <Box position="sticky" insetBlockEnd={0}>\n   Content\n </Box>',
  },
  'Flex.Item': {
    'before': '<Flex>\n  <Flex.Item grow={1}>Контент</Flex.Item>\n</Flex>',
    'after': '<Flex>\n  <Box flex="1">Контент</Box>\n</Flex>',
  },
  'RichCell: afterCaption': {
    'before': '<RichCell\n afterCaption="Подтекст"\n>\n Контент\n</RichCell>',
    'after': '<RichCell\n submeta="Подтекст"\n>\n Контент\n</RichCell>',
  },
  'ActionSheetItem: mode="cancel" и isCancelItem': {
    'before':
      '<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetItem mode="cancel" onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetItem>\n }\n</ActionSheet>\n\n<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetItem mode="cancel" onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetItem>\n }\n>\n <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>',
    'after':
      '<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n slotProps={{\n    iosCloseItem: {\n      children: "Отмена",\n      onClick: () => setPopout(null)\n    }\n  }}\n>\n  <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>\n\n<ActionSheet\n onClosed={() => setPopout(null)}\n title="Выберите действие"\n iosCloseItem={\n   <ActionSheetDefaultIosCloseItem onClick={() => setPopout(null)}>\n     Отмена\n   </ActionSheetDefaultIosCloseItem>\n }\n>\n <ActionSheetItem onClick={handleAction}>Действие</ActionSheetItem>\n</ActionSheet>',
  },
  'DateInput: accessible': {
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
  'DateRangeInput: accessible': {
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
  'CustomSelect: accessible': {
    'before':
      '<DateInput accessible={false} />\n<DateRangeInput accessible={false} />\n<CustomSelect accessible={false} />',
    'after': '<DateInput />\n<DateRangeInput />\n<CustomSelect />',
  },
};

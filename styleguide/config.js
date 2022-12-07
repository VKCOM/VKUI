const path = require("path");
const { argv } = require("yargs");
const { reactDocgenTypescript } = require("./propsParser.config");

const baseConfig = {
  title: "VKUI styleguide",
  styleguideDir: path.join(__dirname, `../${argv.dist || "styleguide-build"}`),
  template: {
    head: {
      links: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",
        },
      ],
    },
  },
  styleguideComponents: {
    PlaygroundRenderer: path.join(
      __dirname,
      "./Components/Playground/PlaygroundRenderer"
    ),
    StyleGuide: path.join(__dirname, "./Components/StyleGuide/StyleGuide"),
    StyleGuideRenderer: path.join(
      __dirname,
      "./Components/StyleGuide/StyleGuideRenderer"
    ),
    PathlineRenderer: path.join(__dirname, "./Components/PathlineRenderer"),
    HeadingRenderer: path.join(
      __dirname,
      "./Components/Heading/HeadingRenderer"
    ),
    ReactComponent: path.join(
      __dirname,
      "./Components/ReactComponent/ReactComponent"
    ),
    TableOfContents: path.join(
      __dirname,
      "./Components/TableOfContents/TableOfContents"
    ),
    ParaRenderer: path.join(__dirname, "./Components/Para/ParaRenderer"),
    CodeRenderer: path.join(__dirname, "./Components/Code/CodeRenderer"),
    TextRenderer: path.join(__dirname, "./Components/Text/TextRenderer"),
    Section: path.join(__dirname, "./Components/Section"),
    SectionHeadingRenderer: path.join(
      __dirname,
      "./Components/SectionHeading/SectionHeadingRenderer"
    ),
    "Markdown/Blockquote": path.join(__dirname, "./Components/Blockquote"),
    "Markdown/List": path.join(__dirname, "./Components/List"),
    "Markdown/MarkdownHeading": path.join(
      __dirname,
      "./Components/MarkdownHeading"
    ),
    TableRenderer: path.join(__dirname, "./Components/Table/TableRenderer"),
    LinkRenderer: path.join(__dirname, "./Components/Link/LinkRenderer"),
    NameRenderer: path.join(__dirname, "./Components/Name/NameRenderer"),
    TypeRenderer: path.join(__dirname, "./Components/Type/TypeRenderer"),
    "ComplexType/ComplexTypeRenderer": path.join(
      __dirname,
      "./Components/ComplexType/ComplexTypeRenderer"
    ),
    Preview: path.join(__dirname, "./Components/Preview"),
    Editor: path.join(__dirname, "./Components/Editor"),
  },
  theme: {
    color: {
      codeBase: "var(--vkui--color_text_primary)",
      codeBackground: "var(--vkui--color_background_secondary_alpha)",
      codeScreen: "var(--vkui--color_accent_green)",
      codeProperty: "var(--vkui--color_accent_purple)",
      codeComment: "var(--vkui--color_text_secondary)",
      codePunctuation: "var(--vkui--color_text_secondary)",
      codeKeyword: "var(--vkui--color_accent_blue)",
      codeFunction: "var(--vkui--color_accent_red)",
      codeDeleted: "var(--vkui--color_text_negative)",
    },
  },
  styles: {
    Pre: {
      pre: {
        fontFamily: '"JetBrains Mono", monospace',
        borderRadius: "8px",
        fontSize: 14,
        lineHeight: "24px",
      },
    },
    Editor: {
      root: {
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 14,
        lineHeight: "24px",
        "& textarea": {
          transition: "all ease-in-out .1s",
          // important to override inline styles in react-simple-code-editor
          border: "none !important",
          borderRadius: "none",
        },
        "& textarea:focus": {
          outline: 0,
          borderColor: `none !important`,
        },
      },
    },
  },
  propsParser: () => ({}),
  exampleMode: "expand",
  assetsDir: path.join(__dirname, `assets`),
  sections: [
    {
      title: "О VKUI",
      name: "About",
      content: "./pages/intro.md",
    },
    {
      title: "Быстрый старт",
      name: "QuickStart",
      content: "./pages/quick_start.md",
    },
    {
      title: "Основа",
      name: "Basics",
      expand: true,
      sections: [
        {
          title: "Режимы подключения",
          name: "Modes",
          content: "./pages/modes.md",
        },
        {
          title: "Адаптивность",
          name: "Adaptivity",
          content: "./pages/adaptivity.md",
        },
        {
          title: "Платформы и темы",
          name: "PlatformsAndThemes",
          content: "./pages/platforms_and_themes.md",
        },
        {
          title: "Структура экранов",
          name: "Structure",
          content: "./pages/structure.md",
        },
      ],
    },
    {
      name: "Компоненты",
      sectionDepth: 2,
      expand: true,
      search: true,
      sections: [
        {
          name: "Layout",
          components: [
            "../src/components/SplitLayout/SplitLayout.tsx",
            "../src/components/SplitCol/SplitCol.tsx",
            "../src/components/Root/Root.tsx",
            "../src/components/View/View.tsx",
            "../src/components/Panel/Panel.tsx",
            "../src/components/PanelHeader/PanelHeader.tsx",
            "../src/components/PanelHeaderButton/PanelHeaderButton.tsx",
            "../src/components/PanelHeaderBack/PanelHeaderBack.tsx",
            "../src/components/PanelHeaderClose/PanelHeaderClose.tsx",
            "../src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx",
            "../src/components/PanelHeaderEdit/PanelHeaderEdit.tsx",
            "../src/components/PanelHeaderContent/PanelHeaderContent.tsx",
            "../src/components/PanelHeaderContext/PanelHeaderContext.tsx",
            "../src/components/Epic/Epic.tsx",
            "../src/components/Tabbar/Tabbar.tsx",
            "../src/components/TabbarItem/TabbarItem.tsx",
            "../src/components/FixedLayout/FixedLayout.tsx",
            "../src/components/HorizontalScroll/HorizontalScroll.tsx",
          ],
        },
        {
          name: "Popouts",
          components: () => [
            "../src/components/PopoutWrapper/PopoutWrapper.tsx",
            "../src/components/ActionSheet/ActionSheet.tsx",
            "../src/components/ActionSheetItem/ActionSheetItem.tsx",
            "../src/components/Alert/Alert.tsx",
            "../src/components/ScreenSpinner/ScreenSpinner.tsx",
            "../src/components/Snackbar/Snackbar.tsx",
          ],
        },
        {
          name: "Poppers",
          components: () => [
            "../src/components/Popover/Popover.tsx",
            "../src/components/TextTooltip/TextTooltip.tsx",
            "../src/components/RichTooltip/RichTooltip.tsx",
            "../src/components/Tooltip/Tooltip.tsx",
            "../src/components/Popper/Popper.tsx",
          ],
        },
        {
          name: "Modals",
          components: () => [
            "../src/components/ModalRoot/ModalRootAdaptive.tsx",
            "../src/components/ModalPage/ModalPage.tsx",
            "../src/components/ModalPageHeader/ModalPageHeader.tsx",
            "../src/components/ModalCard/ModalCard.tsx",
            "../src/components/ModalDismissButton/ModalDismissButton.tsx",
          ],
        },
        {
          name: "Blocks",
          components: () => [
            "../src/components/Tappable/Tappable.tsx",
            "../src/components/Badge/Badge.tsx",
            "../src/components/ButtonGroup/ButtonGroup.tsx",
            "../src/components/Button/Button.tsx",
            "../src/components/CellButton/CellButton.tsx",
            "../src/components/IconButton/IconButton.tsx",
            "../src/components/Div/Div.tsx",
            "../src/components/Link/Link.tsx",
            "../src/components/Header/Header.tsx",
            "../src/components/Group/Group.tsx",
            "../src/components/Card/Card.tsx",
            "../src/components/CardGrid/CardGrid.tsx",
            "../src/components/CardScroll/CardScroll.tsx",
            "../src/components/ContentCard/ContentCard.tsx",
            "../src/components/Gradient/Gradient.tsx",
            "../src/components/SimpleCell/SimpleCell.tsx",
            "../src/components/Cell/Cell.tsx",
            "../src/components/HorizontalCell/HorizontalCell.tsx",
            "../src/components/RichCell/RichCell.tsx",
            "../src/components/List/List.tsx",
            "../src/components/Footer/Footer.tsx",
            "../src/components/Spinner/Spinner.tsx",
            "../src/components/PanelSpinner/PanelSpinner.tsx",
            "../src/components/Switch/Switch.tsx",
            "../src/components/InfoRow/InfoRow.tsx",
            "../src/components/Avatar/Avatar.tsx",
            "../src/components/GridAvatar/GridAvatar.tsx",
            "../src/components/Image/Image.tsx",
            "../src/components/Gallery/Gallery.tsx",
            "../src/components/Progress/Progress.tsx",
            "../src/components/Search/Search.tsx",
            "../src/components/Tabs/Tabs.tsx",
            "../src/components/TabsItem/TabsItem.tsx",
            "../src/components/PullToRefresh/PullToRefresh.tsx",
            "../src/components/Counter/Counter.tsx",
            "../src/components/UsersStack/UsersStack.tsx",
            "../src/components/Spacing/Spacing.tsx",
            "../src/components/Separator/Separator.tsx",
            "../src/components/Placeholder/Placeholder.tsx",
            "../src/components/Banner/Banner.tsx",
            "../src/components/MiniInfoCell/MiniInfoCell.tsx",
            "../src/components/WriteBar/WriteBar.tsx",
            "../src/components/WriteBarIcon/WriteBarIcon.tsx",
            "../src/components/SubnavigationBar/SubnavigationBar.tsx",
            "../src/components/SubnavigationButton/SubnavigationButton.tsx",
            "../src/components/ModalCardBase/ModalCardBase.tsx",
            "../src/components/Pagination/Pagination.tsx",
          ],
        },
        {
          name: "Forms",
          components: () => [
            "../src/components/FormLayout/FormLayout.tsx",
            "../src/components/FormItem/FormItem.tsx",
            "../src/components/FormLayoutGroup/FormLayoutGroup.tsx",
            "../src/components/FormField/FormField.tsx",
            "../src/components/FormStatus/FormStatus.tsx",
            "../src/components/Slider/Slider.tsx",
            "../src/components/RangeSlider/RangeSlider.tsx",
            "../src/components/Radio/Radio.tsx",
            "../src/components/RadioGroup/RadioGroup.tsx",
            "../src/components/Checkbox/Checkbox.tsx",
            "../src/components/Input/Input.tsx",
            "../src/components/ChipsInput/ChipsInput.tsx",
            "../src/components/Select/Select.tsx",
            "../src/components/NativeSelect/NativeSelect.tsx",
            "../src/components/SelectMimicry/SelectMimicry.tsx",
            "../src/components/CustomSelect/CustomSelect.tsx",
            "../src/components/CustomSelectOption/CustomSelectOption.tsx",
            "../src/components/ChipsSelect/ChipsSelect.tsx",
            "../src/components/Chip/Chip.tsx",
            "../src/components/Textarea/Textarea.tsx",
            "../src/components/File/File.tsx",
            "../src/components/DatePicker/DatePicker.tsx",
            "../src/components/SegmentedControl/SegmentedControl.tsx",
            "../src/components/Calendar/Calendar.tsx",
            "../src/components/CalendarRange/CalendarRange.tsx",
            "../src/components/DateInput/DateInput.tsx",
            "../src/components/DateRangeInput/DateRangeInput.tsx",
          ],
        },
        {
          name: "Typography",
          components: () => [
            "../src/components/Typography/Title/Title.tsx",
            "../src/components/Typography/Headline/Headline.tsx",
            "../src/components/Typography/Text/Text.tsx",
            "../src/components/Typography/Paragraph/Paragraph.tsx",
            "../src/components/Typography/Subhead/Subhead.tsx",
            "../src/components/Typography/Footnote/Footnote.tsx",
            "../src/components/Typography/Caption/Caption.tsx",
          ],
        },
        {
          name: "Advertisement",
          components: () => ["../src/components/PromoBanner/PromoBanner.tsx"],
        },
        {
          name: "Service",
          components: () => [
            "../src/components/AppRoot/AppRoot.tsx",
            "../src/components/AdaptivityProvider/AdaptivityProvider.tsx",
            "../src/components/ConfigProvider/ConfigProvider.tsx",
            "../src/components/LocaleProvider/LocaleProvider.tsx",
            "../src/components/Touch/Touch.tsx",
          ],
        },
      ],
    },
    {
      name: "Прочее",
      expand: true,
      sectionDepth: 1,
      sections: [
        {
          title: "Миграция с v4 на v5",
          name: "Migration",
          content: "./pages/migration_v5.md",
        },
        {
          name: "Unstable",
          content: "./pages/unstable.md",
        },
        {
          title: "Серверный рендеринг",
          name: "SSR",
          content: "./pages/ssr.md",
        },
        {
          title: "Иконки",
          name: "Icons",
          content: "./pages/icons.md",
        },
        {
          title: "Утилиты",
          name: "Utils",
          content: "./pages/utils.md",
        },
        {
          title: "Дизайн",
          name: "Design",
          content: "./pages/design.md",
        },
        {
          title: "Цвета и кастомизация",
          name: "Customize",
          content: "./pages/customize.md",
        },
      ],
    },
  ],
  require: [path.resolve(__dirname, "./setup.js")],
  webpackConfig: require("./webpack.config"),
};

const prodConfig = {
  ...baseConfig,
  propsParser: reactDocgenTypescript,
};

module.exports =
  process.env.NODE_ENV === "development" &&
  process.env.VKUI_STYLEGUIDE_PROPSPARSER !== "1"
    ? baseConfig
    : prodConfig;

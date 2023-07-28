const path = require('path');
const { argv } = require('yargs');
const { VKUI_PACKAGE } = require('../shared');
const { reactDocgenTypescript } = require('./propsParser.config');

/**
 * @type {import('react-styleguidist').StyleguidistConfig}
 */
const baseConfig = {
  title: 'VKUI styleguide',
  styleguideDir: path.join(__dirname, argv.dist || 'dist'),
  template: {
    lang: 'ru',
    head: {
      links: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap',
        },
        {
          rel: 'shortcut icon',
          href: 'https://vk.com/images/icons/favicons/fav_logo_2x.ico?6',
        },
      ],
    },
  },
  styleguideComponents: {
    'PlaygroundRenderer': path.join(__dirname, './Components/Playground/PlaygroundRenderer'),
    'StyleGuide': path.join(__dirname, './Components/StyleGuide/StyleGuide'),
    'StyleGuideRenderer': path.join(__dirname, './Components/StyleGuide/StyleGuideRenderer'),
    'PathlineRenderer': path.join(__dirname, './Components/PathlineRenderer'),
    'HeadingRenderer': path.join(__dirname, './Components/Heading/HeadingRenderer'),
    'ReactComponent': path.join(__dirname, './Components/ReactComponent/ReactComponent'),
    'TableOfContents': path.join(__dirname, './Components/TableOfContents/TableOfContents'),
    'ParaRenderer': path.join(__dirname, './Components/Para/ParaRenderer'),
    'CodeRenderer': path.join(__dirname, './Components/Code/CodeRenderer'),
    'TextRenderer': path.join(__dirname, './Components/Text/TextRenderer'),
    'Section': path.join(__dirname, './Components/Section'),
    'SectionHeadingRenderer': path.join(
      __dirname,
      './Components/SectionHeading/SectionHeadingRenderer',
    ),
    'Markdown/Blockquote': path.join(__dirname, './Components/Blockquote'),
    'Markdown/List': path.join(__dirname, './Components/List'),
    'Markdown/MarkdownHeading': path.join(__dirname, './Components/MarkdownHeading'),
    'TableRenderer': path.join(__dirname, './Components/Table/TableRenderer'),
    'LinkRenderer': path.join(__dirname, './Components/Link/LinkRenderer'),
    'NameRenderer': path.join(__dirname, './Components/Name/NameRenderer'),
    'TypeRenderer': path.join(__dirname, './Components/Type/TypeRenderer'),
    'ComplexType/ComplexTypeRenderer': path.join(
      __dirname,
      './Components/ComplexType/ComplexTypeRenderer',
    ),
    'Preview': path.join(__dirname, './Components/Preview'),
    'Editor': path.join(__dirname, './Components/Editor'),
  },
  theme: {
    color: {
      codeBase: 'var(--vkui--color_text_primary)',
      codeBackground: 'var(--vkui--color_background_secondary_alpha)',
      codeScreen: 'var(--vkui--color_accent_green)',
      codeProperty: 'var(--vkui--color_accent_purple)',
      codeComment: 'var(--vkui--color_text_secondary)',
      codePunctuation: 'var(--vkui--color_text_secondary)',
      codeKeyword: 'var(--vkui--color_accent_blue)',
      codeFunction: 'var(--vkui--color_accent_red)',
      codeDeleted: 'var(--vkui--color_text_negative)',
    },
  },
  styles: {
    Pre: {
      pre: {
        fontFamily: '"JetBrains Mono", monospace',
        borderRadius: '8px',
        fontSize: 14,
        lineHeight: '24px',
      },
    },
    Editor: {
      root: {
        'fontFamily': '"JetBrains Mono", monospace',
        'fontSize': 14,
        'lineHeight': '24px',
        '& textarea': {
          transition: 'all ease-in-out .1s',
          // important to override inline styles in react-simple-code-editor
          border: 'none !important',
          borderRadius: 'none',
        },
        '& textarea:focus': {
          outline: 0,
          borderColor: `none !important`,
        },
      },
    },
  },
  exampleMode: 'expand',
  sections: [
    {
      title: 'О VKUI',
      name: 'About',
      content: './pages/intro.md',
    },
    {
      title: 'Быстрый старт',
      name: 'QuickStart',
      content: './pages/quick_start.md',
    },
    {
      title: 'Основа',
      name: 'Basics',
      expand: true,
      sections: [
        {
          title: 'Режимы подключения',
          name: 'Modes',
          content: './pages/modes.md',
        },
        {
          title: 'Адаптивность',
          name: 'Adaptivity',
          content: './pages/adaptivity.md',
        },
        {
          title: 'Платформы и темы',
          name: 'PlatformsAndThemes',
          content: './pages/platforms_and_themes.md',
        },
        {
          title: 'Структура экранов',
          name: 'Structure',
          content: './pages/structure.md',
        },
      ],
    },
    {
      name: 'Компоненты',
      sectionDepth: 2,
      expand: true,
      search: true,
      sections: [
        {
          name: 'Layout',
          components: [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SplitLayout/SplitLayout.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SplitCol/SplitCol.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Root/Root.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/View/View.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Panel/Panel.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeader/PanelHeader.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderButton/PanelHeaderButton.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderBack/PanelHeaderBack.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderClose/PanelHeaderClose.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderSubmit/PanelHeaderSubmit.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderEdit/PanelHeaderEdit.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderContent/PanelHeaderContent.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelHeaderContext/PanelHeaderContext.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Epic/Epic.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Tabbar/Tabbar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/TabbarItem/TabbarItem.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FixedLayout/FixedLayout.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/HorizontalScroll/HorizontalScroll.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/AspectRatio/AspectRatio.tsx`,
          ],
        },
        {
          name: 'Popouts',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PopoutWrapper/PopoutWrapper.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ActionSheet/ActionSheet.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ActionSheetItem/ActionSheetItem.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Alert/Alert.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ScreenSpinner/ScreenSpinner.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Snackbar/Snackbar.tsx`,
          ],
        },
        {
          name: 'Poppers',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Popover/Popover.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/TextTooltip/TextTooltip.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/RichTooltip/RichTooltip.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Tooltip/Tooltip.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Popper/Popper.tsx`,
          ],
        },
        {
          name: 'Modals',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalRoot/ModalRootAdaptive.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalPage/ModalPage.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalPageHeader/ModalPageHeader.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalCard/ModalCard.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalDismissButton/ModalDismissButton.tsx`,
          ],
        },
        {
          name: 'Blocks',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Tappable/Tappable.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Badge/Badge.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ButtonGroup/ButtonGroup.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Button/Button.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CellButton/CellButton.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/IconButton/IconButton.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Div/Div.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Link/Link.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Header/Header.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Group/Group.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Card/Card.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CardGrid/CardGrid.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CardScroll/CardScroll.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ContentCard/ContentCard.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Gradient/Gradient.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SimpleCell/SimpleCell.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Cell/Cell.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Accordion/Accordion.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/HorizontalCell/HorizontalCell.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/HorizontalCellShowMore/HorizontalCellShowMore.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/RichCell/RichCell.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/List/List.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Footer/Footer.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Spinner/Spinner.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PanelSpinner/PanelSpinner.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Switch/Switch.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/InfoRow/InfoRow.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Avatar/Avatar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/GridAvatar/GridAvatar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Image/Image.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Gallery/Gallery.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Progress/Progress.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Search/Search.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Tabs/Tabs.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/TabsItem/TabsItem.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PullToRefresh/PullToRefresh.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Counter/Counter.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/UsersStack/UsersStack.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Spacing/Spacing.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Separator/Separator.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Placeholder/Placeholder.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Banner/Banner.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/MiniInfoCell/MiniInfoCell.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/WriteBar/WriteBar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/WriteBarIcon/WriteBarIcon.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SubnavigationBar/SubnavigationBar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SubnavigationButton/SubnavigationButton.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ModalCardBase/ModalCardBase.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Pagination/Pagination.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/AdaptiveIconRenderer/AdaptiveIconRenderer.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ScrollArrow/ScrollArrow.tsx`,
          ],
        },
        {
          name: 'Forms',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FormLayout/FormLayout.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FormItem/FormItem.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FormLayoutGroup/FormLayoutGroup.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FormField/FormField.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/FormStatus/FormStatus.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Slider/Slider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/RangeSlider/RangeSlider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Radio/Radio.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/RadioGroup/RadioGroup.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Checkbox/Checkbox.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Input/Input.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ChipsInput/ChipsInput.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Select/Select.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/NativeSelect/NativeSelect.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SelectMimicry/SelectMimicry.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CustomSelect/CustomSelect.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CustomSelectOption/CustomSelectOption.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ChipsSelect/ChipsSelect.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Chip/Chip.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Textarea/Textarea.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/File/File.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/DatePicker/DatePicker.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/SegmentedControl/SegmentedControl.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Calendar/Calendar.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/CalendarRange/CalendarRange.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/DateInput/DateInput.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/DateRangeInput/DateRangeInput.tsx`,
          ],
        },
        {
          name: 'Typography',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Title/Title.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Headline/Headline.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Text/Text.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Paragraph/Paragraph.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Subhead/Subhead.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Footnote/Footnote.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Typography/Caption/Caption.tsx`,
          ],
        },
        {
          name: 'Advertisement',
          components: () => [`../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PromoBanner/PromoBanner.tsx`],
        },
        {
          name: 'Service',
          components: () => [
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/AppRoot/AppRoot.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/AdaptivityProvider/AdaptivityProvider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/ConfigProvider/ConfigProvider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/LocaleProvider/LocaleProvider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/Touch/Touch.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/PlatformProvider/PlatformProvider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/AppearanceProvider/AppearanceProvider.tsx`,
            `../${VKUI_PACKAGE.PATHS.COMPONENTS_DIR}/VisuallyHidden/VisuallyHidden.tsx`,
          ],
        },
      ],
    },
    {
      name: 'Прочее',
      expand: true,
      sectionDepth: 1,
      sections: [
        {
          title: 'CSS Modules',
          name: 'CSS Modules',
          content: './pages/css_modules.md',
        },
        {
          title: 'Миграция с v4 на v5',
          name: 'Migration',
          content: './pages/migration_v5.md',
        },
        {
          name: 'Unstable',
          content: './pages/unstable.md',
        },
        {
          title: 'Серверный рендеринг',
          name: 'SSR',
          content: './pages/ssr.md',
        },
        {
          title: 'Иконки',
          name: 'Icons',
          content: './pages/icons.md',
        },
        {
          title: 'Утилиты',
          name: 'Utils',
          content: './pages/utils.md',
        },
        {
          title: 'Дизайн',
          name: 'Design',
          content: './pages/design.md',
        },
        {
          title: 'Цвета и кастомизация',
          name: 'Customize',
          content: './pages/customize.md',
        },
      ],
    },
  ],
  require: [path.resolve(__dirname, './setup.js')],
  webpackConfig: require('./webpack.config'),
};

const prodConfig = {
  ...baseConfig,
  propsParser: reactDocgenTypescript,
};

module.exports =
  process.env.NODE_ENV === 'development' && process.env.VKUI_STYLEGUIDE_PROPSPARSER !== '1'
    ? baseConfig
    : prodConfig;

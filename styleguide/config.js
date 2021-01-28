const path = require('path');
const webpackConfig = require('../webpack.config');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { argv } = require('yargs');
const { makeFsImporter } = require('react-docgen/dist/importer');
const { findAllExportedComponentDefinitions } = require('react-docgen/dist/resolver');

module.exports = {
  title: 'VKUI styleguide',
  styleguideDir: path.join(__dirname, `../${argv.dist || 'docs'}`),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, './Components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, './Components/StyleGuideRenderer'),
    PathlineRenderer: path.join(__dirname, './Components/PathlineRenderer')
  },
  propsParser: (filePath, source) => {
    return require('react-docgen').parse(source, findAllExportedComponentDefinitions, null, {
      filename: filePath,
      importer: makeFsImporter()
    })
  },
  assetsDir:  path.join(__dirname, `assets`),
  sections: [
    {
      content: './pages/intro.md'
    }, {
      name: 'Начало работы',
      content: './pages/getting_started.md',
      sections: [
        {
          name: 'Установка',
          content: './pages/installation.md'
        },
        {
          name: 'Подготовка HTML',
          content: './pages/html.md'
        }, {
          name: 'Hello World',
          content: './pages/hello_world.md'
        }, {
          name: 'Концепция',
          content: './pages/concept.md',
        }, {
          name: 'Структура экранов',
          content: './pages/structure.md'
        }, {
          name: 'Режимы подключения',
          content: './pages/modes.md'
        }, {
          name: 'Оптимизация CSS',
          content: './pages/modular-css.md'
        },
      ]
    }, {
      name: 'Components',
      sections: [{
        name: 'Layout',
        components: () => [
          '../src/components/Root/Root.tsx',
          '../src/components/View/View.tsx',
          '../src/components/Panel/Panel.tsx',
          '../src/components/PanelHeader/PanelHeader.tsx',
          '../src/components/PanelHeaderButton/PanelHeaderButton.tsx',
          '../src/components/PanelHeaderBack/PanelHeaderBack.tsx',
          '../src/components/PanelHeaderClose/PanelHeaderClose.tsx',
          '../src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx',
          '../src/components/PanelHeaderEdit/PanelHeaderEdit.tsx',
          '../src/components/PanelHeaderContent/PanelHeaderContent.tsx',
          '../src/components/PanelHeaderContext/PanelHeaderContext.tsx',
          '../src/components/Epic/Epic.tsx',
          '../src/components/Tabbar/Tabbar.tsx',
          '../src/components/TabbarItem/TabbarItem.tsx',
          '../src/components/FixedLayout/FixedLayout.tsx',
          '../src/components/HorizontalScroll/HorizontalScroll.tsx',
        ]
      }, {
        name: 'Popouts',
        components: () => [
          '../src/components/PopoutWrapper/PopoutWrapper.tsx',
          '../src/components/ActionSheet/ActionSheet.tsx',
          '../src/components/ActionSheetItem/ActionSheetItem.tsx',
          '../src/components/Alert/Alert.tsx',
          '../src/components/ScreenSpinner/ScreenSpinner.tsx',
          '../src/components/Snackbar/Snackbar.tsx'
        ]
      }, {
        name: 'Modals',
        components: () => [
          '../src/components/ModalRoot/ModalRootAdaptive.tsx',
          '../src/components/ModalPage/ModalPage.tsx',
          '../src/components/ModalPageHeader/ModalPageHeader.tsx',
          '../src/components/ModalCard/ModalCard.tsx',
          '../src/components/ModalDismissButton/ModalDismissButton.tsx'
        ]
      }, {
        name: 'Adaptivity',
        components: () => [
          '../src/components/AdaptivityProvider/AdaptivityProvider.tsx',
          '../src/components/SplitLayout/SplitLayout.tsx',
          '../src/components/SplitCol/SplitCol.tsx',
        ]
      }, {
        name: 'Blocks',
        components: () => [
          "../src/components/Badge/Badge.tsx",
          '../src/components/Button/Button.tsx',
          '../src/components/CellButton/CellButton.tsx',
          '../src/components/IconButton/IconButton.tsx',
          '../src/components/Div/Div.tsx',
          '../src/components/Link/Link.tsx',
          '../src/components/Header/Header.tsx',
          '../src/components/Group/Group.tsx',
          '../src/components/Card/Card.tsx',
          '../src/components/CardGrid/CardGrid.tsx',
          '../src/components/CardScroll/CardScroll.tsx',
          '../src/components/ContentCard/ContentCard.tsx',
          '../src/components/Gradient/Gradient.tsx',
          '../src/components/SimpleCell/SimpleCell.tsx',
          '../src/components/Cell/Cell.tsx',
          '../src/components/HorizontalCell/HorizontalCell.tsx',
          '../src/components/RichCell/RichCell.tsx',
          '../src/components/List/List.tsx',
          '../src/components/Footer/Footer.tsx',
          '../src/components/Spinner/Spinner.tsx',
          '../src/components/PanelSpinner/PanelSpinner.tsx',
          '../src/components/Switch/Switch.tsx',
          '../src/components/InfoRow/InfoRow.tsx',
          '../src/components/Avatar/Avatar.tsx',
          '../src/components/Gallery/Gallery.tsx',
          '../src/components/Progress/Progress.tsx',
          '../src/components/Search/Search.tsx',
          '../src/components/Tabs/Tabs.tsx',
          '../src/components/TabsItem/TabsItem.tsx',
          '../src/components/Tooltip/Tooltip.tsx',
          '../src/components/PullToRefresh/PullToRefresh.tsx',
          '../src/components/Counter/Counter.tsx',
          '../src/components/UsersStack/UsersStack.tsx',
          '../src/components/Spacing/Spacing.tsx',
          '../src/components/Separator/Separator.tsx',
          '../src/components/Placeholder/Placeholder.tsx',
          '../src/components/Banner/Banner.tsx',
          '../src/components/MiniInfoCell/MiniInfoCell.tsx',
          '../src/components/WriteBar/WriteBar.tsx',
          '../src/components/WriteBarIcon/WriteBarIcon.tsx',
          '../src/components/SubnavigationBar/SubnavigationBar.tsx',
          '../src/components/SubnavigationButton/SubnavigationButton.tsx',
        ]
      }, {
        name: 'Forms',
        components: () => [
          '../src/components/FormLayout/FormLayout.tsx',
          '../src/components/FormItem/FormItem.tsx',
          '../src/components/FormLayoutGroup/FormLayoutGroup.tsx',
          '../src/components/FormStatus/FormStatus.tsx',
          '../src/components/Slider/Slider.tsx',
          '../src/components/RangeSlider/RangeSlider.tsx',
          '../src/components/Radio/Radio.tsx',
          '../src/components/Checkbox/Checkbox.tsx',
          '../src/components/Input/Input.tsx',
          '../src/components/ChipsInput/ChipsInput.tsx',
          '../src/components/Select/Select.tsx',
          '../src/components/NativeSelect/NativeSelect.tsx',
          '../src/components/SelectMimicry/SelectMimicry.tsx',
          '../src/components/CustomSelect/CustomSelect.tsx',
          '../src/components/CustomSelectOption/CustomSelectOption.tsx',
          '../src/components/Chip/Chip.tsx',
          '../src/components/Textarea/Textarea.tsx',
          '../src/components/File/File.tsx',
          '../src/components/DatePicker/DatePicker.tsx',
          '../src/components/SliderSwitch/SliderSwitch.tsx',
        ]
      }, {
        name: 'Typography',
        components: () => [
          '../src/components/Typography/Title/Title.tsx',
          '../src/components/Typography/Headline/Headline.tsx',
          '../src/components/Typography/Text/Text.tsx',
          '../src/components/Typography/Subhead/Subhead.tsx',
          '../src/components/Typography/Caption/Caption.tsx',
        ]
      }, {
        name: 'Advertisement',
        components: () => ['../src/components/PromoBanner/PromoBanner.tsx']
      }, {
        name: 'Service',
        components: () => [
          '../src/components/ConfigProvider/ConfigProvider.tsx',
          '../src/components/Touch/Touch.tsx',
        ]
      }, {
        name: 'Unstable',
        content: './pages/unstable.md',
        components: () => [
          '../src/components/ChipsSelect/ChipsSelect.tsx',
        ]
      }]
    }, {
      name: 'Other',
      sections: [{
        name: 'Helpers',
        content: './pages/helpers.md'
      },
      {
        name: 'Server Side Rendering',
        content: './pages/ssr.md'
      },
      {
        name: 'Icons',
        content: './pages/icons.md'
      }, {
        name: 'Colors',
        content: './pages/colors.md'
      }, {
        name: 'Themes',
        content: './pages/themes.md'
      }, {
        name: 'Utils',
        content: './pages/utils.md'
      }, {
        name: 'Design',
        content: './pages/design.md'
      }]
    }
  ],
  require: [
    path.resolve(__dirname, './setup.js'),
    path.resolve(__dirname, './setup.css')
  ],
  dangerouslyUpdateWebpackConfig(webpackConfig) { // запрещаем вычищать .git
    webpackConfig.plugins = webpackConfig.plugins.reduce((acc, item) => {
      if (item instanceof CleanWebpackPlugin) {
        item.cleanOnceBeforeBuildPatterns = ['**/*', '!.git'];
      }
      acc.push(item);
      return acc;
    }, [])
    return webpackConfig;
  },
  webpackConfig: merge(webpackConfig, {
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, './Components/Preview')
      }
    }
  })
};

const path = require('path');
const webpackConfig = require('../webpack.config');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssConfig = require('../postcss.config');

module.exports = {
  title: 'VKUI styleguide',
  styleguideDir: path.join(__dirname, '../docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, './components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, './components/StyleGuideRenderer'),
    PathlineRenderer: path.join(__dirname, './components/PathlineRenderer')
  },
  sections: [
    {
      name: 'Intro',
      content: './pages/intro.md'
    }, {
      name: 'Installation',
      content: './pages/installation.md'
    }, {
      name: 'HTML',
      content: './pages/html.md'
    }, {
      name: 'Hello World',
      content: './pages/hello_world.md'
    }, {
      name: 'Concept',
      content: './pages/concept.md'
    }, {
      name: 'Components',
      sections: [{
        name: 'Layout',
        components: () => [
          '../src/components/Root/Root.js',
          '../src/components/View/View.js',
          '../src/components/Panel/Panel.js',
          '../src/components/PanelHeader/PanelHeader.js',
          '../src/components/HeaderButton/HeaderButton.js',
          '../src/components/PanelHeaderContent/PanelHeaderContent.js',
          '../src/components/HeaderContext/HeaderContext.js',
          '../src/components/Epic/Epic.js',
          '../src/components/Tabbar/Tabbar.js',
          '../src/components/TabbarItem/TabbarItem.js',
          '../src/components/FixedLayout/FixedLayout.js',
          '../src/components/HorizontalScroll/HorizontalScroll.js',
        ]
      }, {
        name: 'Popouts',
        components: () => [
          '../src/components/PopoutWrapper/PopoutWrapper.js',
          '../src/components/ActionSheet/ActionSheet.js',
          '../src/components/ActionSheetItem/ActionSheetItem.js',
          '../src/components/Alert/Alert.js',
          '../src/components/ScreenSpinner/ScreenSpinner.js'
        ]
      }, {
        name: 'Modals',
        components: () => [
          '../src/components/ModalRoot/ModalRoot.js',
          '../src/components/ModalPage/ModalPage.js',
          '../src/components/ModalPageHeader/ModalPageHeader.js',
          '../src/components/ModalCard/ModalCard.js'
        ]
      }, {
        name: 'Blocks',
        components: () => [
          '../src/components/Button/Button.tsx',
          '../src/components/CellButton/CellButton.js',
          '../src/components/Div/Div.js',
          '../src/components/Link/Link.js',
          '../src/components/Header/Header.js',
          '../src/components/Group/Group.js',
          '../src/components/Cell/Cell.js',
          '../src/components/List/List.js',
          '../src/components/Footer/Footer.js',
          '../src/components/Spinner/Spinner.js',
          '../src/components/Switch/Switch.js',
          '../src/components/InfoRow/InfoRow.js',
          '../src/components/Avatar/Avatar.js',
          '../src/components/Entity/Entity.js',
          '../src/components/Gallery/Gallery.js',
          '../src/components/Progress/Progress.js',
          '../src/components/Search/Search.js',
          '../src/components/Tabs/Tabs.js',
          '../src/components/TabsItem/TabsItem.js',
          '../src/components/FixedTabs/FixedTabs.js',
          '../src/components/Tooltip/Tooltip.js',
          '../src/components/PullToRefresh/PullToRefresh.js',
          '../src/components/Counter/Counter.js',
          '../src/components/Touch/Touch.js',
          '../src/components/UsersStack/UsersStack.js',
          '../src/components/Separator/Separator.js'
        ]
      }, {
        name: 'Forms',
        components: () => [
          '../src/components/FormLayout/FormLayout.js',
          '../src/components/FormLayoutGroup/FormLayoutGroup.js',
          '../src/components/FormStatus/FormStatus.js',
          '../src/components/Slider/Slider.js',
          '../src/components/RangeSlider/RangeSlider.js',
          '../src/components/Radio/Radio.js',
          '../src/components/Checkbox/Checkbox.js',
          '../src/components/Input/Input.js',
          '../src/components/Select/Select.js',
          '../src/components/SelectMimicry/SelectMimicry.js',
          '../src/components/Textarea/Textarea.js',
          '../src/components/File/File.js'
        ]
      }, {
        name: 'Helpers',
        content: './pages/helpers.md',
        components: () => [
          '../src/components/PanelSpinner/PanelSpinner.js',
          '../src/components/PanelHeaderBack/PanelHeaderBack.js',
          '../src/components/PanelHeaderClose/PanelHeaderClose.js',
          '../src/components/PanelHeaderSubmit/PanelHeaderSubmit.js',
          '../src/components/PanelHeaderEdit/PanelHeaderEdit.js'
        ]
      }, {
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
      }]
    }
  ],
  require: [
    path.resolve(__dirname, './setup.js'),
    path.resolve(__dirname, './setup.css')
  ],
  propsParser(filePath, source, resolver, handlers) {
    if (/.tsx$/.test(filePath)) {
      return require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {}).parse(filePath)
    } else {
      return require('react-docgen').parse(source, resolver, handlers)
    }
  },
  webpackConfig: merge(webpackConfig, {
    module: {
      rules: [{
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => postcssConfig.plugins
            }
          }
        ]
      }]
    },
    plugins: [
      new MiniCssExtractPlugin('[name].css')
    ],
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, './Components/Preview')
      }
    }
  })
};

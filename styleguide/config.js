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
          '../src/components/View/View.tsx',
          '../src/components/Panel/Panel.js',
          '../src/components/PanelHeader/PanelHeader.js',
          '../src/components/HeaderButton/HeaderButton.tsx',
          '../src/components/PanelHeaderContent/PanelHeaderContent.js',
          '../src/components/HeaderContext/HeaderContext.js',
          '../src/components/Epic/Epic.tsx',
          '../src/components/Tabbar/Tabbar.tsx',
          '../src/components/TabbarItem/TabbarItem.tsx',
          '../src/components/FixedLayout/FixedLayout.tsx',
          '../src/components/HorizontalScroll/HorizontalScroll.tsx',
        ]
      }, {
        name: 'Popouts',
        components: () => [
          '../src/components/PopoutWrapper/PopoutWrapper.js',
          '../src/components/ActionSheet/ActionSheet.tsx',
          '../src/components/ActionSheetItem/ActionSheetItem.tsx',
          '../src/components/Alert/Alert.tsx',
          '../src/components/ScreenSpinner/ScreenSpinner.tsx',
          '../src/components/Snackbar/Snackbar.tsx'
        ]
      }, {
        name: 'Modals',
        components: () => [
          '../src/components/ModalRoot/ModalRoot.tsx',
          '../src/components/ModalPage/ModalPage.tsx',
          '../src/components/ModalPageHeader/ModalPageHeader.tsx',
          '../src/components/ModalCard/ModalCard.tsx'
        ]
      }, {
        name: 'Blocks',
        components: () => [
          '../src/components/Button/Button.tsx',
          '../src/components/CellButton/CellButton.tsx',
          '../src/components/Div/Div.tsx',
          '../src/components/Link/Link.js',
          '../src/components/Header/Header.js',
          '../src/components/Group/Group.js',
          '../src/components/Cell/Cell.tsx',
          '../src/components/List/List.js',
          '../src/components/Footer/Footer.tsx',
          '../src/components/Spinner/Spinner.tsx',
          '../src/components/Switch/Switch.js',
          '../src/components/InfoRow/InfoRow.js',
          '../src/components/Avatar/Avatar.tsx',
          '../src/components/Entity/Entity.js',
          '../src/components/Gallery/Gallery.tsx',
          '../src/components/Progress/Progress.tsx',
          '../src/components/Search/Search.js',
          '../src/components/Tabs/Tabs.js',
          '../src/components/TabsItem/TabsItem.js',
          '../src/components/FixedTabs/FixedTabs.js',
          '../src/components/Tooltip/Tooltip.js',
          '../src/components/PullToRefresh/PullToRefresh.js',
          '../src/components/Counter/Counter.tsx',
          '../src/components/Touch/Touch.js',
          '../src/components/UsersStack/UsersStack.tsx',
          '../src/components/Separator/Separator.js',
          '../src/components/Placeholder/Placeholder.tsx',
        ]
      }, {
        name: 'Forms',
        components: () => [
          '../src/components/FormLayout/FormLayout.tsx',
          '../src/components/FormLayoutGroup/FormLayoutGroup.tsx',
          '../src/components/FormStatus/FormStatus.tsx',
          '../src/components/Slider/Slider.js',
          '../src/components/RangeSlider/RangeSlider.js',
          '../src/components/Radio/Radio.tsx',
          '../src/components/Checkbox/Checkbox.tsx',
          '../src/components/Input/Input.tsx',
          '../src/components/Select/Select.tsx',
          '../src/components/SelectMimicry/SelectMimicry.tsx',
          '../src/components/Textarea/Textarea.tsx',
          '../src/components/File/File.tsx'
        ]
      }, {
        name: 'Helpers',
        content: './pages/helpers.md',
        components: () => [
          '../src/components/PanelSpinner/PanelSpinner.tsx',
          '../src/components/PanelHeaderBack/PanelHeaderBack.tsx',
          '../src/components/PanelHeaderClose/PanelHeaderClose.tsx',
          '../src/components/PanelHeaderSubmit/PanelHeaderSubmit.tsx',
          '../src/components/PanelHeaderEdit/PanelHeaderEdit.tsx'
        ]
      },
      {
        name: 'Advertisement',
        components: () => ['../src/components/PromoBanner/PromoBanner.tsx']
      },
      // @TODO раскоментировать, когда все компоненты станут SSR-friendly
      // {
      //   name: 'Server Side Rendering',
      //   content: './pages/ssr.md'
      // },
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
      }]
    }
  ],
  require: [
    path.resolve(__dirname, './setup.js'),
    path.resolve(__dirname, './setup.css')
  ],
  propsParser(filePath, source, resolver, handlers) {
    if (/.tsx$/.test(filePath)) {
      return require('react-docgen-typescript').withCustomConfig('./tsconfig.json', {
        propFilter(prop) {
          if (prop.parent) {
            return !prop.parent.fileName.includes('node_modules')
          }
          return true
        },
      }).parse(filePath)
    } else {
      return require('react-docgen').parse(source, resolver, handlers, { filename: filePath })
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

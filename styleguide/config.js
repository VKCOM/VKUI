const path = require('path');
const webpackConfig = require('../build/webpack.config');
const webpack = require('webpack');
const icons = require('../build/icons');
const template = require('./index.html');

module.exports = {
  title: 'VKUI styleguide',
  assetsDir: path.join(__dirname, '../dist'),
  styleguideDir: path.join(__dirname, '../docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, './components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, './components/StyleGuideRenderer')
  },
  template,
  sections: [
    {
      name: 'Installation',
      content: './pages/installation.md'
    }, {
      name: 'Hello World',
      content: '../README.md'
    }, {
      name: 'The Concept',
      content: './pages/concept.md'
    }, {
      name: 'Migration',
      content: './pages/migration.md'
    }, {
      name: 'Components',
      sections: [{
        name: 'Layout',
        components: () => [
          '../src/components/View/View.js',
          '../src/components/Panel/Panel.js',
          '../src/components/PanelHeader/PanelHeader.js',
          '../src/components/HeaderButton/HeaderButton.js',
          '../src/components/Root/Root.js',
          '../src/components/FixedLayout/FixedLayout.js'
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
        name: 'Blocks',
        components: () => [
          '../src/components/Button/Button.js',
          '../src/components/Div/Div.js',
          '../src/components/Link/Link.js',
          '../src/components/Header/Header.js',
          '../src/components/Group/Group.js',
          '../src/components/List/List.js',
          '../src/components/ListItem/ListItem.js',
          '../src/components/Switch/Switch.js',
          '../src/components/InfoRow/InfoRow.js',
          '../src/components/Entity/Entity.js',
          '../src/components/Gallery/Gallery.js',
          '../src/components/Avatar/Avatar.js',
          '../src/components/Progress/Progress.js',
          '../src/components/Search/Search.js',
          '../src/components/FixedTabs/FixedTabs.js',
          '../src/components/Tabs/Tabs.js',
          '../src/components/TabsItem/TabsItem.js'
        ]
      }, {
        name: 'Forms',
        components: () => [
          '../src/components/FormLayout/FormLayout.js',
          '../src/components/Slider/Slider.js',
          '../src/components/RangeSlider/RangeSlider.js',
          '../src/components/Radio/Radio.js',
          '../src/components/Checkbox/Checkbox.js',
          '../src/components/Input/Input.js',
          '../src/components/Select/Select.js',
          '../src/components/Select/SelectMimicry.js',
          '../src/components/Textarea/Textarea.js',
          '../src/components/File/File.js'
        ]
      }, {
        name: 'Icons',
        content: './pages/icons.md'
      }, {
        name: 'Colors',
        content: './pages/colors.md'
      }, {
        name: 'Utils',
        content: './pages/utils.md'
      }]
    }
  ],
  context: {
    PropTypes: 'prop-types',
    ReactFrame: 'react-frame-component'
  },
  require: [path.resolve(__dirname, './setup.js')],
  webpackConfig: Object.assign({}, webpackConfig, {
    externals: {},
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, './Components/Preview')
      }
    },
    plugins: [...webpackConfig.plugins, new webpack.DefinePlugin({
      icons: JSON.stringify(icons.entry)
    })]
  })
};

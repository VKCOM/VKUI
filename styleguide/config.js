const path = require('path');
const webpackConfig = require('../build/webpack.config');
const webpack = require('webpack');
const icons = require('../build/icons');

module.exports = {
  title: 'VKUI styleguide',
  assetsDir: path.join(__dirname, '../dist'),
  styleguideDir: path.join(__dirname, '../docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, './components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, './components/StyleGuideRenderer')
  },
  template: './index.html',
  sections: [
    {
      name: 'Installation',
      content: './pages/installation.md'
    }, {
      name: 'Hello World',
      content: '../README.md'
    }, {
      name: 'The concept',
      content: './pages/concept.md'
    }, {
      name: 'Components',
      sections: [{
        name: 'Layout',
        components: () => [
          '../src/components/View/View.js',
          '../src/components/ScrollView/ScrollView.js',
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
          '../src/components/Group/Group.js',
          '../src/components/Pane/Pane.js',
          '../src/components/List/List.js',
          '../src/components/ListItem/ListItem.js',
          '../src/components/InfoRow/InfoRow.js',
          '../src/components/Entity/Entity.js',
          '../src/components/Gallery/Gallery.js',
          '../src/components/Avatar/Avatar.js',
          '../src/components/Progress/Progress.js'
        ]
      }, {
        name: 'Forms',
        components: () => [
          '../src/components/FormLayout/FormLayout.js',
          '../src/components/Switch/Switch.js',
          '../src/components/Slider/Slider.js',
          '../src/components/Radio/Radio.js',
          '../src/components/Input/Input.js',
          '../src/components/Textarea/Textarea.js',
          '../src/components/File/File.js'
        ]
      }, {
        name: 'Helpers',
        components: () => [
          '../src/components/Div/Div.js',
          '../src/components/Flex/Flex.js',
          '../src/components/Tappable/Tappable.js',
          '../src/components/BackButton/BackButton.js'
        ]
      }, {
        name: 'Icons',
        content: './pages/icons.md'
      }, {
        name: 'Colors',
        content: './pages/colors.md'
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
